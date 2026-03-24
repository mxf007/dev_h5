
class MapGroup extends eui.Component {

	private step: number
	private moveTagert: any
	private szImg: any = []
	private curLv: number

	private constStep: number// 消耗步数
	private gameType: number	//1 add 2 remove  3 delete 4 chellenge	

	private mapId: number
	private stepData: any
	private bReverse: boolean = false

	// mapId → 对应的形状模板数组，集中管理，O(1) 查找
	private static readonly TEMPLATE_MAP: { [id: number]: number[][] } = {
		1: null, 2: null, 3: null, 5: null, 6: null, 7: null, 8: null,
		9: null, 10: null, 11: null, 12: null, 13: null, 14: null, 15: null,
		16: null, 17: null, 18: null, 19: null, 20: null, 21: null, 22: null,
		23: null, 24: null, 25: null, 26: null, 27: null, 28: null,
	}

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

	public constructor(lv: number, mapType: number, reverseMode?: boolean) {
		super();
		this.step = 0
		this.bReverse = !!(reverseMode || (MainUIManager.getInstance() && MainUIManager.getInstance().bReverseMode))

		this.mapId = mapType
		var mapSkin = "MapSkin" + mapType.toString()
		this.skinName = mapSkin;
		this.curLv = lv
		this.gameType = MyConst.MapData[this.curLv].rule[0]
		this.constStep = MyConst.MapData[this.curLv].rule[1]
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
		const m = MyConst.MapData[this.curLv];
		const objLen = m.bef.length
		const initState = this.bReverse && m.rst && m.rst[0] ? m.rst[0] : m.bef
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
			if (this.gameType == 1) {
				if (val != 1) this.szImg[i].addEventListener(egret.TouchEvent.TOUCH_END, this.onClickItemOk, this);
			} else if (this.gameType == 3) {
				if (val == 1) this.szImg[i].addEventListener(egret.TouchEvent.TOUCH_END, this.onClickItemOk, this);
			} else if (this.gameType == 2) {
				this.szImg[i].addEventListener(egret.TouchEvent.TOUCH_END, this.onClickItemOk, this);
			}
		}
	}
	public LoadMap(szMap) {
		this.moveTagert = null
		for (var i = 0; i < this.szImg.length; i++) {
			if (szMap[i] == 1) {
				var img_path = RES.getRes(("huochai_json.ingame_matches"))
				this.szImg[i].$setTexture(img_path)
			}
			else if (szMap[i] == 0) {
				var img_path = RES.getRes(("huochai_json.game_map"))

				this.szImg[i].$setTexture(img_path)
			} else if (szMap[i] == 3) {
				var img_path = RES.getRes(("huochai_json.game_select"))
				this.moveTagert = this.szImg[i]
				this.szImg[i].$setTexture(img_path)
			}
		}
	}

	/** 火柴放置/移除时的弹跳反馈特效
	 *  缩放时同步补偿 x/y，使视觉中心保持不动（修复旋转火柴棒缩放移位问题）。
	 *  Egret 默认 anchorOffset=(0,0)，对旋转元素缩放会产生明显偏移，
	 *  公式：保持中心点不变时 new_x = ox + (1-s)*dcx，dcx = (w/2)*cosθ - (h/2)*sinθ
	 */
	private _playClickEffect(obj: any, isPlace: boolean): void {
		egret.Tween.removeTweens(obj)
		const s1 = isPlace ? 1.20 : 0.85
		const s2 = isPlace ? 0.92 : 1.05

		const ox = obj.x, oy = obj.y
		const w = obj.width, h = obj.height
		const rad = obj.rotation * Math.PI / 180
		const cosR = Math.cos(rad), sinR = Math.sin(rad)
		// 锚点(0,0)到视觉中心(w/2, h/2)在父坐标系中的偏移
		const dcx = (w / 2) * cosR - (h / 2) * sinR
		const dcy = (w / 2) * sinR + (h / 2) * cosR

		egret.Tween.get(obj, { loop: false })
			.to({ x: ox + (1 - s1) * dcx, y: oy + (1 - s1) * dcy, scaleX: s1, scaleY: s1 }, 80)
			.to({ x: ox + (1 - s2) * dcx, y: oy + (1 - s2) * dcy, scaleX: s2, scaleY: s2 }, 70)
			.to({ x: ox, y: oy, scaleX: 1.0, scaleY: 1.0 }, 60)
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
		const i = this.getChildIndex(obj) - 1
		if (i == -1 || this.stepData[curStep].length <= i) return

		if (this.gameType == 2) {
			if (this.moveTagert == null) { // 第一步：选取火柴
				if (this.stepData[curStep][i] == 1) {
					this.moveTagert = obj
					this.szImg[i].$setTexture(RES.getRes("huochai_json.game_select"))
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
					this.moveTagert = null
					obj.$setTexture(RES.getRes("huochai_json.ingame_matches"))
					this._playClickEffect(obj, true)
					mylib.GmGlobal.sound.playSoundEffect("sound/snd_04.mp3");
					const ret = this.GetTriangleNum()
					mylib.EvtBus.dispatchEvt(EvtType.TouchStep, { step: this.step, mapStep: this.stepData.length, tagNum: ret[0] });
					if (this.step == this.constStep) {
						mylib.EvtBus.dispatchEvt(EvtType.TouchCommplete, { lv: this.curLv, bWin: ret[1], tagNum: ret[0] });
					}
				}
			}
			return
		} else if (this.stepData[curStep][i] == 0 && this.gameType == 1) {
			const sz = this.stepData[curStep].slice()
			sz[i] = 1
			this.stepData.push(sz)
			this.step++
			this.szImg[i].$setTexture(RES.getRes("huochai_json.ingame_matches"))
			this._playClickEffect(this.szImg[i], true)
			mylib.GmGlobal.sound.playSoundEffect("sound/snd_04.mp3");
			const ret = this.GetTriangleNum()
			mylib.EvtBus.dispatchEvt(EvtType.TouchStep, { step: this.step, mapStep: this.stepData.length, tagNum: ret[0] });
			if (this.step == this.constStep) {
				mylib.EvtBus.dispatchEvt(EvtType.TouchCommplete, { lv: this.curLv, bWin: ret[1], tagNum: ret[0] });
			}
		} else if (this.stepData[curStep][i] == 1 && this.gameType == 3) {
			const sz = this.stepData[curStep].slice()
			sz[i] = 0
			this.stepData.push(sz)
			this.step++
			this.szImg[i].$setTexture(RES.getRes("huochai_json.game_map"))
			this._playClickEffect(this.szImg[i], false)
			mylib.GmGlobal.sound.playSoundEffect("sound/snd_04.mp3");
			const ret = this.GetTriangleNum()
			mylib.EvtBus.dispatchEvt(EvtType.TouchStep, { step: this.step, mapStep: this.stepData.length, tagNum: ret[0] });
			if (this.step == this.constStep) {
				mylib.EvtBus.dispatchEvt(EvtType.TouchCommplete, { lv: this.curLv, bWin: ret[1], tagNum: ret[0] });
			}
		}
	}
	private CheckComplete(): boolean {
		if (this.bReverse) {
			return this.CheckReverseComplete()
		}
		var ret = this.GetTriangleNum()
		if (ret && ret[1]) return true
		if (this.isDualTarget()) {
			var dr = this.GetDualTargetNum()
			return dr && dr[0] && dr[1]
		}
		return false
	}

	private CheckReverseComplete(): boolean {
		if (this.stepData.length < 1) return false
		const cur = this.stepData[this.stepData.length - 1]
		const bef = MyConst.MapData[this.curLv].bef
		if (cur.length !== bef.length) return false
		for (let i = 0; i < cur.length; i++) {
			if (cur[i] !== bef[i]) return false
		}
		return true
	}

	private isDualTarget(): boolean {
		const r = MyConst.MapData[this.curLv].rule
		return r && r.length >= 6 && r[4] > 0 && r[5] > 0
	}

	private GetDualTargetNum(): [boolean, boolean] | null {
		const r = MyConst.MapData[this.curLv].rule
		if (!r || r.length < 6) return null
		const target1 = r[3], target2 = r[5]
		const ret1 = this.GetTriangleNum()
		if (!ret1) return null
		const ok1 = ret1[1] && ret1[0] >= target1
		const szRst2 = this.getSecondShapeTemplates()
		if (!szRst2 || this.stepData.length < 1) return [ok1, false]
		const mapData = this.stepData[this.stepData.length - 1]
		if (szRst2[0].length !== mapData.length) return [ok1, false]
		let count2 = 0, zuhe: number[] = [...mapData]
		for (let i = 0; i < szRst2.length; i++) {
			let find = true
			for (let j = 0; j < mapData.length; j++) {
				if (szRst2[i][j] == 1 && mapData[j] == 0) { find = false; break }
			}
			if (find) {
				for (let j = 0; j < zuhe.length; j++) {
					if (zuhe[j] == 1 && szRst2[i][j] == 1) zuhe[j] = 0
				}
				count2++
			}
		}
		let bRect2 = true
		for (let i = 0; i < mapData.length; i++) {
			if (zuhe[i] == 1) bRect2 = false
		}
		return [ok1, bRect2 && count2 >= target2]
	}

	private getSecondShapeTemplates(): number[][] | null {
		const r = MyConst.MapData[this.curLv].rule
		if (!r || r.length < 6) return null
		const shape2 = r[4]
		if (this.mapId == 1) {
			if (shape2 == 1) return Const.map1
			if (shape2 == 2) return Const.map10
		}
		if (this.mapId == 2) {
			if (shape2 == 1) return Const.map2
		}
		if (this.mapId == 3) {
			if (shape2 == 1 || shape2 == 2) return Const.map3
		}
		return null
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
		const m = MyConst.MapData[this.curLv]
		this.LoadMap(this.bReverse ? m.bef : (m.rst && m.rst[0] ? m.rst[0] : m.bef))
	}
	public CloseTipResult() {
		if (this.stepData.length < 1) {
			return
		}
		this.LoadMap(this.stepData[this.stepData.length - 1])
		this.CloseHighlight()
	}

	private _highlightTweens: { obj: any, ox: number, oy: number }[] = []
	public HighlightOperableCells() {
		this.CloseHighlight()
		if (this.stepData.length < 1) return
		const cur = this.stepData[this.stepData.length - 1]
		for (let i = 0; i < this.szImg.length && i < cur.length; i++) {
			let canOperate = false
			if (this.gameType == 1 && cur[i] == 0) canOperate = true
			else if (this.gameType == 3 && cur[i] == 1) canOperate = true
			else if (this.gameType == 2 && cur[i] == 1) canOperate = true
			if (canOperate && this.szImg[i]) {
				const obj = this.szImg[i]
				const ox = obj.x, oy = obj.y
				const w = obj.width, h = obj.height
				const rad = obj.rotation * Math.PI / 180
				const cosR = Math.cos(rad), sinR = Math.sin(rad)
				const dcx = (w / 2) * cosR - (h / 2) * sinR
				const dcy = (w / 2) * sinR + (h / 2) * cosR
				const s = 1.08
				egret.Tween.removeTweens(obj)
				egret.Tween.get(obj, { loop: true })
					.to({ x: ox + (1 - s) * dcx, y: oy + (1 - s) * dcy, scaleX: s, scaleY: s }, 400)
					.to({ x: ox, y: oy, scaleX: 1, scaleY: 1 }, 400)
				this._highlightTweens.push({ obj, ox, oy })
			}
		}
	}
	public CloseHighlight() {
		for (let i = 0; i < this._highlightTweens.length; i++) {
			const { obj, ox, oy } = this._highlightTweens[i]
			egret.Tween.removeTweens(obj)
			obj.scaleX = 1
			obj.scaleY = 1
			obj.x = ox
			obj.y = oy
		}
		this._highlightTweens = []
	}


	// 获取当前图形个数，返回 [count, noStraySticks]
	public GetTriangleNum(): [number, boolean] {
		if (this.stepData.length < 1) return [0, false]

		const szRst = MapGroup.getTemplate(this.mapId)
		if (!szRst) return [0, false]  // 未注册的 mapId，安全返回

		const mapData: number[] = this.stepData[this.stepData.length - 1]
		if (szRst[0].length !== mapData.length) return [0, false]

		let index = 0
		const zuhe: number[] = [...mapData]

		for (let i = 0; i < szRst.length; i++) {
			let find = true
			for (let j = 0; j < mapData.length; j++) {
				if (szRst[i][j] == 1 && mapData[j] == 0) { find = false; break }
			}
			if (find) {
				for (let j = 0; j < zuhe.length; j++) {
					if (zuhe[j] == 1 && szRst[i][j] == 1) zuhe[j] = 0
				}
				index++
			}
		}

		// bRect = true 表示所有火柴都恰好构成图形，没有"游离"火柴
		let bRect = true
		for (let i = 0; i < zuhe.length; i++) {
			if (zuhe[i] == 1) { bRect = false; break }
		}
		return [index, bRect]
	}

	public UpDateDisplaytagNum() {
		var ret = this.GetTriangleNum()
		mylib.EvtBus.dispatchEvt(EvtType.TouchStep, { step: this.step, mapStep: this.stepData.length, tagNum: ret[0] });
	}

}