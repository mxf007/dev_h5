class Main extends mylib.IMain {
	public listen(): void {
		MainUIManager.getInstance().ListenServer();
	}
	public run(): void {
		if (typeof wx !== "undefined") {
			try {
				require("./CloudBootstrap").initCloudOnGameStart();
			} catch (e) { }
		}
		
		MyConst.ensureDifficultyOrder();
		// 六边形引猫进窝 Demo：地址栏加 #hexcat 进入（如 index.html#hexcat）
		try {
			const h = (typeof window !== "undefined" && window["location"] && window["location"]["hash"]) || ""
			if (/hexcat/i.test(String(h))) {
				new HexCatMatchView().showAt(mylib.GmGlobal.uiLayer)
				return
			}
		} catch (e) { }
		new MainUIView().showAt(mylib.GmGlobal.uiLayer);
		// mylib.GmGlobal.sound.playBgm("MainLoop.ogg");
	}

	public getJumpView(data: any, curinfo: any) {
		// 类型检查：确保 data 存在且 page 属性有效
		if (!data || data.page === "" || data.page === undefined || data.page === null) {
			return null;
		}
		
		if (data.page === "help") {
			const lv = data.level;
			// 确保 lv 是有效数字或可转换为数字的字符串
			if (lv !== undefined && lv !== null && lv !== "") {
				const levelNum = parseInt(String(lv), 10);
				
				if (data.type === 0) {
					if (levelNum > 0) {
						// 增加边界检查，防止数组越界
						if (MyConst.MapData && MyConst.MapData[levelNum + 1]) {
							// var mapType = MyConst.MapData[levelNum + 1].mapType; // 如果 mapType 未使用可注释或删除
						}
						MainUIManager.getInstance().selectId = levelNum + 1;
						MainUIManager.getInstance().bHelp = true;
						return new GameView();
					}
					return new GameView();
				} else if (data.type === 1) {
					if (levelNum > 0) {
						// 增加边界检查
						if (MyConst.MathMapData && MyConst.MathMapData[levelNum + 1]) {
							// var mapType = MyConst.MathMapData[levelNum + 1].mapType;
						}
						MainUIManager.getInstance().selectId = levelNum + 1;
						MainUIManager.getInstance().bHelp = true;
						return new GameMath(levelNum); // 传递数字类型
					}
					return new GameMath(levelNum);
				}
			}
		}
		return null;
	}
}

class Com {
	/**
 * 提示一下文字
 * @param text 提示内容
 */
	public static Text(text: string, waittime = 3000, fromx = 360, fromy = 100): void {
		Com.MoveTextRect(mylib.GmGlobal.noticeLayer, text, fromx, fromy, waittime);
	}

	/**
     * 滚动对象
     * @param object 提示内容
     */
	public static MoveObject(parent: any, obj: any, waittime = 200, movetime = 0, toattr: any = {}, onEnd: Function = null, thisObj: any = null, ...args: any[]): void {
		if (!parent || !obj) {
			console.warn('Parent or object is null/undefined');
			return;
		}
		
		// 确保对象已经被正确初始化
		try {
			if (parent instanceof egret.DisplayObjectContainer) {
				parent.addChild(obj);
			} else {
				console.error('Parent is not a DisplayObjectContainer');
				return;
			}
		} catch (e) {
			console.error('Failed to add child to parent:', e);
			return;
		}
		
		const tw = egret.Tween.get(obj);
		if (waittime > 0) {
			tw.wait(waittime);
		}

		if (movetime > 0) {
			tw.to(toattr, movetime);
		}
		tw.call(Com.MoveObjectEnd, Com, [obj, parent, onEnd, thisObj, args]);
	}


	public static MoveObjectEnd(lable, parent, onEnd: Function = null, thisObj: any = null, ...args: any[]): void {
		if (!parent || !lable) {
			console.warn('Parent or label is null/undefined during removal');
			return;
		}
		
		try {
			if (parent.contains(lable)) {
				parent.removeChild(lable);
			}
		} catch (e) {
			console.error('Failed to remove child from parent:', e);
		}
		
		if (onEnd) {
			onEnd.call(thisObj, args);
		}
	}

	/**
     * 滚动文字
     * @param text 提示内容
     */
	public static MoveText(parent: any, text: string, fromx: number, fromy: number, waittime = 200, movetime = 0, tox: number = 0, toy: number = 0, onEnd: Function = null, thisObj: any = null, ...args: any[]): void {
		if (!parent) {
			console.warn('Parent is null/undefined for MoveText');
			return;
		}
		
		const lable = new eui.Label(text);
		lable.touchEnabled = false;
		lable.x = fromx;
		lable.y = fromy;
		lable.size = 24; // 设置字体大小，避免宽度/高度未定义
		lable.textColor = 0xFFFFFF; // 设置文字颜色
		lable.stroke = 2;
		lable.strokeColor = 0x000000;
		
		// 在微信小游戏中，异步获取宽高后再设置锚点
		egret.callLater(() => {
			// 检查对象是否还在显示列表中，避免访问已销毁的对象
			if (lable && lable.parent) {
				lable.anchorOffsetX = lable.width / 2;
				lable.anchorOffsetY = lable.height / 2;
			}
		}, this);
		
		Com.MoveObject(parent, lable, waittime, movetime, { x: tox, y: toy, alpha: 0 }, onEnd, thisObj, args);
	}

	/**
     * 滚动文字
     * @param text 提示内容
     */
	public static MoveTextRect(parent: any, text: string, fromx: number, fromy: number, waittime = 200, movetime = 0, tox: number = 0, toy: number = 0, onEnd: Function = null, thisObj: any = null, ...args: any[]): void {
		if (!parent) {
			console.warn('Parent is null/undefined for MoveTextRect');
			return;
		}
		
		const lable = new eui.Label(text);
		lable.touchEnabled = false;
		lable.x = fromx;
		lable.y = fromy;
		lable.size = 24; // 设置字体大小
		lable.textColor = 0xFFFFFF; // 设置文字颜色
		lable.stroke = 2;
		lable.strokeColor = 0x000000;
		
		// 在微信小游戏中，异步获取宽高后再设置锚点
		egret.callLater(() => {
			// 检查对象是否还在显示列表中，避免访问已销毁的对象
			if (lable && lable.parent) {
				lable.anchorOffsetX = lable.width / 2;
				lable.anchorOffsetY = lable.height / 2;
				
				// 创建矩形背景
				const rect = new eui.Rect(lable.width + 40, lable.height + 20, 0x000000);
				rect.touchEnabled = false;
				rect.alpha = 0.6;
				rect.x = fromx - 20;
				rect.y = fromy - 10;
				rect.anchorOffsetX = rect.width / 2;
				rect.anchorOffsetY = rect.height / 2;
				
				Com.MoveObject(parent, rect, waittime, movetime, { x: tox, y: toy, alpha: 0 });
				Com.MoveObject(parent, lable, waittime, movetime, { x: tox, y: toy, alpha: 0 }, onEnd, thisObj, args);
			}
		}, this);
	}
}