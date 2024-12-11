# 给模型生成的代码添加换行符，方便在浏览器latex渲染工具展示
# 渲染工具地址：https://scienceasdf.github.io/site/eqs.html

import os  
from pathlib import Path  

def process_latex_code(input_text: str) -> str:  
    # 1. 分割输入为行数组  
    lines = input_text.strip().split('\n')  
    
    # 2. 在每行末尾添加 \\（最后一行除外）  
    processed_lines = []  
    for i, line in enumerate(lines):  
        # 去除行尾空格  
        line = line.rstrip()  
        # 除了最后一行，每行都添加 \\
        if i < len(lines) - 1:  
            processed_lines.append(f"{line} \\\\")  
        else:  
            processed_lines.append(line)  
    
    # 3. 添加 $$ 符号并合并所有行  
    result = f"$$\n{chr(10).join(processed_lines)}\n$$"  
    
    return result  

def save_to_file(content: str, append: bool = False) -> None:  
    # 创建输出目录路径  
    output_dir = Path(__file__).parent / 'output'  
    output_file = output_dir / 'processed.md'  
    
    # 确保输出目录存在  
    try:  
        output_dir.mkdir(parents=True, exist_ok=True)  
        
        # 写入文件  
        mode = 'a' if append else 'w'  
        with open(output_file, mode, encoding='utf-8') as f:  
            f.write(content)  
            if append:  
                f.write('\n')  
        
        print(f'文件已保存到: {output_file}')  
    except Exception as error:  
        print(f'保存文件时出错: {error}')  

def interactive_input():  
    print('请输入LaTeX代码（输入空行结束）：')  
    user_input = []  
    
    while True:  
        line = input()  
        if line.strip() == '':  
            break  
        user_input.append(line)  
    
    return '\n'.join(user_input)  

def main():  
    # 测试代码  
    test_input = r"""IF1 (F_StAUsed =1)
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
"""  

    # 方式1：直接处理测试输入  
    processed = process_latex_code(test_input)  
    save_to_file(processed)  

    # 方式2：交互式输入  
    # user_text = interactive_input()  
    # processed = process_latex_code(user_text)  
    # save_to_file(processed)  

if __name__ == '__main__':  
    main()