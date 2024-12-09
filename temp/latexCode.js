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
