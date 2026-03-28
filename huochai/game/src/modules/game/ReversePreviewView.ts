class ReversePreviewView extends mylib.UIBase {
	private titleLabel: eui.Label
	private subTitleLabel: eui.Label
	private countdownTip: eui.Label
	private tipsLabel: eui.Label
	private skipLabel: eui.Label
	private backLabel: eui.Label
	private rememberLabel: eui.Label
	private previewHolder: eui.Group
	private okBtn: OneStateButton
	private closeBtn: OneStateButton

	private _remainSec: number = 10
	private _countdownToken: number = 0
	private _entered: boolean = false
	private _previewMap: MapGroup = null

	public constructor() {
		super("ReversePreviewSkin")
	}

	public addEvts(): void {
		this.okBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onOk, this)
		this.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBack, this)
	}

	public rmEvts(): void {
		this.okBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onOk, this)
		this.closeBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onBack, this)
		this.stopCountdown()
		if (this.countdownTip) egret.Tween.removeTweens(this.countdownTip)
		if (this._previewMap) this._previewMap.removeAllImgEvent()
	}

	public showAt(p: egret.DisplayObjectContainer): void {
		super.showAt(p)
		this.initView()
	}

	private initView(): void {
		const mgr = MainUIManager.getInstance()
		this.alpha = 1
		this.touchEnabled = true
		this.touchChildren = true
		const previewLv = mgr.reverseChallengeLevelId > 0 ? mgr.reverseChallengeLevelId : mgr.getReverseCurrentLevel()
		this.titleLabel.text = "记忆挑战 第" + previewLv + "关"
		this.subTitleLabel.text = "请记住要还原的目标图形"
		this.tipsLabel.text = "倒计时结束会自动进入拼图页面。"
		if (this.skipLabel) this.skipLabel.text = "点击下方按钮可跳过倒计时"
		if (this.backLabel) this.backLabel.text = "返回主页"
		if (this.rememberLabel) this.rememberLabel.text = "请记住这个结果"
	
		this.loadPreviewMap()
		this.startCountdown()
	}

	private renderCountdown(sec: number): void {
		const show = Math.max(0, sec)
		if (this.countdownTip) {
			this.countdownTip.text = show + " 秒后自动进入"
			this.countdownTip.textColor = show <= 3 ? 0xD86A00 : 0x7B6A58
		}
		this.syncUrgentState(show)
	}

	private loadPreviewMap(): void {
		if (!this.previewHolder) return
		this.previewHolder.removeChildren()
		const mgr = MainUIManager.getInstance()
		const previewLv = mgr.reverseChallengeLevelId > 0 ? mgr.reverseChallengeLevelId : mgr.getReverseCurrentLevel()
		const idx = Math.max(0, mgr.getReverseMemoryJiyiIndex(previewLv))
		const m = (MyConst.MapJiyiData && idx >= 0 && idx < MyConst.MapJiyiData.length && MyConst.MapJiyiData[idx])
			? MyConst.MapJiyiData[idx]
			: MyConst.MapData[idx]
		const mapType = m.mapType
		this._previewMap = new MapGroup(idx, mapType, false)
		this._previewMap.removeAllImgEvent()
		this._previewMap.touchEnabled = false
		this._previewMap.touchChildren = false
		this.previewHolder.addChild(this._previewMap)
		egret.callLater(() => {
			if (!this._previewMap || !m || !m.rst || !m.rst[0] || !m.bef || m.rst[0].length !== m.bef.length) {
				this.layoutPreviewMap()
				return
			}
			this._previewMap.showStaticMapState(m.rst[0])
			this.layoutPreviewMap()
		}, this)
	}

	private layoutPreviewMap(): void {
		if (!this._previewMap || !this.previewHolder) return
		this._previewMap.validateNow()
		const bounds = this._previewMap.getBounds()
		const bw = Math.max(1, bounds.width || this._previewMap.width || GameDesign.CONTENT_WIDTH)
		const bh = Math.max(1, bounds.height || this._previewMap.height || GameDesign.CONTENT_WIDTH)
		const maxW = this.previewHolder.width || 560
		const maxH = this.previewHolder.height || 360
		const scale = Math.min(1, (maxW - 20) / bw, (maxH - 20) / bh)
		this._previewMap.scaleX = this._previewMap.scaleY = scale
		this._previewMap.x = Math.round((maxW - bw * scale) / 2 - bounds.x * scale)
		this._previewMap.y = Math.round((maxH - bh * scale) / 2 - bounds.y * scale)
	}

	private startCountdown(): void {
		this.stopCountdown()
		this._remainSec = 10
		this.renderCountdown(this._remainSec)
		this._countdownToken = egret.setInterval(() => {
			this._remainSec--
			this.renderCountdown(this._remainSec)
			if (this._remainSec <= 0) {
				this.enterGame()
			}
		}, this, 1000)
	}

	private stopCountdown(): void {
		if (this._countdownToken) {
			egret.clearInterval(this._countdownToken)
			this._countdownToken = 0
		}
		if (this.countdownTip) {
			egret.Tween.removeTweens(this.countdownTip)
			this.countdownTip.scaleX = this.countdownTip.scaleY = 1
			this.countdownTip.filters = null
		}
	}

	private syncUrgentState(show: number): void {
		if (!this.countdownTip) return
		egret.Tween.removeTweens(this.countdownTip)
		if (show > 3 || show <= 0) {
			this.countdownTip.scaleX = this.countdownTip.scaleY = 1
			this.countdownTip.filters = null
			if (this.tipsLabel) {
				this.tipsLabel.text = "倒计时结束会自动进入拼图页面。"
				this.tipsLabel.textColor = 0x5B4D40
			}
			return
		}
		egret.Tween.get(this.countdownTip, { loop: true })
			.to({ scaleX: 1.04, scaleY: 1.04 }, 200, egret.Ease.quadOut)
			.to({ scaleX: 1, scaleY: 1 }, 200, egret.Ease.quadIn)
		if (this.tipsLabel) {
			this.tipsLabel.text = "记忆时间即将结束，请准备开始！"
			this.tipsLabel.textColor = 0xC95C1B
		}
	}

	private onOk(): void {
		this.enterGame()
	}

	private onBack(): void {
		this.stopCountdown()
		this.showUIRight(new MainUIView())
	}

	private enterGame(): void {
		if (this._entered) return
		this._entered = true
		this.stopCountdown()
		this.touchEnabled = false
		this.touchChildren = false
		egret.Tween.removeTweens(this)
		egret.Tween.get(this, { loop: false })
			.to({ alpha: 0 }, 180, egret.Ease.sineIn)
			.call(() => {
				this.showUILeft(new GameView())
			}, this)
	}
}
