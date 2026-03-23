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
