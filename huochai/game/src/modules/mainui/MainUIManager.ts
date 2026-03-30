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
	/** 经典玩法关卡列表纵向滚动（与 special==0 对应） */
	public scrollVClassic: number = -1;
	/** 数字玩法关卡列表纵向滚动（与 special==1 对应） */
	public scrollVMath: number = -1;
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
	/** 记忆挑战：本次预览是否来自「中途通关后」的下一关（用于文案） */
	public reversePreviewAfterWin: boolean = false;
	private static readonly REVERSE_CLEAR_KEY = "huochaiReverseClear";
	private static readonly REVERSE_STREAK_KEY = "huochaiReverseStreak";
	/** 记忆挑战：步数用尽且未达成目标时扣除星星（不低于 0） */
	public static readonly REVERSE_FAIL_STAR_COST = 10;
	private _reversePoolCache: { mapJiyiIndex: number }[] = null;

	// ===== 主界面「记忆挑战」页签解锁 =====
	private static readonly MEMORY_CHALLENGE_UNLOCK_KEY = "huochaiMemoryChallengeUnlocked";
	public static readonly MEMORY_UNLOCK_MIN_STARS = 400;
	public static readonly MEMORY_UNLOCK_MIN_GUANQIA = 20;

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
	/** 与主界面 Tab 顺序一致时默认落在首位「经典玩法」 */
	public lastMainTab: string = "endless";
	public getEndlessHighScore(): number {
		const raw = egret.localStorage.getItem(MainUIManager.ENDLESS_HIGH_KEY);
		return raw ? parseInt(raw, 10) || 0 : 0;
	}
	public setEndlessHighScore(v: number): void {
		egret.localStorage.setItem(MainUIManager.ENDLESS_HIGH_KEY, "" + v);
	}

	private loadEndlessTimeStats(): { [level: string]: { best: number } } {
		const raw = egret.localStorage.getItem(MainUIManager.ENDLESS_TIME_KEY);
		if (!raw) return {};
		try {
			const data = JSON.parse(raw);
			return data && typeof data === "object" ? data : {};
		} catch (e) {
			return {};
		}
	}

	private saveEndlessTimeStats(data: { [level: string]: { best: number } }): void {
		egret.localStorage.setItem(MainUIManager.ENDLESS_TIME_KEY, JSON.stringify(data || {}));
	}

	public recordEndlessLevelTime(level: number, sec: number): void {
		if (level <= 0 || sec <= 0) return;
		const stats = this.loadEndlessTimeStats();
		const key = "" + level;
		const prev = stats[key];
		const prevBest = prev && prev.best > 0 ? prev.best : 0;
		const best = prevBest > 0 ? Math.min(prevBest, sec) : sec;
		stats[key] = { best: Math.round(best * 100) / 100 };
		this.saveEndlessTimeStats(stats);
	}

	public getEndlessLevelBestTime(level: number): number {
		const row = this.loadEndlessTimeStats()["" + level];
		return row && row.best > 0 ? row.best : 0;
	}

	public getEndlessDisplayLevel(): number {
		const max = Math.max(1, (MyConst && MyConst.MapData) ? MyConst.MapData.length : 1);
		const next = this.getEndlessHighScore() + 1;
		return Math.max(1, Math.min(next, max));
	}

	private loadMathTimeStats(): { [level: string]: { best: number } } {
		const raw = egret.localStorage.getItem(MainUIManager.MATH_TIME_KEY);
		if (!raw) return {};
		try {
			const data = JSON.parse(raw);
			return data && typeof data === "object" ? data : {};
		} catch (e) {
			return {};
		}
	}

	private saveMathTimeStats(data: { [level: string]: { best: number } }): void {
		egret.localStorage.setItem(MainUIManager.MATH_TIME_KEY, JSON.stringify(data || {}));
	}

	public recordMathLevelTime(level: number, sec: number): void {
		if (level <= 0 || sec <= 0) return;
		const stats = this.loadMathTimeStats();
		const key = "" + level;
		const prev = stats[key];
		const prevBest = prev && prev.best > 0 ? prev.best : 0;
		const best = prevBest > 0 ? Math.min(prevBest, sec) : sec;
		stats[key] = { best: Math.round(best * 100) / 100 };
		this.saveMathTimeStats(stats);
	}

	public getMathLevelBestTime(level: number): number {
		const row = this.loadMathTimeStats()["" + level];
		return row && row.best > 0 ? row.best : 0;
	}

	private buildReverseChallengePool(): { mapJiyiIndex: number }[] {
		return ReverseChallengeConfig.buildValidatedPool()
	}

	public getReverseChallengePool(): { mapJiyiIndex: number }[] {
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

	/** MapJiyiData 的 0-based 下标（与经典关卡 selectId 无关） */
	public getReverseMemoryJiyiIndex(level?: number): number {
		const pool = this.getReverseChallengePool()
		const lv = Math.max(1, Math.min(level || this.getReverseCurrentLevel(), pool.length))
		return pool[lv - 1].mapJiyiIndex
	}

	/** 仅作与 GameView.curLv = selectId-1 的载体：selectId = jiyiIndex + 1 */
	public getReverseActualSelectId(level?: number): number {
		return this.getReverseMemoryJiyiIndex(level) + 1
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
		const pool = this.getReverseChallengePool()
		const total = pool.length
		const lv = Math.max(1, Math.min(level || this.getReverseCurrentLevel(), total))
		return ReverseChallengeConfig.getDifficultyValue(lv, pool)
	}

	public getReverseDifficultyStars(level?: number): string {
		const val = this.getReverseDifficultyValue(level)
		return "★".repeat(val) + "☆".repeat(Math.max(0, 5 - val))
	}

	public getReverseDifficultyLabel(level?: number): string {
		const val = this.getReverseDifficultyValue(level)
		if (val <= 1) return "简单"
		if (val <= 3) return "中等"
		return "偏难"
	}

	public getReverseInfoText(): string {
		const lv = this.getReverseCurrentLevel()
		return "当前Lv" + lv + "/" + this.getReverseTotalLevels() + " " + this.getReverseDifficultyLabel(lv)
	}

	public getReverseRuleText(): string {
		const lines: string[] = []
		lines.push("【记忆挑战规则】")
		lines.push("在限定步数内还原到初始图形")
		lines.push("关卡难度：简单 ★☆☆☆☆ / 中等 ★★★☆☆ / 偏难 ★★★★★")
		lines.push("首次通关：+5星")
		lines.push("重复通关：+1星")
		lines.push("连续成功3关：额外+3星")
		lines.push("判定失败：-" + MainUIManager.REVERSE_FAIL_STAR_COST + "星（星星不低于0）")
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
		// 策略：经典两关按 guanqia 分段在关卡号区间内随机；候选池按整张 MapData 该区间建（可未解锁），最后才用已解锁池兜底
		const mapLen = MyConst.MapData ? MyConst.MapData.length : 1;
		const maxClassic = Math.max(1, Math.min(this.guanqia || 1, mapLen));
		const maxMath = Math.max(1, Math.min(this.guanqia1 || 1, (MyConst.MathMapData ? MyConst.MathMapData.length : 1)));

		const gq = Math.max(1, this.guanqia | 0);
		let bandMin: number;
		let bandMax: number;
		if (gq <= 15) {
			bandMin = 15;
			bandMax = Math.min(30, mapLen);
		} else if (gq <= 30) {
			bandMin = 25;
			bandMax = Math.min(40, mapLen);
		} else {
			bandMin = 20;
			bandMax = mapLen;
		}
		const inDailyBand = (lv: number) => lv >= bandMin && lv <= bandMax;

		let seed = Date.now() + (this.getTodayStr().charCodeAt(0) || 0) * 13;
		const rnd = () => { seed = (seed * 9301 + 49297) % 233280; return seed / 233280; };

		const poolHasAny = (p: { [k: number]: number[] }): boolean => {
			for (let k = 1; k <= 3; k++) {
				if (p[k] && p[k].length > 0) return true;
			}
			return false;
		};

		/** 在关卡号闭区间 [lvFrom, lvTo] 内扫 MapData（不限解锁），1/2/3 类玩法池 */
		const fillClassicPoolLevelRange = (lvFrom: number, lvTo: number, minRuleCost: number): { [k: number]: number[] } => {
			const p: { [k: number]: number[] } = { 1: [], 2: [], 3: [] };
			if (!MyConst.MapData || mapLen <= 0) return p;
			const lo = Math.max(1, lvFrom);
			const hi = Math.min(mapLen, lvTo);
			if (lo > hi) return p;
			for (let i = lo - 1; i <= hi - 1; i++) {
				const m = MyConst.MapData[i];
				if (m.mapType == 999) continue;
				const gt = m.rule && m.rule[0] ? m.rule[0] : 1;
				const cost = m.rule && m.rule[1] != null ? m.rule[1] : 0;
				if (gt >= 1 && gt <= 3 && cost >= minRuleCost) {
					if (!p[gt]) p[gt] = [];
					p[gt].push(i + 1);
				}
			}
			return p;
		};

		// 已解锁池：仅作最后兜底
		const fillClassicPoolsUnlocked = (minRuleCost: number): { [k: number]: number[] } => {
			return fillClassicPoolLevelRange(1, maxClassic, minRuleCost);
		};
		let pools = fillClassicPoolsUnlocked(2);
		if (!poolHasAny(pools)) {
			pools = fillClassicPoolsUnlocked(1);
		}

		// 当日区间：整张图内建池（低进度也可抽到 15～30 等未解锁关）
		let rangePools = fillClassicPoolLevelRange(bandMin, bandMax, 2);
		if (!poolHasAny(rangePools)) {
			rangePools = fillClassicPoolLevelRange(bandMin, bandMax, 1);
		}
		let inPickRange: (lv: number) => boolean = inDailyBand;
		if (!poolHasAny(rangePools)) {
			const fbMin = 20;
			const fbMax = mapLen;
			rangePools = fillClassicPoolLevelRange(fbMin, fbMax, 2);
			if (!poolHasAny(rangePools)) {
				rangePools = fillClassicPoolLevelRange(fbMin, fbMax, 1);
			}
			inPickRange = (lv: number) => lv >= fbMin && lv <= fbMax;
		}

		const poolsInActive: { [k: number]: number[] } = { 1: [], 2: [], 3: [] };
		for (let k = 1; k <= 3; k++) {
			poolsInActive[k] = (rangePools[k] || []).slice();
		}

		// 优先：添加 1 个 + 移动/删除 1 个；若某类不足则从其他类补
		const allClassic: number[] = [];
		for (let k = 1; k <= 3; k++) allClassic.push.apply(allClassic, pools[k] || []);
		
		const allInActive: number[] = [];
		for (let k = 1; k <= 3; k++) allInActive.push.apply(allInActive, poolsInActive[k] || []);
		const allInRangeFlat: number[] = [];
		for (let k = 1; k <= 3; k++) allInRangeFlat.push.apply(allInRangeFlat, poolsInActive[k] || []);
		
		const pickFrom = (arr: number[], exclude: number[]): number => {
			const ok = arr.filter(x => exclude.indexOf(x) < 0);
			if (ok.length <= 0) return arr.length > 0 ? arr[Math.floor(rnd() * arr.length)] : 1;
			return ok[Math.floor(rnd() * ok.length)];
		};

		const classic: number[] = [];
		// 第一关：优先从当前选取范围（分段区间或 20～最大关）内添加类型中选择
		if (poolsInActive[1] && poolsInActive[1].length > 0) {
			classic.push(pickFrom(poolsInActive[1], []));
		} else if (allInRangeFlat.length > 0) {
			classic.push(pickFrom(allInRangeFlat, []));
		} else if (pools[1] && pools[1].length > 0) {
			classic.push(pickFrom(pools[1], []));
		}
		
		// 第二关：优先从当前选取范围内移动或删除类型中选择
		const moveOrDelActive = (poolsInActive[2] || []).concat(poolsInActive[3] || []);
		if (moveOrDelActive.length > 0) {
			classic.push(pickFrom(moveOrDelActive, classic));
		} else if (allInRangeFlat.length > 0) {
			classic.push(pickFrom(allInRangeFlat, classic));
		} else {
			const moveOrDel = (pools[2] || []).concat(pools[3] || []);
			if (moveOrDel.length > 0) {
				classic.push(pickFrom(moveOrDel, classic));
			}
		}
		
		// 不足 2 个时从当前选取范围内已解锁补
		while (classic.length < 2 && allInActive.length > 0) {
			const n = pickFrom(allInActive, classic);
			if (classic.indexOf(n) < 0) classic.push(n);
			else break;
		}
		
		// 如果还是不足 2 个，从全部已解锁补
		while (classic.length < 2 && allClassic.length > 0) {
			const n = pickFrom(allClassic, classic);
			if (classic.indexOf(n) < 0) classic.push(n);
			else break;
		}
		
		if (classic.length < 1) classic.push(1);
		if (classic.length < 2) classic.push(classic[0]);

		// 数字玩法：从 10 关以上已解锁范围随机 1 个，如果不足 10 关则从已解锁范围随机
		const mathTotalLv = MyConst.MathMapData ? MyConst.MathMapData.length : 1;
		const mathPool = maxMath > 10 ? Array.from({length: maxMath - 10}, (_, i) => i + 11) : Array.from({length: maxMath}, (_, i) => i + 1);
		let mathLv: number;
		if (mathPool.length > 0) {
			mathLv = mathPool[Math.floor(rnd() * mathPool.length)];
		} else {
			// 兜底：在 10～配置最大关卡号之间随机；总关数不足 10 则在 1～总关数间随机
			const hi = Math.max(1, mathTotalLv);
			if (hi >= 10) {
				mathLv = 10 + Math.floor(rnd() * (hi - 10 + 1));
			} else {
				mathLv = 1 + Math.floor(rnd() * hi);
			}
		}

		// 限制条件：0 无 1 仅删除 2 仅移动 3 禁用提示
		const constraint = Math.floor(rnd() * 4);
		let finalClassic = classic;
		const pools3Band = (rangePools[3] || []).filter(inPickRange);
		const pools2Band = (rangePools[2] || []).filter(inPickRange);
		if (constraint == 1 && pools3Band.length >= 2) {
			const a = pickFrom(pools3Band, []);
			finalClassic = [a, pickFrom(pools3Band, [a])];
			if (finalClassic.length < 2) finalClassic = classic;
		} else if (constraint == 2 && pools2Band.length >= 2) {
			const a = pickFrom(pools2Band, []);
			finalClassic = [a, pickFrom(pools2Band, [a])];
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
		this.reversePreviewAfterWin = false;
		this.bEndlessMode = false;
		this.bTimedChallenge = false;
		this.reverseChallengeLevelId = this.getReverseCurrentLevel();
		this.selectId = this.getReverseActualSelectId(this.reverseChallengeLevelId);
		this.bHelp = false;
		this.special = 0;
	}

	/** 是否已解锁记忆挑战页签（本地标记，满足条件时写入） */
	public isMemoryChallengeUnlocked(): boolean {
		return egret.localStorage.getItem(MainUIManager.MEMORY_CHALLENGE_UNLOCK_KEY) === "1";
	}

	/**
	 * 若当前星星与经典进度满足条件则写入解锁标记（老存档进游戏即可自动解锁）
	 */
	public tryUnlockMemoryChallengeFromConditions(): void {
		if (this.isMemoryChallengeUnlocked()) return;
		const g = this.guanqia | 0;
		if (this.score >= MainUIManager.MEMORY_UNLOCK_MIN_STARS && g >= MainUIManager.MEMORY_UNLOCK_MIN_GUANQIA) {
			egret.localStorage.setItem(MainUIManager.MEMORY_CHALLENGE_UNLOCK_KEY, "1");
		}
	}

	public onReverseChallengeWin(): { reward: number, firstPass: boolean, streak: number, comboBonus: number, nextLevel: number, finishedAll: boolean, didAdvanceProgress: boolean } {
		const cur = this.getReverseCurrentLevel()
		const total = this.getReverseTotalLevels()
		const clear = this.loadReverseClear()
		const key = "" + cur
		const firstPass = !clear[key]
		clear[key] = 1
		this.saveReverseClear(clear)
		let streak = this.getReverseStreak() + 1
		let reward = firstPass ? 5 : 0
		let comboBonus = 0
		if (streak > 0 && streak % 3 == 0) {
			comboBonus = 3
			reward += comboBonus
		}
		this.setReverseStreak(streak)
		this.score += reward
		let didAdvanceProgress = false
		if (this.guanqiaReverse < total) {
			this.guanqiaReverse++
			didAdvanceProgress = true
		}
		this.reverseChallengeLevelId = this.getReverseCurrentLevel()
		// 与 guanqiaReverse 对齐，否则通关后标题已是下一关而 selectId/地图仍停留在上一关
		this.selectId = this.getReverseActualSelectId(this.getReverseCurrentLevel())
		this.saveData()
		return {
			reward,
			firstPass,
			streak,
			comboBonus,
			nextLevel: this.getReverseCurrentLevel(),
			finishedAll: cur >= total,
			didAdvanceProgress,
		}
	}

	public onReverseChallengeFail(): void {
		this.setReverseStreak(0)
		if (this.bHelp) return
		const c = MainUIManager.REVERSE_FAIL_STAR_COST
		this.score = Math.max(0, this.score - c)
		this.saveData()
	}

	private findNextDailyTaskIndex(): number {
		if (!this._daily || !this._daily.done) return -1;
		for (let i = 0; i < this._daily.done.length; i++) {
			if (!this._daily.done[i]) return i;
		}
		return -1;
	}

	/**
	 * 今日挑战进行中：任务关可直接进入，不要求列表已解锁。
	 * 单关结算：不推进 guanqia/guanqia1、不增加星星（+5 首通等，见 GameView、GameMath）。
	 * 三关全通后点击领取的每日奖励星星仍由 dailyAction 发放（与单关无关）。
	 */
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
			scrollVClassic: -1,
			scrollVMath: -1,
			guanqia1: 0,
			guanqiaReverse: 0,
		}
		const inst = MainUIManager.getInstance()
		data.score = inst.score
		data.guanqia = inst.guanqia
		data.selectId = inst.selectId
		data.scrollVClassic = inst.scrollVClassic
		data.scrollVMath = inst.scrollVMath
		// 旧字段：与经典列表一致，兼容只读 scrollV 的逻辑
		data.scrollV = inst.scrollVClassic >= 0 ? inst.scrollVClassic : inst.scrollV
		data.guanqia1 = inst.guanqia1
		data.guanqiaReverse = inst.guanqiaReverse
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
	 * guanqia / selectId 为 MapData 下标 +1。
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

	/**
	 * 调试方法：单独调用 createDailyTasks 并输出结果到控制台
	 * 可以在浏览器控制台通过 MainUIManager.getInstance().debugDailyTasks() 调用
	 */
	public debugDailyTasks(): void {
		console.log("=== 每日挑战任务调试信息 ===");
		console.log("当前日期:", this.getTodayStr());
		console.log("玩家已解锁 - 经典关卡:", this.guanqia, "数字关卡:", this.guanqia1);
		
		const dailyData = this.createDailyTasks();
		
		console.log("\n生成的每日任务:");
		console.log("日期:", dailyData.date);
		console.log("限制条件:", dailyData.constraint, this.getConstraintText(dailyData.constraint));
		console.log("\n任务列表:");
		
		dailyData.tasks.forEach((task: any, index: number) => {
			const taskType = task.mode === 1 ? "数字玩法" : "拼图玩法";
			const level = task.level;
			const mapData = task.mode === 1 ? MyConst.MathMapData[level - 1] : MyConst.MapData[level - 1];
			
			console.log(`\n任务${index + 1}:`);
			console.log(`  类型：${taskType}`);
		 console.log(`  关卡：${level}`);
			if (mapData) {
				console.log(`  地图类型：${mapData.mapType}`);
				if (mapData.rule) {
					const ruleNames = ["未知", "添加", "移动", "删除"];
					console.log(`  规则类型：${ruleNames[mapData.rule[0]] || '未知'}`);
					console.log(`  步数：${mapData.rule[1]}`);
				}
			}
		});
		
		console.log("\n=== 调试信息结束 ===");
	}

	/**
	 * 获取限制条件的文字描述
	 */
	private getConstraintText(constraint: number): string {
		const texts = ["无限制", "仅删除", "仅移动", "禁用提示"];
		return texts[constraint] || "未知";
	}
}