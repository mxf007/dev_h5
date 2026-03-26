/**
 * 玩法配置 - 可扩展的玩法模式定义
 */
export interface ILevelRule {
	gameType: number;  // 1添加 2移动 3删除 4挑战
	steps: number;
	shape1?: number;  // 1正方形 2三角形
	count1?: number;
	shape2?: number;
	count2?: number;
}

export interface IMapLevel {
	mapType: number;
	rule: number[];
	bef: number[];
	rst: number[][];
}

export interface IMathLevel {
	mapType: number;
	rule: number[];
	bef: number[];
	rst: number[][];
}

/** 玩法模式枚举 */
export enum GameplayMode {
	Classic = 0,      // 经典拼图
	Math = 1,         // 数字等式
	Daily = 2,        // 每日挑战
	Timed = 3,        // 限时挑战
	Endless = 4,      // 连续闯关
	Reverse = 5,      // 记忆挑战
}

/** 操作类型 */
export enum OpType {
	Add = 1,
	Move = 2,
	Delete = 3,
}

/** 等式操作符 */
export enum MathOperator {
	Plus = 1,
	Minus = 2,
}

/** 难度等级 */
export enum DifficultyLevel {
	Easy = 1,
	Medium = 2,
	Hard = 3,
}

export const GameplayConfig = {
	/** 每日挑战奖励星星 */
	dailyReward: 100,
	/** 限时挑战时间(秒) */
	timedLimit: 60,
	/** 限时奖励: 30秒内 */
	timedBonusFast: 5,
	/** 限时奖励: 60秒内 */
	timedBonusNormal: 2,
	/** 连续闯关每关星星 */
	endlessStarsPerLevel: 5,
	/** 提示消耗星星 */
	hintCost: 200,
	/** 关卡进入动画时长 */
	levelEnterAnimDuration: 350,
};
