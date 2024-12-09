import React, { useEffect, useRef } from 'react';

const CodeDisplay = ({ content }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    // 确保 MathJax 已加载
    if (window.MathJax && window.MathJax.Hub) {
      // 替换所有的 \bullet 为 \cdot, 统一格式
      let processedContent = content.replace(/\\bullet/g, '\\cdot');

      // 更新容器内容
      containerRef.current.innerHTML = processedContent;

      // 使用 MathJax v2.7.3 的 API 触发重新渲染
      window.MathJax.Hub.Queue(["Typeset", window.MathJax.Hub, containerRef.current]);
    }
  }, [content]);

  return (
    <div className="code-display" ref={containerRef}>
      {content}
    </div>
  );
};

export default CodeDisplay; 