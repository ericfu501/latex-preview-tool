export const exampleData = [
  {
    id: "1",
    category: "算法优化",
    input: "for i = 1 to n:\n  $O(n^2)$",
    standardOutput: "while left < right:\n  $O(n\\log n)$",
    modelOutput: "for i in range(n):\n  $O(n^2)$",
    summary: "时间复杂度优化建议"
  },
  {
    id: "2",
    category: "1.41",
    input: `IF1  Type=0x00							
y=u；
ELSEIF1  Type=0x0F					
$$x1=A1\bullet x1+H1\bullet u；$$
$$y=x1+D\bullet u；$$
ELSEIF1  Type=0xF0				   
$$Filter_{Temp}=x1；$$
$$x1=x2+H1\bullet u；$$
$$x2=A1\bullet{Filter}_{Temp}+A2\bullet x2+H2\bullet u；$$
$$y=x1+D\bullet u；$$
END1`,
    standardOutput: `x1 = A1 \bullet x1 + H1`,
    modelOutput: `IF1(Type == 0x00)
y = u;
ELSEIF1(Type == 0x0F)
$$x1 = A1 \bullet x1 + H1 \bullet u;$$
$$y = x1 + D \bullet u;$$
ELSEIF1(Type == 0xF0)
$$Filter_{Temp} = x1;$$
$$x1 = x2 + H1 \bullet u;$$
$$x2 = A1 \bullet Filter_{Temp} + A2 \bullet x2 + H2 \bullet u;$$
$$y = x1 + D \bullet u;$$
ENDIF1`,
    summary: "时间复杂度优化建议"
  },
  // 可以添加更多示例...
]; 