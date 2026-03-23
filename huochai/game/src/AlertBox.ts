
class AlertBox extends mylib.UIBase {
    private static _alert: AlertBox;
    /**
     * 单按钮提示框
     * @param text 显示文本
     * @param onOk 确认回调
     * @param thisObj 回调this
     * @param okLable 按钮文本
     * @returns 确认按钮文本
     */
	public static alert(text: string, onOk: Function = null, thisObj: any = null, okLable: string = null): AlertBox {
		if (!mylib.GmGlobal.isResInit)
			return;
		if (!AlertBox._alert) {
			AlertBox._alert = new AlertBox();
			AlertBox._alert.showAt(mylib.GmGlobal.noticeLayer);
		}
		
		//更新内容
		AlertBox._alert.updateBox(text, okLable, onOk, thisObj);

		return AlertBox._alert;
	}

	public static closeAlert(): void {
		if (AlertBox._alert) {
			AlertBox._alert.close();
		}
	}

	private txt: eui.Label;
    private okBtn: OneStateButton;

    private _txt: string = "";
    private _btnTxt: string;
    private _okCB: Function;
    private _thisObj: any;

    public constructor() {
        super("alertSkin");
    }

    public addEvts(): void {
        this.okBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onOk, this);
    }

    public rmEvts(): void {
        this.okBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onOk, this);
    }

    /**
     * 显示对话框
     * @param parent 显示父容器
     */
    public showAt(parent: egret.DisplayObjectContainer): void {
        super.showAt(parent);
    }

    /**
     * 更新对话框
     * @param txt 显示文本内容
     * @param btnTxt 按钮文字
     * @param okCallback 按钮点击相应回调
     * @param thisObj 回调this
     */
    public updateBox(txt: string, btnTxt: string, okCallback: Function, thisObj: any): void {
        this._txt = txt;
        this._btnTxt = btnTxt;
        this._okCB = okCallback;
        this._thisObj = thisObj;

        this.update();
        this.visible=true;
        // this.scaleX = 0;
        // this.scaleY = 0;
        // egret.Tween.get(this).to({ scaleX: 1, scaleY: 1 }, 400, egret.Ease.backOut);
    }

    public update(): void {
        this.txt.text =this._txt || "";
        this.okBtn.label = this._btnTxt || "确认";
    }


    private onOk(e: egret.TouchEvent): void {
        if (this._okCB) {
            this._okCB.call(this._thisObj);
        }

        this.close();
    }

    public close(): void {
        this._okCB = null;
        this._thisObj = null;
        this.visible=false;
    }
}