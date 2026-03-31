/**
 * 网页设计分辨率：须与根目录 index.html、template/web/index.html 里
 * data-content-width / data-content-height 保持一致。
 */
namespace GameDesign {
	export const CONTENT_WIDTH = 750;
	export const CONTENT_HEIGHT = 1334;
	/** 以 720 宽为基准时的分享裁切参数，实际输出按 CONTENT_WIDTH 同比缩放 */
	export const SHARE_BASE_W = 720;
	export const SHARE_CROP_Y = 300;
	export const SHARE_CROP_H = 568;
	export const SHARE_DEST_H = 576;

	export function shareCropParams(): { x: number; y: number; width: number; height: number; destWidth: number; destHeight: number } {
		const k = CONTENT_WIDTH / SHARE_BASE_W;
		return {
			x: 0,
			y: Math.round(SHARE_CROP_Y * k),
			width: CONTENT_WIDTH,
			height: Math.round(SHARE_CROP_H * k),
			destWidth: CONTENT_WIDTH,
			destHeight: Math.round(SHARE_DEST_H * k)
		};
	}

	/**
	 * fixedWidth 下 stage.stageHeight 随设备变长；EUI 皮肤若写死 1280 高，底栏 bottom=0 只贴在皮肤底而非屏底。
	 * 将全屏根组件宽高设为舞台逻辑尺寸，内部用 top/bottom 约束的底栏会贴真实屏底。
	 */
	export function syncRootUiToStage(root: eui.Component): void {
		const st = egret.MainContext.instance.stage;
		if (!st || !root) return;
		const w = st.stageWidth > 0 ? st.stageWidth : CONTENT_WIDTH;
		const h = st.stageHeight > 0 ? st.stageHeight : CONTENT_HEIGHT;
		if (root.width !== w) root.width = w;
		if (root.height !== h) root.height = h;
	}

	/**
	 * 首次执行一次同步，并在舞台尺寸变化时重复；从舞台移除 root 时卸下监听。
	 */
	export function bindStageResizeFit(root: eui.Component, onResize?: () => void): void {
		const st = egret.MainContext.instance.stage;
		if (!st || !root) return;
		const handler = () => {
			syncRootUiToStage(root);
			if (onResize) onResize();
		};
		handler();
		st.addEventListener(egret.Event.RESIZE, handler, null);
		const onRemoved = () => {
			st.removeEventListener(egret.Event.RESIZE, handler, null);
			root.removeEventListener(egret.Event.REMOVED_FROM_STAGE, onRemoved, root);
		};
		root.addEventListener(egret.Event.REMOVED_FROM_STAGE, onRemoved, root);
	}
}
