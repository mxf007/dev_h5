
//var sz0 = [1,1,1,0,1,1,1];  	111011
//var sz1 = [0,0,0,0,0,1,1];	11
//var sz2 = [0,1,1,1,1,1,0];	111110
//var sz3 = [0,0,1,1,1,1,1];	11111
//var sz4 = [1,0,0,1,0,1,1];	1001011
//var sz5 = [1,0,1,1,1,0,1];	1011101
//var sz6 = [1,1,1,1,1,0,1];	1111101
//var sz7 = [0,0,1,0,0,1,1];	10011
//var sz8 = [1,1,1,1,1,1,1];	1111111
//var sz9 = [1,0,1,1,1,1,1];	1011111
//var sz11 = [1,1,0,0,0,1,1];	1100011

class MainUIView_v1 extends mylib.UIBase {
	private btn_start: OneStateButton;

	private guankaLv: eui.Label
	private numGroup: eui.Group
	private img_1: eui.Image
	private img_2: eui.Image
	private img_3: eui.Image
	private img_4: eui.Image
	private img_5: eui.Image
	private img_6: eui.Image
	private img_7: eui.Image

	private numGroupB: eui.Group
	private imgB_1: eui.Image
	private imgB_2: eui.Image
	private imgB_3: eui.Image
	private imgB_4: eui.Image
	private imgB_5: eui.Image
	private imgB_6: eui.Image
	private imgB_7: eui.Image

	private numGroupC: eui.Group
	private imgC_1: eui.Image
	private imgC_2: eui.Image
	private imgC_3: eui.Image
	private imgC_4: eui.Image
	private imgC_5: eui.Image
	private imgC_6: eui.Image
	private imgC_7: eui.Image

	private szImgA = []
	private szImgB = []
	private szImgC = []
	private number: number

	private numA: eui.Group	//a
	private numB: eui.Group	//b
	private numC: eui.Group	//c
	private symbol: number	// 1+ 2- 3* 4/

	private symbolImg_1: eui.Image
	private symbolImg_2: eui.Image

	private rect1: eui.Rect
	private rect2: eui.Rect
	private selctObj: any			// 拖动的目标
	private selctObjPosX: number
	private selctObjPosY: number
	private tagObj: any				// 目标对象
	private curLv: number // 当前关卡 
	private step:number 	// 移动的步数
	private revivification:OneStateButton // 还原按钮


	private checkEquation:OneStateButton
	private szPos = []
	public constructor() {
		super("MainUISkin");

		this.popallitem()
		this.initNumberUI()

		this.initEqualityNum()


		
	}

	public initNumberUI(){
		this.szImgA.push(this.img_1)
		this.szImgA.push(this.img_2)
		this.szImgA.push(this.img_3)
		this.szImgA.push(this.img_4)
		this.szImgA.push(this.img_5)
		this.szImgA.push(this.img_6)
		this.szImgA.push(this.img_7)

		this.szImgB.push(this.imgB_1)
		this.szImgB.push(this.imgB_2)
		this.szImgB.push(this.imgB_3)
		this.szImgB.push(this.imgB_4)
		this.szImgB.push(this.imgB_5)
		this.szImgB.push(this.imgB_6)
		this.szImgB.push(this.imgB_7)

		this.szImgC.push(this.imgC_1)
		this.szImgC.push(this.imgC_2)
		this.szImgC.push(this.imgC_3)
		this.szImgC.push(this.imgC_4)
		this.szImgC.push(this.imgC_5)
		this.szImgC.push(this.imgC_6)
		this.szImgC.push(this.imgC_7)

		for (var i = 0; i < 7;++i){
			this.szImgA[i].name = "a" + i.toString()
			this.szImgB[i].name = "b" + i.toString()
			this.szImgC[i].name = "c" + i.toString()
		}
	}
	public initEqualityNum(){
		var a //= //MyConst.GuanQiaLv[this.curLv][0]
		var b //= MyConst.GuanQiaLv[this.curLv][1]
		var c //= MyConst.GuanQiaLv[this.curLv][2]
		var f //= MyConst.GuanQiaLv[this.curLv][3]

		this.equation(a, b, c)
		this.SetSymbol(f)
		this.pushTouchPoint()
	}

	public equation(a: number, b: number, c: number) {
		this.setNum(1, a)
		this.setNum(2, b)
		this.setNum(3, c)
	}

	public popallitem(){
		this.curLv = 0
		this.step = 0
		this.tagObj = -1
		this.selctObjPosX = 0
		this.selctObjPosY = 0
		// 显示关卡
		this.guankaLv.text = "关卡：" + (this.curLv + 1).toString()
	}

	public setNum(abc: number, num: number) {
		var sz = []
		switch (num) {
			case 0:
				sz = [1, 1, 1, 0, 1, 1, 1];  	//111011
				break
			case 1:
				sz = [0, 0, 0, 0, 0, 1, 1];	//11
				break
			case 2:
				sz = [0, 1, 1, 1, 1, 1, 0];	//111110
				break
			case 3:
				sz = [0, 0, 1, 1, 1, 1, 1];	//11111
				break
			case 4:
				sz = [1, 0, 0, 1, 0, 1, 1];	//1001011
				break
			case 5:
				sz = [1, 0, 1, 1, 1, 0, 1];	//1011101
				break
			case 6:
				sz = [1, 1, 1, 1, 1, 0, 1];	//1111101
				break
			case 7:
				sz = [0, 0, 1, 0, 0, 1, 1];	//10011
				break
			case 8:
				sz = [1, 1, 1, 1, 1, 1, 1];	//1111111
				break
			case 9:
				sz = [1, 0, 1, 1, 1, 1, 1];	//1011111
				break
			case 11:
				sz = [1, 1, 0, 0, 0, 1, 1];	//1100011
				break
			default:
				sz = [0, 0, 0, 0, 0, 0, 0];
		}

		if (abc == 1) {
			for (var i = 0; i < 7; i++) {
				if (sz[i] == 1) {
					this.szImgA[i].visible = true
				} else {
					this.szImgA[i].visible = false
				}
			}
		}
		else if (abc == 2) {
			for (var i = 0; i < 7; i++) {
				if (sz[i] == 1) {
					this.szImgB[i].visible = true
				} else {
					this.szImgB[i].visible = false
				}
			}
		} else if (abc == 3) {
			for (var i = 0; i < 7; i++) {
				if (sz[i] == 1) {
					this.szImgC[i].visible = true
				} else {
					this.szImgC[i].visible = false
				}
			}
		}

		// var n = this.getNum(1)
		// this..text = n.toString()
	}
	public getNum(abc: number): number {
		var tmpNum = 0
		var tagNum = 0
		if (abc == 1) {
			for (var i = 0; i < 7; i++) {
				if (this.szImgA[i].visible == true) {
					tmpNum += 1 * Math.pow(10, 6 - i)
				}
			}
		}
		else if (abc == 2) {
			for (var i = 0; i < 7; i++) {
				if (this.szImgB[i].visible == true) {
					tmpNum += 1 * Math.pow(10, 6 - i)
				}
			}
		}
		else if (abc == 3) {
			for (var i = 0; i < 7; i++) {
				if (this.szImgC[i].visible == true) {
					tmpNum += 1 * Math.pow(10, 6 - i)
				}
			}
		}

		if (tmpNum == 1110111) {
			tagNum = 0
		}
		else if (tmpNum == 11) {
			tagNum = 1
		}
		else if (tmpNum == 111110) {
			tagNum = 2
		}
		else if (tmpNum == 11111) {
			tagNum = 3
		}
		else if (tmpNum == 1001011) {
			tagNum = 4
		}
		else if (tmpNum == 1011101) {
			tagNum = 5
		}
		else if (tmpNum == 1111101) {
			tagNum = 6
		}
		else if (tmpNum == 10011) {
			tagNum = 7
		}
		else if (tmpNum == 1111111) {
			tagNum = 8
		}
		else if (tmpNum == 1011111) {
			tagNum = 9
		}
		else if (tmpNum == 1100011) {
			tagNum = 11
		}
		else {
			tagNum = -1
		}

		return tagNum
	}

	protected CheckEquation():boolean {

		var a = this.getNum(1)
		var b = this.getNum(2)
		var c = this.getNum(3)
		if (this.symbol == 0) {
			return false
		}
		if (this.symbol == 1)	//+
		{
			if (a + b == c) {
				return true
			}
		}
		else if (this.symbol == 2) //-
		{
			if (a - b == c) {
				return true
			}
		}
		else if (this.symbol == 3) //*
		{
			if (a * b == c) {
				return true
			}
		}
		else if (this.symbol == 4) // /
		{
			if (b == 0) {
				return false
			}
			if ((a / b == c) && (a % b == 0)) {
				return true
			}
		}
		return false
	}

	protected GetSymbol() {
		return this.symbol
	}

	//设置符号
	protected SetSymbol(iSymbol) {
		this.symbol = iSymbol
	}

	protected childrenCreated() {
		super.childrenCreated();
	}

	public addEvts(): void {
		this.stage.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.mouseDown, this);
		this.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.mouseMove, this);
		this.stage.addEventListener(egret.TouchEvent.TOUCH_END, this.mouseUp, this);
		this.checkEquation.addEventListener(egret.TouchEvent.TOUCH_END, this.CheckEquation, this);
		this.revivification.addEventListener(egret.TouchEvent.TOUCH_END, this.OnRestore, this);
	}

	public rmEvts(): void {
		this.stage.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.mouseDown, this);
		this.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.mouseMove, this);
		this.stage.removeEventListener(egret.TouchEvent.TOUCH_END, this.mouseUp, this);
		this.checkEquation.removeEventListener(egret.TouchEvent.TOUCH_END, this.CheckEquation, this);
		this.revivification.removeEventListener(egret.TouchEvent.TOUCH_END, this.OnRestore, this);
	}

	public onMusic(): void {
		//	this.btn_music.$setSelected(mylib.GmGlobal.sound.switchSoundOpen());
		//mylib.GmGlobal.sound.playSoundEffect("click_dialog.mp3");
	}


	public mouseDown(e: egret.TouchEvent) {

		
		if (e.target.name == "")
		{
			return
		}
		this.selctObj = e.target
		this.selctObjPosX = this.selctObj.x
		this.selctObjPosY = this.selctObj.y
	}

	public mouseMove(e: egret.TouchEvent) {
		this.tagObj = -1;
		this.szPos[i][0].visible = false
		for (var i = 0; i < this.szPos.length; i++) {
			if (this.szPos[i][1] - 20 <= e.stageX && this.szPos[i][3] + this.szPos[i][1] + 20 >= e.stageX &&
				this.szPos[i][2] - 20 <= e.stageY && this.szPos[i][4] + this.szPos[i][2] + 20  >= e.stageY) {
				this.szPos[i][0].visible = true	// 只显示一个
				this.tagObj = i

				break;
			}
		}
		this.selctObj.x = e.stageX
		this.selctObj.y = e.stageY

	}
	public mouseUp(e: egret.TouchEvent) {
		if (this.tagObj != -1) {
			this.szPos[this.tagObj][0].visible = true
			this.selctObj.x = this.selctObjPosX
			this.selctObj.y = this.selctObjPosY
			this.selctObj.visible = false
			// 更新szPos 数据
			this.szPos[this.tagObj] = [this.selctObj, this.selctObj.x, this.selctObj.y, this.selctObj.height, this.selctObj.width]
			console.debug("移动完成!")
			this.step ++; // 步数+1
			// 检查是否成立
			if (this.CheckEquation()) {

				AlertBox.alert("完成挑战",this.CompleteGame,this,"确定")
			}
		}else{// 还原原来的位置
			this.selctObj.x = this.selctObjPosX
			this.selctObj.y = this.selctObjPosY
		}
	}


	public showAt(p: egret.DisplayObjectContainer): void {
		super.showAt(p);
		mylib.GmGlobal.page.setPage({}, this.jumpPage, this)

		// 初始化声音
		//this.btn_music.$setSelected(mylib.GmGlobal.sound.isSoundOpen());
	}

	private jumpPage(view) {
		this.showUIRight(view);
	}

	// 保存能拖进去的坐标位置
	private pushTouchPoint() {
		this.szPos = []
		var data = []

		for (var i = 0; i < 7; i++) {
			if (this.szImgA[i].visible == false) {
				data.push([this.szImgA[i], this.szImgA[i].x, this.szImgA[i].y, this.szImgA[i].width, this.szImgA[i].height])
			}
		}
		for (var i = 0; i < 7; i++) {
			if (this.szImgB[i].visible == false) {
				data.push([this.szImgB[i], this.szImgB[i].x, this.szImgB[i].y, this.szImgB[i].width, this.szImgB[i].height])
			}
		}
		for (var i = 0; i < 7; i++) {
			if (this.szImgC[i].visible == false) {
				data.push([this.szImgC[i], this.szImgC[i].x, this.szImgC[i].y, this.szImgC[i].width, this.szImgC[i].height])
			}
		}
		for (var i = 0; i < data.length; i++) {
			this.szPos.push(data[i])
		}
	}
	
	// 还原配置
	private OnRestore(){
		this.initEqualityNum()
		this.step = 0
		this.tagObj = -1
	}
	
	private CompleteGame(){
		AlertBox.closeAlert()
		// 进入下一关 
		this.curLv ++
		// 显示关卡
		this.guankaLv.text = "关卡：" + (this.curLv + 1).toString()
		// if (this.curLv >= MyConst.GuanQiaLv.length){ // 完成所有的挑战
		// 	return 
		// }
		this.OnRestore()
	}
}