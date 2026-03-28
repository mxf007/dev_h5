/**
 * 记忆挑战：关卡列表 = MapJiyiData 中按数组顺序、通过校验的每一项。
 * 难度星档仅由单关数据（mapType、槽位、bef/rst 差异、rule[0]）计算，与总关数、第几关无关。
 */

/** 池中一项：对应 MapJiyiData 的下标 */
type MemoryLevelEntry = { mapJiyiIndex: number }

class ReverseChallengeConfig {
	static isValidJiyiIndex(idx: number): boolean {
		if (!MyConst || !MyConst.MapJiyiData) return false
		const i = idx | 0
		if (i < 0 || i >= MyConst.MapJiyiData.length) return false
		const m = MyConst.MapJiyiData[i]
		if (!m || m.mapType == 999) return false
		if (!m.rule || m.rule.length < 2) return false
		const op = m.rule[0]
		if (op != 1 && op != 2 && op != 3) return false
		if (!m.bef || !m.rst || !m.rst[0]) return false
		if (m.bef.length != m.rst[0].length) return false
		for (let j = 0; j < m.bef.length; j++) {
			if (m.bef[j] !== m.rst[0][j]) return true
		}
		return false
	}

	/** bef 与 rst[0] 不同格数 */
	static countMatchstickDiffCells(bef: number[], rst0: number[]): number {
		let n = 0
		const len = Math.min(bef.length, rst0.length)
		for (let i = 0; i < len; i++) {
			if ((bef[i] | 0) !== (rst0[i] | 0)) n++
		}
		return n
	}

	/**
	 * 记忆关难度星档 1 / 3 / 5（与记忆模式总关卡数、关卡序号无关）
	 */
	static memoryDifficultyActiveFromRow(row: any): number {
		if (!row || !row.bef || !row.rst || !row.rst[0]) return 3
		const d = ReverseChallengeConfig.countMatchstickDiffCells(row.bef, row.rst[0])
		const slots = row.bef.length
		const op = row.rule && row.rule[0] ? row.rule[0] | 0 : 1
		const mt = row.mapType | 0
		let score = d * 4
		if (slots >= 49) score += 14
		else if (slots > 36) score += 10
		else if (slots > 24) score += 5
		if (op === 2) score += 8
		if (mt === 7 || mt === 8 || mt === 12 || (mt >= 24 && mt <= 28)) score += 6
		if (mt === 999) score += 12
		if (score <= 22) return 1
		if (score <= 42) return 3
		return 5
	}

	/** 地图角标：仅星串 */
	static memoryDifficultyStarsOnlyFromRow(row: any): string {
		const a = ReverseChallengeConfig.memoryDifficultyActiveFromRow(row)
		return "★".repeat(a) + "☆".repeat(5 - a)
	}

	/** 按 MapJiyiData 下标顺序构建关卡池（仅含合法行） */
	static buildValidatedPool(): MemoryLevelEntry[] {
		const out: MemoryLevelEntry[] = []
		if (!MyConst || !MyConst.MapJiyiData) {
			return [{ mapJiyiIndex: 0 }]
		}
		for (let i = 0; i < MyConst.MapJiyiData.length; i++) {
			if (!ReverseChallengeConfig.isValidJiyiIndex(i)) continue
			out.push({ mapJiyiIndex: i })
		}
		if (out.length === 0) {
			if (typeof egret !== "undefined" && egret.warn) {
				egret.warn("[ReverseChallenge] MapJiyiData 无合法记忆关，回退 mapJiyiIndex=0")
			}
			return [{ mapJiyiIndex: 0 }]
		}
		return out
	}

	/**
	 * 第 memoryLevel 关（1-based）的难度星档：只读该关在 MapJiyiData 中的数据，与池长度无关的算法。
	 */
	static getDifficultyValue(memoryLevel: number, pool: MemoryLevelEntry[]): number {
		const t = Math.max(1, pool ? pool.length : 1)
		const lv = Math.max(1, Math.min(memoryLevel | 0, t))
		const row = pool[lv - 1]
		const idx = row && row.mapJiyiIndex
		if (!MyConst || !MyConst.MapJiyiData || idx == null || idx < 0 || idx >= MyConst.MapJiyiData.length) {
			return 3
		}
		return ReverseChallengeConfig.memoryDifficultyActiveFromRow(MyConst.MapJiyiData[idx])
	}

	/** 策划参考：当前 MapJiyiData 内合法记忆关数量 */
	static getDesignedTotal(): number {
		if (!MyConst || !MyConst.MapJiyiData) return 0
		let c = 0
		for (let i = 0; i < MyConst.MapJiyiData.length; i++) {
			if (ReverseChallengeConfig.isValidJiyiIndex(i)) c++
		}
		return c
	}
}
