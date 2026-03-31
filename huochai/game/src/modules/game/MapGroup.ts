
class MapGroup extends eui.Component {

	private step: number
	private moveTagert: any
	private szImg: any = []
	private curLv: number

	private constStep: number// 消耗步数
	private gameType: number	//1 add 2 remove  3 delete 4 chellenge	
	/** 实际点击交互类型：记忆挑战下与经典关相反（原增加→按删除还原，原删除→按增加还原） */
	private _interactionGameType: number

	private mapId: number
	private stepData: any
	private bReverse: boolean = false
	/** 记忆玩法：使用 MapJiyiData；表内「新增/删除」与实际操作对调（1↔3） */
	private _useJiyiMemory(): boolean {
		return !!(this.bReverse && MyConst.MapJiyiData && this.curLv >= 0
			&& this.curLv < MyConst.MapJiyiData.length && MyConst.MapJiyiData[this.curLv])
	}
	private _levelRow(): any {
		return this._useJiyiMemory() ? MyConst.MapJiyiData[this.curLv] : MyConst.MapData[this.curLv]
	}
	private readonly _selectedFilter: egret.GlowFilter = new egret.GlowFilter(0x32C5FF, 1, 28, 28, 2, 1, false, false)

	// mapId → 对应的形状模板数组，集中管理，O(1) 查找
	private static readonly TEMPLATE_MAP: { [id: number]: number[][] } = {
		1: null, 2: null, 3: null, 5: null, 6: null, 7: null, 8: null,
		9: null, 10: null, 11: null, 12: null, 13: null, 14: null, 15: null,
		16: null, 17: null, 18: null, 19: null, 20: null, 21: null, 22: null,
		23: null, 24: null, 25: null, 26: null, 27: null, 28: null,
	}
	// templateMapId → 预处理后的形状信息（一次构建，多次复用）
	private static readonly TEMPLATE_INFO_MAP: { [id: number]: { mapLen: number, shapeCells: number[][] } } = {}

	/** 按 mapId 获取形状模板（延迟绑定，避免静态初始化顺序问题） */
	private static getTemplate(mapId: number): number[][] | null {
		const tbl = MapGroup.TEMPLATE_MAP
		// 首次调用时将 Const.mapN 引用填入表中
		if (tbl[1] === null) {
			tbl[1]  = Const.map1;  tbl[2]  = Const.map2;  tbl[3]  = Const.map3
			tbl[5]  = Const.map5;  tbl[6]  = Const.map6;  tbl[7]  = Const.map7
			tbl[8]  = Const.map8;  tbl[9]  = Const.map9;  tbl[10] = Const.map10
			tbl[11] = Const.map11; tbl[12] = Const.map12; tbl[13] = Const.map13
			tbl[14] = Const.map14; tbl[15] = Const.map15; tbl[16] = Const.map16
			tbl[17] = Const.map17; tbl[18] = Const.map18; tbl[19] = Const.map19
			tbl[20] = Const.map20; tbl[21] = Const.map21; tbl[22] = Const.map22
			tbl[23] = Const.map23; tbl[24] = Const.map24; tbl[25] = Const.map25
			tbl[26] = Const.map26; tbl[27] = Const.map27; tbl[28] = Const.map28
		}
		return tbl[mapId] || null
	}

	private static getTemplateInfo(mapId: number): { mapLen: number, shapeCells: number[][] } | null {
		if (MapGroup.TEMPLATE_INFO_MAP[mapId]) return MapGroup.TEMPLATE_INFO_MAP[mapId]
		const template = MapGroup.getTemplate(mapId)
		if (!template || template.length == 0) return null
		const mapLen = template[0].length
		const shapeCells: number[][] = []
		for (let i = 0; i < template.length; i++) {
			const cells: number[] = []
			for (let j = 0; j < mapLen; j++) {
				if (template[i][j] == 1) cells.push(j)
			}
			if (cells.length > 0) shapeCells.push(cells)
		}
		const info = { mapLen, shapeCells }
		MapGroup.TEMPLATE_INFO_MAP[mapId] = info
		return info
	}

	public constructor(lv: number, mapType: number, reverseMode?: boolean) {
		super();
		this.step = 0
		this.bReverse = !!(reverseMode || (MainUIManager.getInstance() && MainUIManager.getInstance().bReverseMode))

		this.mapId = mapType
		var mapSkin = "MapSkin" + mapType.toString()
		this.skinName = mapSkin;
		this.curLv = lv
		const row = this._levelRow()
		let g = row.rule[0]
		if (this._useJiyiMemory()) {
			if (g == 1) g = 3
			else if (g == 3) g = 1
		}
		this.gameType = g
		this._interactionGameType = g
		if (this.bReverse && !this._useJiyiMemory()) {
			if (this.gameType == 1) this._interactionGameType = 3
			else if (this.gameType == 3) this._interactionGameType = 1
		}
		this.constStep = row.rule[1]
		this.step = 0
		this.moveTagert = null

		this.stepData = []
		this.szImg = []
		this.initStepData()
		this.LoadMap(this.stepData[this.step])
	}

	public rmEvts(): void {
		for (var i: number = 0; i < this.szImg.length; i++) {
			this.szImg[i].removeEventListener(egret.TouchEvent.TOUCH_END, this.onClickItemOk, this, i);
		}
	}

	public removeAllImgEvent() {
		for (var i = 0; i < this.szImg.length; i++) {
			this.szImg[i].removeEventListener(egret.TouchEvent.TOUCH_END, this.onClickItemOk, this);
		}
	}
	public initStepData() {
		const m = this._levelRow()
		const objLen = m.bef.length
		const initState = (this.bReverse && this._useJiyiMemory())
			? m.bef
			: (this.bReverse && m.rst && m.rst[0] ? m.rst[0] : m.bef)
		this.stepData.push(initState)
		var lllen = this.numChildren
		for (var i: number = 0; i < objLen; i++) {

			var str = "img_" + (i + 1).toString()
			var obj = this[str]//this.getChildAt(i+1)
			if (obj != null) {
				this.szImg.push(obj)
			} else {
				break
			}
			const val = this.stepData[0][i]
			if (this._interactionGameType == 1) {
				if (val != 1) this.szImg[i].addEventListener(egret.TouchEvent.TOUCH_END, this.onClickItemOk, this);
			} else if (this._interactionGameType == 3) {
				if (val == 1) this.szImg[i].addEventListener(egret.TouchEvent.TOUCH_END, this.onClickItemOk, this);
			} else if (this._interactionGameType == 2) {
				this.szImg[i].addEventListener(egret.TouchEvent.TOUCH_END, this.onClickItemOk, this);
			}
		}
	}
	/**
	 * 强制显示指定盘面（用于记忆挑战预览等，与 bReverseMode 时机无关）。
	 * 须在本组件皮肤子节点就绪后调用（例如 egret.callLater）。
	 */
	public showStaticMapState(szMap: number[]): void {
		if (!szMap || szMap.length < 1) return
		this.moveTagert = null
		this.stepData = [szMap.slice()]
		this.step = 0
		this.LoadMap(this.stepData[0])
	}

	public LoadMap(szMap) {
		this.moveTagert = null
		for (var i = 0; i < this.szImg.length; i++) {
			if (szMap[i] == 1) {
				var img_path = RES.getRes(("huochai_json.ingame_matches"))
				this.szImg[i].$setTexture(img_path)
				this.szImg[i].filters = null
			}
			else if (szMap[i] == 0) {
				var img_path = RES.getRes(("huochai_json.game_map"))

				this.szImg[i].$setTexture(img_path)
				this.szImg[i].filters = null
			} else if (szMap[i] == 3) {
				var img_path = RES.getRes(("huochai_json.game_select"))
				this.moveTagert = this.szImg[i]
				this.szImg[i].$setTexture(img_path)
				this.szImg[i].filters = [this._selectedFilter]
			}
		}
	}

	/** 火柴放置/移除时的弹跳反馈特效 */
	private _playClickEffect(obj: any, isPlace: boolean): void {
		egret.Tween.removeTweens(obj)
		const a1 = isPlace ? 0.72 : 0.55
		const a2 = isPlace ? 1.0 : 0.9
		egret.Tween.get(obj, { loop: false })
			.to({ alpha: a1 }, 70)
			.to({ alpha: a2 }, 70)
			.to({ alpha: 1.0 }, 60)
	}

	private getCellIndex(obj: any): number {
		return this.szImg.indexOf(obj)
	}

	private onClickItemOk(e: egret.TouchEvent) {
		// 步数大于要求步数则提示失败
		if (this.step >= this.constStep) {
			mylib.EvtBus.dispatchEvt(EvtType.TouchMoreStep, {});
			mylib.GmGlobal.sound.playSoundEffect("sound/snd_05.mp3");
			return
		}
		const obj = e.target;
		if (obj == this || obj == undefined) return
		if (this.stepData.length < 1) return

		const curStep = this.stepData.length - 1
		const i = this.getCellIndex(obj)
		if (i == -1 || this.stepData[curStep].length <= i) return

		if (this.gameType == 2) {
			if (this.moveTagert == null) { // 第一步：选取火柴
				if (this.stepData[curStep][i] == 1) {
					this.moveTagert = obj
					this.szImg[i].$setTexture(RES.getRes("huochai_json.game_select"))
					this.szImg[i].filters = [this._selectedFilter]
					const sz = this.stepData[curStep].slice()
					sz[i] = 3
					this.stepData.push(sz)
					this._playClickEffect(obj, false)
					mylib.EvtBus.dispatchEvt(EvtType.TouchStep, { step: this.step, mapStep: this.stepData.length, tagNum: -1 });
					mylib.GmGlobal.sound.playSoundEffect("sound/snd_04.mp3");
				}
			} else {
				if (this.moveTagert == obj) { // 取消选取
					this.szImg[i].$setTexture(RES.getRes("huochai_json.ingame_matches"))
					this.szImg[i].filters = null
					this.stepData.pop()
					this.moveTagert = null
					this._playClickEffect(obj, true)
					mylib.GmGlobal.sound.playSoundEffect("sound/snd_05.mp3");
					mylib.EvtBus.dispatchEvt(EvtType.TouchStep, { step: this.step, mapStep: this.stepData.length, tagNum: -1 });
					return
				}
				if (this.stepData[curStep][i] == 0) { // 第二步：放置火柴
					const sz = this.stepData[curStep].map((v: number) => v == 3 ? 0 : v)
					sz[i] = 1
					this.stepData.push(sz)
					this.step++
					this.moveTagert.$setTexture(RES.getRes("huochai_json.game_map"))
					this.moveTagert.filters = null
					this.moveTagert = null
					obj.$setTexture(RES.getRes("huochai_json.ingame_matches"))
					obj.filters = null
					this._playClickEffect(obj, true)
					mylib.GmGlobal.sound.playSoundEffect("sound/snd_04.mp3");
					const ret = this.GetTriangleNum()
					mylib.EvtBus.dispatchEvt(EvtType.TouchStep, { step: this.step, mapStep: this.stepData.length, tagNum: ret[0] });
					if (this.step == this.constStep) {
						mylib.EvtBus.dispatchEvt(EvtType.TouchCommplete, { lv: this.curLv, bWin: this.CheckComplete(), tagNum: ret[0] });
					}
				}
			}
			return
		} else if (this.stepData[curStep][i] == 0 && this._interactionGameType == 1) {
			const sz = this.stepData[curStep].slice()
			sz[i] = 1
			this.stepData.push(sz)
			this.step++
			this.szImg[i].$setTexture(RES.getRes("huochai_json.ingame_matches"))
			this.szImg[i].filters = null
			this._playClickEffect(this.szImg[i], true)
			mylib.GmGlobal.sound.playSoundEffect("sound/snd_04.mp3");
			const ret = this.GetTriangleNum()
			mylib.EvtBus.dispatchEvt(EvtType.TouchStep, { step: this.step, mapStep: this.stepData.length, tagNum: ret[0] });
			if (this.step == this.constStep) {
				mylib.EvtBus.dispatchEvt(EvtType.TouchCommplete, { lv: this.curLv, bWin: this.CheckComplete(), tagNum: ret[0] });
			}
		} else if (this.stepData[curStep][i] == 1 && this._interactionGameType == 3) {
			const sz = this.stepData[curStep].slice()
			sz[i] = 0
			this.stepData.push(sz)
			this.step++
			this.szImg[i].$setTexture(RES.getRes("huochai_json.game_map"))
			this.szImg[i].filters = null
			this._playClickEffect(this.szImg[i], false)
			mylib.GmGlobal.sound.playSoundEffect("sound/snd_04.mp3");
			const ret = this.GetTriangleNum()
			mylib.EvtBus.dispatchEvt(EvtType.TouchStep, { step: this.step, mapStep: this.stepData.length, tagNum: ret[0] });
			if (this.step == this.constStep) {
				mylib.EvtBus.dispatchEvt(EvtType.TouchCommplete, { lv: this.curLv, bWin: this.CheckComplete(), tagNum: ret[0] });
			}
		}
	}
	private CheckComplete(): boolean {
		if (this.bReverse) {
			return this.CheckReverseComplete()
		}
		const r = this._levelRow().rule
		const shapeType = (r[2] == 1 || r[2] == 2) ? r[2] : this.getPrimaryShapeType()
		return this.checkSingleStrictCover(shapeType, r[3])
	}

	/** 所有亮线恰好划分为 target 个互不重叠的合法图形，无散边 */
	private checkSingleStrictCover(shapeType: number, target: number): boolean {
		const ctx = this._buildCurrentCoverContext(shapeType)
		if (!ctx) return target === 0
		if (ctx.activeCells.length === 0) return target === 0
		return this._canExactCoverWithCount(ctx.mapData.length, ctx.activeCells, ctx.candidates, ctx.cellToShapes, target)
	}

	private CheckReverseComplete(): boolean {
		if (this.stepData.length < 1) return false
		const cur = this.stepData[this.stepData.length - 1]
		const m = this._levelRow()
		const target = (this._useJiyiMemory() && m.rst && m.rst[0]) ? m.rst[0] : m.bef
		if (cur.length !== target.length) return false
		for (let i = 0; i < cur.length; i++) {
			if (cur[i] !== target[i]) return false
		}
		return true
	}

	private getShapeName(shapeType: number): string {
		if (shapeType == 1) return "正方形"
		if (shapeType == 2) return "三角形"
		return "未知"
	}

	private getPrimaryShapeType(): number {
		const r = this._levelRow().rule
		if (r && (r[2] == 1 || r[2] == 2)) return r[2]
		const byMap = MyConst.getMapTypeShapeType ? MyConst.getMapTypeShapeType(this.mapId) : -1
		return (byMap == 1 || byMap == 2) ? byMap : 1
	}

	private getTemplateMapTypeByShape(shapeType: number): number {
		if (shapeType != 1 && shapeType != 2) return -1
		let templateMapType = -1
		if (MyConst.getShapeTemplateMapType) {
			templateMapType = MyConst.getShapeTemplateMapType(this.mapId, shapeType)
		}
		if (templateMapType <= 0) {
			const byMap = MyConst.getMapTypeShapeType ? MyConst.getMapTypeShapeType(this.mapId) : -1
			if (byMap == shapeType) templateMapType = this.mapId
		}
		return templateMapType > 0 ? templateMapType : -1
	}

	public BackStep() {
		if (this.stepData.length <= 1) {
			return
		}
		this.stepData.pop()
		if (this.moveTagert == null) {
			this.step--
		}
		var ret = this.GetTriangleNum()
		mylib.EvtBus.dispatchEvt(EvtType.TouchStep, { step: this.step, mapStep: this.stepData.length,  tagNum: ret[0]  });
		this.LoadMap(this.stepData[this.stepData.length - 1])
	}

	public ShowTipResult() {
		const m = this._levelRow()
		// 记忆玩法（MapJiyiData）：答案为 rst[0]；经典反转无 Jiyi 时与开局 rst 一致
		this.LoadMap(m.rst && m.rst[0] ? m.rst[0] : m.bef)
	}
	public CloseTipResult() {
		if (this.stepData.length < 1) {
			return
		}
		this.LoadMap(this.stepData[this.stepData.length - 1])
		this.CloseHighlight()
	}

	private _highlightTweens: any[] = []
	public HighlightOperableCells() {
		this.CloseHighlight()
		if (this.stepData.length < 1) return
		const cur = this.stepData[this.stepData.length - 1]
		for (let i = 0; i < this.szImg.length && i < cur.length; i++) {
			let canOperate = false
			if (this._interactionGameType == 1 && cur[i] == 0) canOperate = true
			else if (this._interactionGameType == 3 && cur[i] == 1) canOperate = true
			else if (this._interactionGameType == 2 && cur[i] == 1) canOperate = true
			if (canOperate && this.szImg[i]) {
				const obj = this.szImg[i]
				egret.Tween.removeTweens(obj)
				const tw = egret.Tween.get(obj, { loop: true }).to({ scaleX: 1.08, scaleY: 1.08 }, 400).to({ scaleX: 1, scaleY: 1 }, 400)
				this._highlightTweens.push(obj)
			}
		}
	}
	public CloseHighlight() {
		for (let i = 0; i < this._highlightTweens.length; i++) {
			egret.Tween.removeTweens(this._highlightTweens[i])
			this._highlightTweens[i].scaleX = 1
			this._highlightTweens[i].scaleY = 1
		}
		this._highlightTweens = []
	}

	private _buildCandidateShapes(shapeCells: number[][], mapData: number[]): number[][] {
		const candidates: number[][] = []
		for (let i = 0; i < shapeCells.length; i++) {
			const cells = shapeCells[i]
			let ok = true
			for (let j = 0; j < cells.length; j++) {
				if (mapData[cells[j]] == 0) { ok = false; break }
			}
			if (ok) candidates.push(cells)
		}
		return candidates
	}

	private _isShapeDisjoint(shape: number[], used: boolean[]): boolean {
		for (let i = 0; i < shape.length; i++) {
			if (used[shape[i]]) return false
		}
		return true
	}

	private _toggleShape(shape: number[], used: boolean[], value: boolean): void {
		for (let i = 0; i < shape.length; i++) {
			used[shape[i]] = value
		}
	}

	private _buildCellToShapes(candidates: number[][]): { [idx: number]: number[] } {
		const cellToShapes: { [idx: number]: number[] } = {}
		for (let i = 0; i < candidates.length; i++) {
			for (let j = 0; j < candidates[i].length; j++) {
				const cell = candidates[i][j]
				if (!cellToShapes[cell]) cellToShapes[cell] = []
				cellToShapes[cell].push(i)
			}
		}
		return cellToShapes
	}

	/**
	 * 是否存在“恰好由 targetCount 个图形组成”的完整覆盖。
	 * 从 candidates 中选互不重叠的若干形状，使并集恰好覆盖所有 activeCells，且形状个数等于 targetCount。
	 *
	 * @param mapLen 地图格数，用于分配 used[]
	 * @param activeCells 当前为“亮/占用”的格子索引
	 * @param candidates 每个元素是一支形状占用的格子列表（已筛到仅落在当前地图上）
	 * @param cellToShapes 格子 → 包含该格的形状在 candidates 中的下标（加速查找）
	 * @param targetCount 目标形状个数
	 */
	private _canExactCoverWithCount(mapLen: number, activeCells: number[], candidates: number[][], cellToShapes: { [idx: number]: number[] }, targetCount: number): boolean {
		if (targetCount < 0) return false
		// used[i]：格子 i 是否已被某支已选形状占用
		const used: boolean[] = []
		for (let i = 0; i < mapLen; i++) used[i] = false
		const dfs = (count: number): boolean => {
			if (count > targetCount)
				return false
			// MRV：在未覆盖格中选「可选形状数最少」的一格分支，利于剪枝
			let pick = -1
			let pickOpts: number[] = null
			for (let i = 0; i < activeCells.length; i++) {
				const cell = activeCells[i]
				if (used[cell]) continue
				const options: number[] = []
				const bucket = cellToShapes[cell] || []
				for (let k = 0; k < bucket.length; k++) {
					const si = bucket[k]
					if (this._isShapeDisjoint(candidates[si], used)) options.push(si)
				}
				if (options.length == 0)
					return false // 该格无法被任何未冲突形状覆盖
				if (pick == -1 || options.length < pickOpts.length) {
					pick = cell
					pickOpts = options
					if (options.length == 1) break // 已是最小分支（唯一选择）
				}
			}
			// 无未覆盖格：全部 active 已被覆盖，成功当且仅当用了恰好 targetCount 支形状
			if (pick == -1)
				return count == targetCount
			for (let i = 0; i < pickOpts.length; i++) {
				const shape = candidates[pickOpts[i]]
				this._toggleShape(shape, used, true)
				if (dfs(count + 1))
					return true
				this._toggleShape(shape, used, false)
			}
			return false
		}
		return dfs(0)
	}

	private _buildCurrentCoverContext(shapeType?: number): { mapData: number[], activeCells: number[], candidates: number[][], cellToShapes: { [idx: number]: number[] } } | null {
		if (this.stepData.length < 1) return null
		const targetShape = (shapeType == 1 || shapeType == 2) ? shapeType : this.getPrimaryShapeType()
		const templateMapType = this.getTemplateMapTypeByShape(targetShape)
		if (templateMapType <= 0) return null
		const templateInfo = MapGroup.getTemplateInfo(templateMapType)
		if (!templateInfo) return null
		const mapData: number[] = this.stepData[this.stepData.length - 1]
		if (templateInfo.mapLen !== mapData.length) return null
		const activeCells: number[] = []
		for (let i = 0; i < mapData.length; i++) {
			if (mapData[i] == 1) activeCells.push(i)
		}
		const candidates = this._buildCandidateShapes(templateInfo.shapeCells, mapData)
		const cellToShapes = this._buildCellToShapes(candidates)
		return { mapData, activeCells, candidates, cellToShapes }
	}

	// 获取当前图形个数，返回 [count, noStraySticks]
	public GetTriangleNum(): [number, boolean] {
		const ctx = this._buildCurrentCoverContext()
		if (!ctx) return [0, false]
		const count = ctx.candidates.length
		return [count, count > 0]
	}

	public UpDateDisplaytagNum() {
		var ret = this.GetTriangleNum()
		mylib.EvtBus.dispatchEvt(EvtType.TouchStep, { step: this.step, mapStep: this.stepData.length, tagNum: ret[0] });
	}

}