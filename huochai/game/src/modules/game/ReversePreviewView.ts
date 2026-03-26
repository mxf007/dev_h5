class ReversePreviewView extends mylib.UIBase {
	private static readonly DIGIT_SEGMENTS: number[][] = [
		[1, 1, 1, 1, 1, 1, 0], // 0
		[0, 1, 1, 0, 0, 0, 0], // 1
		[1, 1, 0, 1, 1, 0, 1], // 2
		[1, 1, 1, 1, 0, 0, 1], // 3
		[0, 1, 1, 0, 0, 1, 1], // 4
		[1, 0, 1, 1, 0, 1, 1], // 5
		[1, 0, 1, 1, 1, 1, 1], // 6
		[1, 1, 1, 0, 0, 0, 0], // 7
		[1, 1, 1, 1, 1, 1, 1], // 8
		[1, 1, 1, 1, 0, 1, 1], // 9
	]

	private titleLabel: eui.Label
	private subTitleLabel: eui.Label
	private countdownTip: eui.Label
	private tipsLabel: eui.Label
	private skipLabel: eui.Label
	private backLabel: eui.Label
	private rememberLabel: eui.Label
	private countdownGroup: eui.Group
	private previewHolder: eui.Group
	private okBtn: OneStateButton
	private closeBtn: OneStateButton

	private _remainSec: number = 10
	private _countdownToken: number = 0
	private _entered: boolean = false
	private _previewMap: MapGroup = null
	private _digitGroups: eui.Group[] = []
	private _urgentFilter: egret.GlowFilter = new egret.GlowFilter(0xFFB84D, 1, 18, 18, 2, 1, false, false)

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
		egret.Tween.removeTweens(this.countdownGroup)
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
		if (this.okBtn) this.okBtn.label = "跳过并开始"
		this.buildCountdownDigits()
		this.loadPreviewMap()
		this.startCountdown()
	}

	private buildCountdownDigits(): void {
		if (!this.countdownGroup) return
		this.countdownGroup.removeChildren()
		this._digitGroups = []
		const tens = this.createDigitGroup()
		tens.x = 0
		tens.y = 6
		this.countdownGroup.addChild(tens)
		this._digitGroups.push(tens)
		const ones = this.createDigitGroup()
		ones.x = 156
		ones.y = 6
		this.countdownGroup.addChild(ones)
		this._digitGroups.push(ones)
		this.renderCountdown(this._remainSec)
	}

	private createDigitGroup(): eui.Group {
		const g = new eui.Group()
		g.width = 128
		g.height = 146
		const tex = RES.getRes("huochai_json.ingame_matches_fix")
		for (let i = 0; i < 7; i++) {
			const seg = new eui.Image()
			seg.texture = tex
			seg.anchorOffsetX = 8
			seg.anchorOffsetY = 44
			seg.width = 16
			seg.height = 88
			seg.alpha = 0.18
			g.addChild(seg)
		}
		this.layoutDigitSegments(g)
		return g
	}

	private layoutDigitSegments(g: eui.Group): void {
		const segs = g.$children as eui.Image[]
		// 0: top, 1: upper-right, 2: lower-right, 3: bottom, 4: lower-left, 5: upper-left, 6: middle
		this.placeSegment(segs[0], 64, 12, true)
		this.placeSegment(segs[1], 112, 42, false)
		this.placeSegment(segs[2], 112, 102, false)
		this.placeSegment(segs[3], 64, 132, true)
		this.placeSegment(segs[4], 16, 102, false)
		this.placeSegment(segs[5], 16, 42, false)
		this.placeSegment(segs[6], 64, 72, true)
	}

	private placeSegment(seg: eui.Image, x: number, y: number, horizontal: boolean): void {
		seg.x = x
		seg.y = y
		seg.rotation = horizontal ? 90 : 0
	}

	private renderCountdown(sec: number): void {
		const show = Math.max(0, sec)
		const tens = Math.floor(show / 10)
		const ones = show % 10
		this.renderDigit(this._digitGroups[0], tens)
		this.renderDigit(this._digitGroups[1], ones)
		if (this.countdownTip) {
			this.countdownTip.text = show + " 秒后自动进入"
			this.countdownTip.textColor = show <= 3 ? 0xD86A00 : 0x7B6A58
		}
		this.syncUrgentState(show)
	}

	private renderDigit(group: eui.Group, num: number): void {
		if (!group) return
		const segs = group.$children as eui.Image[]
		const rule = ReversePreviewView.DIGIT_SEGMENTS[num] || ReversePreviewView.DIGIT_SEGMENTS[0]
		for (let i = 0; i < segs.length; i++) {
			const on = !!rule[i]
			segs[i].alpha = on ? 1 : 0.18
			segs[i].filters = null
		}
	}

	private loadPreviewMap(): void {
		if (!this.previewHolder) return
		this.previewHolder.removeChildren()
		const mgr = MainUIManager.getInstance()
		const idx = Math.max(0, mgr.selectId - 1)
		const mapType = MyConst.MapData[idx].mapType
		this._previewMap = new MapGroup(idx, mapType, false)
		this._previewMap.removeAllImgEvent()
		this._previewMap.touchEnabled = false
		this._previewMap.touchChildren = false
		this.previewHolder.addChild(this._previewMap)
		egret.callLater(this.layoutPreviewMap, this)
	}

	private layoutPreviewMap(): void {
		if (!this._previewMap || !this.previewHolder) return
		this._previewMap.validateNow()
		const bounds = this._previewMap.getBounds()
		const bw = Math.max(1, bounds.width || this._previewMap.width || 720)
		const bh = Math.max(1, bounds.height || this._previewMap.height || 720)
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
		egret.Tween.removeTweens(this.countdownGroup)
		if (this.countdownGroup) {
			this.countdownGroup.alpha = 1
			this.countdownGroup.scaleX = this.countdownGroup.scaleY = 1
			this.countdownGroup.filters = null
		}
	}

	private syncUrgentState(show: number): void {
		if (!this.countdownGroup) return
		egret.Tween.removeTweens(this.countdownGroup)
		if (show > 3 || show <= 0) {
			this.countdownGroup.alpha = 1
			this.countdownGroup.scaleX = this.countdownGroup.scaleY = 1
			this.countdownGroup.filters = null
			if (this.tipsLabel) {
				this.tipsLabel.text = "倒计时结束会自动进入拼图页面。"
				this.tipsLabel.textColor = 0x5B4D40
			}
			return
		}
		this.countdownGroup.filters = [this._urgentFilter]
		egret.Tween.get(this.countdownGroup, { loop: true })
			.to({ scaleX: 1.08, scaleY: 1.08, alpha: 1 }, 180, egret.Ease.quadOut)
			.to({ scaleX: 0.96, scaleY: 0.96, alpha: 0.72 }, 180, egret.Ease.quadIn)
			.to({ scaleX: 1.04, scaleY: 1.04, alpha: 1 }, 120, egret.Ease.quadOut)
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
