declare function pfCommand(cmd: string, data: any, cb: Function, thisObj: any);


class MainUIManager {
	private static _instance: MainUIManager;
	public static getInstance(): MainUIManager {
		if (!this._instance) {
			this._instance = new MainUIManager();
		}

		return this._instance;
	}

	public selectId = 1;
	public scrollV = -1;
	public selectTag = -1;
	public maxLevel = 1000; // 最大关卡
	private _init = true;

	private  shareLevel =0;
	public score = 0; //玩家积分
	public guanqia = 1;// guanka 默认1
	public guanqia1 = 1;// 数字玩法关卡
	public guanqiaReverse = 1;// 反转玩法关卡

	public bHelp = false; // 求助而来
	public firstComing = true; // 第一次进入

	public special = 0;  // 0 默认玩法 1 数字玩法

	// ===== 反转模式 =====
	public bReverseMode: boolean = false;
	public reverseChallengeLevelId: number = 0;
	private static readonly REVERSE_CLEAR_KEY = "huochaiReverseClear";
	private static readonly REVERSE_STREAK_KEY = "huochaiReverseStreak";
	private static readonly REVERSE_POOL_EASY: number[] = [20, 30, 31, 33, 40, 42, 54, 36];
	private static readonly REVERSE_POOL_MID: number[] = [60, 68, 69, 18, 29, 37, 46, 61];
	private static readonly REVERSE_POOL_HARD: number[] = [73, 16, 25, 27, 35, 38, 44, 21];
	private _reversePoolCache: number[] = null;

	// ===== 限时挑战 =====
	public bTimedChallenge: boolean = false;
	public timedChallengeStartTime: number = 0;
	// 限时挑战内部重排后的关卡ID（与真实 selectId 解耦）
	public timedChallengeLevelId: number = 0;

	// ===== 连续闯关 =====
	public bEndlessMode: boolean = false;
	public endlessLevel: number = 1;
	private static readonly ENDLESS_HIGH_KEY = "huochaiEndlessHigh";
	private static readonly ENDLESS_TIME_KEY = "huochaiEndlessTimeStats";
	private static readonly MATH_TIME_KEY = "huochaiMathTimeStats";
	private static readonly RULE_DEBUG_KEY = "huochaiRuleDebug";
	private _ruleDebugLoaded: boolean = false;
	private _ruleDebug: boolean = false;
	public lastMainTab: string = "mode";
	public getEndlessHighScore(): number {
		const raw = egret.localStorage.getItem(MainUIManager.ENDLESS_HIGH_KEY);
		return raw ? parseInt(raw, 10) || 0 : 0;
	}
	public setEndlessHighScore(v: number): void {
		egret.localStorage.setItem(MainUIManager.ENDLESS_HIGH_KEY, "" + v);
	}

	private loadEndlessTimeStats(): { [level: string]: { best: number, total: number, count: number } } {
		const raw = egret.localStorage.getItem(MainUIManager.ENDLESS_TIME_KEY);
		if (!raw) return {};
		try {
			const data = JSON.parse(raw);
			return data && typeof data === "object" ? data : {};
		} catch (e) {
			return {};
		}
	}

	private saveEndlessTimeStats(data: { [level: string]: { best: number, total: number, count: number } }): void {
		egret.localStorage.setItem(MainUIManager.ENDLESS_TIME_KEY, JSON.stringify(data || {}));
	}

	public recordEndlessLevelTime(level: number, sec: number): void {
		if (level <= 0 || sec <= 0) return;
		const stats = this.loadEndlessTimeStats();
		const key = "" + level;
		const prev = stats[key] || { best: 0, total: 0, count: 0 };
		const best = prev.best > 0 ? Math.min(prev.best, sec) : sec;
		stats[key] = {
			best: Math.round(best * 100) / 100,
			total: Math.round((prev.total + sec) * 100) / 100,
			count: (prev.count || 0) + 1,
		};
		this.saveEndlessTimeStats(stats);
	}

	public getEndlessLevelBestTime(level: number): number {
		const row = this.loadEndlessTimeStats()["" + level];
		return row && row.best > 0 ? row.best : 0;
	}

	public getEndlessLevelAvgTime(level: number): number {
		const row = this.loadEndlessTimeStats()["" + level];
		if (!row || !row.count) return 0;
		return Math.round((row.total / row.count) * 100) / 100;
	}

	public getEndlessDisplayLevel(): number {
		const max = Math.max(1, (MyConst && MyConst.MapData) ? MyConst.MapData.length : 1);
		const next = this.getEndlessHighScore() + 1;
		return Math.max(1, Math.min(next, max));
	}

	private loadMathTimeStats(): { [level: string]: { best: number, total: number, count: number } } {
		const raw = egret.localStorage.getItem(MainUIManager.MATH_TIME_KEY);
		if (!raw) return {};
		try {
			const data = JSON.parse(raw);
			return data && typeof data === "object" ? data : {};
		} catch (e) {
			return {};
		}
	}

	private saveMathTimeStats(data: { [level: string]: { best: number, total: number, count: number } }): void {
		egret.localStorage.setItem(MainUIManager.MATH_TIME_KEY, JSON.stringify(data || {}));
	}

	public recordMathLevelTime(level: number, sec: number): void {
		if (level <= 0 || sec <= 0) return;
		const stats = this.loadMathTimeStats();
		const key = "" + level;
		const prev = stats[key] || { best: 0, total: 0, count: 0 };
		const best = prev.best > 0 ? Math.min(prev.best, sec) : sec;
		stats[key] = {
			best: Math.round(best * 100) / 100,
			total: Math.round((prev.total + sec) * 100) / 100,
			count: (prev.count || 0) + 1,
		};
		this.saveMathTimeStats(stats);
	}

	public getMathLevelBestTime(level: number): number {
		const row = this.loadMathTimeStats()["" + level];
		return row && row.best > 0 ? row.best : 0;
	}

	public getMathLevelAvgTime(level: number): number {
		const row = this.loadMathTimeStats()["" + level];
		if (!row || !row.count) return 0;
		return Math.round((row.total / row.count) * 100) / 100;
	}

	private buildReverseChallengePool(): number[] {
		const fixed = ([] as number[]).concat(
			MainUIManager.REVERSE_POOL_EASY,
			MainUIManager.REVERSE_POOL_MID,
			MainUIManager.REVERSE_POOL_HARD
		)
		if (!MyConst || !MyConst.MapData) return fixed.length > 0 ? fixed : [1]
		const valid = fixed.filter((id: number) => {
			const m = MyConst.MapData[id - 1]
			return !!(m && m.mapType != 999 && m.bef && m.rst && m.rst[0] && m.bef.length == m.rst[0].length)
		})
		return valid.length > 0 ? valid : [1]
	}

	public getReverseChallengePool(): number[] {
		if (!this._reversePoolCache) this._reversePoolCache = this.buildReverseChallengePool()
		return this._reversePoolCache
	}

	public getReverseTotalLevels(): number {
		return this.getReverseChallengePool().length
	}

	public getReverseCurrentLevel(): number {
		const total = this.getReverseTotalLevels()
		return Math.max(1, Math.min(this.guanqiaReverse || 1, total))
	}

	public getReverseActualSelectId(level?: number): number {
		const pool = this.getReverseChallengePool()
		const lv = Math.max(1, Math.min(level || this.getReverseCurrentLevel(), pool.length))
		return pool[lv - 1]
	}

	private loadReverseClear(): { [k: string]: number } {
		const raw = egret.localStorage.getItem(MainUIManager.REVERSE_CLEAR_KEY)
		if (!raw) return {}
		try {
			const data = JSON.parse(raw)
			return data && typeof data === "object" ? data : {}
		} catch (e) {
			return {}
		}
	}

	private saveReverseClear(data: { [k: string]: number }): void {
		egret.localStorage.setItem(MainUIManager.REVERSE_CLEAR_KEY, JSON.stringify(data || {}))
	}

	public getReverseStreak(): number {
		const raw = egret.localStorage.getItem(MainUIManager.REVERSE_STREAK_KEY)
		return raw ? (parseInt(raw, 10) || 0) : 0
	}

	private setReverseStreak(v: number): void {
		egret.localStorage.setItem(MainUIManager.REVERSE_STREAK_KEY, "" + Math.max(0, v || 0))
	}

	public getReverseDifficultyValue(level?: number): number {
		const lv = Math.max(1, Math.min(level || this.getReverseCurrentLevel(), this.getReverseTotalLevels()))
		if (lv <= MainUIManager.REVERSE_POOL_EASY.length) return 1
		if (lv <= MainUIManager.REVERSE_POOL_EASY.length + MainUIManager.REVERSE_POOL_MID.length) return 3
		return 5
	}

	public getReverseDifficultyStars(level?: number): string {
		const val = this.getReverseDifficultyValue(level)
		return "★".repeat(val) + "☆".repeat(Math.max(0, 5 - val))
	}

	public getReverseDifficultyLabel(level?: number): string {
		const val = this.getReverseDifficultyValue(level)
		if (val <= 1) return "非常简单"
		if (val <= 3) return "中等"
		return "偏难"
	}

	public getReverseInfoText(): string {
		const lv = this.getReverseCurrentLevel()
		return "当前Lv" + lv + "/" + this.getReverseTotalLevels() + " " + this.getReverseDifficultyLabel(lv)
	}

	public getReverseRuleText(): string {
		const lines: string[] = []
		lines.push("【反转挑战规则】")
		lines.push("从完成态出发，在限定步数内还原到初始图形")
		lines.push("关卡分层：非常简单 ★☆☆☆☆ / 中等 ★★★☆☆ / 偏难 ★★★★★")
		lines.push("首次通关：+5星")
		lines.push("重复通关：+1星")
		lines.push("连续成功3关：额外+3星")
		lines.push("失败不扣星")
		lines.push("")
		const lv = this.getReverseCurrentLevel()
		lines.push("当前进度：" + lv + "/" + this.getReverseTotalLevels() + " " + this.getReverseDifficultyLabel(lv) + " " + this.getReverseDifficultyStars(lv))
		return lines.join("\n")
	}

	private ensureRuleDebugLoaded(): void {
		if (this._ruleDebugLoaded) return
		const raw = egret.localStorage.getItem(MainUIManager.RULE_DEBUG_KEY)
		this._ruleDebug = raw === "1"
		this._ruleDebugLoaded = true
	}

	public isRuleDebugEnabled(): boolean {
		this.ensureRuleDebugLoaded()
		return this._ruleDebug
	}

	public setRuleDebugEnabled(v: boolean): void {
		this.ensureRuleDebugLoaded()
		this._ruleDebug = !!v
		egret.localStorage.setItem(MainUIManager.RULE_DEBUG_KEY, this._ruleDebug ? "1" : "0")
	}

	public toggleRuleDebug(): boolean {
		const next = !this.isRuleDebugEnabled()
		this.setRuleDebugEnabled(next)
		return next
	}

	// ===== 每日挑战 =====
	private static readonly DAILY_KEY = "huochaiDailyChallenge";
	private _daily: any = null;
	private _dailyActive: boolean = false;
	private _dailyTaskIndex: number = -1;
	private _dailyReward: number = 100; // 完成3关奖励星星

	public constructor() {
	}

	private getTodayStr(): string {
		const d = new Date();
		const y = d.getFullYear();
		const pad2 = (n: number) => (n < 10 ? ("0" + n) : ("" + n));
		const m = pad2(d.getMonth() + 1);
		const day = pad2(d.getDate());
		return `${y}-${m}-${day}`;
	}

	private loadDaily(): any {
		const raw = egret.localStorage.getItem(MainUIManager.DAILY_KEY);
		if (!raw) return null;
		try {
			return JSON.parse(raw);
		} catch (e) {
			return null;
		}
	}

	private saveDaily(): void {
		if (!this._daily) return;
		egret.localStorage.setItem(MainUIManager.DAILY_KEY, JSON.stringify(this._daily));
	}

	private createDailyTasks(): any {
		// 策略：2 个拼图（尽量 1 添加 + 1 移动/删除，避开等式关）+ 1 个数字玩法
		const maxClassic = Math.max(1, Math.min(this.guanqia || 1, (MyConst.MapData ? MyConst.MapData.length : 1)));
		const maxMath = Math.max(1, Math.min(this.guanqia1 || 1, (MyConst.MathMapData ? MyConst.MathMapData.length : 1)));

		let seed = Date.now() + (this.getTodayStr().charCodeAt(0) || 0) * 13;
		const rnd = () => { seed = (seed * 9301 + 49297) % 233280; return seed / 233280; };

		// 按玩法类型分组：1 添加 2 移动 3 删除，排除 mapType==999（等式关），步数至少 2
		const pools: { [k: number]: number[] } = { 1: [], 2: [], 3: [] };
		for (let i = 0; i < maxClassic && i < (MyConst.MapData ? MyConst.MapData.length : 0); i++) {
			const m = MyConst.MapData[i];
			if (m.mapType == 999) continue;
			const gt = m.rule && m.rule[0] ? m.rule[0] : 1;
			if (gt >= 1 && gt <= 3 && m.rule[1] >= 2) {
				if (!pools[gt]) pools[gt] = [];
				pools[gt].push(i + 1);
			}
		}

		// 优先：添加1个 + 移动/删除1个；若某类不足则从其他类补
		const allClassic: number[] = [];
		for (let k = 1; k <= 3; k++) allClassic.push.apply(allClassic, pools[k] || []);
		const pickFrom = (arr: number[], exclude: number[]): number => {
			const ok = arr.filter(x => exclude.indexOf(x) < 0);
			if (ok.length <= 0) return arr.length > 0 ? arr[Math.floor(rnd() * arr.length)] : 1;
			return ok[Math.floor(rnd() * ok.length)];
		};

		const classic: number[] = [];
		// 第一关：优先添加
		if (pools[1] && pools[1].length > 0) {
			classic.push(pickFrom(pools[1], []));
		}
		// 第二关：优先移动或删除
		const moveOrDel = (pools[2] || []).concat(pools[3] || []);
		if (moveOrDel.length > 0) {
			classic.push(pickFrom(moveOrDel, classic));
		}
		// 不足 2 个时从全部已解锁补
		while (classic.length < 2 && allClassic.length > 0) {
			const n = pickFrom(allClassic, classic);
			if (classic.indexOf(n) < 0) classic.push(n);
			else break;
		}
		if (classic.length < 1) classic.push(1);
		if (classic.length < 2) classic.push(classic[0]);

		// 数字玩法：从已解锁范围随机 1 个
		const mathLv = maxMath > 0 ? 1 + Math.floor(rnd() * maxMath) : 1;

		// 限制条件：0无 1仅删除 2仅移动 3禁用提示
		const constraint = Math.floor(rnd() * 4);
		let finalClassic = classic;
		if (constraint == 1 && pools[3] && pools[3].length >= 2) {
			finalClassic = [pickFrom(pools[3], []), pickFrom(pools[3], [pools[3][0]])];
			if (finalClassic.length < 2) finalClassic = classic;
		} else if (constraint == 2 && pools[2] && pools[2].length >= 2) {
			finalClassic = [pickFrom(pools[2], []), pickFrom(pools[2], [pools[2][0]])];
			if (finalClassic.length < 2) finalClassic = classic;
		}

		const tasks = [
			{ mode: 0, level: finalClassic[0] || 1 },
			{ mode: 0, level: finalClassic[1] || finalClassic[0] || 1 },
			{ mode: 1, level: mathLv },
		];

		return {
			date: this.getTodayStr(),
			tasks,
			done: [false, false, false],
			rewardClaimed: false,
			constraint: constraint,
		};
	}

	public ensureDailyReady(): void {
		const today = this.getTodayStr();
		const cur = this.loadDaily();
		if (!cur || cur.date !== today || !cur.tasks || !cur.done) {
			this._daily = this.createDailyTasks();
			this.saveDaily();
		} else {
			this._daily = cur;
		}
	}

	public getDailySummaryText(): string {
		this.ensureDailyReady();
		const d = this._daily;
		const tasks = d.tasks || [];
		const done = d.done || [];
		const c = d.constraint;
		const constraintStr = c == 1 ? "今日限制：仅删除" : (c == 2 ? "今日限制：仅移动" : (c == 3 ? "今日限制：禁用提示" : ""));
		const t = (i: number) => {
			const tag = done[i] ? "✅" : "⬜";
			const mode = tasks[i].mode == 1 ? "数字" : "拼图";
			return `${tag} ${mode} 第${tasks[i].level}关`;
		};
		const lines = ["每日挑战（完成3关领奖励）"];
		if (constraintStr) lines.push(constraintStr);
		lines.push(t(0), t(1), t(2), `全部完成可领取：${this._dailyReward}星星`);
		return lines.join("\n");
	}

	public getDailyConstraint(): number {
		this.ensureDailyReady();
		return (this._daily && this._daily.constraint != null) ? this._daily.constraint : 0;
	}

	public getDailyActionLabel(): string {
		this.ensureDailyReady();
		if (this._daily.rewardClaimed) return "已完成";
		const allDone = this._daily.done && this._daily.done.every((x: any) => x === true);
		if (allDone) return "领取奖励";
		return "开始挑战";
	}

	public dailyAction(): void {
		this.ensureDailyReady();
		if (this._daily.rewardClaimed) {
			return;
		}
		const allDone = this._daily.done && this._daily.done.every((x: any) => x === true);
		if (allDone) {
			this._daily.rewardClaimed = true;
			this.score += this._dailyReward;
			this.saveData();
			this.saveDaily();
			return;
		}
		this.startDailyChallenge();
	}

	public getDailyReward(): number {
		return this._dailyReward;
	}

	public startDailyChallenge(): void {
		this.ensureDailyReady();
		this._dailyActive = true;
		this._dailyTaskIndex = this.findNextDailyTaskIndex();
	}

	public startReverseChallenge(): void {
		this.bReverseMode = true;
		this.bEndlessMode = false;
		this.bTimedChallenge = false;
		this.reverseChallengeLevelId = this.getReverseCurrentLevel();
		this.selectId = this.getReverseActualSelectId(this.reverseChallengeLevelId);
		this.bHelp = false;
		this.special = 0;
	}

	public onReverseChallengeWin(): { reward: number, firstPass: boolean, streak: number, comboBonus: number, nextLevel: number, finishedAll: boolean } {
		const cur = this.getReverseCurrentLevel()
		const total = this.getReverseTotalLevels()
		const clear = this.loadReverseClear()
		const key = "" + cur
		const firstPass = !clear[key]
		clear[key] = 1
		this.saveReverseClear(clear)
		let streak = this.getReverseStreak() + 1
		let reward = firstPass ? 5 : 1
		let comboBonus = 0
		if (streak > 0 && streak % 3 == 0) {
			comboBonus = 3
			reward += comboBonus
		}
		this.setReverseStreak(streak)
		this.score += reward
		if (this.guanqiaReverse < total) {
			this.guanqiaReverse++
		}
		this.reverseChallengeLevelId = this.getReverseCurrentLevel()
		this.saveData()
		return {
			reward,
			firstPass,
			streak,
			comboBonus,
			nextLevel: this.getReverseCurrentLevel(),
			finishedAll: cur >= total
		}
	}

	public onReverseChallengeFail(): void {
		this.setReverseStreak(0)
	}

	private findNextDailyTaskIndex(): number {
		if (!this._daily || !this._daily.done) return -1;
		for (let i = 0; i < this._daily.done.length; i++) {
			if (!this._daily.done[i]) return i;
		}
		return -1;
	}

	public isDailyActive(): boolean {
		return this._dailyActive && this._dailyTaskIndex >= 0;
	}

	public getDailyCurrentTask(): any {
		if (!this.isDailyActive()) return null;
		return this._daily.tasks[this._dailyTaskIndex];
	}

	public markDailyWinAndAdvance(): void {
		if (!this.isDailyActive()) return;
		if (this._daily && this._daily.done && this._dailyTaskIndex >= 0) {
			this._daily.done[this._dailyTaskIndex] = true;
			this.saveDaily();
		}
		this._dailyTaskIndex = this.findNextDailyTaskIndex();
		if (this._dailyTaskIndex < 0) {
			this._dailyActive = false;
		}
	}
	public ListenServer() {
		mylib.GmGlobal.server.Request("/hrd/getdata", null, this, this.onUpdate);
	}

	public unLockNeedStar(index) {
		var cnt = index * 2 - 2;
		if (index > 10) {
			cnt += (index - 10);
		}
		return cnt;
	}

	// 分享标题
	private shareTitle = "火柴拼图";
	public getShareTitle() {
		return this.shareTitle;
	}

	// 标题
	private gameTitle = "";
	public getGameTitle() {
		return this.gameTitle;
	}

	// 作者
	private gameAuther = "";
	public getGameAuther() {
		return this.gameAuther;
	}

	public saveData()
	{
		var data ={
			score: 0,
			guanqia: 0,
			selectId:0,
			scrollV:0,
			guanqia1: 0,
			guanqiaReverse: 0,
		}
		data.score = MainUIManager.getInstance().score
		data.guanqia = MainUIManager.getInstance().guanqia
		data.selectId = MainUIManager.getInstance().selectId
		data.scrollV = MainUIManager.getInstance().scrollV
		data.guanqia1 = MainUIManager.getInstance().guanqia1
		data.guanqiaReverse = MainUIManager.getInstance().guanqiaReverse
		egret.localStorage.setItem("huochaiData", JSON.stringify(data));
	}

	private onUpdate(event:egret.Event): void {
		var request = <egret.HttpRequest>event.currentTarget;
		console.log("get data : ",request.response);
		let ret=JSON.parse(request.response);
		if (ret.ret == 0)
		{
			this._init=true;

			this.shareLevel=ret.data.level
		}
		else
		{
			console.log("error data");
		}
	}

	public isInit(){
		return this._init;
	}

	/** MapData 中 mapType!=999 的下标（0-based），与主界面列表项 data.actualMapIndex 一致 */
	public static getClassicLevelMapIndices(): number[] {
		if (!MyConst.MapData) return [];
		const arr: number[] = [];
		for (let i = 0; i < MyConst.MapData.length; i++) {
			if (MyConst.MapData[i].mapType != 999) arr.push(i);
		}
		return arr;
	}

	/**
	 * guanqia / selectId 为 MapData 下标+1。
	 * 返回经典主界面列表上从 1 开始的格子序号（与 item.index 一致），用于滚动、高亮、「当前关」与快速开始。
	 */
	public static getClassicListIndexForSelectId(selectId: number): number {
		const classic = MainUIManager.getClassicLevelMapIndices();
		if (classic.length === 0) return 1;
		const targetMapIndex = Math.max(0, (selectId || 1) - 1);
		let nextIdx = -1;
		for (let j = 0; j < classic.length; j++) {
			if (classic[j] >= targetMapIndex) {
				nextIdx = j;
				break;
			}
		}
		if (nextIdx < 0) return classic.length;
		return nextIdx + 1;
	}
}