
class Mission extends mylib.UIBase {
	//protected btn_back: OneStateButton;

	private mission_title :eui.Label
	protected mission_ok :OneStateButton; // ok
	protected mission_close:OneStateButton // close
	protected gameType:number;	// 1 add 2 remove  3 delete 4 chellenge	

	protected img_target_bg:eui.Image
	protected curLv:number;	//当前关口
	protected mission_rule:eui.Label
	private mission_target:eui.Image
	private txt_tool:eui.Label
	private txt_target:eui.Label
	private guize:eui.Label
	public constructor(curLv:number) {
		super("MissionSkin");
		this.curLv = curLv
		this.popallitem()
	}
	public addEvts(): void {
		this.mission_close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBack, this);
		this.mission_ok.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onOk, this);
	}

	public rmEvts(): void {
		this.mission_close.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onBack, this);
		this.mission_ok.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onOk, this);
	}

	public onBack(){
		egret.Tween.removeAllTweens();
		this.rmEvts()
		this.showUIRight(new MainUIView());
	}
	public onOk() {
		egret.Tween.removeAllTweens();
		this.rmEvts()
		this.showUILeft(new GameView());
	}

	protected childrenCreated() {
		super.childrenCreated();
	}


	public showAt(p: egret.DisplayObjectContainer): void {
		super.showAt(p);

	}
	
	private popallitem(){
		if (this.curLv >= MyConst.MapData.length ){
			return 
		}
		this.img_target_bg.addEventListener
		const rule = MyConst.MapData[this.curLv].rule
		var costNum = rule[1]
		var targetType = rule[2]	// 主目标类型
		var targetnum = rule[3]	// 主目标数量
		const hasDual = rule.length >= 6 && rule[4] > 0 && rule[5] > 0
		const targetType2 = hasDual ? rule[4] : 0
		const targetnum2 = hasDual ? rule[5] : 0
		this.gameType = rule[0]	// 类型： 1 add 2 remove  3 delete 4 chellenge	

		const shapeName = (shapeType: number): string => {
			if (shapeType == 2) return "正三角形"
			if (shapeType == 1) return "正方形"
			return "图形"
		}

		var img_path_tag = RES.getRes("huochai_json.ingame_mission_square")
		var img_path = RES.getRes("huochai_json.ingame_ui_add")
		if (this.gameType == 2){
			img_path = RES.getRes("huochai_json.ingame_ui_move")
		}
		else if (this.gameType == 3){
			img_path = RES.getRes("huochai_json.ingame_ui_delete")
		}else if (this.gameType == 4){
			img_path = RES.getRes("huochai_json.ingame_ui_chellenge")
		}
		this.img_target_bg.$setTexture(img_path)

		var strRule = ""
		if (this.gameType == 1)
		{
			this.guize.text = "添加"
			strRule += "添加"
		}else if (this.gameType == 2){
			strRule += "移动"
			this.guize.text = "移动"
		}else if (this.gameType == 3){
			strRule += "删除"
			this.guize.text = "删除"
		}
		this.txt_tool.text = costNum.toString()
		this.txt_target.text = hasDual ? (targetnum.toString() + "+" + targetnum2.toString()) : targetnum.toString()
		strRule += costNum.toString() + "根火柴\n变成"
		strRule += targetnum.toString() + "个" + shapeName(targetType)
		if (hasDual) {
			strRule += " + " + targetnum2.toString() + "个" + shapeName(targetType2)
		}
		if (targetType == 2)
		{
			img_path_tag = RES.getRes("huochai_json.ingame_mission_triangle")
		}
		this.mission_target.$setTexture(img_path_tag)
		this.mission_rule.text = strRule
		this.mission_rule.lineSpacing = 20 // 行间距
		this.mission_title.text = "第 " + (this.curLv+1).toString()+" 关"
	}
}

