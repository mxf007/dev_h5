/**
 * LevelBuilder —— 自定义关卡配置系统
 *
 * 使用方式：
 *   1. 用 LevelBuilder 链式 API 构建关卡，调用 build() 得到关卡数据。
 *   2. 调用 LevelBuilder.register(levels) 将自定义关卡追加到 MyConst.MapData。
 *   3. 也可以通过 LevelBuilder.fromJSON(jsonStr) 从 JSON 字符串批量导入。
 *   4. 调用 LevelBuilder.exportJSON() 导出当前所有关卡为 JSON（方便策划编辑）。
 *
 * 关卡数据格式说明：
 *   mapType : 地图皮肤编号（1-28），999 = 等式玩法
 *   rule[0] : 操作类型  1=添加 2=移动 3=删除
 *   rule[1] : 步数限制
 *   rule[2] : 目标形状  1=正方形 2=三角形
 *   rule[3] : 目标数量
 *   rule[4] : (可选) 第二目标形状
 *   rule[5] : (可选) 第二目标数量
 *            混合规则示例：[2,2,1,2,2,3] => 2步内达成 2个正方形 + 3个三角形
 *            注意：目标形状是否可识别由 MyConst.getShapeTemplateMapType(mapType, shapeType) 决定
 *   bef     : 初始火柴状态（0=空 1=有火柴），长度需与皮肤 img 数量一致
 *   rst     : 答案状态数组（可多解），用于提示和反转模式
 */

/** 操作类型常量 */
const LevelOpType = {
	ADD:    1,  // 添加
	MOVE:   2,  // 移动
	DELETE: 3,  // 删除
}; // 移除了 as const

/** 形状类型常量 */
const LevelShape = {
	SQUARE:   1,  // 正方形
	TRIANGLE: 2,  // 正三角形
}; // 移除了 as const

/** 关卡验证错误码 */
enum LevelError {
	OK                    = 0,
	INVALID_MAP_TYPE      = 1,
	INVALID_OP_TYPE       = 2,
	INVALID_STEPS         = 3,
	INVALID_SHAPE         = 4,
	INVALID_COUNT         = 5,
	EMPTY_BEF             = 6,
	EMPTY_RST             = 7,
	BEF_RST_LENGTH_MISMATCH = 8,
	DUAL_TARGET_INCOMPLETE  = 9,
}

interface ICustomLevel {
	mapType: number
	rule: number[]
	bef: number[]
	rst: number[][]
}

interface ILevelValidationResult {
	ok: boolean
	error: LevelError
	message: string
}

class LevelBuilder {

	// ───────── 有效的 mapType 集合（需与 Const.mapN 对应）─────────
	private static readonly VALID_MAP_TYPES = new Set<number>([
		1, 2, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13,
		14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28,
		999,
	])

	// ───────── 各地图皮肤的火柴槽数量（与 exml 中 img_N 个数对应）─────────
	private static readonly MAP_SLOT_COUNTS: { [mapType: number]: number } = {
		1:  24, 2:  31, 3:  13, 5:  36, 6:  36, 7:  48, 8:  49,
		9:  24, 10: 24, 11: 36, 12: 49, 13: 13, 14: 24, 15: 36,
		16: 36, 17: 36, 18: 36, 19: 24, 20: 36, 21: 36, 22: 36,
		23: 36, 24: 49, 25: 49, 26: 49, 27: 49, 28: 49,
		999: 28,
	}

	// ───────── Builder 内部状态 ─────────
	private _mapType: number = 1
	private _opType:  number = LevelOpType.ADD
	private _steps:   number = 1
	private _shape1:  number = LevelShape.SQUARE
	private _count1:  number = 1
	private _shape2:  number = 0
	private _count2:  number = 0
	private _bef:     number[] = []
	private _rst:     number[][] = []

	// ─────────────────────────────────────────
	// 链式 setter
	// ─────────────────────────────────────────

	/** 设置地图皮肤（1-28 或 999） */
	mapType(v: number): this { this._mapType = v; return this }

	/** 操作类型：LevelOpType.ADD / MOVE / DELETE */
	opType(v: number): this  { this._opType = v;  return this }

	/** 步数限制 */
	steps(v: number): this   { this._steps = v;   return this }

	/** 主目标形状与数量 */
	target(shape: number, count: number): this {
		this._shape1 = shape
		this._count1 = count
		return this
	}

	/** 双目标（第二目标形状与数量，可选） */
	target2(shape: number, count: number): this {
		this._shape2 = shape
		this._count2 = count
		return this
	}

	/** 初始火柴状态 */
	initial(bef: number[]): this { this._bef = bef.slice(); return this }

	/** 添加一个答案状态（可多次调用添加多解） */
	addSolution(rst: number[]): this { this._rst.push(rst.slice()); return this }

	// ─────────────────────────────────────────
	// 构建 & 验证
	// ─────────────────────────────────────────

	/** 验证当前配置，返回详细结果 */
	validate(): ILevelValidationResult {
		if (!LevelBuilder.VALID_MAP_TYPES.has(this._mapType)) {
			return { ok: false, error: LevelError.INVALID_MAP_TYPE,
				message: `mapType ${this._mapType} 未注册，有效值: ${[...LevelBuilder.VALID_MAP_TYPES].join(',')}` }
		}
		if (this._opType < 1 || this._opType > 3) {
			return { ok: false, error: LevelError.INVALID_OP_TYPE,
				message: `opType 必须为 1(添加)/2(移动)/3(删除)，当前: ${this._opType}` }
		}
		if (this._steps < 1 || this._steps > 99) {
			return { ok: false, error: LevelError.INVALID_STEPS,
				message: `steps 应在 1-99 之间，当前: ${this._steps}` }
		}
		if (this._mapType !== 999) {
			if (this._shape1 !== LevelShape.SQUARE && this._shape1 !== LevelShape.TRIANGLE) {
				return { ok: false, error: LevelError.INVALID_SHAPE,
					message: `shape1 应为 1(正方形) 或 2(三角形)，当前: ${this._shape1}` }
			}
			if (this._count1 < 1) {
				return { ok: false, error: LevelError.INVALID_COUNT,
					message: `count1 应 >= 1，当前: ${this._count1}` }
			}
			if ((this._shape2 > 0) !== (this._count2 > 0)) {
				return { ok: false, error: LevelError.DUAL_TARGET_INCOMPLETE,
					message: 'shape2 和 count2 必须同时设置或同时不设置' }
			}
			if (MyConst.canUseShapeTarget && !MyConst.canUseShapeTarget(this._mapType, this._shape1)) {
				return { ok: false, error: LevelError.INVALID_SHAPE,
					message: `mapType=${this._mapType} 不支持主目标形状 ${this._shape1}，请先配置 MyConst.SHAPE_TEMPLATE_MAP` }
			}
			if (this._shape2 > 0) {
				if (this._shape2 !== LevelShape.SQUARE && this._shape2 !== LevelShape.TRIANGLE) {
					return { ok: false, error: LevelError.INVALID_SHAPE,
						message: `shape2 应为 1(正方形) 或 2(三角形)，当前: ${this._shape2}` }
				}
				if (MyConst.canUseShapeTarget && !MyConst.canUseShapeTarget(this._mapType, this._shape2)) {
					return { ok: false, error: LevelError.INVALID_SHAPE,
						message: `mapType=${this._mapType} 不支持次目标形状 ${this._shape2}，请先配置 MyConst.SHAPE_TEMPLATE_MAP` }
				}
			}
		}
		if (this._bef.length === 0) {
			return { ok: false, error: LevelError.EMPTY_BEF,
				message: 'bef（初始状态）不能为空' }
		}
		if (this._rst.length === 0) {
			return { ok: false, error: LevelError.EMPTY_RST,
				message: 'rst（答案状态）至少需要一组' }
		}
		for (let i = 0; i < this._rst.length; i++) {
			if (this._rst[i].length !== this._bef.length) {
				return { ok: false, error: LevelError.BEF_RST_LENGTH_MISMATCH,
					message: `rst[${i}].length(${this._rst[i].length}) != bef.length(${this._bef.length})` }
			}
		}
		// 检查槽位数量是否匹配皮肤
		const expectedSlots = LevelBuilder.MAP_SLOT_COUNTS[this._mapType]
		if (expectedSlots && this._bef.length !== expectedSlots) {
			console.warn(`[LevelBuilder] mapType ${this._mapType} 皮肤期望 ${expectedSlots} 个槽，bef 有 ${this._bef.length} 个。如皮肤已自定义，忽略此警告。`)
		}
		return { ok: true, error: LevelError.OK, message: 'OK' }
	}

	/** 构建关卡对象。验证失败时抛出错误。 */
	build(): ICustomLevel {
		const v = this.validate()
		if (!v.ok) throw new Error(`[LevelBuilder] 关卡配置无效: ${v.message}`)

		const rule: number[] = [this._opType, this._steps, this._shape1, this._count1]
		if (this._shape2 > 0 && this._count2 > 0) {
			rule.push(this._shape2, this._count2)
		}
		return {
			mapType: this._mapType,
			rule,
			bef: this._bef.slice(),
			rst: this._rst.map(r => r.slice()),
		}
	}

	// ─────────────────────────────────────────
	// 静态工具方法
	// ─────────────────────────────────────────

	/**
	 * 将自定义关卡列表批量追加到 MyConst.MapData。
	 * @param levels  关卡数组
	 * @param insertAt 插入位置（默认追加到末尾），-1 表示末尾
	 */
	static register(levels: ICustomLevel[], insertAt: number = -1): void {
		if (!levels || levels.length === 0) return
		const data = MyConst.MapData
		if (insertAt < 0 || insertAt >= data.length) {
			for (const lv of levels) data.push(lv as any)
		} else {
			data.splice(insertAt, 0, ...(levels as any[]))
		}
		console.log(`[LevelBuilder] 注册了 ${levels.length} 个自定义关卡，当前共 ${data.length} 关。`)
	}

	/**
	 * 从 JSON 字符串批量导入关卡并注册。
	 * JSON 格式：{ "levels": [ { mapType, rule, bef, rst }, ... ] }
	 * @returns 成功导入的关卡数量
	 */
	static fromJSON(jsonStr: string, insertAt: number = -1): number {
		let parsed: any
		try {
			parsed = JSON.parse(jsonStr)
		} catch (e) {
			console.error('[LevelBuilder] JSON 解析失败:', e)
			return 0
		}
		const arr: any[] = Array.isArray(parsed) ? parsed : (parsed.levels || [])
		if (!arr.length) { console.warn('[LevelBuilder] JSON 中未找到关卡数据。'); return 0 }

		const valid: ICustomLevel[] = []
		for (let i = 0; i < arr.length; i++) {
			const item = arr[i]
			const builder = new LevelBuilder()
				.mapType(item.mapType !== undefined ? item.mapType : 1)
				.opType((item.rule && item.rule[0] !== undefined) ? item.rule[0] : 1)
				.steps((item.rule && item.rule[1] !== undefined) ? item.rule[1] : 1)
				.target((item.rule && item.rule[2] !== undefined) ? item.rule[2] : 1, (item.rule && item.rule[3] !== undefined) ? item.rule[3] : 1)
				.initial(item.bef !== undefined ? item.bef : [])
			if (item.rule && item.rule.length >= 6) {
				builder.target2(item.rule[4], item.rule[5])
			}
			;(item.rst || []).forEach((r: number[]) => builder.addSolution(r))

			const v = builder.validate()
			if (v.ok) {
				valid.push(builder.build())
			} else {
				console.warn(`[LevelBuilder] 第 ${i + 1} 条关卡验证失败: ${v.message}`)
			}
		}
		LevelBuilder.register(valid, insertAt)
		return valid.length
	}

	/**
	 * 将当前所有 MapData 关卡导出为 JSON 字符串（方便策划使用编辑器编辑后重新导入）。
	 */
	static exportJSON(): string {
		return JSON.stringify({ levels: MyConst.MapData }, null, 2)
	}

	/**
	 * 快速创建一个"添加 N 根变成 M 个形状"的简单关卡（最常见玩法）。
	 *
	 * @example
	 * // 在 mapType=1 的皮肤上，添加2根变成3个正方形
	 * const lv = LevelBuilder.quickAdd(1, bef, rst, 2, LevelShape.SQUARE, 3)
	 */
	static quickAdd(
		mapType: number,
		bef: number[],
		rst: number[],
		steps: number,
		shape: number,
		count: number,
	): ICustomLevel {
		return new LevelBuilder()
			.mapType(mapType)
			.opType(LevelOpType.ADD)
			.steps(steps)
			.target(shape, count)
			.initial(bef)
			.addSolution(rst)
			.build()
	}

	/**
	 * 快速创建一个"移动 N 根"的关卡。
	 */
	static quickMove(
		mapType: number,
		bef: number[],
		rst: number[],
		steps: number,
		shape: number,
		count: number,
	): ICustomLevel {
		return new LevelBuilder()
			.mapType(mapType)
			.opType(LevelOpType.MOVE)
			.steps(steps)
			.target(shape, count)
			.initial(bef)
			.addSolution(rst)
			.build()
	}

	/**
	 * 快速创建一个"删除 N 根"的关卡。
	 */
	static quickDelete(
		mapType: number,
		bef: number[],
		rst: number[],
		steps: number,
		shape: number,
		count: number,
	): ICustomLevel {
		return new LevelBuilder()
			.mapType(mapType)
			.opType(LevelOpType.DELETE)
			.steps(steps)
			.target(shape, count)
			.initial(bef)
			.addSolution(rst)
			.build()
	}
}