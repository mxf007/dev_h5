/**
* 
*
* author mxf
* Date   2020-07-16 15:41:55
*
*/
class ContentItem extends eui.ItemRenderer {

	public index: number
	/** 经典玩法：对应 MyConst.MapData 下标；与 data.actualMapIndex 同步，供点击时取关 */
	public actualMapIndex?: number;

	protected img_bg: eui.Image;
	protected content_Id: eui.Label;
	protected img_lock: eui.Image;
	public constructor() {
		super();
		this.index = -1;
	}

	protected dataChanged(): void {
		// 列表虚拟化复用 Item 时，清掉高亮缓动遗留的缩放/透明度，避免格子显示与数据错位
		egret.Tween.removeTweens(this);
		this.scaleX = 1;
		this.scaleY = 1;
		this.alpha = 1;

		this.index = this.data.index;
		this.content_Id.text = this.data.index
		if (this.data && this.data.actualMapIndex != null) {
			this.actualMapIndex = this.data.actualMapIndex;
		} else {
			this.actualMapIndex = undefined;
		}

		var lv = MainUIManager.getInstance().guanqia
		if (MainUIManager.getInstance().special == 1)
		{
			lv = MainUIManager.getInstance().guanqia1
			if ( lv == undefined || lv == null)
			{
			 	MainUIManager.getInstance().guanqia1=1
				lv = 1
			}
		}

		const mapIndex = this.actualMapIndex != null ? this.actualMapIndex : (this.index - 1);
		const isFirstWhenZero = (lv == 0 && this.index == 1);
		const isUnlocked = MainUIManager.getInstance().special == 0
			? (isFirstWhenZero || (mapIndex + 1 <= lv))
			: (isFirstWhenZero || (this.index <= lv));
		const isCurrent = MainUIManager.getInstance().special == 0
			? (this.index === MainUIManager.getClassicListIndexForSelectId(lv))
			: (lv == this.index);

		if (isCurrent){
			var img_path = RES.getRes(("huochai_json.menu3"))
			this.img_bg.$setTexture(img_path)
		}
		else if(isUnlocked){
			var img_path = RES.getRes(("huochai_json.menu1"))
			this.img_bg.$setTexture(img_path)
		}else{
			var img_path = RES.getRes(("huochai_json.menu2"))
			this.img_bg.$setTexture(img_path)
		}

		if (this.img_lock) {
			this.img_lock.visible = !isUnlocked;
		}
		this.alpha = isUnlocked ? 1 : 0.55;
		this.content_Id.textColor = isUnlocked ? 0xffffff : 0xcccccc;
	}

	protected childrenCreated() {
		super.childrenCreated();
	}

}