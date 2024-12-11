// 将原始伪代码中公式的部分用 $ 或 $$ 标注

const useDoubleDollar = true; // 设置为 true 使用 $$，设置为 false 使用 $

function addDollarSign(input) {
  const lines = input.split('\n');
  const dollarSign = useDoubleDollar ? '$$' : '$'; // 根据配置选择符号
  const latexPattern = /[\\{}^_]/; // 匹配 LaTeX 代码中常见的符号

  const result = lines.map(line => {
    if (latexPattern.test(line)) {
      const commentIndex = line.indexOf('//');
      if (commentIndex !== -1) {
        return `${dollarSign}${line.substring(0, commentIndex)}${dollarSign}${line.substring(commentIndex)}`.replace('${', '\\${');
      } else {
        return `${dollarSign}${line}${dollarSign}`.replace('${', '\\${');
      }
    }
    return line;
  });

  return result.join('\n');
}

const fs = require('fs');
const path = require('path');

function saveToFile(content, filePath) {
  const directory = path.dirname(filePath);
  if (!fs.existsSync(directory)) {
    fs.mkdirSync(directory, { recursive: true });
  }
  fs.writeFileSync(filePath, content, 'utf8');
}

// 示例用法
const input = String.raw`IF1 (F_StAUsed =1)
m_1^A={\left(Y_{AB}^2\right)}^T\bullet \left(q2DCM\left(\widehat{\bar{q}}\right)\bullet Z_{AI}\right);
m_2^A={\left(X_{AB}^2\right)}^T\bullet \left(q2DCM\left(\widehat{\bar{q}}\right)\bullet Z_{AI}\right);
m_3^A={\left(Z_{AB}^2\right)}^T\bullet \left(q2DCM\left(\widehat{\bar{q}}\right)\bullet X_{AI}\right);
m_4^A={\left(Y_{AB}^2\right)}^T\bullet \left(q2DCM\left(\widehat{\bar{q}}\right)\bullet X_{AI}\right);
ENDIF1
IF1 (F_StBUsed =1)
m_1^B={\left(Y_{BB}^2\right)}^T\bullet \left(q2DCM\left(\widehat{\bar{q}}\right)\bullet Z_{BI}\right);
m_2^B={\left(X_{BB}^2\right)}^T\bullet \left(q2DCM\left(\widehat{\bar{q}}\right)\bullet Z_{BI}\right);
m_3^B={\left(Z_{BB}^2\right)}^T\bullet \left(q2DCM\left(\widehat{\bar{q}}\right)\bullet X_{BI}\right);
m_4^B={\left(Y_{BB}^2\right)}^T\bullet \left(q2DCM\left(\widehat{\bar{q}}\right)\bullet X_{BI}\right);
ENDIF1
IF1 (F_StCUsed =1)
m_1^C={\left(Y_{CB}^2\right)}^T\bullet \left(q2DCM\left(\widehat{\bar{q}}\right)\bullet Z_{CI}\right);
m_2^C={\left(X_{CB}^2\right)}^T\bullet \left(q2DCM\left(\widehat{\bar{q}}\right)\bullet Z_{CI}\right);
m_3^C={\left(Z_{CB}^2\right)}^T\bullet \left(q2DCM\left(\widehat{\bar{q}}\right)\bullet X_{CI}\right);
m_4^C={\left(Y_{CB}^2\right)}^T\bullet \left(q2DCM\left(\widehat{\bar{q}}\right)\bullet X_{CI}\right);
ENDIF1
IF1 (F_StFUsed =1)
m_1^F={\left(Y_{FB}^2\right)}^T\bullet \left(q2DCM\left(\widehat{\bar{q}}\right)\bullet Z_{FI}\right);
m_2^F={\left(X_{FB}^2\right)}^T\bullet \left(q2DCM\left(\widehat{\bar{q}}\right)\bullet Z_{FI}\right);
m_3^F={\left(Z_{FB}^2\right)}^T\bullet \left(q2DCM\left(\widehat{\bar{q}}\right)\bullet X_{FI}\right);
m_4^F={\left(Y_{FB}^2\right)}^T\bullet \left(q2DCM\left(\widehat{\bar{q}}\right)\bullet X_{FI}\right);
ENDIF1
IF1 (F_StAUsed=1 && F_StBUsed=1 && F_StCUsed=1)
cnt_SA=0;
cnt_SB=0;
cnt_SC=0;
IF2 ( \left|{Z_{AI}}^T\bullet Z_{BI}-\alpha_{ZAB}\right|>0.035 \bullet m_{s1} || \left|{X_{AI}}^T\bullet X_{BI}-\alpha_{XAB}\right|>0.087\bullet m_{s1})
cnt_SA= cnt_SA+2;
cnt_SB= cnt_SB+2;
IF3(max(\left|m_1^A\right|, \left|m_2^A\right|,\left|m_3^A\right|)>max(\left|m_1^B\right|,\left|m_2^B\right|,\left|m_3^B\right|))
cnt_SA= cnt_SA-1;
ELSE3
cnt_SB= cnt_SB-1;
ENDIF3
ELSEIF2 ( \left|{Z_{AI}}^T \bullet Z_{BI}-\alpha_{ZAB}\right|>0.012 \bullet m_{s1} || \left|{X_{AI}}^T \bullet X_{BI}-\alpha_{XAB}\right|>0.029 \bullet m_{s1})
cnt_SA= cnt_SA+5;
cnt_SB= cnt_SB+5;
ELSE2
cnt_SA= cnt_SA+8;
cnt_SB= cnt_SB+8;
ENDIF2
IF2 ( \left|{Z_{BI}}^T \bullet Z_{CI}-\alpha_{ZBC}\right|>0.024 \bullet m_{s1} || \left|{X_{BI}}^T \bullet X_{CI}-\alpha_{XBC}\right|>0.087 \bullet m_{s1})
cnt_SC= cnt_SC+2;
cnt_SB= cnt_SB+2;
IF3(max(\left|m_1^C\right|, \left|m_2^C\right|,\left|m_3^C\right|)>max(\left|m_1^B\right|, \left|m_2^B\right|,\left|m_3^B\right|))
cnt_SC= cnt_SC-1;
ELSE3
cnt_SB= cnt_SB-1;
ENDIF3
ELSEIF2 ( \left|{Z_{BI}}^T \bullet Z_{CI}-\alpha_{ZBC}\right|>0.008 \bullet m_{s1} || \left|{X_{BI}}^T \bullet X_{CI}-\alpha_{XBC}\right|>0.029 \bullet m_{s1})
cnt_SC= cnt_SC+5;
cnt_SB= cnt_SB+5;
ELSE2
cnt_SC= cnt_SC+8;
cnt_SB= cnt_SB+8;
ENDIF2
IF2 (\left|{Z_{AI}}^T \bullet Z_{CI}-\alpha_{ZAC}\right|>0.025 \bullet m_{s1} || \left|{X_{AI}}^T \bullet X_{CI}-\alpha_{XAC}\right|>0.054 \bullet m_{s1})
cnt_SA= cnt_SA+2;
cnt_SC= cnt_SC+2;
IF3(max(\left|m_1^A\right|, \left|m_2^A\right|,\left|m_3^A\right|)>max(\left|m_1^C\right|, \left|m_2^C\right|,\left|m_3^C\right|))
cnt_SA= cnt_SA-1;
ELSE3
cnt_SC= cnt_SC-1;
ENDIF3
ELSEIF2 ( \left|{Z_{AI}}^T \bullet Z_{CI}-\alpha_{ZAC}\right|>0.008 \bullet m_{s1} || \left|{X_{AI}}^T \bullet X_{CI}-\alpha_{XAC}\right|>0.018 \bullet m_{s1})
cnt_SA= cnt_SA+5;
cnt_SC= cnt_SC+5;
ELSE2
cnt_SA= cnt_SA+8;
cnt_SC= cnt_SC+8;
ENDIF2
IF2 (cnt_SA≠cnt_SB || cnt_SA≠cnt_SC || cnt_SB≠cnt_SC)
ENDIF2
ELSEIF1 (F_StAUsed =1 && F_StBUsed =1 && F_StCUsed =0)
IF2 ( \left|{Z_{AI}}^T \bullet Z_{BI}-\alpha_{ZAB}\right|>0.035 \bullet m_{s1} || \left|{X_{AI}}^T \bullet X_{BI}-\alpha_{XAB}\right|>0.087 \bullet m_{s1})
IF3(max(\left|m_1^A\right|, \left|m_2^A\right|,\left|m_3^A\right|)>max(\left|m_1^B\right|,\left|m_2^B\right|,\left|m_3^B\right|))
F_StAUsed =0;
ELSE3
F_StBUsed=0;
ENDIF3
ENDIF2
ELSEIF1 (F_StAUsed =1 && F_StBUsed =0 && F_StCUsed =1)
IF2 (\left|{Z_{AI}}^T \bullet Z_{CI}-\alpha_{ZAC}\right|>0.025 \bullet m_{s1} || \left|{X_{AI}}^T \bullet X_{CI}-\alpha_{XAC}\right|>0.054 \bullet m_{s1})
IF3 (max(\left|m_1^A\right|, \left|m_2^A\right|,\left|m_3^A\right|)>max(\left|m_1^C\right|, \left|m_2^C\right|,\left|m_3^C\right|))
F_StAUsed =0;
ELSE3
F_StCUsed=0;
ENDIF3
ENDIF2
ELSEIF1 (F_StAUsed =0 && F_StBUsed =1 && F_StCUsed =1 )
IF2 (\left|{Z_{BI}}^T \bullet Z_{CI}-\alpha_{ZBC}\right|>0.024 \bullet m_{s1} || \left|{X_{BI}}^T \bullet X_{CI}-\alpha_{XBC}\right|>0.087 \bullet m_{s1})
IF3 (max(\left|m_1^B\right|,\left|m_2^B\right|,\left|m_3^B\right|)>max(\left|m_1^C\right|, \left|m_2^C\right|,\left|m_3^C\right|))
F_StBUsed =0;
ELSE3
F_StCUsed=0;
ENDIF3
ENDIF2
ENDIF1
IF1 (((F_StAUsed=1&&F_StBUsed=1) || (F_StAUsed && F_StCUsed=1) || (F_StBUsed && F_StCUsed=1))&& F_StFUsed=1)
IF2 (F_StAUsed =1)
IF3 (\left|{Z_{AI}}^T \bullet Z_{FI}-\alpha_{ZAF}\right|>0.032 \bullet  m_{s1} || \left|{X_{AI}}^T \bullet X_{FI}-\alpha_{XAF}\right|>0.077 \bullet 
 m_{s1})
F_StFUsed=0;
ENDIF3
ELSEIF2 (F_StBUsed =1)
IF3 (\left|{Z_{BI}}^T \bullet Z_{FI}-\alpha_{ZBF}\right|>0.032 \bullet m_{s1} || \left|{X_{BI}}^T \bullet X_{FI}-\alpha_{XBF}\right|>0.065 \bullet 
 m_{s1})
F_StFUsed=0;
ENDIF3
ELSEIF2 (F_StCUsed =1 )
IF3 ( \left|{Z_{CI}}^T \bullet Z_{FI}-\alpha_{ZCF}\right|>0.032 \bullet m_{s1} || \left|{X_{CI}}^T \bullet X_{FI}-\alpha_{XCF}\right|>0.077 \bullet 
 m_{s1})
F_StFUsed=0;
ENDIF3
ENDIF2
ELSE1
F_StFUsed=0;
ENDIF1
IF1 (F_StFUsed=1)
m_1=m_1^F;
m_2=m_2^F;
m_3=m_3^F;
m_4=m_4^F;
m_5=0;
m_6=0;
K_{ST}=K_{ST,F};
ELSEIF1 (F_StAUsed=1 && F_StBUsed=1 && F_StCUsed=1 && F_StFInSys=0)
m_1=m_1^A;
m_2=m_2^A;
m_3=m_1^B;
m_4=m_2^B;
m_5=m_1^C;
m_6=m_2^C;
K_{ST}=K_{ST,ABC};
ELSEIF1 (F_StAUsed=1 && F_StBUsed=1 && F_StFInSys=0)
m_1=m_1^A;
m_2=m_2^A;
m_3=m_1^B;
m_4=m_2^B;
m_5=0;
m_6=0;
K_{ST}=K_{ST,AB};
ELSEIF1 (F_StAUsed=1 && F_StCUsed=1 && F_StFInSys=0)
m_1=m_1^A;
m_2=m_2^A;
m_3=m_1^C;
m_4=m_2^C;
m_5=0;
m_6=0;
K_{ST}=K_{ST,AC};
ELSEIF1 (F_StBUsed=1 && F_StCUsed=1 && F_StFInSys=0)
m_1=m_1^B;
m_2=m_2^B;
m_3=m_1^C;
m_4=m_2^C;
m_5=0;
m_6=0;
K_{ST}=K_{ST,BC};
ELSEIF1 (F_StAUsed=1 && F_StFInSys=0 )
m_1=m_1^A;
m_2=m_2^A;
m_3=m_3^A;
m_4=m_4^A;
m_5=0;
m_6=0;
K_{ST}=K_{ST,A};
ELSEIF1 (F_StBUsed=1 && F_StFInSys=0 )
m_1=m_1^B;
m_2=m_2^B;
m_3=m_3^B;
m_4=m_4^B;
m_5=0;
m_6=0;
K_{ST}=K_{ST,B};
ELSEIF1 (F_StCUsed=1 && F_StFInSys=0 )
m_1=m_1^C;
m_2=m_2^C;
m_3=m_3^C;
m_4=m_4^C;
m_5=0;
m_6=0;
K_{ST}=K_{ST,C};
ELSEIF1 (F_StFUsed=1 && F_StFInSys=0 )
m_1=m_1^F;
m_2=m_2^F;
m_3=m_3^F;
m_4=m_4^F;
m_5=0;
m_6=0;
K_{ST}=K_{ST,F};
ELSE1
m_1=0;
m_2=0;
m_3=0;
m_4=0;
m_5=0;
m_6=0;
K_{ST}=K_{ST,ABC};
ENDIF1
`;

const output = addDollarSign(input);
const outputPath = path.join(__dirname, 'output', 'sudoCode.md');
saveToFile(output, outputPath);

console.log(output);
