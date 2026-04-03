class GameMath extends mylib.UIBase {

	private score_num: eui.Label
	private guankaLv: eui.Label
	private runtimeStats: eui.Label
	private gameGroup: eui.Group

	private step: number      // 标题显示步数
	private back_step: number  // 返回的步数
	////// 规则相关
	private constStep: number// 消耗步数
	private gameType: number	//1 add 2 remove  3 delete 4 chellenge	

	private szImg: any = []
	private curLv: number

	private gameMenue: eui.Group
	private gameTitle: eui.Group	// 普通地图
	private gameTitleEquation: eui.Group	// 等式title
	private target_rect: eui.Image	// 目标形状
	private txt_target_rule: eui.Label
	private gameTitleRule: eui.Group
	// private btn_music:OneStateButton
	// private btn_back_game:OneStateButton
	// private btn_share:OneStateButton

	private btn_retry: OneStateButton		// 重试
	private btn_back_step: eui.Image	// 上一步	
	private btn_remind: OneStateButton		// 提示

	private gameRule: eui.Label

	private moveTagert: any
	private _map: any

	private gp_tip: eui.Group
	private txt_tip: eui.Label
	// 规则相关
	private img_target_bg: eui.Image
	private mission_target: eui.Image
	private txt_huochai: eui.Label
	private txt_target: eui.Label
	private img_target_bg1: eui.Image

	private txt_huochai1: eui.Label
	private txt_condition1: eui.Label
	// 结算相关
	//private game_end :eui.Group
	private btn_next: OneStateButton
	private gameEnd: eui.Group
	private btn_tip_close: OneStateButton
	private img_win: eui.Image
	private end_beautiful: eui.Image

	private txt_condition: eui.Label
	private btn_home: OneStateButton

	// 提示相关
	private gp_GetRst: eui.Group
	private btn_getRst_close: OneStateButton
	private btn_getRst_ok: OneStateButton
	private completeTxt: eui.Label

	private first_tongguan: eui.Label
	//private tongguanZs: eui.Image

	private btn_help: OneStateButton
	private btn_share: OneStateButton
	private bClickTip: boolean // 是否已消耗星星/视频看过答案
	private bLightHintShown: boolean = false // 是否已显示过轻提示（免费）

	// 分享进来
	private onhelp: eui.Group
	private onhelp_cancel: OneStateButton
	private onhelp_ok: OneStateButton
	private onhelp_rule: eui.Label


	//小星星
	private img_star: eui.Image
// 观看视频 相关
	private onShowVideo:eui.Group
	private show_video_ok:OneStateButton
	private show_video_cancel :OneStateButton
	private show_video_close: OneStateButton
	private video_tips: eui.Label

	private bRetry: boolean
	private _levelStartAt: number = 0
	private _winSoundPlayed: boolean = false
	/** 皮肤子部件在构造函数返回后才绑定，首次 popallitem 须在 childrenCreated 之后执行 */
	private _gameMathSkinPopDone: boolean = false
	private static readonly WIN_BGM_ID: string = "sound/snd_08.mp3"
	private _scoreRollProxy: { v: number } = { v: 0 }
	private _victoryFlyImages: eui.Image[] = []
	public constructor(curlv) {
		super("GameUISkin");
		this.curLv = curlv//MainUIManager.getInstance().selectId - 1
		this.bRetry = false
		this.bClickTip = false
	}

	private popallitem() {
		this._stopWinBgm()
		this._cleanupVictoryStarFly()
		this._winSoundPlayed = false
		this._levelStartAt = Date.now()
		this.step = 0 // 初始化 步数
		this.bClickTip = false
		this.bLightHintShown = false
		if (this.curLv >= MyConst.MathMapData.length) {
			this.ShowTips("您已经达到最大关卡配置，请等待程序更新！")
			return
		}
		this.constStep = MyConst.MathMapData[this.curLv].rule[1]
		this.gameType = MyConst.MathMapData[this.curLv].rule[0]	// 类型： 1 add 2 remove  3 delete 4 chellenge	

		this.btn_back_step.$setTouchEnabled(false) // 设置按钮灰色
		this.gameEnd.visible = false
		var img_path = RES.getRes(("huochai_json.ingame_bt_back1"))
		this.btn_back_step.$setTexture(img_path)
		this.completeTxt.visible = false   // 完成挑战

		this.btn_next.visible = false
		this.btn_remind.visible = true
		this.btn_tip_close.visible = false
		this.score_num.text = MainUIManager.getInstance().score.toString()
		this.guankaLv.text = "关卡:" + (this.curLv + 1).toString()//MainUIManager.getInstance().guanqia.toString()
		this.syncRuntimeStats(this.buildRuntimeStatsText(MainUIManager.getInstance().getMathLevelBestTime(this.curLv + 1)), true)
		this.onhelp.visible = false
		this.onShowVideo.visible = false

		if (MainUIManager.getInstance().bHelp && this.bRetry == false) {
			//提示是否帮助挑战
			//AlertBox.alert("是否帮助好友完成挑战",this.CompleteGame,this,"确定")
			this.btn_remind.visible = false
			this.onhelp.visible = true
			this.onhelp_rule.text = "是否帮助好友挑战第 " + (this.curLv + 1).toString() + "关"
		}

		this.gameGroup.removeChildren()
		this._map = null
		var mapType = MyConst.MathMapData[this.curLv].mapType
		const fit = mapType == 999 ? this.calcEquationMapFit() : this.calcMapFit()
		if (mapType != 999) {
			this._map = new MapGroup(this.curLv, mapType, false)
			this._map.x = fit.x
			this._map.y = fit.y
			this._map.alpha = 0
			this._map.scaleX = this._map.scaleY = fit.scale * 0.9
			this.gameGroup.addChildAt(this._map, 100)
			egret.Tween.get(this._map).to({ alpha: 1, scaleX: fit.scale, scaleY: fit.scale }, 350, egret.Ease.backOut)
			this.gameTitle.visible = true
			this.gameTitleEquation.visible = false
		} else {
			this._map = new MapEqualyGroup(this.curLv)

			this._map.x = fit.x
			this._map.y = fit.y
			this._map.alpha = 0
			this._map.scaleX = this._map.scaleY = fit.scale * 0.9
			this.gameGroup.addChild(this._map)
			egret.Tween.get(this._map).to({ alpha: 1, scaleX: fit.scale, scaleY: fit.scale }, 350, egret.Ease.backOut)
			this.gameTitleEquation.visible = true
			this.gameTitle.visible = false

			var img_path_add = RES.getRes("huochai_json.ingame_ui_add")
			this.txt_huochai1.text = this.step.toString() + " / " + this.constStep.toString()
			if (this.gameType == 1) {
				this.txt_condition1.text = "增加"
			} else if (this.gameType == 2) {
				img_path_add = RES.getRes("huochai_json.ingame_ui_move")
				this.txt_condition1.text = "移动"
			} else if (this.gameType == 3) {
				img_path_add = RES.getRes("huochai_json.ingame_ui_delete")
				this.txt_condition1.text = "删除"
			}
			this.img_target_bg1.$setTexture(img_path_add)
			return
		}
		var img_path_add = RES.getRes("huochai_json.ingame_ui_add")
		this.txt_huochai.text = this.step.toString() + " / " + this.constStep.toString()
		var strRule = ""
		if (this.gameType == 1) {
			strRule += "添加"
			this.txt_condition.text = "增加"
		} else if (this.gameType == 2) {
			img_path_add = RES.getRes("huochai_json.ingame_ui_move")
			strRule += "移动"
			this.txt_condition.text = "移动"
		} else if (this.gameType == 3) {
			strRule += "删除"
			this.txt_condition.text = "删除"
			img_path_add = RES.getRes("huochai_json.ingame_ui_delete")
		}
		this.img_target_bg.$setTexture(img_path_add)
		var xz = MyConst.MathMapData[this.curLv].rule[2]
		var num = MyConst.MathMapData[this.curLv].rule[3]
		strRule += this.constStep.toString() + "根火柴\n变成"
		strRule += num.toString() + "个"
		var img_path_triangle = RES.getRes(("huochai_json.ingame_mission_triangle"))
		var img_path_square = RES.getRes(("huochai_json.ingame_mission_square"))
		if (xz == 1) {
			strRule += "正方形"
			this.target_rect.$setTexture(img_path_square)
		}
		else if (xz == 2) {
			strRule += "正三角形"
			this.target_rect.$setTexture(img_path_triangle)
		}
		this.gameRule.text = strRule
		// 当前的数量
		//this.txt_target.text = num.toString()
		this.gameTitleRule.visible = false
		this.txt_target_rule.text = strRule
		this.txt_target_rule.lineSpacing = 10

		this.first_tongguan.visible = false
		//this.tongguanZs.visible = false

		this.btn_help.visible = true
		this.btn_share.visible = false

		this.onClickMenu()
		this.btn_remind.visible = true

		// 加载小星星动画
		this.LoadStartBlinkAction()
	}

	protected childrenCreated() {
		super.childrenCreated();
		if (!this._gameMathSkinPopDone) {
			this._gameMathSkinPopDone = true
			this.popallitem()
		}
	}

	public addEvts(): void {

		this.btn_retry.addEventListener(egret.TouchEvent.TOUCH_END, this.onClickRetry, this);
		this.btn_back_step.addEventListener(egret.TouchEvent.TOUCH_END, this.onClickBack, this);
		this.btn_remind.addEventListener(egret.TouchEvent.TOUCH_END, this.onClickRemind, this);
		this.btn_next.addEventListener(egret.TouchEvent.TOUCH_END, this.onClickNext, this);
		this.btn_tip_close.addEventListener(egret.TouchEvent.TOUCH_END, this.onClickTipClose, this);
		this.btn_home.addEventListener(egret.TouchEvent.TOUCH_END, this.onClickGoHome, this);

		this.btn_getRst_close.addEventListener(egret.TouchEvent.TOUCH_END, this.onClickGetRstClose, this);
		this.btn_getRst_ok.addEventListener(egret.TouchEvent.TOUCH_END, this.onClickGetRstOk, this);
		this.btn_help.addEventListener(egret.TouchEvent.TOUCH_END, this.onClickHelp, this);
		this.btn_share.addEventListener(egret.TouchEvent.TOUCH_END, this.onClickShare, this);
		this.gameTitle.addEventListener(egret.TouchEvent.TOUCH_END, this.onClickMenu, this);

		this.onhelp_ok.addEventListener(egret.TouchEvent.TOUCH_END, this.onClickHelpOk, this);
		this.onhelp_cancel.addEventListener(egret.TouchEvent.TOUCH_END, this.onClickHelpCancel, this);

				// 看视频
		this.show_video_ok.addEventListener(egret.TouchEvent.TOUCH_END, this.OnShowVideoOk, this);
		this.show_video_cancel.addEventListener(egret.TouchEvent.TOUCH_END, this.OnShowVideoCancel, this);
		if (this.show_video_close) {
			this.show_video_close.addEventListener(egret.TouchEvent.TOUCH_END, this.OnShowVideoClose, this);
		}

		//this.gameTitleEquation.addEventListener(egret.TouchEvent.TOUCH_END, this.onClickMenu, this);
		mylib.EvtBus.addListener(EvtType.TouchStep, this.onSetpUpdate, this);
		mylib.EvtBus.addListener(EvtType.TouchCommplete, this.GameComplete, this);
		mylib.EvtBus.addListener(EvtType.TouchMoreStep, this.TouchMoreStep, this);
	}

	public rmEvts(): void {
		this.btn_retry.removeEventListener(egret.TouchEvent.TOUCH_END, this.onClickRetry, this);
		this.btn_back_step.removeEventListener(egret.TouchEvent.TOUCH_END, this.onClickBack, this);
		this.btn_remind.removeEventListener(egret.TouchEvent.TOUCH_END, this.onClickRemind, this);
		this.btn_next.removeEventListener(egret.TouchEvent.TOUCH_END, this.onClickNext, this);
		this.btn_tip_close.removeEventListener(egret.TouchEvent.TOUCH_END, this.onClickTipClose, this);
		this.btn_home.removeEventListener(egret.TouchEvent.TOUCH_END, this.onClickGoHome, this);
		this.btn_getRst_close.removeEventListener(egret.TouchEvent.TOUCH_END, this.onClickGetRstClose, this);
		this.btn_getRst_ok.removeEventListener(egret.TouchEvent.TOUCH_END, this.onClickGetRstOk, this);
		this.gameTitle.removeEventListener(egret.TouchEvent.TOUCH_END, this.onClickMenu, this);
		this.btn_help.removeEventListener(egret.TouchEvent.TOUCH_END, this.onClickHelp, this);
		this.btn_share.removeEventListener(egret.TouchEvent.TOUCH_END, this.onClickShare, this);

		this.onhelp_ok.removeEventListener(egret.TouchEvent.TOUCH_END, this.onClickHelpOk, this);
		this.onhelp_cancel.removeEventListener(egret.TouchEvent.TOUCH_END, this.onClickHelpCancel, this);

		// 看视频
		this.show_video_ok.removeEventListener(egret.TouchEvent.TOUCH_END, this.OnShowVideoOk, this);
		this.show_video_cancel.removeEventListener(egret.TouchEvent.TOUCH_END, this.OnShowVideoCancel, this);
		if (this.show_video_close) {
			this.show_video_close.removeEventListener(egret.TouchEvent.TOUCH_END, this.OnShowVideoClose, this);
		}
		//this.gameTitleEquation.removeEventListener(egret.TouchEvent.TOUCH_END, this.onClickMenu, this);
		mylib.EvtBus.rmListener(EvtType.TouchStep, this.onSetpUpdate, this);
		mylib.EvtBus.rmListener(EvtType.TouchCommplete, this.GameComplete, this);
		mylib.EvtBus.rmListener(EvtType.TouchMoreStep, this.TouchMoreStep, this);
	}

	public OnShowVideoOk(){
		if (MainUIManager.getInstance().score < 200) {
			this.ShowTips("星星不足,请改用看视频")
			return
		}
		this.onShowVideo.visible = false
		this._consumeStarsAndShowResult()
	}
	public OnShowVideoCancel(){
		this.onShowVideo.visible = false
		pfCommand("pfViewAd", null, this.OnShowResult, this);
	}
	/** 右上角关闭：仅关闭弹窗，不播视频 */
	public OnShowVideoClose(): void {
		this.onShowVideo.visible = false
	}

	private _openResultChoiceDialog(): void {
		this.gp_GetRst.visible = false
		this.onShowVideo.visible = true
		const canPay = MainUIManager.getInstance().score >= 200
		if (this.video_tips) {
			this.video_tips.text = canPay
				? "选择获取答案方式：\n左侧：看视频\n右侧：立即获取结果（消耗200星星）"
				: "星星不足200，可看视频直接查看答案"
		}
		if (this.show_video_ok) {
			this.show_video_ok.label = canPay ? "立即获取结果" : "星星不足"
			this.show_video_ok.$setTouchEnabled(canPay)
		}
		if (this.show_video_cancel) {
			this.show_video_cancel.label = "看视频"
		}
	}

	private _showResultOnly(): void {
		this.bClickTip = true
		this.gp_GetRst.visible = false
		this.onShowVideo.visible = false
		if (this._map && this._map.CloseHighlight) this._map.CloseHighlight()
		this._map.ShowTipResult()
		this.gameMenue.visible = false
		this.btn_tip_close.visible = true
	}

	private _consumeStarsAndShowResult(): void {
		MainUIManager.getInstance().score -= 200
		MainUIManager.getInstance().saveData()
		this.score_num.text = MainUIManager.getInstance().score.toString()
		this._showResultOnly()
	}

	private _playWinBgm(): void {
		if (this._winSoundPlayed) return
		this._winSoundPlayed = true
		mylib.GmGlobal.sound.playSoundEffect(GameMath.WIN_BGM_ID)
	}

	private _stopWinBgm(): void {
		this._winSoundPlayed = false
	}

	private buildRuntimeStatsText(best: number): string {
		if (best > 0) return "最高用时 " + best.toFixed(2) + "s"
		return "暂无用时记录"
	}

	private syncRuntimeStats(text: string, visible: boolean): void {
		if (!this.runtimeStats) return
		const show = visible && text !== "暂无用时记录"
		this.runtimeStats.visible = show
		if (show) this.runtimeStats.text = text
	}
	public showAt(p: egret.DisplayObjectContainer): void {
		super.showAt(p);
		this.validateNow();
		if (this._map != null && MyConst.MathMapData[this.curLv].mapType != 999) { // 
			this._map.UpDateDisplaytagNum()
		}
		//mylib.GmGlobal.page.setPage({page:"help"}, this.jumpPage, this);
	}

	private jumpPage(view) {
		this.showUIRight(view);
	}

	private onClickNext(e) {
		this._stopWinBgm()
		egret.Tween.removeAllTweens()
		this.popallitem()
	}
	private GameComplete(e) {
		var bWin = e.data.bWin
		if (bWin) {
				const elapsed = Math.max(0.01, (Date.now() - this._levelStartAt) / 1000)
				const mgrWin = MainUIManager.getInstance()
				const scoreBeforeWin = mgrWin.score
				let bGetAward = false
				mgrWin.recordMathLevelTime(this.curLv + 1, elapsed)
				// 每日挑战数字关：单关胜利不推进 guanqia1、不加星（含 +5 首通）
				if (mgrWin.bHelp == false && !(mgrWin.isDailyActive && mgrWin.isDailyActive())) {
					this.curLv++

					if (mgrWin.guanqia1 < this.curLv + 1) {
						mgrWin.guanqia1 = this.curLv + 1
						mgrWin.score += 5
						mgrWin.saveData()
						bGetAward = true
					}

					// 挑战成功 弹出 插屏广告
					// 小于15关 不弹
					// if (this.curLv > 30){
					// 	pfCommand("showRectAd", null, null, this);
					// }
			
				}

				const starsEarned = Math.max(0, mgrWin.score - scoreBeforeWin)
				this.OnGameEnd(bGetAward, starsEarned, scoreBeforeWin)
				// 每日挑战：通关后推进 + 引导进入下一关/领奖
				const mgr: any = MainUIManager.getInstance() as any;
				if (MainUIManager.getInstance().bHelp == false && mgr.isDailyActive && mgr.isDailyActive()) {
					mgr.markDailyWinAndAdvance();
					const nextTask = mgr.getDailyCurrentTask ? mgr.getDailyCurrentTask() : null;
					if (mgr.isDailyActive && mgr.isDailyActive() && nextTask) {
						AlertBox.alert("本关已完成，继续下一关！", () => {
							MainUIManager.getInstance().special = nextTask.mode;
							if (nextTask.mode == 1) {
								this.showUILeft(new GameMath(nextTask.level - 1));
								return;
							}
							MainUIManager.getInstance().selectId = nextTask.level;
							const idx = nextTask.level - 1;
							const mapType = MyConst.MapData[idx].mapType;
							if (mapType == 999) {
								this.showUILeft(new GameView());
							} else {
								this.showUILeft(new Mission(idx));
							}
						}, this, "");
					} else {
						AlertBox.alert("今日挑战已完成，回主界面领取奖励！", () => {
							this.showUIRight(new MainUIView());
						}, this, "");
					}
				}
		} else {
			const mt = MyConst.MathMapData[this.curLv].mapType
			const tip = mt == 999
				? "挑战失败！等式未成立或无法识别数字。"
				: "挑战失败！未达到图形关卡要求。"
			this.ShowTips(tip)
			mylib.GmGlobal.sound.playSoundEffect("sound/snd_07.mp3");
		}
	}

	/** 与 GameView 一致的地图适配计算（数字玩法同样需要边距保护） */
	private calcMapFit(): { scale: number, x: number, y: number } {
		const stage = egret.MainContext.instance.stage
		const stageW = (stage && stage.stageWidth)  ? stage.stageWidth  : GameDesign.CONTENT_WIDTH
		const stageH = (stage && stage.stageHeight) ? stage.stageHeight : GameDesign.CONTENT_HEIGHT
		const DESIGN_W = stageW
		const DESIGN_H = 800
		const UI_TOP    = 177
		const UI_BOTTOM = 150
		const availH    = stageH - UI_TOP - UI_BOTTOM
		const H_MARGIN  = 48
		const V_MARGIN  = 40
		const scaleW = (DESIGN_W - H_MARGIN) / DESIGN_W
		const scaleH = Math.min(1.0, (availH - V_MARGIN) / DESIGN_H)
		const scale  = Math.min(scaleW, scaleH)
		const x = (DESIGN_W - DESIGN_W * scale) / 2
		return { scale, x, y: 0 }
	}

	/**
	 * 等式数字玩法专用排版：
	 * - 允许轻微放大，让数字更饱满
	 * - 在 gameGroup 可用高度内偏上居中，视觉上更贴近题面区域
	 */
	private calcEquationMapFit(): { scale: number, x: number, y: number } {
		const stage = egret.MainContext.instance.stage
		const stageW = (stage && stage.stageWidth) ? stage.stageWidth : GameDesign.CONTENT_WIDTH
		const stageH = (stage && stage.stageHeight) ? stage.stageHeight : GameDesign.CONTENT_HEIGHT
		const DESIGN_W = GameDesign.CONTENT_WIDTH
		const DESIGN_H = 800
		const UI_TOP = 177
		const UI_BOTTOM = 150
		const availH = stageH - UI_TOP - UI_BOTTOM
		const targetScale = 1.04
		const scaleW = (stageW + 20) / DESIGN_W
		const scaleH = availH / DESIGN_H
		const scale = Math.min(targetScale, scaleW, scaleH)
		const x = Math.round((stageW - DESIGN_W * scale) / 2)
		const y = Math.round(Math.max(0, (availH - DESIGN_H * scale) / 2 - 24))
		return { scale, x, y }
	}

	private onClickRetry() { // 重试
		this._stopWinBgm()
		this.gp_tip.visible = false
		if (this.btn_next.visible == true) {
			const mgrR = MainUIManager.getInstance()
			if (!(mgrR.isDailyActive && mgrR.isDailyActive())) {
				this.curLv--
			}
		}
		this.bRetry = true
		egret.Tween.removeAllTweens();		// 清除缓动画
		this.popallitem()
	}

	private onClickBack() {
		mylib.GmGlobal.sound.playSoundEffect("sound/snd_02.mp3");
		this._map.BackStep()
	}
	public OnShowResult(ok): void {
		if (ok == 1) this._showResultOnly()
	}

	private onClickRemind() {
		if (this.bClickTip) {
			this.ShowTips("答案已显示")
			return
		}
		this._openResultChoiceDialog()
	}

	private onClickTipClose() {
		this.gameMenue.visible = true
		this.btn_tip_close.visible = false
		if (this._map) {
			if (this._map.CloseHighlight) this._map.CloseHighlight()
			this._map.CloseTipResult()
		}
	}
	private onSetpUpdate(e) { // 更新步数
		var tagNum = e.data.tagNum
		if (tagNum != -1) { // 更新tagNum			
			this.txt_target.text = tagNum.toString() + " / " + MyConst.MathMapData[this.curLv].rule[3].toString()
		}

		this.step = e.data.step
		this.back_step = e.data.mapStep
		this.txt_huochai.text = this.step.toString() + " / " + this.constStep.toString()
		this.txt_huochai1.text = this.step.toString() + " / " + this.constStep.toString()
		if (this.back_step > 1) {
			this.btn_back_step.$setTouchEnabled(true)
			var img_path = RES.getRes(("huochai_json.ingame_bt_back"))
			this.btn_back_step.$setTexture(img_path)
		} else {
			this.btn_back_step.$setTouchEnabled(false)
			var img_path = RES.getRes(("huochai_json.ingame_bt_back1"))
			this.btn_back_step.$setTexture(img_path)
		}
	}
	private OnGameEnd(bGetAward: boolean, starsEarned: number, scoreBeforeWin: number) {
		const flyN = starsEarned > 0 ? Math.min(starsEarned, 15) : 0
		if (flyN > 0) {
			this.score_num.text = String(scoreBeforeWin)
		}
		var img_path = RES.getRes(("huochai_json.ingame_bt_back1"))
		this.btn_back_step.$setTexture(img_path)
		this.btn_remind.visible = false
		this.completeTxt.visible = true

		this.btn_help.visible = false
		this.btn_share.visible = true

		this.btn_next.visible = true
		if (MainUIManager.getInstance().bHelp == true) {
			this.btn_next.visible = false
		}
		this.gameEnd.visible = true
		this.first_tongguan.visible = false
		//this.tongguanZs.visible = false
		this.img_win.y = -500
		this.img_win.visible = true
		var tw = egret.Tween.get(this.img_win, { loop: false })
		tw.wait(1).to({ y: 500 }, 1600).to({ visible: false })
		this.end_beautiful.alpha = 0

		egret.Tween.get(this.end_beautiful, { loop: false }).wait(600).to({ alpha: 1 }, 500).wait(1000).to({ alpha: 0 })
		const mgrEnd = MainUIManager.getInstance()
		const flyStartDelayMs = 780
		const scoreRollAfterFlyStartMs = flyStartDelayMs + 100
		if (flyN > 0) {
			egret.Tween.get(this, { loop: false }).wait(flyStartDelayMs).call(() => this._playVictoryStarFly(flyN), this)
		}
		const flyDoneMs = flyN > 0 ? flyStartDelayMs + (flyN - 1) * 95 + 540 : 0
		if (bGetAward && mgrEnd.bHelp == false) {
			this.first_tongguan.visible = true
			const waitScoreMs = Math.max(2100, flyDoneMs + 120)
			if (flyN > 0) {
				egret.Tween.get(this, { loop: false }).wait(scoreRollAfterFlyStartMs).call(() => {
					this._rollScoreNumFromTo(scoreBeforeWin, MainUIManager.getInstance().score)
				}, this)
				egret.Tween.get(this, { loop: false }).wait(waitScoreMs).call(() => {
					this.first_tongguan.visible = false
				}, this)
			} else {
				egret.Tween.get(this, { loop: false }).wait(waitScoreMs).call(this.GameUpdateStates, this)
			}
		} else if (flyN > 0 && !mgrEnd.bHelp) {
			egret.Tween.get(this, { loop: false }).wait(scoreRollAfterFlyStartMs).call(() => {
				this._rollScoreNumFromTo(scoreBeforeWin, MainUIManager.getInstance().score)
			}, this)
		}
		this._playWinBgm()
	}

	private _onScoreRollChange(): void {
		this.score_num.text = String(Math.round(this._scoreRollProxy.v))
	}

	private _rollScoreNumFromTo(fromVal: number, toVal: number): void {
		const from = Math.floor(fromVal)
		const to = Math.floor(toVal)
		const durationMs = Math.min(900, 420 + Math.abs(to - from) * 36)
		if (from === to || durationMs <= 0) {
			this.score_num.text = String(to)
			return
		}
		egret.Tween.removeTweens(this._scoreRollProxy as any)
		this._scoreRollProxy.v = from
		this.score_num.text = String(from)
		egret.Tween.get(this._scoreRollProxy, { loop: false, onChange: this._onScoreRollChange, onChangeObj: this })
			.to({ v: to }, durationMs, egret.Ease.quadOut)
			.call(() => {
				this.score_num.text = String(to)
				this._scoreRollProxy.v = to
			}, this)
	}

	private static readonly _VICTORY_STAR_FLY_POINTS: [number, number][] = [
		[360, 95],
		[130, 230],
		[590, 230],
		[240, 400],
		[480, 400],
		[360, 300],
	]

	private _cleanupVictoryStarFly(): void {
		const flies = this._victoryFlyImages
		this._victoryFlyImages = []
		for (let i = 0; i < flies.length; i++) {
			const fly = flies[i]
			if (!fly) continue
			egret.Tween.removeTweens(fly)
			if (fly.parent) fly.parent.removeChild(fly)
		}
	}

	private _playVictoryStarFly(flyCount: number): void {
		if (!this.gameEnd || !this.img_star || flyCount <= 0) return
		const tex = this.img_star.source as egret.Texture
		if (!tex) return
		this.validateNow()
		const dest = this.img_star.localToGlobal(0, 0)
		const anchors = GameMath._VICTORY_STAR_FLY_POINTS
		const duration = 520
		const stagger = 95
		for (let i = 0; i < flyCount; i++) {
			const [lx, ly] = anchors[i % anchors.length]
			const src = this.gameEnd.localToGlobal(lx, ly)
			const fly = new eui.Image(tex)
			fly.width = this.img_star.width
			fly.height = this.img_star.height
			fly.anchorOffsetX = this.img_star.anchorOffsetX
			fly.anchorOffsetY = this.img_star.anchorOffsetY
			fly.x = src.x
			fly.y = src.y
			fly.scaleX = fly.scaleY = 1.2
			this.addChild(fly)
			this._victoryFlyImages.push(fly)
			egret.Tween.removeTweens(fly)
			egret.Tween.get(fly).wait(i * stagger)
				.to({ x: dest.x, y: dest.y, scaleX: 0.9, scaleY: 0.9 }, duration, egret.Ease.cubicInOut)
				.call(() => {
					const arr = this._victoryFlyImages
					const ix = arr.indexOf(fly)
					if (ix >= 0) arr.splice(ix, 1)
					if (fly.parent) fly.parent.removeChild(fly)
				}, this)
		}
	}

	public GameUpdateStates() {
		this.first_tongguan.visible = false
		const target = MainUIManager.getInstance().score
		const parsed = parseInt(this.score_num.text, 10)
		const fromVal = isNaN(parsed) ? target : parsed
		this._rollScoreNumFromTo(fromVal, target)
	}
	public ShowTips(str: string) { // 提示文本
		egret.Tween.removeTweens(this.gp_tip)
		this.gp_tip.visible = true
		this.gp_tip.alpha = 0
		this.txt_tip.text = str
		var tw = egret.Tween.get(this.gp_tip, { loop: false })
		tw.wait(1).to({ alpha: 1 }, 300).wait(900).to({ alpha: 0 }, 300).to({ visible: false })
		//tw.wait(1).to({y: 200 }, 1500).to({visible:  false}).to ({y: - 103})
	}

	public onClickGoHome() {
		this._stopWinBgm()
		this._cleanupVictoryStarFly()
		this._map.removeAllImgEvent()
		this.gameGroup.removeChild(this._map)
		egret.Tween.removeAllTweens();
		//this.gameGroup.removeChildren()
		this.showUIRight(new MainUIView());

	}
	private onClickGetRstClose() {
		this.gp_GetRst.visible = false
		this._openResultChoiceDialog()
	}
	private onClickGetRstOk() {
		if (MainUIManager.getInstance().score < 200) {
			this.ShowTips("星星不足,请改用看视频")
			this._openResultChoiceDialog()
			return
		}
		this._consumeStarsAndShowResult()
	}

	private showSocreChange(score: number) {
		var tw = egret.Tween.get(this.score_num, { loop: false })
		for (var i = 0; i < 10; i++) {
			tw.wait(1 + i * 300).to({ text: (score - (i + 1) * 20).toString })
		}
	}

	private TouchMoreStep() {
		this.ShowTips("挑战失败，重新挑战吧！")
	}
	private onClickMenu() {// 点击菜单
		egret.Tween.removeTweens(this.gameTitleRule)
		this.gameTitleRule.visible = true
		this.gameTitleRule.y = 70
		var tw = egret.Tween.get(this.gameTitleRule, { loop: false })
		tw.wait(1).to({ y: 175 }, 500).wait(3500).to({ y: 70 }, 500).to({ visible: false })
	}

	private onClickHelp() {
		var strTitle = MainUIManager.getInstance().getShareTitle()
		var mapType = MyConst.MathMapData[this.curLv].mapType
		if (mapType != 999) {
			strTitle = "求助...第 " + (this.curLv + 1).toString() + " 关" + this.txt_target_rule.text
		}
		const sc = GameDesign.shareCropParams();
		mylib.GmGlobal.cutImg("imgShare", {
			level: this.curLv,
			type:1,
			page: "help", title: strTitle, x: sc.x, y: sc.y, width: sc.width, height: sc.height, destWidth: sc.destWidth, destHeight: sc.destHeight
		}, null, null);

	}
	private onClickShare() {
		var title = "第" + (this.curLv + 1).toString() + "关答案"
		const sc2 = GameDesign.shareCropParams();
		mylib.GmGlobal.cutImg("imgShare", { page: "", title: title, x: sc2.x, y: sc2.y, width: sc2.width, height: sc2.height, destWidth: sc2.destWidth, destHeight: sc2.destHeight }, null, null);
	}

	private onClickHelpOk() {
		this.onhelp.visible = false
	}
	private onClickHelpCancel() {
		MainUIManager.getInstance().bHelp = false
		this.onhelp.visible = false
		this.onClickGoHome()
	}
	// 加载小星星旋转动画：三段加速旋转，loop 时自动从 rotation=0 重播
	public LoadStartBlinkAction(): void {
		this.img_star.rotation = 0
		const tw = egret.Tween.get(this.img_star, { loop: true })
		tw.wait(400)
			.to({ rotation: 360 },  2800)
			.wait(300)
			.to({ rotation: 720 },  1800)
			.wait(200)
			.to({ rotation: 1080 }, 900)
			.wait(600)
	}
}

