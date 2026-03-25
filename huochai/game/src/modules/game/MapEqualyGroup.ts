// 等式map
class MapEqualyGroup extends eui.Component {

	private _a = []
	private _b = []
	private _c = []
	private _d = []

	// 四组数字数组，按索引访问，避免后续 if/else 分支
	private _digitGroups: any[][]

	private step: number	// 当前已经完成的步数
	private moveTagert: any
	private _operator: number // 操作符 1+2-3*4/

	private gameType: number	//1 add 2 remove  3 delete 4 chellenge	
	private gameTagStep: number	// 规则所需的步数

	private stepData: any
	private curLv: number
	private readonly _selectedFilter: egret.GlowFilter = new egret.GlowFilter(0x32C5FF, 1, 28, 28, 2, 1, false, false)

	// 七段显示器：key = 段位十进制编码(各段用十位权重), value = 数字
	// 编码方式：段[0..6] 各贡献 10^(6-i)，求和得 tmpNum
	private static readonly SEGMENT_TO_DIGIT: { [tmpNum: number]: number } = {
		1110111: 0,
		11:      1,
		111110:  2,
		11111:   3,
		1001011: 4,
		1011101: 5,
		1111101: 6,
		10011:   7,
		1111111: 8,
		1011111: 9,
		1100011: 11,
	}

	public constructor(lv: number) {
		super();
		this.step = 0
		this.moveTagert = null
		this.skinName = "MapSkin4"
		this.stepData = []
		this.curLv = lv
		this.initEquality()
		this._operator = MyConst.MathMapData[lv].rule[6]
		this.initOperator(this._operator)
		const r = MyConst.MathMapData[lv].rule
		this.gameType = r[0]
		this.gameTagStep = r[1]
		const bef = MyConst.MathMapData[lv].bef
		const sz = this.initNumABC(r[2], r[3], r[4], r[5], bef[0], bef[1], bef[2], bef[3])
		this.stepData.push(sz)
		this.RefreshMap(sz)
	}

	private initOperator(symbol: number) {
		if (symbol == 1) {
			this["a"].visible = true
			this["b"].visible = true
		} else if (symbol == 2) {
			this["b"].visible = true
			this["a"].visible = false
		}
	}

	private initEquality() {
		for (var i = 0; i < 28; i++) {
			const group = Math.floor(i / 7)
			if (group == 0)      this._a.push(this["img_" + (i + 1)])
			else if (group == 1) this._b.push(this["img_" + (i + 1)])
			else if (group == 2) this._c.push(this["img_" + (i + 1)])
			else if (group == 3) this._d.push(this["img_" + (i + 1)])
		}
		this._digitGroups = [this._a, this._b, this._c, this._d]
	}

	public initNumABC(a: number, b: number, c: number, d: number, t1: number, t2: number, t3: number, t4: number): any {
		const nums  = [a, b, c, d]
		const types = [t1, t2, t3, t4]
		const szDateStep: number[] = []

		for (let g = 0; g < 4; g++) {
			const szN   = this.setNum(nums[g])
			const grp   = this._digitGroups[g]
			const t     = types[g]
			const base  = g * 7

			for (let i = 0; i < 7; i++) {
				if (t == 0) {
					// 可交互数字
					if (szN[i] == 1) {
						szDateStep[base + i] = 1  // 有火柴
						if (this.gameType == 3) {
							grp[i].addEventListener(egret.TouchEvent.TOUCH_END, this.onTouchClick, this)
						}
					} else {
						szDateStep[base + i] = 0  // 空槽
						if (this.gameType == 1) {
							grp[i].addEventListener(egret.TouchEvent.TOUCH_END, this.onTouchClick, this)
						}
					}
					if (this.gameType == 2) {
						grp[i].addEventListener(egret.TouchEvent.TOUCH_END, this.onTouchClick, this)
					}
				} else if (t == 1) {
					// 锁定数字
					if (szN[i] == 1) {
						szDateStep[base + i] = 2  // 填充（不可动）
					} else {
						szDateStep[base + i] = 3  // 不可见槽
						grp[i].visible = false
					}
				}
			}
		}
		return szDateStep
	}

	// 数字 → 七段状态（1=有火柴, 0=空）
	private static readonly DIGIT_TO_SEGMENTS: { [digit: number]: number[] } = {
		0:  [1, 1, 1, 0, 1, 1, 1],
		1:  [0, 0, 0, 0, 0, 1, 1],
		2:  [0, 1, 1, 1, 1, 1, 0],
		3:  [0, 0, 1, 1, 1, 1, 1],
		4:  [1, 0, 0, 1, 0, 1, 1],
		5:  [1, 0, 1, 1, 1, 0, 1],
		6:  [1, 1, 1, 1, 1, 0, 1],
		7:  [0, 0, 1, 0, 0, 1, 1],
		8:  [1, 1, 1, 1, 1, 1, 1],
		9:  [1, 0, 1, 1, 1, 1, 1],
		11: [1, 1, 0, 0, 0, 1, 1],
	}

	public setNum(num: number): number[] {
		return MapEqualyGroup.DIGIT_TO_SEGMENTS[num] || [0, 0, 0, 0, 0, 0, 0]
	}

	/** 从 stepData 状态数组中读取第 index 位数字（1-based），无法识别时返回 -1 */
	public getNum(index: number, szStep: any): number {
		const base = (index - 1) * 7
		let tmpNum = 0
		for (let i = 0; i < 7; i++) {
			if (szStep[base + i] == 1 || szStep[base + i] == 2) {
				tmpNum += Math.pow(10, 6 - i)
			}
		}
		const result = MapEqualyGroup.SEGMENT_TO_DIGIT[tmpNum]
		return result !== undefined ? result : -1
	}

	private getCellIndex(obj: any): number {
		let idx = this._a.indexOf(obj)
		if (idx >= 0) return idx
		idx = this._b.indexOf(obj)
		if (idx >= 0) return 7 + idx
		idx = this._c.indexOf(obj)
		if (idx >= 0) return 14 + idx
		idx = this._d.indexOf(obj)
		if (idx >= 0) return 21 + idx
		return -1
	}

	private onTouchClick(e: egret.TouchEvent) {
		if (this.step >= this.gameTagStep) {
			mylib.EvtBus.dispatchEvt(EvtType.TouchMoreStep, {});
			mylib.GmGlobal.sound.playSoundEffect("sound/snd_05.mp3");
			return
		}
		let obj = e.target;
		if (obj == this || obj == undefined) {
			return;
		}

		var i = this.getCellIndex(obj);
		if (this.stepData.length < 1) {
			return;
		}
		var curStep = this.stepData.length - 1

		if (i == -1 || this.stepData[curStep].length <= i) {
			return;
		}
		//mylib.GmGlobal.sound.playSoundEffect("sound/snd_04.mp3");
		if (this.gameType == 2) { // 移动
			if (this.moveTagert == null) {
				if (this.stepData[curStep][i] == 1) {
					this.moveTagert = obj
					var img_path = RES.getRes(("huochai_json.game_select"))
					obj.$setTexture(img_path)
					obj.filters = [this._selectedFilter]
					var sz = []
					for (var j = 0; j < this.stepData[curStep].length; j++) {  // 拷贝复制地图数据
						sz[j] = this.stepData[curStep][j]
					}
					sz[i] = 4	// select 状态
					this.stepData.push(sz)
					mylib.GmGlobal.sound.playSoundEffect("sound/snd_04.mp3");
					mylib.EvtBus.dispatchEvt(EvtType.TouchStep, { step: this.step, mapStep: this.stepData.length, tagNum: -1 });
				}
			}
			else {
			// 如果2次点击的是一个控件
			if (this.moveTagert == obj) { // 还原即可 不计算步数
				var img_path_match = RES.getRes(("huochai_json.ingame_matches"))
				obj.$setTexture(img_path_match)
				obj.filters = null
				this.moveTagert = null
				this.stepData.pop()  // 弹出"选中"中间态，恢复到选中前的状态
				mylib.GmGlobal.sound.playSoundEffect("sound/snd_02.mp3");
				mylib.EvtBus.dispatchEvt(EvtType.TouchStep, { step: this.step, mapStep: this.stepData.length, tagNum: -1 });
				return
			}
				if (this.stepData[curStep][i] == 0) {
					var img_path_match = RES.getRes(("huochai_json.ingame_matches"))
					var img_path_normal = RES.getRes(("huochai_json.game_map"))
					obj.$setTexture(img_path_match)
					obj.filters = null
					this.moveTagert.$setTexture(img_path_normal)
					this.moveTagert.filters = null
					this.moveTagert = null

					var sz = []
					for (var j = 0; j < this.stepData[curStep].length; j++) {  // 拷贝复制地图数据
						sz[j] = this.stepData[curStep][j]
						if (sz[j] == 4) {
							sz[j] = 0
						}
					}
					sz[i] = 1	// select 状态
					this.stepData.push(sz)
					this.step++
					mylib.GmGlobal.sound.playSoundEffect("sound/snd_04.mp3");
					mylib.EvtBus.dispatchEvt(EvtType.TouchStep, { step: this.step, mapStep: this.stepData.length, tagNum: -1 });
					if (this.step == this.gameTagStep) {
						const ok = this.CheckComplete()
						mylib.EvtBus.dispatchEvt(EvtType.TouchCommplete, { lv: this.curLv, bWin: ok, tagNum: -1 });
					}
					
				}
			}
		} else if (this.gameType == 1) { // 增加
			if (this.stepData[curStep][i] == 0) {
				var img_path = RES.getRes(("huochai_json.ingame_matches"))
				obj.$setTexture(img_path)
				obj.filters = null
				//this.stepData[curStep][i] == 1
				var sz = []
				for (var j = 0; j < this.stepData[curStep].length; j++) {  // 拷贝复制地图数据
					sz[j] = this.stepData[curStep][j]
				}
				sz[i] = 1
				this.stepData.push(sz)
				this.step++
				mylib.GmGlobal.sound.playSoundEffect("sound/snd_04.mp3");
				mylib.EvtBus.dispatchEvt(EvtType.TouchStep, { step: this.step, mapStep: this.stepData.length,tagNum: -1 });
				if (this.step == this.gameTagStep) {
					const ok = this.CheckComplete()
					mylib.EvtBus.dispatchEvt(EvtType.TouchCommplete, { lv: this.curLv, bWin: ok, tagNum: -1 });
				}
			}
		} else if (this.gameType == 3) { // 删除
			if (this.stepData[curStep][i] == 1) {
				var img_path = RES.getRes(("huochai_json.game_map"))
				obj.$setTexture(img_path)
				obj.filters = null
				var sz = []
				for (var j = 0; j < this.stepData[curStep].length; j++) {  // 拷贝复制地图数据
					sz[j] = this.stepData[curStep][j]
				}
				sz[i] = 0
				this.stepData.push(sz)
				this.step++
				mylib.GmGlobal.sound.playSoundEffect("sound/snd_04.mp3");
				mylib.EvtBus.dispatchEvt(EvtType.TouchStep, { step: this.step, mapStep: this.stepData.length, tagNum: -1  });
				if (this.step == this.gameTagStep) {
					const ok = this.CheckComplete()
					mylib.EvtBus.dispatchEvt(EvtType.TouchCommplete, {lv: this.curLv, bWin: ok, tagNum: -1 });
				}
			}
		}
	}

	public CheckComplete(): boolean {
		var stepLen = this.stepData.length
		var rstA = this.getNum(1, this.stepData[stepLen - 1])
		var rstB = this.getNum(2, this.stepData[stepLen - 1])
		var rstC = this.getNum(3, this.stepData[stepLen - 1])
		var rstD = this.getNum(4, this.stepData[stepLen - 1])

		if (rstA == -1 || rstB == -1 || rstC == -1 || rstD == -1) { // 无效数字直接返回
			return false
		}
		if (this._operator == 1) {
			if (rstA + rstB == 10 * rstC + rstD) {
				return true
			}
		} else if (this._operator == 2) {
			if (rstA - rstB == 10 * rstC + rstD) {
				return true
			}
		} else if (this._operator == 3) {
			if (rstA * rstB == 10 * rstC + rstD) {
				return true
			}
		} else if (this._operator == 4) {
			if (rstB == 0) {
				return false
			}
			if (rstA / rstB == 10 * rstC + rstD) {
				return true
			}
		}
		return false
	}

	private getOperatorText(): string {
		if (this._operator == 1) return "+"
		if (this._operator == 2) return "-"
		if (this._operator == 3) return "*"
		if (this._operator == 4) return "/"
		return "?"
	}

	public GetRuleDebugText(): string {
		if (this.stepData.length < 1) return "[等式规则层]\n状态为空"
		const sz = this.stepData[this.stepData.length - 1]
		const a = this.getNum(1, sz)
		const b = this.getNum(2, sz)
		const c = this.getNum(3, sz)
		const d = this.getNum(4, sz)
		const rightValid = c >= 0 && d >= 0
		const right = rightValid ? (10 * c + d) : -1
		const leftValid = a >= 0 && b >= 0
		let leftExpr = ""
		let leftOk = false
		if (leftValid && rightValid) {
			if (this._operator == 1) {
				leftExpr = a + " + " + b
				leftOk = (a + b == right)
			} else if (this._operator == 2) {
				leftExpr = a + " - " + b
				leftOk = (a - b == right)
			} else if (this._operator == 3) {
				leftExpr = a + " * " + b
				leftOk = (a * b == right)
			} else if (this._operator == 4) {
				leftExpr = a + " / " + b
				leftOk = (b != 0 && a / b == right)
			}
		}

		const lines: string[] = []
		const modeName = this.gameType == 1 ? "添加" : (this.gameType == 2 ? "移动" : "删除")
		lines.push("[等式规则层]")
		const mapTag = MyConst.getMapTypeTag ? MyConst.getMapTypeTag(999) : "等式"
		lines.push("玩法=" + modeName + "  mapType=999(" + mapTag + ")  运算=" + this.getOperatorText() + "  step=" + this.step + "/" + this.gameTagStep + "  hist=" + this.stepData.length)
		lines.push("数字A=" + a + " B=" + b + " C=" + c + " D=" + d)
		if (!leftValid || !rightValid) {
			lines.push("等式：存在无法识别的数字")
		} else {
			lines.push("等式：" + leftExpr + " = " + right + "  => " + leftOk)
		}
		lines.push("判定结果=" + this.CheckComplete())
		return lines.join("\n")
	}

	public RefreshMap(szMap: any) { // 刷新地图
		var img_path_normal = RES.getRes(("huochai_json.game_map"))	// 默认
		var img_path_match = RES.getRes(("huochai_json.ingame_matches"))			// 火柴背景
		var img_path_fix = RES.getRes(("huochai_json.ingame_matches_fix")) // 填充背景
		var img_path_select = RES.getRes(("huochai_json.game_select")) // 填充背景
		this.moveTagert = null
		for (var i = 0; i < szMap.length; i++) {
			var obj = this["img_" + (i + 1).toString()]
			if (obj != null) {
				obj.visible = true
				obj.filters = null
				if (szMap[i] == 0) {
					obj.$setTexture(img_path_normal)
				}
				else if (szMap[i] == 1) {
					obj.$setTexture(img_path_match)
				} else if (szMap[i] == 3) {
					obj.visible = false
				}
				else if (szMap[i] == 2) {
					obj.$setTexture(img_path_fix)
				}
				else if (szMap[i] == 4) {
					obj.$setTexture(img_path_select)
					obj.filters = [this._selectedFilter]
					this.moveTagert = obj
				}
			}
		}
		// 如果c 是0 则不显示
		if (this.getNum(3, szMap) == 0){
			for (var i = 0 ;i < 7;i++){
				this._c[i].visible = false
			}
		} else {
			for (var i = 0 ;i < 7;i++){
				if (szMap[14 + i] != 3) this._c[i].visible = true
			}
		}
	}

	public BackStep() {
		if (this.stepData.length <= 1) {
			return
		}
		this.stepData.pop()
		if (this.moveTagert == null) {
			this.step--
		}
		mylib.EvtBus.dispatchEvt(EvtType.TouchStep, { step: this.step, mapStep: this.stepData.length, tagNum: -1 });
		this.RefreshMap(this.stepData[this.stepData.length - 1])
	}
	public ShowTipResult() {
		var a = MyConst.MathMapData[this.curLv].rst[0][0]
		var b = MyConst.MathMapData[this.curLv].rst[0][1]
		var c = MyConst.MathMapData[this.curLv].rst[0][2]
		var d = MyConst.MathMapData[this.curLv].rst[0][3]
		var type1 = MyConst.MathMapData[this.curLv].bef[0]
		var type2 = MyConst.MathMapData[this.curLv].bef[1]
		var type3 = MyConst.MathMapData[this.curLv].bef[2]
		var type4 = MyConst.MathMapData[this.curLv].bef[3]

		var sz = this.initNumABC(a, b, c, d, type1, type2, type3, type4)
		this.RefreshMap(sz)
	}
	public CloseTipResult() {
		if (this.stepData.length < 1) {
			return
		}
		this.RefreshMap(this.stepData[this.stepData.length - 1])
		this.CloseHighlight()
	}

	private _highlightTweens: any[] = []
	public HighlightOperableCells() {
		this.CloseHighlight()
		if (this.stepData.length < 1) return
		const cur = this.stepData[this.stepData.length - 1]
		for (let i = 0; i < cur.length; i++) {
			let canOperate = false
			if (this.gameType == 1 && cur[i] == 0) canOperate = true
			else if (this.gameType == 3 && cur[i] == 1) canOperate = true
			else if (this.gameType == 2 && cur[i] == 1) canOperate = true
			if (canOperate) {
				const obj = this["img_" + (i + 1).toString()]
				if (obj && obj.visible) {
					egret.Tween.removeTweens(obj)
					egret.Tween.get(obj, { loop: true }).to({ scaleX: 1.08, scaleY: 1.08 }, 400).to({ scaleX: 1, scaleY: 1 }, 400)
					this._highlightTweens.push(obj)
				}
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

	public removeAllImgEvent() {
		for (var i = 0; i < this._a.length; i++) {
			this._a[i].removeEventListener(egret.TouchEvent.TOUCH_END, this.onTouchClick, this);
			this._b[i].removeEventListener(egret.TouchEvent.TOUCH_END, this.onTouchClick, this);
			this._c[i].removeEventListener(egret.TouchEvent.TOUCH_END, this.onTouchClick, this);
			this._d[i].removeEventListener(egret.TouchEvent.TOUCH_END, this.onTouchClick, this);
		}
	}
}