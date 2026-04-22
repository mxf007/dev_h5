/**
 * 云开发环境配置文件
 * 
 * 请在发布前将 CLOUDBASE_ENV 替换为你的实际云开发环境ID
 */

const key = "cloud1-d1g7mkm0e08c4df66"
export class CloudConfig {
    // 云开发环境ID - 请替换为你的实际环境ID
    public static CLOUDBASE_ENV: string = key;  // 例如: 'prod-xxxxx'
    
    /**
     * 获取云开发环境ID
     */
    public static getEnvId(): string {
        return this.CLOUDBASE_ENV;
    }
    
    /**
     * 设置云开发环境ID
     */
    public static setEnvId(envId: string): void {
        this.CLOUDBASE_ENV = envId;
    }
}