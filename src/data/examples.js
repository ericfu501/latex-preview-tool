// String.raw 是一个模板字符串标签函数,用于获取原始字符串
// 主要用途:
// 1. 避免反斜杠被转义,保持原始输入,如 \cdot 不会被转义为 cdot
// 2. 对于LaTeX公式尤其有用,因为LaTeX中大量使用 \ 符号
// 3. 使用方式: String.raw`字符串` 或 String.raw({ raw: ['字符串'] })
const qTypeMap = {
  "logic": "不规范的算法逻辑",
  "math": "复杂公式复杂表示",
  "nl": "自然语言描述逻辑"
}

export const exampleData = [
  {
    id: "2",
    category: "1.41",
    input: String.raw`IF1  Type=0x0		
$y=u；$ 
ELSEIF1  Type=0x0F
$x1=A1 \cdot x1+H1 \cdot u；$
$y=x1+D \cdot u；$
ELSEIF1  Type=0xF0	   
$Filter_{Temp}=x1；$
$x1=x2+H1 \cdot u；$
$x2=A1 \cdot {Filter}_{Temp}+A2 \cdot x2+H2 \cdot u；$
$y=x1+D \cdot u；$
END1
`,
    standardOutput: String.raw`IF1(Type=0x00)
$y=u;$
ELSEIF1(Type=0x0F)
$x1=A1\ast x1+H1\ast u;$
$y=x1+D\ast u;$
ELSEIF1(Type=0xF0)
$Filter_{Temp}=x1;$
$x1=x2+H1 \bullet u;$
$x2=A1 \bullet{Filter}_{Temp}+A2 \bullet x2+H2 \bullet u;$
$y=x1+D \bullet u;$
ENDIF1`,
    modelOutput: String.raw`IF1(Type == 0x00)
y = u;
ELSEIF1(Type == 0x0F)
$x1 = A1 \bullet x1 + H1 \bullet u;$
$y = x1 + D \bullet u;$
ELSEIF1(Type == 0xF0)
$Filter_{Temp} = x1;$
$x1 = x2 + H1 \bullet u;$
$x2 = A1 \bullet Filter_{Temp} + A2 \bullet x2 + H2 \bullet u;$
$y = x1 + D \bullet u;$
ENDIF1`,
    type: qTypeMap["logic"],
    right: [
      "条件语句的写法 - IF 括号",
      "条件语句的写法 - ENDIF 关键字"
    ],
    wrong: ["缩进"],
    percentage: 100,
    summary: "时间复杂度优化建议",
  },
  {
    id: "3",
    category: "1.xx",
    input: String.raw`IF1  Type=0x0		
y=u；
ELSEIF1  Type=0x0F
$x1=A1 \cdot x1+H1 \cdot u；$
$y=x1+D \cdot u；$
ELSEIF1  Type=0xF0	   
$Filter_{Temp}=x1；$
$x1=x2+H1 \cdot u；$
$x2=A1 \cdot {Filter}_{Temp}+A2 \cdot x2+H2 \cdot u；$
$y=x1+D \cdot u；$
END1`,
    standardOutput: String.raw`$m_{EarthShadow}=\frac{\sqrt{r_{tmp}^2-R_{Earth}^2}}{r_{tmp}}$
$IF1({S}_{Oiz\_Used}>{m}_{EarthShadow}+{m}_{EarthShadowBegin} and S_{Oix\_Used}<0)or({S}_{Oiz_Used}>{m}_{EarthShadow}+{m}_{EarthShadowEnd}and S_{Oix\_Used}>0)$
FlgEarthShadow=TRUE；
ELSE1
FlgEarthShadow=FALSE；
END1`,
    modelOutput: "",
    type: qTypeMap["logic"],
    right: [],
    wrong: ["缩进"],
    percentage: 100,
    summary: "时间复杂度优化建议",
  },{
    id: "4",
    category: "1.88",
    input: "",
    standardOutput: "",
    modelOutput: String.raw`IF1 ((A + B == C))
$C_{BI} = {C}_{BF} \cdot Aq({q}_{FNIN}) \cdot {C}_{NM} \cdot {C}_{MI}$;
$C_{IB} = {{C}_{BI}}^{T}$;
$q=Qa({C}_{BI})$;
$q0=Qa({C}_{BF}\cdot Aq({q}_{FNIN0})\cdot{C}_{NM}\cdot{C}_{MI})$;
ENDIF1`,
    type: qTypeMap["logic"],
    right: [],
    wrong: ["缩进"],
    percentage: 100,
    summary: "",
  },
  {
    id: "5",
    category: "1.41",
    input: "",
    standardOutput: "",
    modelOutput: String.raw`IF1(Type == 0x00)
y = u; // 当Type等于0x00时，直接将u赋值给y
ELSEIF1(Type == 0x0F)
$x1 = A1 \cdot x1 + H1 \cdot u; $// 当Type等于0x0F时，计算x1
$y = x1 + D \cdot u; $// 计算y
ELSEIF1(Type == 0xF0)
\${Filter}_{Temp} = x1; $// 当Type等于0xF0时，保存x1到临时滤波器
$x1 = x2 + H1 \cdot u; $// 更新x1
$x2 = A1 \cdot {Filter}_{Temp} + A2 \cdot x2 + H2 \cdot u; $// 更新x2
$y = x1 + D \cdot u; $// 计算y
ENDIF1 // 结束条件判断`,
    type: qTypeMap["logic"],
    right: [],
    wrong: ["缩进"],
    percentage: 100,
    summary: "",
  }
  // 可以添加更多示例...
];
