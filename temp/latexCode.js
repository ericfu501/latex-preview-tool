const latexCode = `
$$
IF1  Type=0x0 \\					
y=u；\\ 
ELSEIF1  Type=0x0F \\				
x1=A1\bullet x1+H1\bullet u；\\
y=x1+D\bullet u；\\
ELSEIF1  Type=0xF0	\\			   
Filter_{Temp}=x1；\\
x1=x2+H1\bullet u；\\
x2=A1\bullet{Filter}_{Temp}+A2\bullet x2+H2\bullet u；\\
y=x1+D\bullet u；\\
END1
$$
`;




// 逐行处理代码内容，遇到一行的起始是 ${ 这两个符号，为了避免歧义，给$添加 \ 反斜线做转义
processedContent = processedContent.split('\n').map(line => {
    if (line.trim().startsWith('${')) {
      return line.replace('${', '\\${');
    }
    return line;
  }).join('\n');