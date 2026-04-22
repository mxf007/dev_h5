/** Webpack / Egret 打包时提供的模块加载 */
declare function require(module: string): any;

/**
 * 微信小程序全局对象类型声明
 */
declare namespace wx {
    interface Cloud {
        init(options?: { env?: string | { database?: string; storage?: string; functions?: string }; traceUser?: boolean }): void;
        database(): any;
        callFunction(options: any): any;
        uploadFile(options: any): any;
        downloadFile(options: any): any;
        getTempFilePath(options: any): any;
    }

    interface WxCloudDatabase {
        collection(name: string): any;
    }

    interface WxCollection {
        doc(docId: string): any;
        add(options: any): any;
        get(options?: any): any;
        set(options: any): any;
        update(options: any): any;
        remove(options: any): any;
    }

    const cloud: Cloud;
}

/**
 * 微信小游戏平台API类型定义
 */

interface WxCloud {
    init(config?: { env?: string }): void;
    database(): any;
    uploadFile(obj: { filePath: string, cloudPath: string, success: Function, fail: Function }): any;
    downloadFile(obj: { fileID: string, success: Function, fail: Function }): any;
    callFunction(obj: { name: string, data: any, success: Function, fail: Function }): any;
}

interface Wx {
    cloud: WxCloud;
    getSystemInfoSync(): any;
    request(obj: any): any;
    login(obj: any): any;
}

declare var wx: Wx;

/**
 * 非微信环境下的模拟对象
 */
declare const GameGlobal: any;