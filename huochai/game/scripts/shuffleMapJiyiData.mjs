/**
 * 从 JsonID.ts 提取 MapJiyiData，自第 5 条（1-based，即下标 4）起每 10 条一组组内随机打乱，写回文件。
 * 用法: node scripts/shuffleMapJiyiData.mjs
 */
import fs from "fs"
import path from "path"
import { fileURLToPath } from "url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const JSON_ID = path.join(__dirname, "..", "src", "JsonID.ts")
/** 含 class 内一级缩进，避免替换后与上一段拼接出双 \t */
const MARKER = "\tpublic static MapJiyiData = "

/** 从 marker 后起算，跳过注释与字符串，匹配最外层 [...] */
function extractOuterArrayLiteral(src, marker) {
	const mi = src.indexOf(marker)
	if (mi < 0) throw new Error("找不到 " + marker)
	let i = mi + marker.length
	while (i < src.length && /\s/.test(src[i])) i++
	if (src[i] !== "[") throw new Error("MapJiyiData 后应为 [")
	const start = i
	let depth = 0
	for (; i < src.length; i++) {
		const c = src[i]
		if (c === "/" && src[i + 1] === "/") {
			i += 2
			while (i < src.length && src[i] !== "\n" && src[i] !== "\r") i++
			continue
		}
		if (c === "/" && src[i + 1] === "*") {
			i += 2
			while (i < src.length - 1 && !(src[i] === "*" && src[i + 1] === "/")) i++
			i++
			continue
		}
		if (c === '"' || c === "'") {
			const q = c
			i++
			while (i < src.length) {
				if (src[i] === "\\") {
					i += 2
					continue
				}
				if (src[i] === q) break
				i++
			}
			continue
		}
		if (c === "[") depth++
		else if (c === "]") {
			depth--
			if (depth === 0) return src.slice(start, i + 1)
		}
	}
	throw new Error("未找到 MapJiyiData 数组结束 ]")
}

function shuffleInPlace(arr) {
	for (let i = arr.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1))
		;[arr[i], arr[j]] = [arr[j], arr[i]]
	}
	return arr
}

/** 第 5 条（1-based）= 下标 4 起参与分组打乱；前 4 条保持顺序 */
const START_INDEX = 4
const CHUNK = 10

function applyShuffle(data) {
	if (!Array.isArray(data)) throw new Error("MapJiyiData 不是数组")
	const head = data.slice(0, START_INDEX)
	const tail = data.slice(START_INDEX)
	for (let o = 0; o < tail.length; o += CHUNK) {
		const chunk = tail.slice(o, o + CHUNK)
		shuffleInPlace(chunk)
		for (let k = 0; k < chunk.length; k++) tail[o + k] = chunk[k]
	}
	return head.concat(tail)
}

function fmtNumArr(a) {
	return "[" + a.join(",") + "]"
}

/** 与原有 JsonID 风格一致：紧凑 bef/rst，便于阅读与 diff */
function formatMapJiyiDataCompact(arr) {
	const lines = ["\tpublic static MapJiyiData = ["]
	for (let i = 0; i < arr.length; i++) {
		const o = arr[i]
		const rstInner = o.rst.map((r) => fmtNumArr(r)).join(",")
		lines.push("\t\t{")
		lines.push("\t\t\tmapType: " + o.mapType + ",")
		lines.push("\t\t\trule: " + fmtNumArr(o.rule) + ",")
		lines.push("\t\t\tbef: " + fmtNumArr(o.bef) + ",")
		lines.push("\t\t\trst: [" + rstInner + "]")
		lines.push("\t\t}" + (i < arr.length - 1 ? "," : ""))
	}
	lines.push("\t]")
	return lines.join("\n")
}

const raw = fs.readFileSync(JSON_ID, "utf8")
const literal = extractOuterArrayLiteral(raw, MARKER)
let data
try {
	data = new Function(`"use strict"; return ${literal}`)()
} catch (e) {
	console.error("解析 MapJiyiData 失败:", e.message)
	process.exit(1)
}

const before = data.length
const shuffled = applyShuffle(data)
if (shuffled.length !== before) throw new Error("长度变化")

const newBlock = formatMapJiyiDataCompact(shuffled)
const start = raw.indexOf(MARKER)
if (start < 0) throw new Error("找不到 MapJiyiData 声明")
const oldLit = extractOuterArrayLiteral(raw, MARKER)
const afterMarker = start + MARKER.length
const bracketPos = raw.indexOf(oldLit, afterMarker)
if (bracketPos < 0) throw new Error("无法定位原数组字面量")
const end = bracketPos + oldLit.length
const out = raw.slice(0, start) + newBlock + raw.slice(end)

fs.writeFileSync(JSON_ID, out, "utf8")
console.log(
	`MapJiyiData: 共 ${before} 条；前 ${START_INDEX} 条顺序不变；自第 ${START_INDEX + 1} 条起每 ${CHUNK} 条组内已打乱。已写回 ${JSON_ID}`
)
