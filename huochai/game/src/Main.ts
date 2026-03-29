class Main extends mylib.IMain {
	public listen(): void {
		MainUIManager.getInstance().ListenServer();
	}
	public run(): void {
		MyConst.ensureDifficultyOrder();
		new MainUIView().showAt(mylib.GmGlobal.uiLayer);
		// mylib.GmGlobal.sound.playBgm("MainLoop.ogg");
	}

	public getJumpView(data: any, curinfo: any) {
		if (data.page == "" || data.page == undefined || data.page == null)// || data.page == curinfo.page)
		{
			return null;
		}
		if (data.page == "help") {
			var lv = data.level
			if (data.type == 0) {
				if (lv > 0) {
					var mapType = MyConst.MapData[parseInt(lv) + 1].mapType
					MainUIManager.getInstance().selectId = parseInt(lv) + 1
					MainUIManager.getInstance().bHelp = true
					return (new GameView());

				}
				return (new GameView());
			} else if (data.type == 1) {
				if (lv > 0) {
					var mapType = MyConst.MathMapData[parseInt(lv) + 1].mapType
					MainUIManager.getInstance().selectId = parseInt(lv) + 1
					MainUIManager.getInstance().bHelp = true
					return (new GameMath(lv));

				}
				return (new GameMath(lv));
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
	public static MoveObject(parent, obj, waittime = 200, movetime = 0, toattr = {}, onEnd: Function = null, thisObj: any = null, ...args: any[]): void {
		if (!parent || !obj) {
			console.warn('Parent or object is null/undefined');
			return;
		}
		
		// 确保对象已经被正确初始化
		try {
			parent.addChild(obj);
		} catch (e) {
			console.error('Failed to add child to parent:', e);
			return;
		}
		
		var tw = egret.Tween.get(obj);
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
	public static MoveText(parent, text: string, fromx, fromy, waittime = 200, movetime = 0, tox = 0, toy = 0, onEnd: Function = null, thisObj: any = null, ...args: any[]): void {
		if (!parent) {
			console.warn('Parent is null/undefined for MoveText');
			return;
		}
		
		var lable = new eui.Label(text);
		lable.touchEnabled = false;
		lable.x = fromx;
		lable.y = fromy;
		lable.size = 24; // 设置字体大小，避免宽度/高度未定义
		lable.textColor = 0xFFFFFF; // 设置文字颜色
		lable.stroke = 2;
		lable.strokeColor = 0x000000;
		
		// 在微信小游戏中，异步获取宽高后再设置锚点
		egret.callLater(() => {
			lable.anchorOffsetX = lable.width / 2;
			lable.anchorOffsetY = lable.height / 2;
		}, this);
		
		Com.MoveObject(parent, lable, waittime, movetime, { x: tox, y: toy, alpha: 0 }, onEnd, thisObj, args);
	}

	/**
     * 滚动文字
     * @param text 提示内容
     */
	public static MoveTextRect(parent, text: string, fromx, fromy, waittime = 200, movetime = 0, tox = 0, toy = 0, onEnd: Function = null, thisObj: any = null, ...args: any[]): void {
		if (!parent) {
			console.warn('Parent is null/undefined for MoveTextRect');
			return;
		}
		
		var lable = new eui.Label(text);
		lable.touchEnabled = false;
		lable.x = fromx;
		lable.y = fromy;
		lable.size = 24; // 设置字体大小
		lable.textColor = 0xFFFFFF; // 设置文字颜色
		lable.stroke = 2;
		lable.strokeColor = 0x000000;
		
		// 在微信小游戏中，异步获取宽高后再设置锚点
		egret.callLater(() => {
			lable.anchorOffsetX = lable.width / 2;
			lable.anchorOffsetY = lable.height / 2;
			
			// 创建矩形背景
			var rect = new eui.Rect(lable.width + 40, lable.height + 20, 0x000000);
			rect.touchEnabled = false;
			rect.alpha = 0.6;
			rect.x = fromx - 20;
			rect.y = fromy - 10;
			rect.anchorOffsetX = rect.width / 2;
			rect.anchorOffsetY = rect.height / 2;
			
			Com.MoveObject(parent, rect, waittime, movetime, { x: tox, y: toy, alpha: 0 });
			Com.MoveObject(parent, lable, waittime, movetime, { x: tox, y: toy, alpha: 0 }, onEnd, thisObj, args);
		}, this);
	}
}