

class MainUIView extends mylib.UIBase {
	private btn_start: OneStateButton;

	///// 列表
	protected scoll: eui.Scroller;
	protected itemList: eui.List;
	private _arrayCollection: eui.ArrayCollection;
	private contentCardBg: eui.Image
	private tabPageGroup: eui.Group
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

	private newsignIn: eui.Group

	// 下面菜单按钮
	private img_box: eui.Image
	private img_sign: eui.Image

	private sign_day: eui.Label
	private quickStart: OneStateButton
	private op: number


	//////

	private other: OneStateButton
	private pintu: OneStateButton
	private rewardLabel: eui.Label
	private dailyBtn: OneStateButton
	private timedBtn: OneStateButton
	private timedTabLine: eui.Rect
	private tabSelectedBg: eui.Image
	private tabSelectedBridge: eui.Image
	private reverseInfo: eui.Label
	private reverseStars: eui.Group
	private reverseStar1: eui.Image
	private reverseStar2: eui.Image
	private reverseStar3: eui.Image
	private reverseStar4: eui.Image
	private reverseStar5: eui.Image
	private endlessBtn: OneStateButton
	private endlessTabLine: eui.Rect
	private endlessInfo: eui.Label
	private dailyTabLine: eui.Rect
	private reverseBtn: OneStateButton
	private modeTabLine: eui.Rect
	private ruleDebugBtn: OneStateButton
	private readonly _tabSelectedFilter: egret.GlowFilter = new egret.GlowFilter(0xFFF3A6, 0.9, 18, 18, 2, 1, false, false)
	private readonly _inactiveStarFilter: egret.ColorMatrixFilter = new egret.ColorMatrixFilter([
		0.30, 0.59, 0.11, 0.00, -12,
		0.30, 0.59, 0.11, 0.00, -12,
		0.30, 0.59, 0.11, 0.00, -12,
		0.00, 0.00, 0.00, 1.00, 0
	])

	private _targetTotal: number = 0;
	private _loadedCount: number = 0;
	private _batchSize: number = 60;
	private _loadMoreThresholdPx: number = 600;
	private _highlightTimer: number = 0;
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
		}

		this.popallitem()
		this.zsPanel.visible = true
		this.signIn.visible = false

		if (MainUIManager.getInstance().score < 10000) {
			MainUIManager.getInstance().score = 10000   // 测试代码加财富
			MainUIManager.getInstance().guanqia = MyConst.MapData.length - 1
			MainUIManager.getInstance().guanqia1 = 25 // 数字玩法关卡
			MainUIManager.getInstance().guanqiaReverse = 20 //反转玩法关卡
			MainUIManager.getInstance().saveData()
		}
		this.loadData()

		this.score_num.text = MainUIManager.getInstance().score.toString()
		var bSign = false//  this.sign()
		this.signOK.visible = bSign
		this.newsignIn.visible = bSign
		this.op = 0
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
		this.resetLevelList(false);
		this.other.visible = false
		this.pintu.visible = false
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

		if (restoreScroll && MainUIManager.getInstance().scrollV != -1) {
			this.scoll.viewport.validateNow();
			this.scoll.viewport.scrollV = MainUIManager.getInstance().scrollV;
		} else {
			MainUIManager.getInstance().scrollV = -1;
		}
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
	}

	private ensureLoadedTo(levelIndex: number): void {
		if (levelIndex <= 0) return;
		while (this._loadedCount < levelIndex && this._loadedCount < this._targetTotal) {
			this.loadNextBatch();
		}
	}

	private scrollToPlayableLevel(): void {
		if (!this.scoll || !this.scoll.viewport || !this.itemList) {
			return;
		}

		const mgr = MainUIManager.getInstance();
		const playable = (mgr.special == 1)
			? (mgr.guanqia1 || 1)
			: (mgr.guanqia || 1);
		const lv = Math.max(1, playable);
		// 经典玩法：guanqia 是 MapData 的 selectId（下标+1），列表格子序号需按 actualMapIndex 换算
		const listPos = mgr.special == 1 ? lv : MainUIManager.getClassicListIndexForSelectId(lv);

		this.ensureLoadedTo(listPos);
		this.scoll.viewport.validateNow();

		const layout: any = this.itemList.layout as any;
		const paddingTop = (layout && typeof layout.paddingTop === "number") ? layout.paddingTop : 0;
		const paddingLeft = (layout && typeof layout.paddingLeft === "number") ? layout.paddingLeft : 0;
		const paddingRight = (layout && typeof layout.paddingRight === "number") ? layout.paddingRight : 0;
		const hGap = (layout && typeof layout.horizontalGap === "number") ? layout.horizontalGap : 0;
		const vGap = (layout && typeof layout.verticalGap === "number") ? layout.verticalGap : 0;

		// 对齐 ContentsItem.exml 的尺寸（120x125）+ TileLayout 间距。
		const itemW = 120;
		const itemH = 125;
		const listW = this.itemList.width || 0;
		const availableW = Math.max(0, listW - paddingLeft - paddingRight);
		const cols = Math.max(1, Math.floor((availableW + hGap) / (itemW + hGap)));
		const row = Math.floor((listPos - 1) / cols);

		const targetScrollV = Math.max(0, paddingTop + row * (itemH + vGap) - (itemH + vGap));
		this.scoll.viewport.scrollV = targetScrollV;
		this.highlightLevelCell(listPos);
	}

	private highlightLevelCell(levelIndex: number): void {
		if (!this.itemList) return;
		const idx = levelIndex - 1;
		if (idx < 0) return;

		if (this._highlightTimer) {
			egret.clearTimeout(this._highlightTimer);
			this._highlightTimer = 0;
		}

		// 等待布局/渲染器创建完成后再取元素
		this._highlightTimer = egret.setTimeout(() => {
			this._highlightTimer = 0;
			let renderer: any = null;
			try {
				// List 继承 DataGroup，通常可用 getElementAt
				const anyList: any = this.itemList as any;
				if (anyList.getElementAt) {
					renderer = anyList.getElementAt(idx);
				} else if (anyList.getChildAt) {
					renderer = anyList.getChildAt(idx);
				}
			} catch (e) {
				renderer = null;
			}
			if (!renderer) return;

			egret.Tween.removeTweens(renderer);
			const sx = renderer.scaleX || 1;
			const sy = renderer.scaleY || 1;
			renderer.scaleX = sx;
			renderer.scaleY = sy;

			egret.Tween.get(renderer, { loop: false })
				.to({ scaleX: sx * 1.08, scaleY: sy * 1.08 }, 120, egret.Ease.quadOut)
				.to({ scaleX: sx, scaleY: sy }, 180, egret.Ease.backOut)
				.wait(60)
				.to({ alpha: 0.75 }, 80)
				.to({ alpha: 1 }, 80);
		}, this, 50);
	}

	public addEvts(): void {
		this.itemList.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchList, this);
		this.scoll.addEventListener(eui.UIEvent.CHANGE, this.onScrollChange, this);
		this.dailyBtn.addEventListener(egret.TouchEvent.TOUCH_END, this.onDailyChallenge, this);
		this.timedBtn.addEventListener(egret.TouchEvent.TOUCH_END, this.onTimedChallenge, this);
		this.endlessBtn.addEventListener(egret.TouchEvent.TOUCH_END, this.onEndlessChallenge, this);
		if (this.reverseBtn) this.reverseBtn.addEventListener(egret.TouchEvent.TOUCH_END, this.onReverseChallenge, this);
		if (this.ruleDebugBtn) this.ruleDebugBtn.addEventListener(egret.TouchEvent.TOUCH_END, this.onToggleRuleDebug, this);
		this.signOK.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickSignOk, this);
		this.signClose.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickSignClose, this);
		// 钻石框点击事件
		this.zsPanel.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickZsPanel, this);
		// 看视频
		this.show_video_ok.addEventListener(egret.TouchEvent.TOUCH_END, this.OnShowVideoOk, this);
		this.show_video_cancel.addEventListener(egret.TouchEvent.TOUCH_END, this.OnShowVideoCancel, this);

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
		if (this.ruleDebugBtn) this.ruleDebugBtn.removeEventListener(egret.TouchEvent.TOUCH_END, this.onToggleRuleDebug, this);
		if (this._highlightTimer) {
			egret.clearTimeout(this._highlightTimer);
			this._highlightTimer = 0;
		}
		this.signOK.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickSignOk, this);
		this.signClose.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickSignClose, this);
		// 钻石框点击事件
		this.zsPanel.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickZsPanel, this);
		// 看视频
		this.show_video_ok.removeEventListener(egret.TouchEvent.TOUCH_END, this.OnShowVideoOk, this);
		this.show_video_cancel.removeEventListener(egret.TouchEvent.TOUCH_END, this.OnShowVideoCancel, this);

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
		// 视频看完 继续游戏
		if (ok == 1) {
			// 刷新显示的金币
			if (this.signDate.show_vedio == 0) {
				MainUIManager.getInstance().score += 200
				MainUIManager.getInstance().saveData()
				this.score_num.text = MainUIManager.getInstance().score.toString()
				// 显示动画
				// var tw = egret.Tween.get(this.score_num, { loop: false })
				// tw.wait(1).to({ height: -this.score_num.height }, 1000).to({ height: this.score_num.height }, 1000)
			}
		}
		this.signDate.show_vedio += 1
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
		let targ = e.target;
		if (targ.parent == this.itemList) {
			let item: ContentItem = targ;
			if (item.index >= 0) {
				MainUIManager.getInstance().bHelp = false // 不是求助而来的一律设置false
				if (MainUIManager.getInstance().special == 0) {
					const rowData: any = item.data;
					const actualIdx = rowData && rowData.actualMapIndex != null ? rowData.actualMapIndex : (item.index - 1);
					if (item.index == 888) {
						this.op += 1
						if (this.op == 8) {
							var data1 = {
								score: 0,
								guanqia: 0,
								selectId: 0,
								scrollV: 0,
							}
							data1.score = 8880
							data1.guanqia = MyConst.MapData.length - 1
							data1.selectId = MainUIManager.getInstance().guanqia - 1
							data1.scrollV = MainUIManager.getInstance().scrollV
							egret.localStorage.setItem("huochaiData", JSON.stringify(data1));
							AlertBox.alert("修改成功!")
						}
					}
					const cur = MainUIManager.getInstance().guanqia || 0;
					const isFirstWhenZero = (cur == 0 && item.index == 1);
					const isUnlocked = isFirstWhenZero || (actualIdx + 1 <= cur);
					if (!isUnlocked) {
						AlertBox.alert("该关卡未解锁，先通关前面的关卡吧！", this.scrollToPlayableLevel, this, "去可玩关");
						return;
					}

					MainUIManager.getInstance().selectId = actualIdx + 1;
					MainUIManager.getInstance().scrollV = this.scoll.viewport.scrollV;
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
						AlertBox.alert("该关卡未解锁，先通关前面的关卡吧！", this.scrollToPlayableLevel, this, "去可玩关");
						return;
					}
					var itemIndex = item.index
					var maxLen = MyConst.MathMapData.length
					if (itemIndex > maxLen) {
						AlertBox.alert("达到最大配置关卡，等待更新吧!")
						return
					}
					MainUIManager.getInstance().selectId = MainUIManager.getInstance().guanqia1
					//this.showUILeft(new Mission(itemIndex - 1));
					this.showUILeft(new GameMath(itemIndex - 1));
					MainUIManager.getInstance().special = 1
				}
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
		const mgr = MainUIManager.getInstance()
		const keepTab = mgr.lastMainTab
		this.other.visible = false
		this.pintu.visible = false
		this.syncRuleDebugBtn()
		this.syncModeToggleBtn()
		const high = mgr.getEndlessHighScore();
		if (this.endlessBtn) this.endlessBtn.label = this.getEndlessBtnText(high);
		if (this.timedBtn) this.timedBtn.label = "记忆挑战"
		this.syncReverseInfo()
		this.syncEndlessInfo()
		this.resetLevelList(false);

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

	private syncRuleDebugBtn(): void {
		if (!this.ruleDebugBtn) return
		this.ruleDebugBtn.label = MainUIManager.getInstance().isRuleDebugEnabled() ? "规则调试:开" : "规则调试:关"
	}

	private syncModeToggleBtn(): void {
		if (!this.reverseBtn) return
		this.reverseBtn.label = "数字玩法"
	}

	private syncMainTabs(): void {
		const mgr = MainUIManager.getInstance()
		this.applyTabState(this.timedBtn, mgr.lastMainTab == "reverse")
		this.applyTabState(this.endlessBtn, mgr.lastMainTab == "endless")
		this.applyTabState(this.dailyBtn, mgr.lastMainTab == "daily")
		this.applyTabState(this.reverseBtn, mgr.lastMainTab == "mode")
		this.applyTabLine(this.timedTabLine, mgr.lastMainTab == "reverse")
		this.applyTabLine(this.endlessTabLine, mgr.lastMainTab == "endless")
		this.applyTabLine(this.dailyTabLine, mgr.lastMainTab == "daily")
		this.applyTabLine(this.modeTabLine, mgr.lastMainTab == "mode")
		this.syncSelectedTabCard(mgr.lastMainTab || "mode")
	}

	private syncTabPage(): void {
		const mgr = MainUIManager.getInstance()
		const tab = mgr.lastMainTab || "mode"
		const isLevelList = tab == "endless" || tab == "mode"
		if (this.scoll) this.scoll.visible = isLevelList
		if (this.tabPageGroup) this.tabPageGroup.visible = !isLevelList
		if (this.reverseInfo) this.reverseInfo.visible = tab == "reverse"
		if (this.reverseStars) this.reverseStars.visible = tab == "reverse"
		if (this.endlessInfo) this.endlessInfo.visible = tab == "endless"
		if (this.other) {
			this.other.visible = false
			this.other.label = mgr.special == 1 ? "切换经典玩法" : "切换数字玩法"
		}
		if (this.pintu) this.pintu.visible = false
		if (this.img_box) this.img_box.visible = !isLevelList
		if (this.rewardLabel) this.rewardLabel.visible = !isLevelList
		if (this.quickStart) {
			this.quickStart.enabled = true
			this.quickStart.label = this.getQuickStartLabel(tab)
		}
		this.syncReverseInfo()
		this.syncEndlessInfo()
		if (isLevelList) {
			this.resetLevelList(false)
			return
		}
		if (!this.tabPageTitle || !this.tabPageDesc) return
		if (tab == "reverse") {
			this.tabPageTitle.text = "记忆挑战"
			this.tabPageDesc.text = this.buildReverseTabDesc()
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
			"从完成态出发，在限定步数内还原到初始图形。",
			"",
			"当前进度：" + lv + "/" + mgr.getReverseTotalLevels(),
			"当前难度：" + mgr.getReverseDifficultyLabel(lv) + " " + mgr.getReverseDifficultyStars(lv),
			"",
			"奖励规则：",
			"首次通关 +5星",
			"重复通关 +1星",
			"连续成功3关额外 +3星",
			"失败不扣星"
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
		const map: any = {
			reverse: 0,
			endless: 172,
			daily: 344,
			mode: 516
		}
		const x = map[tab] != null ? map[tab] : 516
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
		//this.syncReverseStars(mgr.getReverseDifficultyValue())
	}

	private syncReverseStars(active: number): void {
		if (!this.reverseStars) return
		this.reverseStars.visible = true
		for (let i = 1; i <= 5; i++) {
			const star = this["reverseStar" + i] as eui.Image
			if (!star) continue
			const lit = i <= active
			star.alpha = lit ? 1 : 0.7
			star.filters = lit ? null : [this._inactiveStarFilter]
		}
	}

	private onToggleRuleDebug(): void {
		const on = MainUIManager.getInstance().toggleRuleDebug()
		this.syncRuleDebugBtn()
		AlertBox.alert(on ? "规则调试已开启\n进入关卡可看到规则层判定信息" : "规则调试已关闭", null, null, "知道了")
	}

	public loadData() {
		let data = egret.localStorage.getItem("huochaiData");
		if (data != null && data != "") {
			this._data = JSON.parse(data);
			MainUIManager.getInstance().score = this._data.score
			MainUIManager.getInstance().guanqia = this._data.guanqia
			MainUIManager.getInstance().selectId = this._data.selectId
			MainUIManager.getInstance().scrollV = this._data.scrollV
			MainUIManager.getInstance().guanqia1 = this._data.guanqia1
			MainUIManager.getInstance().guanqiaReverse = this._data.guanqiaReverse || 1
		}

	}

	////////////////
	private OnClickBox() {
		this.onClickZsPanel()
	}
	private OnClickSignBtn() {
		this.showSignPanel()
	}

	private OnClickQuickStart() {
		const tab = MainUIManager.getInstance().lastMainTab || "mode"
		if (tab == "reverse") {
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
			MainUIManager.getInstance().selectId = actualIdx + 1;
			this.showUILeft(new Mission(actualIdx));
		} else if (MainUIManager.getInstance().special == 1) {
			var itemIndex = MainUIManager.getInstance().guanqia1
			var maxLen = MyConst.MathMapData.length
			if (itemIndex > maxLen) {
				AlertBox.alert("达到最大配置关卡，等待更新吧!")
				return
			}
			MainUIManager.getInstance().selectId = MainUIManager.getInstance().guanqia1
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
		mgr.lastMainTab = "daily"
		this.syncMainTabs()
		this.syncTabPage()
	}

	private onDailyAction(): void {
		const mgr = MainUIManager.getInstance();
		const label = mgr.getDailyActionLabel();
		mgr.dailyAction();
		if (label === "领取奖励") {
			this.score_num.text = mgr.score.toString();
			AlertBox.alert(`领取成功！获得${mgr.getDailyReward()}星星`, null, null, "知道了");
			return;
		}
		this.startOrContinueDaily();
	}

	private startOrContinueDaily(): void {
		const mgr = MainUIManager.getInstance();
		mgr.startDailyChallenge();
		const task = mgr.getDailyCurrentTask();
		if (!task) {
			AlertBox.alert("今日挑战已完成，记得领取奖励！", null, null, "知道了");
			return;
		}
		// 进入挑战关卡
		MainUIManager.getInstance().bHelp = false;
		MainUIManager.getInstance().special = task.mode;

		if (task.mode == 1) {
			this.showUILeft(new GameMath(task.level - 1));
			return;
		}

		MainUIManager.getInstance().selectId = task.level;
		MainUIManager.getInstance().scrollV = this.scoll && this.scoll.viewport ? this.scoll.viewport.scrollV : -1;
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
		mgr.lastMainTab = "reverse"
		this.syncMainTabs()
		this.syncTabPage()
	}

	private onEndlessChallenge(): void {
		const mgr = MainUIManager.getInstance();
		mgr.special = 0
		mgr.lastMainTab = "endless"
		this.syncMainTabs()
		this.syncTabPage()
	}

	private onReverseChallenge(): void {
		const mgr = MainUIManager.getInstance();
		mgr.special = 1
		mgr.lastMainTab = "mode"
		this.syncModeToggleBtn()
		this.syncMainTabs()
		this.syncTabPage()
	}

	private startReverseChallenge(): void {
		const mgr = MainUIManager.getInstance()
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
		this.showUILeft(new Mission(actualIdx));
	}
}