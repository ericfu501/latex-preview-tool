import React from 'react';
import katex from 'katex';
import 'katex/dist/katex.min.css';

const CodeDisplay = ({ content }) => {
  const renderContent = (text) => {
    // 分割文本，识别LaTeX公式（在$符号之间的内容）
    const parts = text.split(/(\$[^$]+\$)/g);
    
    return parts.map((part, index) => {
      if ((part.startsWith('$') && part.endsWith('$')) || 
          (part.startsWith('$$') && part.endsWith('$$'))) {
        // 渲染LaTeX公式
        const formula = part.startsWith('$$') ? part.slice(2, -2) : part.slice(1, -1);
        const html = katex.renderToString(formula, {
          throwOnError: false
        });
        return <span key={index} dangerouslySetInnerHTML={{ __html: html }} />;
      }
      // 普通文本直接返回，保留换行
      return <span key={index} style={{ whiteSpace: 'pre-wrap' }}>{part}</span>;
    });
  };

  return (
    <div className="code-display">
      {renderContent(content)}
    </div>
  );
};

export default CodeDisplay; 