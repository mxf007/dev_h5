/**
 * 微信云开发入口：集中 init / 首屏拉取 / 存档后上传。
 * 游戏侧（Main、MainUIManager）保持无顶层 import，通过 require 调用本模块，避免破坏全局脚本边界。
 */
import { CloudConfig } from "./CloudConfig";
import { WechatCloudService, initWechatCloud } from "./services/WechatCloudService";

/** 游戏启动时：初始化云环境并尝试下载合并远端存档 */
export function initCloudOnGameStart(): void {
	if (typeof wx === "undefined") return;
	try {
		initWechatCloud(CloudConfig.getEnvId());
		WechatCloudService.getInstance().autoDownloadAndMerge().catch(function (err: any) {
			console.error("自动下载云端数据失败:", err);
		});
	} catch (e) { }
}

/** 本地 saveData 写入完成后：异步上传当前进度到云 */
export function afterLocalSaveUploadCloud(): void {
	if (typeof wx === "undefined" || !wx.cloud) return;
	try {
		WechatCloudService.getInstance().autoUpload().catch(function () { });
	} catch (e) { }
}
