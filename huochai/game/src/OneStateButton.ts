class OneStateButton extends eui.Button implements eui.UIComponent {
	public sound: string = "click_dialog.mp3";  //按钮音效
	public constructor() {
		super();
	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}

	protected childrenCreated(): void {
		super.childrenCreated();
		this.updateLabelDisplayStyle()
	}

	protected updateDisplayList(unscaledWidth: number, unscaledHeight: number): void {
		super.updateDisplayList(unscaledWidth, unscaledHeight)
		this.updateLabelDisplayStyle()
	}

	private getLabelDisplay(): eui.Label {
		const anyThis: any = this as any
		return anyThis.labelDisplay as eui.Label
	}

	private updateLabelDisplayStyle(): void {
		const lb = this.getLabelDisplay()
		if (!lb) return
		lb.textAlign = "center"
		lb.verticalAlign = "middle"
		lb.wordWrap = false
		lb.size = Math.max(18, Math.min(42, lb.size || 30))
		if (this.width > 0) {
			lb.width = Math.max(10, this.width - 16)
		}
		lb.validateNow()
		// Auto-shrink for long labels to avoid overflow on small buttons.
		let guard = 0
		while (lb.textWidth > lb.width && lb.size > 18 && guard < 12) {
			lb.size = lb.size - 1
			lb.validateNow()
			guard++
		}
	}

	public refresh()
	{
		this.scaleX = 1;
		this.scaleY = 1;
		this.alpha = 1;
	}

	protected onTouchBegin(e: egret.TouchEvent): void {
		super.onTouchBegin(e);
		this.scaleX = 1.1;
		this.scaleY = 1.1;
		this.alpha = 0.9;

		if (this.sound && this.sound != "") {
			mylib.GmGlobal.sound.playSoundEffect(this.sound);
		}
		this.stage.addEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnd, this);
	}
	protected onTouchEnd(e: egret.TouchEvent): void {
		this.refresh();
		this.stage.removeEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnd, this);
	}

	protected onTouchCancle(e: egret.TouchEvent): void{
		super.onTouchCancle(e);
		this.refresh();
	}

	protected buttonReleased(): void {
		this.refresh();
	}
}
