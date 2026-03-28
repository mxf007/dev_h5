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
}
