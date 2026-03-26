class GameView extends mylib.UIBase {

	private score_num: eui.Label
	private guankaLv: eui.Label
	private runtimeStats: eui.Label
	private reverseDiffGroup: eui.Group
	private reverseDiffStar1: eui.Image
	private reverseDiffStar2: eui.Image
	private reverseDiffStar3: eui.Image
	private reverseDiffStar4: eui.Image
	private reverseDiffStar5: eui.Image
	private gameGroup: eui.Group
	private readonly _inactiveStarFilter: egret.ColorMatrixFilter = new egret.ColorMatrixFilter([
		0.30, 0.59, 0.11, 0.00, -12,
		0.30, 0.59, 0.11, 0.00, -12,
		0.30, 0.59, 0.11, 0.00, -12,
		0.00, 0.00, 0.00, 1.00, 0
	])

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
	private video_tips: eui.Label

	private bRetry: boolean
	private txt_timer: eui.Label
	private gp_rule_debug: eui.Group
	private txt_rule_debug: eui.Label
	private _timerToken: number = 0
	private _timerStart: number = 0
	private _ruleDebugToken: number = 0
	private _levelStartAt: number = 0
	private _winSoundPlayed: boolean = false
	private static readonly TIMED_RANK_KEY: string = "huochaiTimedRankV2"
	private static readonly WIN_BGM_ID: string = "sound/snd_08.mp3"
	public constructor() {
		super("GameUISkin");
		this.curLv = MainUIManager.getInstance().selectId - 1
		this.bRetry = false
		this.bClickTip = false
		this.popallitem()
	}

	private popallitem() {
		this._stopWinBgm()
		this._winSoundPlayed = false
		this._levelStartAt = Date.now()
		this.step = 0 // 初始化 步数
		this.bClickTip = false
		this.bLightHintShown = false
		if (this.curLv >= MyConst.MapData.length) {
			this.ShowTips("您已经达到最大关卡配置，请等待程序更新！")
			return
		}
		this.constStep = MyConst.MapData[this.curLv].rule[1]
		this.gameType = MyConst.MapData[this.curLv].rule[0]	// 类型： 1 add 2 remove  3 delete 4 chellenge	

		this.btn_back_step.$setTouchEnabled(false) // 设置按钮灰色
		this.gameEnd.visible = false
		var img_path = RES.getRes(("huochai_json.ingame_bt_back1"))
		this.btn_back_step.$setTexture(img_path)
		this.completeTxt.text = "完成挑战"
		this.completeTxt.visible = false   // 完成挑战

		this.btn_next.visible = false
		const mainMgr = MainUIManager.getInstance()
		const dailyActive = mainMgr.isDailyActive && mainMgr.isDailyActive()
		const constraint = mainMgr.getDailyConstraint ? mainMgr.getDailyConstraint() : 0
		this.btn_remind.visible = !(dailyActive && constraint == 3)
		this.btn_tip_close.visible = false
		this.score_num.text = mainMgr.score.toString()
		this.syncReverseDifficultyStars(0, false)
		this.syncRuntimeStats("", false)
		if (mainMgr.bEndlessMode) {
			this.guankaLv.text = "连续闯关 第" + (this.curLv + 1) + "关"
			this.syncRuntimeStats(this.buildRuntimeStatsText(mainMgr.getEndlessLevelBestTime(this.curLv + 1), mainMgr.getEndlessLevelAvgTime(this.curLv + 1)), true)
		} else if (mainMgr.bReverseMode) {
			const reverseId = mainMgr.reverseChallengeLevelId > 0 ? mainMgr.reverseChallengeLevelId : mainMgr.getReverseCurrentLevel()
			this.guankaLv.text = "记忆挑战 第" + reverseId + "关"
			this.syncReverseDifficultyStars(mainMgr.getReverseDifficultyValue(reverseId), true)
		} else if (mainMgr.bTimedChallenge) {
			const timedId = mainMgr.timedChallengeLevelId > 0 ? mainMgr.timedChallengeLevelId : (this.curLv + 1)
			const mt = MyConst.MapData[this.curLv].mapType
			const mode = mt == 999 ? "等式玩法" : "经典玩法"
			const tag = MyConst.getMapTypeTag ? MyConst.getMapTypeTag(mt) : ("mapType=" + mt)
			this.guankaLv.text = "限时挑战 T-" + timedId + " · " + mode + " · " + tag
		} else {
			this.guankaLv.text = "关卡:" + (this.curLv + 1).toString()
		}
		this.onhelp.visible = false
		this.onShowVideo.visible = false

		if (this.txt_timer) {
			this.txt_timer.visible = mainMgr.bTimedChallenge;
			if (mainMgr.bTimedChallenge) {
				this._timerStart = Date.now();
				mainMgr.timedChallengeStartTime = this._timerStart;
				this._startTimer();
			} else {
				this._stopTimer();
			}
		}

		if (MainUIManager.getInstance().bHelp && this.bRetry == false) {
			//提示是否帮助挑战
			//AlertBox.alert("是否帮助好友完成挑战",this.CompleteGame,this,"确定")
			this.btn_remind.visible = false
			this.onhelp.visible = true
			this.onhelp_rule.text = "是否帮助好友挑战第 " + (this.curLv + 1).toString() + "关"
		}

		this.gameGroup.removeChildren()
		this._map = null
		var mapType = MyConst.MapData[this.curLv].mapType
		const fit = this.calcMapFit()
		if (mapType != 999) {
			this._map = new MapGroup(this.curLv, mapType, MainUIManager.getInstance().bReverseMode)
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
		const r = MyConst.MapData[this.curLv].rule
		var xz = r[2]
		var num = r[3]
		var img_path_triangle = RES.getRes(("huochai_json.ingame_mission_triangle"))
		var img_path_square = RES.getRes(("huochai_json.ingame_mission_square"))
		if (mainMgr.bReverseMode) {
			strRule = "用" + this.constStep.toString() + "步内\n还原到初始状态"
			this.target_rect.$setTexture(img_path_square)
		} else {
			strRule += this.constStep.toString() + "根火柴\n变成"
			if (r.length >= 6 && r[4] > 0 && r[5] > 0) {
				strRule += num.toString() + "个" + (xz == 1 ? "正方形" : "正三角形") + " + " + r[5].toString() + "个" + (r[4] == 1 ? "正方形" : "正三角形")
				this.target_rect.$setTexture(img_path_square)
			} else {
				strRule += num.toString() + "个"
				if (xz == 1) {
					strRule += "正方形"
					this.target_rect.$setTexture(img_path_square)
				} else if (xz == 2) {
					strRule += "正三角形"
					this.target_rect.$setTexture(img_path_triangle)
				}
			}
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
		this.btn_remind.visible = !(dailyActive && constraint == 3)

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

	private _openResultChoiceDialog(): void {
		this.gp_GetRst.visible = false
		this.onShowVideo.visible = true
		const canPay = MainUIManager.getInstance().score >= 200
		if (this.video_tips) {
			this.video_tips.text = canPay
				? "选择获取答案方式：\n右侧消耗200星星 / 左侧看视频"
				: "星星不足200，可看视频直接查看答案"
		}
		if (this.show_video_ok) {
			this.show_video_ok.label = canPay ? "200星星" : "星星不足"
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
		mylib.GmGlobal.sound.playSoundEffect(GameView.WIN_BGM_ID)
	}

	private _stopWinBgm(): void {
		this._winSoundPlayed = false
	}

	private buildRuntimeStatsText(best: number, avg: number): string {
		if (best > 0 && avg > 0) return "最高用时 " + best.toFixed(2) + "s    平均用时 " + avg.toFixed(2) + "s"
		if (best > 0) return "最高用时 " + best.toFixed(2) + "s"
		return "暂无用时记录"
	}

	private syncRuntimeStats(text: string, visible: boolean): void {
		if (!this.runtimeStats) return
		this.runtimeStats.visible = visible
		if (visible) this.runtimeStats.text = text
	}

	private _timedBonus(sec: number): number {
		if (sec <= 20) return 8
		if (sec <= 30) return 5
		if (sec <= 45) return 3
		if (sec <= 60) return 2
		return 0
	}

	private _loadTimedRanks(): any[] {
		const raw = egret.localStorage.getItem(GameView.TIMED_RANK_KEY)
		if (!raw) return []
		try {
			const arr = JSON.parse(raw)
			return Array.isArray(arr) ? arr : []
		} catch (e) {
			return []
		}
	}

	private _saveTimedRanks(ranks: any[]): void {
		egret.localStorage.setItem(GameView.TIMED_RANK_KEY, JSON.stringify(ranks || []))
	}

	private _formatTimedMapMode(mapType: number): string {
		const mode = mapType == 999 ? "等式" : "经典"
		const tag = MyConst.getMapTypeTag ? MyConst.getMapTypeTag(mapType) : ("mapType=" + mapType)
		return mode + "/" + tag
	}

	private _recordTimedResult(sec: number): { rank: number, list: any[], bonus: number, qualified: boolean } {
		const mapType = MyConst.MapData[this.curLv].mapType
		const timedId = MainUIManager.getInstance().timedChallengeLevelId > 0 ? MainUIManager.getInstance().timedChallengeLevelId : (this.curLv + 1)
		const qualified = sec <= 60
		const bonus = qualified ? this._timedBonus(sec) : 0
		const list = this._loadTimedRanks()
		if (!qualified) {
			return { rank: -1, list, bonus, qualified }
		}
		list.push({
			sec: sec,
			timedId: timedId,
			level: this.curLv + 1,
			mapType: mapType,
			ts: Date.now()
		})
		list.sort((a, b) => {
			if (a.sec != b.sec) return a.sec - b.sec
			return (a.ts || 0) - (b.ts || 0)
		})
		const top = list.slice(0, 5)
		this._saveTimedRanks(top)
		let rank = -1
		for (let i = 0; i < top.length; i++) {
			if (top[i].sec == sec && top[i].timedId == timedId && top[i].level == (this.curLv + 1) && top[i].mapType == mapType) {
				rank = i + 1
				break
			}
		}
		return { rank, list: top, bonus, qualified }
	}

	private _buildTimedResultText(sec: number, record: { rank: number, list: any[], bonus: number, qualified: boolean }): string {
		const mapType = MyConst.MapData[this.curLv].mapType
		const timedId = MainUIManager.getInstance().timedChallengeLevelId > 0 ? MainUIManager.getInstance().timedChallengeLevelId : (this.curLv + 1)
		const lines: string[] = []
		lines.push("【限时挑战排行榜】")
		lines.push("规则：60秒内完成可上榜，按用时升序，仅保留前5名")
		lines.push("奖励：<=20秒+8星，<=30秒+5星，<=45秒+3星，<=60秒+2星")
		lines.push("")
		lines.push("本次：T-" + timedId + "｜" + this._formatTimedMapMode(mapType) + "｜" + (record.qualified ? (sec + "秒") : "超时"))
		if (record.rank > 0) lines.push("本次排名：第" + record.rank + "名")
		lines.push("")
		lines.push("Top5：")
		if (!record.list || record.list.length <= 0) {
			lines.push("暂无记录")
		} else {
			for (let i = 0; i < record.list.length; i++) {
				const r = record.list[i]
				lines.push((i + 1) + ". " + r.sec + "秒｜T-" + r.timedId + "｜" + this._formatTimedMapMode(r.mapType))
			}
		}
		if (record.bonus > 0) lines.push("\n获得" + record.bonus + "星星奖励！")
		else if (!record.qualified) lines.push("\n本次超时，未进入排行榜")
		return lines.join("\n")
	}

	private _showTimedChallengeResult(sec: number): void {
		const mgr = MainUIManager.getInstance()
		const record = this._recordTimedResult(sec)
		if (record.bonus > 0) {
			mgr.score += record.bonus
			mgr.saveData()
		}
		mgr.bTimedChallenge = false
		mgr.timedChallengeLevelId = 0
		const rankText = this._buildTimedResultText(sec, record)
		AlertBox.alert(rankText, () => this.onClickGoHome(), this, "回主界面")
	}
	public showAt(p: egret.DisplayObjectContainer): void {
		super.showAt(p);
		this.validateNow();
		if (this._map != null && MyConst.MapData[this.curLv].mapType != 999) { // 
			this._map.UpDateDisplaytagNum()
		}
		this.refreshRuleDebugPanel()
		
		//mylib.GmGlobal.page.setPage({page:"help"}, this.jumpPage, this);
	}

	private jumpPage(view) {
		this.showUIRight(view);
	}

	/**
	 * 根据当前 stageHeight 计算地图的适配比例与居中位置。
	 *
	 * 设计画布: 720×1280，GameUISkin.exml 中 gameGroup 上方保留 177px、下方保留 150px。
	 * 地图皮肤(MapSkin*)固定设计尺寸 720×800。
	 *
	 * 适配策略：
	 * - 水平：留 48px 总边距（左右各 24px），确保边缘火柴在刘海/圆角屏上始终可点到。
	 * - 垂直：若可用高度 < 800px（短屏/折叠屏），等比缩小；留 40px 底部余量防止遮挡。
	 * - 最终取 scaleW、scaleH 中较小值，兼顾宽屏与短屏场景。
	 */
	private calcMapFit(): { scale: number, x: number, y: number } {
		const stage = egret.MainContext.instance.stage
		const stageW = (stage && stage.stageWidth)  ? stage.stageWidth  : 720
		const stageH = (stage && stage.stageHeight) ? stage.stageHeight : 1280

		// 实际设计宽度（Egret fixedWidth 模式下 stageWidth 即设计宽 720）
		const DESIGN_W = stageW
		const DESIGN_H = 800  // 地图皮肤高度

		// 上方 UI 区域高度 + 下方菜单高度（与 GameUISkin.exml 保持一致）
		const UI_TOP    = 177
		const UI_BOTTOM = 150
		const availH    = stageH - UI_TOP - UI_BOTTOM

		// 水平留白：左右各 24px，防止边缘火柴因设备安全区不可点
		const H_MARGIN = 48
		// 垂直留白：顶/底各 20px
		const V_MARGIN = 40

		const scaleW = (DESIGN_W - H_MARGIN) / DESIGN_W            // ≈ 0.933
		const scaleH = Math.min(1.0, (availH - V_MARGIN) / DESIGN_H)
		const scale  = Math.min(scaleW, scaleH)

		// 水平居中，垂直顶对齐
		const x = (DESIGN_W - DESIGN_W * scale) / 2
		const y = 0
		return { scale, x, y }
	}

	private onClickNext(e) {
		this._stopWinBgm()
		const mgr = MainUIManager.getInstance();
		if (mgr.bReverseMode) {
			const nextSelectId = mgr.getReverseActualSelectId(mgr.getReverseCurrentLevel())
			mgr.reverseChallengeLevelId = mgr.getReverseCurrentLevel()
			mgr.selectId = nextSelectId
			this.curLv = nextSelectId - 1
			egret.Tween.removeAllTweens()
			this.popallitem()
			return
		}
		if (mgr.bEndlessMode) {
			mgr.selectId = mgr.endlessLevel;
			if (mgr.endlessLevel > (MyConst.MapData ? MyConst.MapData.length : 1)) {
				const passed = mgr.endlessLevel - 1;
				const oldHigh = mgr.getEndlessHighScore();
				if (passed > oldHigh) mgr.setEndlessHighScore(passed);
				const stars = passed * 5;
				mgr.score += stars;
				mgr.saveData();
				mgr.bEndlessMode = false;
				AlertBox.alert("闯了" + passed + "关！获得" + stars + "星星\n最高记录：" + mgr.getEndlessHighScore() + "关", () => this.onClickGoHome(), this, "回主界面");
				return;
			}
		}
		egret.Tween.removeAllTweens()
		this.popallitem()
	}
	private GameComplete(e) {
		var bWin = e.data.bWin
		const completedLevel = this.curLv + 1
		if (bWin) {
				const mgrRef = MainUIManager.getInstance();
				if (mgrRef.bReverseMode) {
					const ret = mgrRef.onReverseChallengeWin()
					this.score_num.text = mgrRef.score.toString()
					this.completeTxt.text = "还原成功"
					this.OnGameEnd(false)
					let msg = ret.firstPass ? "首次通关 +5星" : "重复通关 +1星"
					if (ret.comboBonus > 0) msg += "，3连胜额外 +" + ret.comboBonus + "星"
					if (ret.finishedAll) msg += "，已通关全部记忆关卡"
					this.ShowTips(msg)
					return
				}
				if (MainUIManager.getInstance().bHelp == false) {
					this.curLv++
					var bGetAward = false

					if (MainUIManager.getInstance().guanqia < this.curLv + 1) {
						MainUIManager.getInstance().guanqia = this.curLv + 1
						MainUIManager.getInstance().score += 10
						MainUIManager.getInstance().saveData()
						bGetAward = true
					}

					// 挑战成功 弹出 插屏广告
					// 小于15关 不弹
					// if (this.curLv > 10){
					// 	pfCommand("showRectAd", null, null, this);
					// }
			
				}

				// 限时挑战：停止计时，按时间发奖励
				if (mgrRef.bTimedChallenge) {
					this._stopTimer();
					const elapsed = Math.max(1, Math.ceil((Date.now() - mgrRef.timedChallengeStartTime) / 1000));
					this._showTimedChallengeResult(elapsed);
					return;
				}

				// 连续闯关：推进关卡，每关+5星星
				if (mgrRef.bEndlessMode) {
					const elapsed = Math.max(0.01, (Date.now() - this._levelStartAt) / 1000)
					mgrRef.recordEndlessLevelTime(completedLevel, elapsed)
					mgrRef.endlessLevel = this.curLv + 1;
					mgrRef.score += 5;
					mgrRef.saveData();
					const high = mgrRef.getEndlessHighScore();
					if (mgrRef.endlessLevel - 1 > high) mgrRef.setEndlessHighScore(mgrRef.endlessLevel - 1);
				}

				this.OnGameEnd(bGetAward)
				// 每日挑战：通关后推进 + 引导进入下一关/领奖
				const mgr: any = MainUIManager.getInstance() as any;
				if (MainUIManager.getInstance().bHelp == false && mgr.isDailyActive && mgr.isDailyActive()) {
					mgr.markDailyWinAndAdvance();
					const nextTask = mgr.getDailyCurrentTask ? mgr.getDailyCurrentTask() : null;
					if (mgr.isDailyActive && mgr.isDailyActive() && nextTask) {
						AlertBox.alert("本关已完成，继续下一关！", () => {
							// mode: 0 拼图 / 1 数字
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
			this._onFail("挑战失败！有尚未形成的图形。");
			mylib.GmGlobal.sound.playSoundEffect("sound/snd_07.mp3");
		}
	}

	private _onFail(msg: string): void {
		const mgr = MainUIManager.getInstance();
		if (mgr.bReverseMode) {
			mgr.onReverseChallengeFail()
			this.ShowTips("记忆挑战失败，未扣星")
			return
		}
		if (mgr.bEndlessMode) {
			const passed = mgr.endlessLevel - 1;
			const oldHigh = mgr.getEndlessHighScore();
			if (passed > oldHigh) mgr.setEndlessHighScore(passed);
			const stars = Math.max(0, passed) * 5;
			mgr.bEndlessMode = false;
			AlertBox.alert("闯了" + passed + "关！获得" + stars + "星星\n最高记录：" + mgr.getEndlessHighScore() + "关", () => this.onClickGoHome(), this, "回主界面");
			return;
		}
		this.ShowTips(msg);
	}

	private _startTimer(): void {
		this._stopTimer();
		const tick = () => {
			const elapsed = (Date.now() - this._timerStart) / 1000;
			const left = Math.max(0, Math.ceil(60 - elapsed));
			if (this.txt_timer) this.txt_timer.text = left + "s";
			if (left <= 0) {
				this._stopTimer();
				this._showTimedChallengeResult(61);
			}
		};
		tick();
		this._timerToken = egret.setInterval(tick, this, 1000);
	}

	private syncReverseDifficultyStars(active: number, visible: boolean): void {
		if (!this.reverseDiffGroup) return
		this.reverseDiffGroup.visible = visible
		for (let i = 1; i <= 5; i++) {
			const star = this["reverseDiffStar" + i] as eui.Image
			if (!star) continue
			const lit = i <= active
			star.alpha = lit ? 1 : 0.7
			star.filters = lit ? null : [this._inactiveStarFilter]
		}
	}

	private _stopTimer(): void {
		if (this._timerToken) {
			egret.clearInterval(this._timerToken);
			this._timerToken = 0;
		}
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
		lines.push("关卡=" + (this.curLv + 1) + "  步数=" + this.step + "/" + this.constStep)
		if (this._map && this._map.GetRuleDebugText) {
			lines.push(this._map.GetRuleDebugText())
		} else {
			lines.push("地图未初始化")
		}
		this.txt_rule_debug.text = lines.join("\n")
	}

	private onClickRetry() { // 重试
		this._stopWinBgm()
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
		if (ok == 1) this._showResultOnly()
	}

	private onClickRemind() {
		if (this.bClickTip) {
			this.ShowTips("答案已显示")
			return
		}
		// 直接二选一弹窗（200星星 / 看视频）
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
			this.txt_target.text = tagNum.toString() + " / " + MyConst.MapData[this.curLv].rule[3].toString()
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
		this.btn_back_step.$setTexture(RES.getRes("huochai_json.ingame_bt_back1"))
		this.btn_remind.visible = false
		this.completeTxt.visible = true
		this.btn_help.visible = false
		this.btn_share.visible = true
		this.btn_next.visible = !MainUIManager.getInstance().bHelp
		this.gameEnd.visible = true
		this.first_tongguan.visible = false

		// 奖章从顶部落下
		this.img_win.y = -500
		this.img_win.visible = true
		egret.Tween.get(this.img_win, { loop: false })
			.wait(1).to({ y: 480 }, 900, egret.Ease.backOut)
			.wait(800).to({ y: 550, alpha: 0 }, 400)
			.call(() => { this.img_win.visible = false; this.img_win.alpha = 1 }, this)

		// 背景光晕淡入淡出
		this.end_beautiful.alpha = 0
		egret.Tween.get(this.end_beautiful, { loop: false })
			.wait(400).to({ alpha: 1 }, 400)
			.wait(1200).to({ alpha: 0 }, 500)

		// 粒子爆发特效（延迟 200ms，让奖章先出来）
		egret.Tween.get(this, { loop: false }).wait(200).call(this._playWinParticles, this)

		if (bGetAward && !MainUIManager.getInstance().bHelp) {
			this.first_tongguan.visible = true
			egret.Tween.get(this, { loop: false }).wait(2100).call(this.GameUpdateStates)
		}
		this._playWinBgm()
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
		this._stopWinBgm()
		this._stopTimer();
		this._stopRuleDebugTicker();
		const mgr = MainUIManager.getInstance();
		mgr.bTimedChallenge = false;
		mgr.timedChallengeLevelId = 0;
		mgr.bReverseMode = false;
		mgr.reverseChallengeLevelId = 0;
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

	private TouchMoreStep() {
		this._onFail("挑战失败，重新挑战吧！");
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
		var mapType = MyConst.MapData[this.curLv].mapType
		if (mapType != 999) {
			strTitle = "求助...第 " + (this.curLv + 1).toString() + " 关" + this.txt_target_rule.text
		}
		mylib.GmGlobal.cutImg("imgShare", {
			level: this.curLv,
			type:0,
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
	// 加载小星星旋转动画：三段加速旋转（慢→中→快），loop 时自动从 rotation=0 重播
	public LoadStartBlinkAction(): void {
		this.img_star.rotation = 0
		const tw = egret.Tween.get(this.img_star, { loop: true })
		tw.wait(400)
			.to({ rotation: 360 },  2800)   // 第一圈：慢速
			.wait(300)
			.to({ rotation: 720 },  1800)   // 第二圈：中速
			.wait(200)
			.to({ rotation: 1080 }, 900)    // 第三圈：快速
			.wait(600)
	}

	/**
	 * 通关庆祝粒子特效：在地图中心爆发彩色圆点，0.8s 后自动清除。
	 * 不干扰任何游戏逻辑，仅做视觉点缀。
	 */
	private _playWinParticles(): void {
		const stage = egret.MainContext.instance.stage
		if (!stage) return
		const cx = 360
		const cy = Math.floor(stage.stageHeight / 2)
		const colors = [0xFF6B6B, 0xFFD166, 0x06D6A0, 0x118AB2, 0xFFB347, 0xC77DFF]
		const count  = 24

		for (let k = 0; k < count; k++) {
			const shape = new egret.Shape()
			const color = colors[k % colors.length]
			const r = 5 + Math.random() * 6
			shape.graphics.beginFill(color, 1)
			shape.graphics.drawCircle(0, 0, r)
			shape.graphics.endFill()
			shape.x = cx
			shape.y = cy
			shape.alpha = 1
			stage.addChild(shape)

			const angle  = (k / count) * Math.PI * 2 + (Math.random() - 0.5) * 0.4
			const dist   = 120 + Math.random() * 220
			const tx     = cx + Math.cos(angle) * dist
			const ty     = cy + Math.sin(angle) * dist
			const dur    = 650 + Math.random() * 350

			egret.Tween.get(shape, { loop: false })
				.to({ x: tx, y: ty, alpha: 0, scaleX: 0.3, scaleY: 0.3 }, dur, egret.Ease.quadOut)
				.call(() => { if (shape.parent) stage.removeChild(shape) }, this)
		}
	}
}

