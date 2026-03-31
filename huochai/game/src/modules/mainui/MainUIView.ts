

class MainUIView extends mylib.UIBase {
	private btn_start: OneStateButton;

	///// 列表
	protected scoll: eui.Scroller;
	protected itemList: eui.List;
	private _arrayCollection: eui.ArrayCollection;
	private contentCardBg: eui.Image
	private tabPageGroup: eui.Group
	private reverseTabBg: eui.Image
	private tabPageTitle: eui.Label
	private tabPageDesc: eui.Label

	// 
	/////////
	private _score: number
	private _guanqia: number
	private _data: any

	private signDate: any
	private score_num: eui.Label

	// 签到
	private signIn: eui.Group
	private signBg: eui.Image
	private signTxt: eui.Label
	private signZs: eui.Image
	private signOK: OneStateButton
	private signClose: OneStateButton// 关闭
	private zsPanel: eui.Group

	//小星星
	private img_star: eui.Image
	// 观看视频 相关
	private onShowVideo: eui.Group
	private show_video_ok: OneStateButton
	private show_video_cancel: OneStateButton
	private show_video_close: OneStateButton

	private newsignIn: eui.Group

	// 下面菜单按钮
	private img_box: eui.Image
	private img_sign: eui.Image

	private sign_day: eui.Label
	private quickStart: OneStateButton


	//////

	private other: OneStateButton
	private pintu: OneStateButton
	private rewardLabel: eui.Label
	private dailyBtn: OneStateButton
	private timedBtn: OneStateButton
	/** 记忆挑战页签锁（未解锁时显示） */
	private memoryChallengeTabLock: eui.Image
	private timedTabLine: eui.Rect
	private tabSelectedBg: eui.Image
	private tabSelectedBridge: eui.Image
	private reverseInfo: eui.Label
	private endlessBtn: OneStateButton
	private endlessTabLine: eui.Rect
	private endlessInfo: eui.Label
	private dailyTabLine: eui.Rect
	private reverseBtn: OneStateButton
	private modeTabLine: eui.Rect
	private readonly _tabSelectedFilter: egret.GlowFilter = new egret.GlowFilter(0xFFF3A6, 0.9, 18, 18, 2, 1, false, false)

	private _targetTotal: number = 0;
	private _loadedCount: number = 0;
	private _batchSize: number = 60;
	private _loadMoreThresholdPx: number = 600;
	private _scrollSaveTimer: number = 0;
	private _scoreRollProxy: { v: number } = { v: 0 }
	private _stageFitBound: boolean = false
	public constructor() {
		super("MainUISkin");
		this._data = {
			socre: 0,
			guanqia: 0,
			selectId: 0,
			guanqia1: 0,
			guanqiaReverse: 0,
		}
		this.signDate = {
			year: 0,
			month: 0,
			day: 0,
			lianxu: 0,
			show_vedio: 0,
			/** 本地日历日 YYYY-MM-DD，与看广告 200 星领奖挂钩，跨天可再领 */
			lastAdRewardDate: "",
		}

		this.popallitem()
		this.zsPanel.visible = true
		this.signIn.visible = false

		// 读档在 childrenCreated 中执行（皮肤子节点就绪后），避免与其中重复
		var bSign = false//  this.sign()
		this.signOK.visible = bSign
		this.newsignIn.visible = bSign
	}
	private getCalendarDayKey(): string {
		const d = new Date()
		const pad2 = (n: number) => (n < 10 ? "0" + n : "" + n)
		return `${d.getFullYear()}-${pad2(d.getMonth() + 1)}-${pad2(d.getDate())}`
	}

	/** 从 localStorage 恢复 signDate，并写入 lastAdRewardDate（兼容旧档仅有 show_vedio） */
	private loadSignDateFromStorage(): void {
		const raw = egret.localStorage.getItem("signDate")
		if (!raw || raw === "") return
		try {
			const sd = JSON.parse(raw)
			if (typeof sd.year === "number") this.signDate.year = sd.year
			if (typeof sd.month === "number") this.signDate.month = sd.month
			if (typeof sd.day === "number") this.signDate.day = sd.day
			if (sd.lianxu != null) this.signDate.lianxu = sd.lianxu
			if (sd.show_vedio != null && sd.show_vedio !== "") this.signDate.show_vedio = sd.show_vedio | 0
			else this.signDate.show_vedio = 0
			if (sd.lastAdRewardDate) {
				this.signDate.lastAdRewardDate = String(sd.lastAdRewardDate)
				return
			}
			const pad2 = (n: number) => (n < 10 ? "0" + n : "" + n)
			const y = this.signDate.year | 0
			const m = this.signDate.month | 0
			const day = this.signDate.day | 0
			if (y > 0 && (this.signDate.show_vedio | 0) > 0) {
				this.signDate.lastAdRewardDate = `${y}-${pad2(m)}-${pad2(day)}`
			} else {
				this.signDate.lastAdRewardDate = ""
			}
		} catch (e) {
		}
	}

	public sign(): boolean {
		var bSign = true
		let now = new Date();
		var nowYear = now.getFullYear();
		var nowMonth = now.getMonth() + 1;
		let nowweekday = now.getDate();
		let data = egret.localStorage.getItem("signDate");
		if (data != null && data != "") {
			var tmpData = JSON.parse(data);
			this.signDate.year = tmpData.year
			this.signDate.month = tmpData.month
			this.signDate.day = tmpData.day
			this.signDate.lianxu = tmpData.lianxu
			if (tmpData.show_vedio == null || tmpData.show_vedio == "") {
				this.signDate.show_vedio = 0
			}
		}

		if (this.signDate.year == nowYear && this.signDate.month == nowMonth && this.signDate.day == nowweekday) {
			bSign = false

		} else {
			if (this.signDate.year == nowYear && this.signDate.month == nowMonth && this.signDate.day == nowweekday - 1) {

				this.signDate.lianxu += 1
				if (this.signDate.lianxu > 7) {
					this.signDate.lianxu = 1
				}
			}
			this.signDate.show_vedio = 0
		}
		// 刷新签到页面
		for (var i = 1; i <= 7; i++) {
			if (i <= this.signDate.lianxu) {

				var img_path = RES.getRes("sign_json.course_done_btn")
				var img_path1 = RES.getRes("sign_json.sign_bg")

				this["img" + i.toString()].$setTexture(img_path1)
				this["star_img" + i.toString()].$setTexture(img_path)
			}
		}
		this.sign_day.text = "已经连续签到" + this.signDate.lianxu.toString() + "天"
		return bSign
	}
	public popallitem() {
		this.onShowVideo.visible = false
	}

	public showSignPanel() {
		this.newsignIn.visible = true
		// var zs = (this.signDate.lianxu + 1) * 20
		// this.signIn.visible = true
		// this.signTxt.text = zs.toString()
		// var tw = egret.Tween.get(this.signBg, { loop: true })
		// tw.wait(1).to({ rotation: 360 }, 3000)
	}

	protected childrenCreated() {
		super.childrenCreated();

		if (this.scoll.verticalScrollBar) {
			this.scoll.verticalScrollBar.autoVisibility = false;
		}
		this._arrayCollection = new eui.ArrayCollection();
		this.itemList.dataProvider = this._arrayCollection;
		this.itemList.itemRendererSkinName = "contentsItem";
		this.itemList.itemRenderer = ContentItem;

		this.loadData();
		this.loadSignDateFromStorage();
		// if (true) {
		// 	const mgrT = MainUIManager.getInstance()
		// 	mgrT.score = 200
		// 	mgrT.guanqia = MyConst.MapData.length - 1
		// 	mgrT.guanqia1 = 1
		// 	mgrT.guanqiaReverse = 7
		// 	mgrT.saveData()
		// }
		this.score_num.text = MainUIManager.getInstance().score.toString();
		this.resetLevelList(true);
		this.other.visible = false
		this.pintu.visible = false
		if (!this._stageFitBound) {
			this._stageFitBound = true
			GameDesign.bindStageResizeFit(this)
		}
	}

	private getTotalLevelCount(): number {
		if (MainUIManager.getInstance().special == 1) {
			return MyConst.MathMapData ? MyConst.MathMapData.length : 0;
		}
		return MainUIManager.getClassicLevelMapIndices().length;
	}

	private resetLevelList(restoreScroll: boolean): void {
		this._targetTotal = this.getTotalLevelCount();
		this._loadedCount = 0;
		this._arrayCollection.removeAll();
		this.loadNextBatch();

		const mgr = MainUIManager.getInstance();
		const saved = mgr.special === 0 ? mgr.scrollVClassic : mgr.scrollVMath;
		if (restoreScroll && saved >= 0 && this.scoll && this.scoll.viewport) {
			egret.callLater(() => this._applyPersistedListScroll(saved), this);
		}
	}

	/** 将当前列表滚动写入对应玩法（经典 / 数字） */
	private persistLevelListScroll(): void {
		if (!this.scoll || !this.scoll.viewport) return;
		const mgr = MainUIManager.getInstance();
		const v = Math.max(0, this.scoll.viewport.scrollV || 0);
		if (mgr.special === 0) mgr.scrollVClassic = v;
		else mgr.scrollVMath = v;
	}

	/** 离开关卡列表页签前调用，避免切换记忆/每日时丢滚动 */
	private persistLevelListScrollIfOnListTab(): void {
		const mgr = MainUIManager.getInstance();
		if (mgr.lastMainTab !== "endless" && mgr.lastMainTab !== "mode") return;
		if (!this.scoll || !this.scoll.visible) return;
		this.persistLevelListScroll();
	}

	private _applyPersistedListScroll(saved: number): void {
		if (!this.scoll || !this.scoll.viewport) return;
		const vp: any = this.scoll.viewport;
		vp.validateNow();
		let guard = 0;
		const maxGuard = 300;
		while (guard++ < maxGuard && this._loadedCount < this._targetTotal) {
			const ch = (vp as any).contentHeight || 0;
			const vh = vp.height || this.scoll.height || 0;
			if (saved + vh <= ch + 24) break;
			this.loadNextBatch();
			vp.validateNow();
		}
		const ch2 = (vp as any).contentHeight || 0;
		const vh2 = vp.height || this.scoll.height || 0;
		const maxScroll = Math.max(0, ch2 - vh2);
		vp.scrollV = Math.max(0, Math.min(saved, maxScroll));
	}

	private scheduleSaveScrollPosition(): void {
		const mgr = MainUIManager.getInstance();
		if (mgr.lastMainTab !== "endless" && mgr.lastMainTab !== "mode") return;
		this.persistLevelListScroll();
		if (this._scrollSaveTimer) egret.clearTimeout(this._scrollSaveTimer);
		this._scrollSaveTimer = egret.setTimeout(() => {
			this._scrollSaveTimer = 0;
			MainUIManager.getInstance().saveData();
		}, this, 450);
	}

	private loadNextBatch(): void {
		if (!this._arrayCollection) {
			return;
		}
		if (this._loadedCount >= this._targetTotal) {
			return;
		}
		const end = Math.min(this._loadedCount + this._batchSize, this._targetTotal);
		const special = MainUIManager.getInstance().special;
		const classicIndices = special == 0 ? MainUIManager.getClassicLevelMapIndices() : null;
		for (let i = this._loadedCount; i < end; i++) {
			const item: any = {
				index: i + 1,
				curLv: special == 1 ? MainUIManager.getInstance().guanqia1 : MainUIManager.getInstance().guanqia
			};
			if (special == 0 && classicIndices) {
				// 列表第 i+1 格对应 MapData 的真实下标（跳过 mapType==999）
				item.actualMapIndex = classicIndices[i];
			}
			this._arrayCollection.addItem(item);
		}
		this._loadedCount = end;
	}

	private onScrollChange(): void {
		if (!this.scoll || !this.scoll.viewport) {
			return;
		}
		const vp: any = this.scoll.viewport as any;
		const scrollV = vp.scrollV || 0;
		const contentHeight = vp.contentHeight || 0;
		const viewHeight = vp.height || this.scoll.height || 0;
		if (scrollV + viewHeight + this._loadMoreThresholdPx >= contentHeight) {
			this.loadNextBatch();
		}
		this.scheduleSaveScrollPosition();
	}

	public addEvts(): void {
		this.itemList.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchList, this);
		this.scoll.addEventListener(eui.UIEvent.CHANGE, this.onScrollChange, this);
		this.dailyBtn.addEventListener(egret.TouchEvent.TOUCH_END, this.onDailyChallenge, this);
		this.timedBtn.addEventListener(egret.TouchEvent.TOUCH_END, this.onTimedChallenge, this);
		this.endlessBtn.addEventListener(egret.TouchEvent.TOUCH_END, this.onEndlessChallenge, this);
		if (this.reverseBtn) this.reverseBtn.addEventListener(egret.TouchEvent.TOUCH_END, this.onReverseChallenge, this);
		this.signOK.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickSignOk, this);
		this.signClose.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickSignClose, this);
		// 钻石框点击事件
		this.zsPanel.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickZsPanel, this);
		// 看视频
		this.show_video_ok.addEventListener(egret.TouchEvent.TOUCH_END, this.OnShowVideoOk, this);
		this.show_video_cancel.addEventListener(egret.TouchEvent.TOUCH_END, this.OnShowVideoCancel, this);
		if (this.show_video_close) {
			this.show_video_close.addEventListener(egret.TouchEvent.TOUCH_END, this.OnShowVideoClose, this);
		}

		// 菜单 
		this.img_box.addEventListener(egret.TouchEvent.TOUCH_END, this.OnClickBox, this);
		this.img_sign.addEventListener(egret.TouchEvent.TOUCH_END, this.OnClickSignBtn, this);
		this.quickStart.addEventListener(egret.TouchEvent.TOUCH_END, this.OnClickQuickStart, this); // 快速开始

		// 经典玩法
		this.other.addEventListener(egret.TouchEvent.TOUCH_END, this.OnClickOther, this);
	}

	public rmEvts(): void {
		this.itemList.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchList, this);
		this.scoll.removeEventListener(eui.UIEvent.CHANGE, this.onScrollChange, this);
		this.dailyBtn.removeEventListener(egret.TouchEvent.TOUCH_END, this.onDailyChallenge, this);
		this.timedBtn.removeEventListener(egret.TouchEvent.TOUCH_END, this.onTimedChallenge, this);
		this.endlessBtn.removeEventListener(egret.TouchEvent.TOUCH_END, this.onEndlessChallenge, this);
		if (this.reverseBtn) this.reverseBtn.removeEventListener(egret.TouchEvent.TOUCH_END, this.onReverseChallenge, this);
		if (this._scrollSaveTimer) {
			egret.clearTimeout(this._scrollSaveTimer);
			this._scrollSaveTimer = 0;
		}
		this.signOK.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickSignOk, this);
		this.signClose.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickSignClose, this);
		// 钻石框点击事件
		this.zsPanel.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickZsPanel, this);
		// 看视频
		this.show_video_ok.removeEventListener(egret.TouchEvent.TOUCH_END, this.OnShowVideoOk, this);
		this.show_video_cancel.removeEventListener(egret.TouchEvent.TOUCH_END, this.OnShowVideoCancel, this);
		if (this.show_video_close) {
			this.show_video_close.removeEventListener(egret.TouchEvent.TOUCH_END, this.OnShowVideoClose, this);
		}

		// 菜单 
		this.img_box.removeEventListener(egret.TouchEvent.TOUCH_END, this.OnClickBox, this);
		this.img_sign.removeEventListener(egret.TouchEvent.TOUCH_END, this.OnClickSignBtn, this);
		this.quickStart.removeEventListener(egret.TouchEvent.TOUCH_END, this.OnClickQuickStart, this); // 快速开始

		this.other.removeEventListener(egret.TouchEvent.TOUCH_END, this.OnClickOther, this);
	}

	public OnClickSign() {
		console.log("click");
		var lianxu = this.signDate.lianxu + 1
		var img_path = RES.getRes("sign_json.sign_bg")
		var img_path1 = RES.getRes("sign_json.sign_bg1")

		this["img" + lianxu.toString()].$setTexture(img_path1)


		// 初始化 flag1
		var flag_path = RES.getRes("sign_json.wancheng")
		var flag_path1 = RES.getRes("sign_json.today")

		this["flag" + lianxu.toString()].$setTexture(flag_path)

		// 领取奖励
		this.signDate.lianxu += 1
		this.sign_day.text = "已经连续签到" + this.signDate.lianxu.toString() + "天"
		egret.localStorage.setItem("signDate", JSON.stringify(this.signDate));
	}

	public OnShowResult(ok): void {
		const todayKey = this.getCalendarDayKey()
		// 视频看完：按自然日一天最多领一次 200 星（lastAdRewardDate；原 show_vedio 未随读档/签到刷新，不可靠）
		if (ok == 1) {
			const last = (this.signDate.lastAdRewardDate != null && this.signDate.lastAdRewardDate !== "")
				? String(this.signDate.lastAdRewardDate)
				: ""
			if (last !== todayKey) {
				MainUIManager.getInstance().score += 200
				MainUIManager.getInstance().saveData()
				this.score_num.text = MainUIManager.getInstance().score.toString()
				this.signDate.lastAdRewardDate = todayKey
			}
		}
		this.signDate.show_vedio = (this.signDate.show_vedio | 0) + 1
		egret.localStorage.setItem("signDate", JSON.stringify(this.signDate));
	}

	public OnShowVideoOk() {
		pfCommand("pfViewAd", null, this.OnShowResult, this);
		this.onShowVideo.visible = false

		//this.OnShowResult(1)
	}
	public OnShowVideoCancel() {
		this.onShowVideo.visible = false
	}
	public OnShowVideoClose() {
		this.onShowVideo.visible = false
	}
	public onClickZsPanel() {
		this.onShowVideo.visible = true
	}
	private onClickSignClose() {
		this.newsignIn.visible = false
	}
	private onClickSignOk() {
		// 播放动画
		var img_path = RES.getRes(("huochai_json.continue_ruby"))

		for (var i = 0; i < 10; i++) {
			var zuanshi = new eui.Image

			// 获取对象ID位置
			zuanshi.x = this.width / 2
			zuanshi.y = this.height / 2
			zuanshi.width = 68
			zuanshi.height = 68
			zuanshi.$setAnchorOffsetX(zuanshi.width / 2)
			zuanshi.$setAnchorOffsetY(zuanshi.height / 2)
			zuanshi.$setTexture(img_path)
			this.addChildAt(zuanshi, i + 100)
			zuanshi.visible = false
			var tw = egret.Tween.get(zuanshi, { loop: false })
			tw.wait(1 + i * 90).to({ visible: true }).to({ x: this.zsPanel.x + 31, y: this.zsPanel.y + 41 }, 150).to({ visible: false }).call(this.disNewChild, this, [zuanshi, i]);
		}

		MainUIManager.getInstance().score += (this.signDate.lianxu + 1) * 20
		MainUIManager.getInstance().saveData()
		this.signOK.visible = false
		this.newsignIn.visible = false
	}
	public disNewChild(obj: eui.Image, i: number) {
		this.removeChild(obj)
		this.score_num.textColor = 0x4169E1
		// +10
		this.score_num.text = (MainUIManager.getInstance().score + (i + 1) * 10).toString()
		if (i == 9) {
			egret.Tween.removeTweens(this.signBg)
			this.signIn.visible = false
			this.score_num.textColor = 0xF8F8FF
			// 签到完成再更改签到时间
			let now = new Date();

			this.signDate.year = now.getFullYear();
			this.signDate.month = now.getMonth() + 1;
			this.signDate.day = now.getDate();

			egret.localStorage.setItem("signDate", JSON.stringify(this.signDate));
		}
	}

	private onTouchList(e: egret.TouchEvent): void {
		let targ: any = e.target;
		let item: ContentItem = null;
		while (targ) {
			if (targ instanceof ContentItem) {
				item = targ;
				break;
			}
			if (targ === this.itemList) break;
			targ = targ.parent;
		}
		if (item && item.index >= 0) {
				MainUIManager.getInstance().bHelp = false // 不是求助而来的一律设置false
				if (MainUIManager.getInstance().special == 0) {
					const rowData: any = item.data;
					const actualIdx = rowData && rowData.actualMapIndex != null ? rowData.actualMapIndex : (item.index - 1);
					const cur = MainUIManager.getInstance().guanqia || 0;
					const isFirstWhenZero = (cur == 0 && item.index == 1);
					const isUnlocked = isFirstWhenZero || (actualIdx + 1 <= cur);
					if (!isUnlocked) {
						AlertBox.alert("该关卡未解锁，先通关前面的关卡吧！", null, null, "");
						return;
					}

					MainUIManager.getInstance().selectId = actualIdx + 1;
					const sv = this.scoll.viewport.scrollV;
					MainUIManager.getInstance().scrollV = sv;
					MainUIManager.getInstance().scrollVClassic = sv;
					MainUIManager.getInstance().saveData()
					var maxLen = MainUIManager.getClassicLevelMapIndices().length
					if (item.index > maxLen) {
						AlertBox.alert("达到最大配置关卡，等待更新吧!")
						return
					}
					MainUIManager.getInstance().bHelp = false
					this.showUILeft(new Mission(actualIdx));
					MainUIManager.getInstance().special = 0
				} else {
					const cur1 = MainUIManager.getInstance().guanqia1 || 0;
					const isFirstWhenZero1 = (cur1 == 0 && item.index == 1);
					const isUnlocked1 = isFirstWhenZero1 || (item.index <= cur1);
					if (!isUnlocked1) {
						AlertBox.alert("该关卡未解锁，先通关前面的关卡吧！", null, null, "");
						return;
					}
					var itemIndex = item.index
					var maxLen = MyConst.MathMapData.length
					if (itemIndex > maxLen) {
						AlertBox.alert("达到最大配置关卡，等待更新吧!")
						return
					}
					MainUIManager.getInstance().selectId = MainUIManager.getInstance().guanqia1
					if (this.scoll && this.scoll.viewport) {
						MainUIManager.getInstance().scrollVMath = this.scoll.viewport.scrollV;
					}
					MainUIManager.getInstance().saveData()
					//this.showUILeft(new Mission(itemIndex - 1));
					this.showUILeft(new GameMath(itemIndex - 1));
					MainUIManager.getInstance().special = 1
				}
		}
	}
	public onMusic(): void {
		//	this.btn_music.$setSelected(mylib.GmGlobal.sound.switchSoundOpen());
		//mylib.GmGlobal.sound.playSoundEffect("click_dialog.mp3");
	}

	// 加载小星星闪烁动画
	public LoadStartBlinkAction(): void {
		var tw = egret.Tween.get(this.img_star, { loop: true })
		tw.wait(500).to({ rotation: 720 }, 3000).wait(500).to({ rotation: 720 }, 2000).wait(500).to({ rotation: 720 }, 1000)

		var tw = egret.Tween.get(this.img_box, { loop: true })
		tw.wait(500).call(this.commplete, this, [1]).wait(500).call(this.commplete, this, [2])//to({width:10 }, 500).wait(500).to({width:120 }, 500)

		//var tw = egret.Tween.get(this.img_sign, { loop: true })
		//tw.wait(5020).call(this.commplete, this, [3]).wait(5020).call(this.commplete, this, [4])//to({width:10 }, 500).wait(500).to({width:120 }, 500)
	}
	public commplete(param1: number): void {
		var img_path = RES.getRes("sign_json.icon_daka_1")
		var img_path1 = RES.getRes("sign_json.icon_daka_4")
		var img_path3 = RES.getRes("sign_json.icon_daka_2")
		var img_path4 = RES.getRes("sign_json.icon_daka_3")
		if (param1 == 1) {
			this.img_box.$setTexture(img_path1)
		} else if (param1 == 2) {
			this.img_box.$setTexture(img_path)
		} else if (param1 == 3) {
			this.img_sign.$setTexture(img_path3)
		} else if (param1 == 4) {
			this.img_sign.$setTexture(img_path4)
		}
	}

	public showAt(p: egret.DisplayObjectContainer): void {
		super.showAt(p);
		this.loadSignDateFromStorage()
		const mgr = MainUIManager.getInstance()
		const keepTab = mgr.lastMainTab
		this.other.visible = false
		this.pintu.visible = false
		this.syncModeToggleBtn()
		const high = mgr.getEndlessHighScore();
		if (this.endlessBtn) this.endlessBtn.label = this.getEndlessBtnText(high);
		if (this.timedBtn) this.timedBtn.label = "记忆挑战"
		this.syncReverseInfo()
		this.syncEndlessInfo()

		mgr.lastMainTab = keepTab
		this.syncMainTabs()
		this.syncTabPage()
		mgr.bHelp = false
		mylib.GmGlobal.page.setPage({ page: "help" }, this.jumpPage, this);
		this.LoadStartBlinkAction()
		// 如果是第一次进游戏 直接进游戏

		// if (MainUIManager.getInstance().firstComing) {
		// 	MainUIManager.getInstance().firstComing = false

		// 	MainUIManager.getInstance().selectId = MainUIManager.getInstance().guanqia
		// 	var index = MainUIManager.getInstance().guanqia - 1
		// 	// 如果这里达到最大关卡配置 直接返回主菜单
		// 	if (index == MyConst.MapData.length){
		// 		//this.showUIRight(new GameView(),0);
		// 		return
		// 	}

		// 	var mapType = MyConst.MapData[index - 1].mapType
		// 	if (mapType == 999) {
		// 		this.showUIRight(new GameView(),0);
		// 	} else {
		// 		this.showUIRight(new Mission(index - 1),0);
		// 	}
		// }
		// 初始化声音
		//this.btn_music.$setSelected(mylib.GmGlobal.sound.isSoundOpen());
	}

	private getEndlessBtnText(high: number): string {
		return "经典玩法"
	}

	private syncEndlessInfo(): void {
		if (!this.endlessInfo) return
		const mgr = MainUIManager.getInstance()
		const total = MainUIManager.getClassicLevelMapIndices().length
		const current = MainUIManager.getClassicListIndexForSelectId(mgr.guanqia || 1)
		this.endlessInfo.text = "当前进度 " + current + "/" + total
	}

	private jumpPage(view) {
		this.showUIRight(view);
	}

	private syncModeToggleBtn(): void {
		if (!this.reverseBtn) return
		this.reverseBtn.label = "数字玩法"
	}

	/** 读档后 / 同步页签：满足条件则写入解锁；未解锁仍可停留在记忆页签查看说明 */
	private refreshMemoryChallengeUnlockState(): void {
		const mgr = MainUIManager.getInstance()
		mgr.tryUnlockMemoryChallengeFromConditions()
		if (this.memoryChallengeTabLock) {
			this.memoryChallengeTabLock.visible = !mgr.isMemoryChallengeUnlocked()
		}
	}

	private syncMainTabs(): void {
		const mgr = MainUIManager.getInstance()
		this.refreshMemoryChallengeUnlockState()
		this.applyTabState(this.timedBtn, mgr.lastMainTab == "reverse")
		this.applyTabState(this.endlessBtn, mgr.lastMainTab == "endless")
		this.applyTabState(this.dailyBtn, mgr.lastMainTab == "daily")
		this.applyTabState(this.reverseBtn, mgr.lastMainTab == "mode")
		this.applyTabLine(this.timedTabLine, mgr.lastMainTab == "reverse")
		this.applyTabLine(this.endlessTabLine, mgr.lastMainTab == "endless")
		this.applyTabLine(this.dailyTabLine, mgr.lastMainTab == "daily")
		this.applyTabLine(this.modeTabLine, mgr.lastMainTab == "mode")
		this.syncSelectedTabCard(mgr.lastMainTab || "endless")
	}

	private syncTabPage(): void {
		const mgr = MainUIManager.getInstance()
		const tab = mgr.lastMainTab || "endless"
		const isLevelList = tab == "endless" || tab == "mode"
		if (this.scoll) this.scoll.visible = isLevelList
		if (this.tabPageGroup) this.tabPageGroup.visible = !isLevelList
		if (this.reverseTabBg) this.reverseTabBg.visible = tab == "reverse"
		if (this.reverseInfo) this.reverseInfo.visible = tab == "reverse"
		if (this.endlessInfo) this.endlessInfo.visible = tab == "endless"
		if (this.other) {
			this.other.visible = false
			this.other.label = mgr.special == 1 ? "切换经典玩法" : "切换数字玩法"
		}
		if (this.pintu) this.pintu.visible = false
		// 经典 / 数字页签为关卡列表时也要显示签到盒与奖励文案（原逻辑仅非列表页显示）
		if (this.img_box) this.img_box.visible = true
		if (this.rewardLabel) this.rewardLabel.visible = true
		if (this.quickStart) {
			this.quickStart.enabled = true
			this.quickStart.alpha = 1
			this.quickStart.label = this.getQuickStartLabel(tab)
		}
		this.syncReverseInfo()
		this.syncEndlessInfo()
		if (isLevelList) {
			this.resetLevelList(true)
			return
		}
		if (!this.tabPageTitle || !this.tabPageDesc) return
		if (tab == "reverse") {
			this.tabPageTitle.text = "记忆挑战"
			this.tabPageDesc.text = this.buildReverseTabDesc()
			this.refreshMemoryChallengeQuickStartState()
			return
		}
		if (tab == "endless") {
			this.tabPageTitle.text = "经典玩法"
			this.tabPageDesc.text = this.buildEndlessTabDesc()
			return
		}
		this.tabPageTitle.text = "每日挑战"
		this.tabPageDesc.text = this.buildDailyTabDesc()
		const action = mgr.getDailyActionLabel()
		this.quickStart.label = action
		this.quickStart.enabled = action != "已完成"
		this.quickStart.alpha = 1
	}

	/** 未解锁记忆挑战时「开始记忆挑战」不可点并置灰（皮肤 disabled 与 up 同图，需 alpha 区分） */
	private refreshMemoryChallengeQuickStartState(): void {
		const mgr = MainUIManager.getInstance()
		if (!this.quickStart || mgr.lastMainTab !== "reverse") return
		if (mgr.isMemoryChallengeUnlocked()) {
			this.quickStart.enabled = true
			this.quickStart.alpha = 1
			return
		}
		this.quickStart.enabled = false
		this.quickStart.alpha = 0.45
	}

	private getQuickStartLabel(tab: string): string {
		if (tab == "reverse") return "开始记忆挑战"
		if (tab == "endless") return "开始经典玩法"
		if (tab == "daily") return MainUIManager.getInstance().getDailyActionLabel()
		return "开始数字玩法"
	}

	private buildReverseTabDesc(): string {
		const mgr = MainUIManager.getInstance()
		const lv = mgr.getReverseCurrentLevel()
		return [
			"在限定步数内还原到初始图形。",
			"关卡难度：简单 ★☆☆☆☆",
			"                  中等 ★★★☆☆",
			"                  偏难 ★★★★★",
			"当前进度：" + lv + "/" + mgr.getReverseTotalLevels(),
			"当前难度：" + mgr.getReverseDifficultyLabel(lv) + " " + mgr.getReverseDifficultyStars(lv),
			"奖励规则：",
			"首次通关 +5星",
			"重复通关 +1星",
			"连续成功3关额外 +3星",
			"判定失败 -" + MainUIManager.REVERSE_FAIL_STAR_COST + "星（不低于0）"
		].join("\n")
	}

	private buildEndlessTabDesc(): string {
		const mgr = MainUIManager.getInstance()
		const total = MainUIManager.getClassicLevelMapIndices().length
		const current = MainUIManager.getClassicListIndexForSelectId(mgr.guanqia || 1)
		return [
			"经典火柴关卡列表。",
			"",
			"当前进度：" + current + "/" + total,
			"点击关卡可直接进入挑战。"
		].join("\n")
	}

	private buildDailyTabDesc(): string {
		return MainUIManager.getInstance().getDailySummaryText()
	}

	private applyTabState(btn: OneStateButton, selected: boolean): void {
		if (!btn) return
		btn.scaleX = btn.scaleY = selected ? 1.04 : 0.98
		btn.y = selected ? -2 : 0
		btn.alpha = selected ? 1 : 0.72
		btn.filters = selected ? [this._tabSelectedFilter] : null
		const anyBtn: any = btn as any
		const lb = anyBtn.labelDisplay as eui.Label
		if (lb) {
			lb.textColor = selected ? 0xFFF8E1 : 0xE8D4A6
			lb.bold = true
		}
	}

	private applyTabLine(line: eui.Rect, selected: boolean): void {
		if (!line) return
		line.visible = true
		line.alpha = selected ? 1 : 0
	}

	private syncSelectedTabCard(tab: string): void {
		if (!this.tabSelectedBg || !this.tabSelectedBridge) return
		// 与 MainUISkin modeBtns 从左到右一致：经典(0) → 数字(172) → 记忆(344) → 每日(516)
		const map: any = {
			endless: 0,
			mode: 172,
			reverse: 344,
			daily: 516
		}
		const x = map[tab] != null ? map[tab] : 0
		this.tabSelectedBg.x = x - 2
		this.tabSelectedBridge.x = x + 8
		this.tabSelectedBg.visible = true
		this.tabSelectedBridge.visible = true
		this.tabSelectedBg.alpha = 0.97
		this.tabSelectedBridge.alpha = 0.97
		if (this.contentCardBg) this.contentCardBg.alpha = 0.97
	}

	private syncReverseInfo(): void {
		if (!this.reverseInfo) return
		const mgr = MainUIManager.getInstance()
		this.reverseInfo.text = mgr.getReverseInfoText()
	}

	public loadData() {
		let data = egret.localStorage.getItem("huochaiData");
		if (data != null && data != "") {
			this._data = JSON.parse(data);
			const mgr = MainUIManager.getInstance()
			mgr.score = this._data.score
			mgr.guanqia = this._data.guanqia
			mgr.selectId = this._data.selectId
			mgr.scrollV = this._data.scrollV
			mgr.guanqia1 = this._data.guanqia1
			mgr.guanqiaReverse = this._data.guanqiaReverse || 1
			const rawC = this._data.scrollVClassic
			const rawM = this._data.scrollVMath
			const legacy = typeof this._data.scrollV === "number" && this._data.scrollV >= 0 ? this._data.scrollV : -1
			mgr.scrollVClassic = (typeof rawC === "number" && rawC >= 0) ? rawC : legacy
			mgr.scrollVMath = (typeof rawM === "number" && rawM >= 0) ? rawM : -1
		}
		this.refreshMemoryChallengeUnlockState()
	}

	////////////////
	private OnClickBox() {
		this.onClickZsPanel()
	}
	private OnClickSignBtn() {
		this.showSignPanel()
	}

	private OnClickQuickStart() {
		this.persistLevelListScrollIfOnListTab()
		MainUIManager.getInstance().saveData()
		const tab = MainUIManager.getInstance().lastMainTab || "endless"
		if (tab == "reverse") {
			const mgrR = MainUIManager.getInstance()
			mgrR.tryUnlockMemoryChallengeFromConditions()
			if (!mgrR.isMemoryChallengeUnlocked()) {
				AlertBox.alert("需要400星且达到20关", null, null, "")
				return
			}
			this.startReverseChallenge()
			return
		}
		if (tab == "endless") {
			this.startEndlessChallenge()
			return
		}
		if (tab == "daily") {
			if (MainUIManager.getInstance().getDailyActionLabel() != "已完成") {
				this.onDailyAction()
			}
			return
		}
		if (MainUIManager.getInstance().special == 0) {
			const classicIndices = MainUIManager.getClassicLevelMapIndices();
			const guanqia = MainUIManager.getInstance().guanqia || 0;
			const targetMapIndex = Math.max(0, guanqia - 1);
			let nextIdx = -1;
			for (let j = 0; j < classicIndices.length; j++) {
				if (classicIndices[j] >= targetMapIndex) {
					nextIdx = j;
					break;
				}
			}
			const actualIdx = nextIdx >= 0 ? classicIndices[nextIdx] : (classicIndices.length > 0 ? classicIndices[classicIndices.length - 1] : 0);
			if (classicIndices.length == 0) {
				AlertBox.alert("暂无可用关卡！");
				return;
			}
			const mgrQ = MainUIManager.getInstance()
			mgrQ.selectId = actualIdx + 1;
			if (this.scoll && this.scoll.viewport) {
				const sv = this.scoll.viewport.scrollV;
				mgrQ.scrollV = sv;
				mgrQ.scrollVClassic = sv;
			}
			mgrQ.saveData();
			this.showUILeft(new Mission(actualIdx));
		} else if (MainUIManager.getInstance().special == 1) {
			var itemIndex = MainUIManager.getInstance().guanqia1
			var maxLen = MyConst.MathMapData.length
			if (itemIndex > maxLen) {
				AlertBox.alert("达到最大配置关卡，等待更新吧!")
				return
			}
			const mgrM = MainUIManager.getInstance()
			mgrM.selectId = mgrM.guanqia1
			if (this.scoll && this.scoll.viewport) {
				mgrM.scrollVMath = this.scoll.viewport.scrollV;
			}
			mgrM.saveData();
			//this.showUILeft(new Mission(itemIndex - 1));
			this.showUILeft(new GameMath(itemIndex - 1));
		}

	}

	private OnClickOther() {
		MainUIManager.getInstance().special = MainUIManager.getInstance().special == 1 ? 0 : 1
		MainUIManager.getInstance().lastMainTab = "mode"
		this.syncModeToggleBtn()
		this.syncMainTabs()
		this.syncTabPage()
	}

	private onDailyChallenge(): void {
		const mgr = MainUIManager.getInstance();
		this.persistLevelListScrollIfOnListTab()
		mgr.saveData()
		mgr.lastMainTab = "daily"
		this.syncMainTabs()
		this.syncTabPage()
	}

	private onDailyAction(): void {
		const mgr = MainUIManager.getInstance();
		const label = mgr.getDailyActionLabel();
		if (label === "领取奖励") {
			const scoreBefore = mgr.score;
			const reward = mgr.getDailyReward();
			mgr.dailyAction();
			const scoreAfter = mgr.score;
			this.score_num.text = String(scoreBefore);
			if (this.quickStart) this.quickStart.enabled = false;
			this._playDailyRewardClaimSequence(scoreBefore, scoreAfter, reward);
			return;
		}
		mgr.dailyAction();
		this.startOrContinueDaily();
	}

	/** 相对 tabPageGroup 的比例点，用于每日领取飞星起点 */
	private static readonly _DAILY_REWARD_FLY_FRAC: [number, number][] = [
		[0.1, 0.42], [0.28, 0.34], [0.46, 0.28], [0.54, 0.28], [0.72, 0.34], [0.9, 0.42],
		[0.18, 0.58], [0.38, 0.5], [0.62, 0.5], [0.82, 0.58],
		[0.12, 0.74], [0.35, 0.68], [0.65, 0.68], [0.88, 0.74],
		[0.5, 0.62],
	]

	private _onMainScoreRollChange(): void {
		this.score_num.text = String(Math.round(this._scoreRollProxy.v))
	}

	private _rollMainScoreNumFromTo(fromVal: number, toVal: number, onDone?: () => void): void {
		const from = Math.floor(fromVal)
		const to = Math.floor(toVal)
		const durationMs = Math.min(950, 440 + Math.abs(to - from) * 32)
		if (from === to || durationMs <= 0) {
			this.score_num.text = String(to)
			if (onDone) onDone()
			return
		}
		egret.Tween.removeTweens(this._scoreRollProxy as any)
		this._scoreRollProxy.v = from
		this.score_num.text = String(from)
		egret.Tween.get(this._scoreRollProxy, { loop: false, onChange: this._onMainScoreRollChange, onChangeObj: this })
			.to({ v: to }, durationMs, egret.Ease.quadOut)
			.call(() => {
				this.score_num.text = String(to)
				this._scoreRollProxy.v = to
				if (onDone) onDone()
			}, this)
	}

	private _playDailyRewardClaimSequence(scoreBefore: number, scoreAfter: number, reward: number): void {
		const tex = this.img_star ? (this.img_star.source as egret.Texture) : null
		if (!tex || !this.img_star) {
			this.score_num.text = String(scoreAfter)
			this.syncTabPage()
			AlertBox.alert(`领取成功！获得${reward}星星`, null, null, "")
			return
		}
		this.validateNow()
		const dest = this.img_star.localToGlobal(0, 0)
		const g = this.tabPageGroup
		if (g) g.validateNow()
		const w = g && g.width > 10 ? g.width : 620
		const h = g && g.height > 10 ? g.height : 520
		const anchors = MainUIView._DAILY_REWARD_FLY_FRAC
		const flyN = 14
		const duration = 420
		const stagger = 70
		for (let i = 0; i < flyN; i++) {
			const [fx, fy] = anchors[i % anchors.length]
			const src = g ? g.localToGlobal(fx * w, fy * h) : this.localToGlobal(fx * 720, 380 + fy * 360)
			const fly = new eui.Image(tex)
			fly.width = this.img_star.width
			fly.height = this.img_star.height
			fly.anchorOffsetX = this.img_star.anchorOffsetX
			fly.anchorOffsetY = this.img_star.anchorOffsetY
			fly.x = src.x
			fly.y = src.y
			fly.scaleX = fly.scaleY = 1.15
			this.addChild(fly)
			egret.Tween.removeTweens(fly)
			egret.Tween.get(fly).wait(i * stagger)
				.to({ x: dest.x, y: dest.y, scaleX: 0.88, scaleY: 0.88 }, duration, egret.Ease.cubicInOut)
				.call(() => { if (fly.parent) fly.parent.removeChild(fly) }, this)
		}
		const flyDoneMs = (flyN - 1) * stagger + duration + 90
		egret.setTimeout(() => {
			this._rollMainScoreNumFromTo(scoreBefore, scoreAfter, () => {
				this.syncTabPage()
				AlertBox.alert(`领取成功！获得${reward}星星`, null, null, "")
			})
		}, this, flyDoneMs)
	}

	private startOrContinueDaily(): void {
		const mgr = MainUIManager.getInstance();
		mgr.startDailyChallenge();
		const task = mgr.getDailyCurrentTask();
		if (!task) {
			AlertBox.alert("今日挑战已完成，记得领取奖励！", null, null, "");
			return;
		}
		// 进入挑战关卡
		MainUIManager.getInstance().bHelp = false;
		MainUIManager.getInstance().special = task.mode;

		if (task.mode == 1) {
			if (this.scoll && this.scoll.viewport) {
				mgr.scrollVMath = this.scoll.viewport.scrollV;
			}
			mgr.saveData();
			this.showUILeft(new GameMath(task.level - 1));
			return;
		}

		MainUIManager.getInstance().selectId = task.level;
		const sv0 = this.scoll && this.scoll.viewport ? this.scoll.viewport.scrollV : -1;
		MainUIManager.getInstance().scrollV = sv0;
		if (sv0 >= 0) MainUIManager.getInstance().scrollVClassic = sv0;
		MainUIManager.getInstance().saveData();
		const idx = task.level - 1;
		const mapType = MyConst.MapData[idx].mapType;
		if (mapType == 999) {
			this.showUILeft(new GameView());
		} else {
			this.showUILeft(new Mission(idx));
		}
	}

	private onTimedChallenge(): void {
		const mgr = MainUIManager.getInstance();
		mgr.tryUnlockMemoryChallengeFromConditions()
		this.persistLevelListScrollIfOnListTab()
		mgr.saveData()
		mgr.lastMainTab = "reverse"
		this.syncMainTabs()
		this.syncTabPage()
		if (!mgr.isMemoryChallengeUnlocked()) {
			AlertBox.alert("需要400星且达到20关", () => {
				this.refreshMemoryChallengeQuickStartState()
			}, this, "")
		}
	}

	private onEndlessChallenge(): void {
		const mgr = MainUIManager.getInstance();
		this.persistLevelListScrollIfOnListTab()
		mgr.special = 0
		mgr.lastMainTab = "endless"
		this.syncMainTabs()
		this.syncTabPage()
	}

	private onReverseChallenge(): void {
		const mgr = MainUIManager.getInstance();
		this.persistLevelListScrollIfOnListTab()
		mgr.special = 1
		mgr.lastMainTab = "mode"
		this.syncModeToggleBtn()
		this.syncMainTabs()
		this.syncTabPage()
	}

	private startReverseChallenge(): void {
		const mgr = MainUIManager.getInstance()
		mgr.tryUnlockMemoryChallengeFromConditions()
		if (!mgr.isMemoryChallengeUnlocked()) {
			AlertBox.alert("需要400星且达到20关", null, null, "")
			return
		}
		mgr.startReverseChallenge()
		this.syncReverseInfo()
		this.showUILeft(new ReversePreviewView())
	}

	private startEndlessChallenge(): void {
		const mgr = MainUIManager.getInstance();
		const classicIndices = MainUIManager.getClassicLevelMapIndices();
		if (classicIndices.length == 0) {
			AlertBox.alert("暂无可用关卡！");
			return;
		}
		const guanqia = mgr.guanqia || 0;
		const targetMapIndex = Math.max(0, guanqia - 1);
		let nextIdx = -1;
		for (let j = 0; j < classicIndices.length; j++) {
			if (classicIndices[j] >= targetMapIndex) {
				nextIdx = j;
				break;
			}
		}
		const actualIdx = nextIdx >= 0 ? classicIndices[nextIdx] : classicIndices[classicIndices.length - 1];
		mgr.bEndlessMode = false;
		mgr.endlessLevel = 1;
		mgr.selectId = actualIdx + 1;
		mgr.bHelp = false;
		mgr.special = 0;
		this.persistLevelListScroll();
		mgr.saveData();
		this.showUILeft(new Mission(actualIdx));
	}
}