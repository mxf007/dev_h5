class GameMath extends mylib.UIBase {

	private score_num: eui.Label
	private guankaLv: eui.Label
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
	private gameEnd: OneStateButton
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

	private bRetry: boolean
	private gp_rule_debug: eui.Group
	private txt_rule_debug: eui.Label
	private _ruleDebugToken: number = 0
	public constructor(curlv) {
		super("GameUISkin");
		this.curLv = curlv//MainUIManager.getInstance().selectId - 1
		this.bRetry = false
		this.bClickTip = false
		this.popallitem()
	}

	private popallitem() {
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
		const fit = this.calcMapFit()
		if (mapType != 999) {
			this._map = new MapGroup(this.curLv, mapType)
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
				this.txt_condition1.text = "增加火柴"
			} else if (this.gameType == 2) {
				img_path_add = RES.getRes("huochai_json.ingame_ui_move")
				this.txt_condition1.text = "移动火柴"
			} else if (this.gameType == 3) {
				img_path_add = RES.getRes("huochai_json.ingame_ui_delete")
				this.txt_condition1.text = "删除火柴"
			}
			this.img_target_bg1.$setTexture(img_path_add)
			this._startRuleDebugTicker()
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
		this._startRuleDebugTicker()
	}

	protected childrenCreated() {
		super.childrenCreated();
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
		//this.gameTitleEquation.removeEventListener(egret.TouchEvent.TOUCH_END, this.onClickMenu, this);
		mylib.EvtBus.rmListener(EvtType.TouchStep, this.onSetpUpdate, this);
		mylib.EvtBus.rmListener(EvtType.TouchCommplete, this.GameComplete, this);
		mylib.EvtBus.rmListener(EvtType.TouchMoreStep, this.TouchMoreStep, this);
		this._stopRuleDebugTicker();
	}

	public OnShowVideoOk(){
			pfCommand("pfViewAd", null, this.OnShowResult, this);
			this.onShowVideo.visible = false
	}
	public OnShowVideoCancel(){
		this.onShowVideo.visible = false
	}
	public showAt(p: egret.DisplayObjectContainer): void {
		super.showAt(p);
		this.validateNow();
		if (this._map != null && MyConst.MathMapData[this.curLv].mapType != 999) { // 
			this._map.UpDateDisplaytagNum()
		}
		this.refreshRuleDebugPanel()
		
		//mylib.GmGlobal.page.setPage({page:"help"}, this.jumpPage, this);
	}

	private jumpPage(view) {
		this.showUIRight(view);
	}

	private onClickNext(e) {

		egret.Tween.removeAllTweens()
		this.popallitem()
	}
	private GameComplete(e) {
		var bWin = e.data.bWin
		if (bWin) {
				if (MainUIManager.getInstance().bHelp == false) {
					this.curLv++
					var bGetAward = false

					if (MainUIManager.getInstance().guanqia1 < this.curLv + 1) {
						MainUIManager.getInstance().guanqia1 = this.curLv + 1
						MainUIManager.getInstance().score += 1
						MainUIManager.getInstance().saveData()
						bGetAward = true
					}

					// 挑战成功 弹出 插屏广告
					// 小于15关 不弹
					if (this.curLv > 30){
						pfCommand("showRectAd", null, null, this);
					}
			
				}

				this.OnGameEnd(bGetAward)
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
						}, this, "继续");
					} else {
						AlertBox.alert("今日挑战已完成，回主界面领取奖励！", () => {
							this.showUIRight(new MainUIView());
						}, this, "回主界面");
					}
				}
		} else {
			this.ShowTips("挑战失败！有尚未形成的图形。")
			mylib.GmGlobal.sound.playSoundEffect("sound/snd_07.mp3");
		}
	}

	/** 与 GameView 一致的地图适配计算（数字玩法同样需要边距保护） */
	private calcMapFit(): { scale: number, x: number, y: number } {
		const stage = egret.MainContext.instance.stage
		const stageW = (stage && stage.stageWidth)  ? stage.stageWidth  : 720
		const stageH = (stage && stage.stageHeight) ? stage.stageHeight : 1280
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

	private _startRuleDebugTicker(): void {
		this._stopRuleDebugTicker()
		this.refreshRuleDebugPanel()
		if (!MainUIManager.getInstance().isRuleDebugEnabled()) return
		this._ruleDebugToken = egret.setInterval(this.refreshRuleDebugPanel, this, 250)
	}

	private _stopRuleDebugTicker(): void {
		if (this._ruleDebugToken) {
			egret.clearInterval(this._ruleDebugToken)
			this._ruleDebugToken = 0
		}
	}

	private refreshRuleDebugPanel(): void {
		if (!this.gp_rule_debug || !this.txt_rule_debug) return
		const enabled = MainUIManager.getInstance().isRuleDebugEnabled()
		this.gp_rule_debug.visible = enabled
		if (!enabled) {
			this.txt_rule_debug.text = ""
			return
		}
		const lines: string[] = []
		lines.push("数字关卡=" + (this.curLv + 1) + "  步数=" + this.step + "/" + this.constStep)
		if (this._map && this._map.GetRuleDebugText) {
			lines.push(this._map.GetRuleDebugText())
		} else {
			lines.push("地图未初始化")
		}
		this.txt_rule_debug.text = lines.join("\n")
	}

	private onClickRetry() { // 重试
		this.gp_tip.visible = false
		if (this.btn_next.visible == true) {
			this.curLv--
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
		if (ok == 1)
		{
			this.bClickTip = true
			this.gp_GetRst.visible = false
			if (this._map && this._map.CloseHighlight) this._map.CloseHighlight()
			this._map.ShowTipResult()
			this.gameMenue.visible = false
			this.btn_tip_close.visible = true
			// 刷新显示的金币
			//this.score_num.text = MainUIManager.getInstance().score.toString()
			//this.showSocreChange(MainUIManager.getInstance().score)
			// MainUIManager.getInstance().score -= 200
			// MainUIManager.getInstance().saveData()
			// this.score_num.text = MainUIManager.getInstance().score.toString()
			//egret.Tween.get(this, { loop: false }).wait(1000).call(this.createSelWord, this,[this.sz[this._level]]); //下一题
		}
	}

	private onClickRemind() {
		if (!this.bLightHintShown) {
			this.bLightHintShown = true
			if (this._map && this._map.HighlightOperableCells) {
				this._map.HighlightOperableCells()
			}
			this.gameMenue.visible = false
			this.btn_tip_close.visible = true
			return
		}
		if (MainUIManager.getInstance().score < 200) {
			this.ShowTips("星星不足,去获得更多星星吧!")
			this.onShowVideo.visible = true
			return
		}
		this.gp_GetRst.visible = true
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
		this.refreshRuleDebugPanel()
	}
	private OnGameEnd(bGetAward: boolean) {
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
		// 通关获得 10钻石
		if (bGetAward && MainUIManager.getInstance().bHelp == false) {
			console.log("首次通关获得1钻石!")
			this.first_tongguan.visible = true
			egret.Tween.get(this, { loop: false }).wait(2100).call(this.GameUpdateStates)
		}
		mylib.GmGlobal.sound.playSoundEffect("sound/snd_08.mp3");
	}

	public GameUpdateStates() {
		this.first_tongguan.visible = false
		//this.tongguanZs.visible = false
		// 刷新钻石
		this.score_num.text = MainUIManager.getInstance().score.toString()
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
		this._stopRuleDebugTicker()
		this._map.removeAllImgEvent()
		this.gameGroup.removeChild(this._map)
		egret.Tween.removeAllTweens();
		//this.gameGroup.removeChildren()
		this.showUIRight(new MainUIView());

	}
	private onClickGetRstClose() {
		this.gp_GetRst.visible = false
	}
	private onClickGetRstOk() {
		this.bClickTip = true
		this.gp_GetRst.visible = false
		if (this._map && this._map.CloseHighlight) this._map.CloseHighlight()
		this._map.ShowTipResult()
		this.gameMenue.visible = false
		this.btn_tip_close.visible = true
		MainUIManager.getInstance().score -= 200
		MainUIManager.getInstance().saveData()
		this.score_num.text = MainUIManager.getInstance().score.toString()
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
		mylib.GmGlobal.cutImg("imgShare", {
			level: this.curLv,
			type:1,
			page: "help", title: strTitle, x: 0, y: 300, width: 720, height: 568.0, destWidth: 720, destHeight: 576
		}, null, null);

	}
	private onClickShare() {
		var title = "第" + (this.curLv + 1).toString() + "关答案"
		mylib.GmGlobal.cutImg("imgShare", { page: "", title: title, x: 0, y: 300, width: 720, height: 568.0, destWidth: 720, destHeight: 576 }, null, null);
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

