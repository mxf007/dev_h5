

class MainUIView extends mylib.UIBase {
	private btn_start: OneStateButton;

	///// 列表
	protected scoll: eui.Scroller;
	protected itemList: eui.List;
	private _arrayCollection: eui.ArrayCollection;

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
	private dailyBtn: OneStateButton
	private timedBtn: OneStateButton
	private endlessBtn: OneStateButton
	private reverseBtn: OneStateButton

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
		// MainUIManager.getInstance().score = 10000   // 测试代码加财富
		// MainUIManager.getInstance().guanqia = MyConst.MapData.length -1
		// MainUIManager.getInstance().saveData()
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
		this.other.addEventListener(egret.TouchEvent.TOUCH_END, this.OnClickOther, this); // 经典玩法
		this.pintu.addEventListener(egret.TouchEvent.TOUCH_END, this.OnClickPintu, this);
	}

	public rmEvts(): void {
		this.itemList.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchList, this);
		this.scoll.removeEventListener(eui.UIEvent.CHANGE, this.onScrollChange, this);
		this.dailyBtn.removeEventListener(egret.TouchEvent.TOUCH_END, this.onDailyChallenge, this);
		this.timedBtn.removeEventListener(egret.TouchEvent.TOUCH_END, this.onTimedChallenge, this);
		this.endlessBtn.removeEventListener(egret.TouchEvent.TOUCH_END, this.onEndlessChallenge, this);
		if (this.reverseBtn) this.reverseBtn.removeEventListener(egret.TouchEvent.TOUCH_END, this.onReverseChallenge, this);
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

		this.other.removeEventListener(egret.TouchEvent.TOUCH_END, this.OnClickOther, this); // 经典玩法
		this.pintu.removeEventListener(egret.TouchEvent.TOUCH_END, this.OnClickPintu, this);
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
		this.other.visible = false	
		const high = MainUIManager.getInstance().getEndlessHighScore();
		if (this.endlessBtn) this.endlessBtn.label = high > 0 ? ("连续闯关(最高" + high + ")") : "连续闯关";

		if (MainUIManager.getInstance().special == 0) {
			// this.other.visible = false
			// this.pintu.visible = true
			this.OnClickPintu()
		} else {
			this.OnClickOther()
			// this.other.visible = true
			// this.pintu.visible = false
		}

		MainUIManager.getInstance().bHelp = false
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

	private jumpPage(view) {
		this.showUIRight(view);
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
		MainUIManager.getInstance().special = 1
		this.other.visible = false
		this.pintu.visible = true
		this.resetLevelList(false);
	}

	private OnClickPintu() {

		//this.other.visible = true
		//this.pintu.visible = false
		MainUIManager.getInstance().special = 0
		//this.showUILeft(new GameMath(0));
		this.resetLevelList(false);
	}

	private onDailyChallenge(): void {
		const mgr = MainUIManager.getInstance();
		const txt = mgr.getDailySummaryText();
		const btn = mgr.getDailyActionLabel();
		AlertBox.alert(txt, this.onDailyAction, this, btn);
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
		const max = Math.max(1, Math.min(mgr.guanqia || 1, MyConst.MapData ? MyConst.MapData.length : 1));
		const lv = 1 + Math.floor(Math.random() * max);
		mgr.bTimedChallenge = true;
		mgr.selectId = lv;
		mgr.bHelp = false;
		mgr.special = 0;
		const idx = lv - 1;
		const mapType = MyConst.MapData[idx].mapType;
		if (mapType == 999) {
			this.showUILeft(new GameView());
		} else {
			this.showUILeft(new Mission(idx));
		}
	}

	private onEndlessChallenge(): void {
		const mgr = MainUIManager.getInstance();
		mgr.bEndlessMode = true;
		mgr.endlessLevel = 1;
		mgr.selectId = 1;
		mgr.bHelp = false;
		mgr.special = 0;
		this.showUILeft(new Mission(0));
	}

	private onReverseChallenge(): void {
		const mgr = MainUIManager.getInstance();
		mgr.bReverseMode = false;
		mgr.special = (mgr.special == 1) ? 0 : 1;
		this.resetLevelList(false);
	}
}