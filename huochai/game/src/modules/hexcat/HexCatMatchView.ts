/**
 * 方案 A Demo：六边形条带 + 预置火柴墙 + 猫沿最短路径走向随机猫窝（末行）。
 * 世界 7×20 格，视口约 8 行高度随猫下移滚动。
 * 入口：Main.run 在地址栏 hash 含 hexcat 时进入（如 index.html#hexcat）
 */
class HexCatMatchView extends eui.Component {
	private static readonly Q_MIN = -3
	private static readonly Q_MAX = 3
	private static readonly R_MIN = 0
	private static readonly R_MAX = 19
	/** 视口内大约显示的行数（用于摄像机跟随） */
	private static readonly VISIBLE_ROW_SPAN = 8
	private static readonly HEX_SIZE = 26
	/** 预置火柴墙数量（保证仍有通路） */
	private static readonly TARGET_PRE_WALLS = 22
	/** 玩家额外可放火柴数 */
	private static readonly PLAYER_WALLS = 6

	private _cells: { id: number, q: number, r: number, x: number, y: number }[] = []
	private _coordToId: { [key: string]: number } = {}
	private _edges: { a: number, b: number, key: string }[] = []
	private _blocked: { [key: string]: boolean } = {}
	private _adj: { [id: string]: number[] } = {}

	private _catId: number = 0
	private _nestId: number = 0
	private _boundaryIds: { [id: string]: boolean } = {}

	private _world = new egret.DisplayObjectContainer()
	private _worldMask: egret.Shape
	private _viewportW = 0
	private _viewportH = 0

	private _lbl: eui.Label
	private _btnStep: egret.TextField
	private _btnBack: egret.TextField
	private _hint: eui.Label

	public constructor() {
		super()
		this.percentWidth = 100
		this.percentHeight = 100
		this.touchEnabled = true
		this._buildGraph()
		this._pickNestRandom()
		this._markBoundary()
		this._catId = this._coordToId["0,10"]
		this._genModeratePreWalls()
		this._buildAdjacencyForPath()
	}

	private _key(q: number, r: number): string {
		return q + "," + r
	}

	private _layoutXY(q: number, r: number): { x: number, y: number } {
		const s = HexCatMatchView.HEX_SIZE
		const x = s * (Math.sqrt(3) * q + (Math.sqrt(3) / 2) * r)
		const y = s * (1.5 * r)
		return { x, y }
	}

	private _buildGraph(): void {
		const dirs = [[1, 0], [1, -1], [0, -1], [-1, 0], [-1, 1], [0, 1]]
		let id = 0
		for (let r = HexCatMatchView.R_MIN; r <= HexCatMatchView.R_MAX; r++) {
			for (let q = HexCatMatchView.Q_MIN; q <= HexCatMatchView.Q_MAX; q++) {
				const p = this._layoutXY(q, r)
				this._cells.push({ id, q, r, x: p.x, y: p.y })
				this._coordToId[this._key(q, r)] = id
				id++
			}
		}
		const seen: { [k: string]: boolean } = {}
		for (let i = 0; i < this._cells.length; i++) {
			const c = this._cells[i]
			for (let d = 0; d < dirs.length; d++) {
				const nq = c.q + dirs[d][0]
				const nr = c.r + dirs[d][1]
				const nid = this._coordToId[this._key(nq, nr)]
				if (nid === undefined) continue
				const a = Math.min(c.id, nid)
				const b = Math.max(c.id, nid)
				const ek = a + "_" + b
				if (seen[ek]) continue
				seen[ek] = true
				this._edges.push({ a, b, key: ek })
			}
		}
	}

	private _pickNestRandom(): void {
		const q = HexCatMatchView.Q_MIN + Math.floor(Math.random() * (HexCatMatchView.Q_MAX - HexCatMatchView.Q_MIN + 1))
		this._nestId = this._coordToId[this._key(q, HexCatMatchView.R_MAX)]
	}

	private _markBoundary(): void {
		this._boundaryIds = {}
		const RM = HexCatMatchView.R_MAX
		const Rm = HexCatMatchView.R_MIN
		const QM = HexCatMatchView.Q_MAX
		const Qm = HexCatMatchView.Q_MIN
		for (let i = 0; i < this._cells.length; i++) {
			const c = this._cells[i]
			if (c.id === this._nestId) continue
			if (c.r === Rm || c.r === RM || c.q === Qm || c.q === QM) {
				this._boundaryIds[c.id + ""] = true
			}
		}
	}

	private _edgeBlocked(key: string): boolean {
		return !!this._blocked[key]
	}

	private _buildAdjacencyForPath(): void {
		this._adj = {}
		for (let i = 0; i < this._cells.length; i++) this._adj[i + ""] = []
		for (let i = 0; i < this._edges.length; i++) {
			const e = this._edges[i]
			if (this._edgeBlocked(e.key)) continue
			this._adj[e.a + ""].push(e.b)
			this._adj[e.b + ""].push(e.a)
		}
	}

	private _bfsPath(from: number, to: number): number[] {
		if (from === to) return [from]
		const vis: { [id: string]: boolean } = {}
		const prev: { [id: string]: number } = {}
		const q: number[] = [from]
		vis[from + ""] = true
		let qi = 0
		while (qi < q.length) {
			const u = q[qi++]
			if (u === to) break
			const nbs = this._adj[u + ""] || []
			for (let j = 0; j < nbs.length; j++) {
				const v = nbs[j]
				if (vis[v + ""]) continue
				vis[v + ""] = true
				prev[v + ""] = u
				q.push(v)
			}
		}
		if (!vis[to + ""]) return []
		const path: number[] = [to]
		let cur = to
		while (cur !== from) {
			cur = prev[cur + ""]
			path.push(cur)
		}
		path.reverse()
		return path
	}

	private _reachable(from: number, to: number): boolean {
		return this._bfsPath(from, to).length > 0
	}

	private _genModeratePreWalls(): void {
		this._blocked = {}
		const shuffled = this._edges.slice()
		for (let i = shuffled.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1))
			const t = shuffled[i]
			shuffled[i] = shuffled[j]
			shuffled[j] = t
		}
		let placed = 0
		for (let i = 0; i < shuffled.length && placed < HexCatMatchView.TARGET_PRE_WALLS; i++) {
			const e = shuffled[i]
			this._blocked[e.key] = true
			this._buildAdjacencyForPath()
			if (!this._reachable(this._catId, this._nestId)) {
				delete this._blocked[e.key]
			} else {
				placed++
			}
		}
		this._buildAdjacencyForPath()
	}

	private _playerWallsLeft = HexCatMatchView.PLAYER_WALLS

	protected createChildren(): void {
		super.createChildren()
		const bg = new egret.Shape()
		const bw = this.width || (this.stage ? this.stage.stageWidth : 750)
		const bh = this.height || (this.stage ? this.stage.stageHeight : 1334)
		bg.graphics.beginFill(0x1a2520)
		bg.graphics.drawRect(0, 0, bw, bh)
		bg.graphics.endFill()
		bg.touchEnabled = false
		this.addChild(bg)

		this._viewportW = this.stage ? this.stage.stageWidth : 750
		this._viewportH = this.stage ? this.stage.stageHeight : 1200

		this._worldMask = new egret.Shape()
		this._worldMask.touchEnabled = false
		this.addChild(this._worldMask)
		this.addChild(this._world)
		this._world.mask = this._worldMask

		this._lbl = new eui.Label()
		this._lbl.textColor = 0xe8f0e8
		this._lbl.size = 22
		this._lbl.x = 16
		this._lbl.y = 12
		this._lbl.width = 700
		this._lbl.text = "方案A：引猫进窝  剩余可放火柴:" + this._playerWallsLeft
		this.addChild(this._lbl)

		this._hint = new eui.Label()
		this._hint.textColor = 0xaaccaa
		this._hint.size = 18
		this._hint.x = 16
		this._hint.y = 42
		this._hint.width = 700
		this._hint.text = "点空白边加墙（缩短错误路），再点「猫走一步」。到猫窝胜，到边缘败。"
		this.addChild(this._hint)

		this._btnStep = this._makeTextButton("猫走一步", 16, 88, 140)
		this._btnStep.addEventListener(egret.TouchEvent.TOUCH_TAP, this._onStepCat, this)
		this.addChild(this._btnStep)

		this._btnBack = this._makeTextButton("返回主界面", 170, 88, 160)
		this._btnBack.addEventListener(egret.TouchEvent.TOUCH_TAP, this._onBack, this)
		this.addChild(this._btnBack)

		this.addEventListener(egret.Event.ENTER_FRAME, this._onFrame, this)
		this._redrawWorld()
	}

	private _onFrame(): void {
		if (!this.stage) return
		if (this.width !== this.stage.stageWidth || this.height !== this.stage.stageHeight) {
			this.width = this.stage.stageWidth
			this.height = this.stage.stageHeight
			const bg = this.getChildAt(0) as egret.Shape
			if (bg && bg.graphics) {
				bg.graphics.clear()
				bg.graphics.beginFill(0x1a2520)
				bg.graphics.drawRect(0, 0, this.width, this.height)
				bg.graphics.endFill()
			}
			this._viewportW = this.width
			this._viewportH = this.height
			this._redrawWorld()
		}
	}

	private _updateCamera(): void {
		const cat = this._cells[this._catId]
		const rowH = HexCatMatchView.HEX_SIZE * 1.5
		const halfVis = (HexCatMatchView.VISIBLE_ROW_SPAN * rowH) / 2
		let ty = this._viewportH * 0.45 - cat.y
		const minY = this._viewportH - (this._maxWorldY() + HexCatMatchView.HEX_SIZE * 2)
		const maxY = -this._minWorldY() + HexCatMatchView.HEX_SIZE
		if (ty < minY) ty = minY
		if (ty > maxY) ty = maxY
		this._world.y = ty
		const mx = this._viewportW / 2 - cat.x
		this._world.x = mx

		const g = this._worldMask.graphics
		g.clear()
		g.beginFill(0, 1)
		const top = 130
		g.drawRect(0, top, this._viewportW, this._viewportH - top)
		g.endFill()
	}

	private _minWorldY(): number {
		let m = 1e9
		for (let i = 0; i < this._cells.length; i++) m = Math.min(m, this._cells[i].y)
		return m
	}

	private _maxWorldY(): number {
		let m = -1e9
		for (let i = 0; i < this._cells.length; i++) m = Math.max(m, this._cells[i].y)
		return m
	}

	private _redrawWorld(): void {
		this._world.removeChildren()
		const R = HexCatMatchView.HEX_SIZE * 0.55
		for (let i = 0; i < this._cells.length; i++) {
			const c = this._cells[i]
			const sh = new egret.Shape()
			const g = sh.graphics
			g.lineStyle(1.2, 0x3d5c4a)
			const isNest = c.id === this._nestId
			g.beginFill(isNest ? 0x3a5a30 : 0x2a3830)
			for (let k = 0; k <= 6; k++) {
				const ang = Math.PI / 2 + (k * Math.PI) / 3
				const px = c.x + R * Math.cos(ang)
				const py = c.y + R * Math.sin(ang)
				if (k === 0) g.moveTo(px, py)
				else g.lineTo(px, py)
			}
			g.endFill()
			this._world.addChild(sh)
		}
		for (let i = 0; i < this._edges.length; i++) {
			const e = this._edges[i]
			const ca = this._cells[e.a]
			const cb = this._cells[e.b]
			const mx = (ca.x + cb.x) / 2
			const my = (ca.y + cb.y) / 2
			const ang = Math.atan2(cb.y - ca.y, cb.x - ca.x)
			const wall = this._edgeBlocked(e.key)
			const hit = new egret.Shape()
			const len = HexCatMatchView.HEX_SIZE * 0.5
			const thick = 10
			hit.graphics.beginFill(wall ? 0x8b5a2b : 0x334433, wall ? 0.95 : 0.25)
			hit.graphics.drawRect(-thick / 2, -len / 2, thick, len)
			hit.graphics.endFill()
			hit.x = mx
			hit.y = my
			hit.rotation = ang * 180 / Math.PI + 90
			hit.touchEnabled = true
			hit.name = e.key
			if (!wall) {
				hit.addEventListener(egret.TouchEvent.TOUCH_TAP, this._onEdgeTap, this)
			}
			this._world.addChild(hit)
		}
		for (let i = 0; i < this._cells.length; i++) {
			const c = this._cells[i]
			if (c.id !== this._catId) continue
			const cat = new egret.Shape()
			cat.graphics.beginFill(0xffcc66)
			cat.graphics.drawCircle(0, 0, R * 0.55)
			cat.graphics.endFill()
			cat.x = c.x
			cat.y = c.y
			this._world.addChild(cat)
			break
		}
		this._updateCamera()
	}

	private _onEdgeTap(e: egret.TouchEvent): void {
		if (this._playerWallsLeft <= 0) return
		const t = e.currentTarget as egret.Shape
		const key = t.name
		if (!key || this._blocked[key]) return
		this._blocked[key] = true
		this._playerWallsLeft--
		this._lbl.text = "方案A：引猫进窝  剩余可放火柴:" + this._playerWallsLeft
		this._buildAdjacencyForPath()
		this._redrawWorld()
	}

	private _makeTextButton(txt: string, x: number, y: number, w: number): egret.TextField {
		const t = new egret.TextField()
		t.text = txt
		t.textColor = 0xffffff
		t.size = 24
		t.x = x
		t.y = y
		t.width = w
		t.height = 44
		t.textAlign = egret.HorizontalAlign.CENTER
		t.verticalAlign = egret.VerticalAlign.MIDDLE
		t.background = true
		t.backgroundColor = 0x3d6b4f
		t.border = true
		t.borderColor = 0x5a9070
		t.touchEnabled = true
		return t
	}

	private _onStepCat(): void {
		if (!this._btnStep.touchEnabled) return
		const path = this._bfsPath(this._catId, this._nestId)
		if (path.length < 2) {
			this._hint.text = "无路可走！你把自己堵死了。"
			return
		}
		this._catId = path[1]
		this._checkEnd()
		this._redrawWorld()
	}

	private _checkEnd(): void {
		if (this._catId === this._nestId) {
			this._hint.text = "胜利：猫进窝了！"
			this._btnStep.touchEnabled = false
			return
		}
		if (this._boundaryIds[this._catId + ""]) {
			this._hint.text = "失败：猫跑到边缘了。"
			this._btnStep.touchEnabled = false
		}
	}

	private _onBack(): void {
		this.removeEventListener(egret.Event.ENTER_FRAME, this._onFrame, this)
		if (this.parent) this.parent.removeChild(this)
		new MainUIView().showAt(mylib.GmGlobal.uiLayer)
	}

	public showAt(p: egret.DisplayObjectContainer): void {
		p.addChild(this)
		const st = egret.MainContext.instance.stage
		this.width = st ? st.stageWidth : p.width
		this.height = st ? st.stageHeight : p.height
		this.validateNow()
		egret.callLater(() => this._redrawWorld(), this)
	}
}
