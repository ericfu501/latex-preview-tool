import React from 'react';
import CodeDisplay from './CodeDisplay';

const ThreeColumnLayout = ({ data }) => {
  return (
    <div className="three-column-layout">
      <div className="column">
        <h2>输入</h2>
        <CodeDisplay content={data.input} />
      </div>
      <div className="column">
        <h2>标准输出</h2>
        <CodeDisplay content={data.standardOutput} />
      </div>
      <div className="column">
        <h2>模型输出</h2>
        <CodeDisplay content={data.modelOutput} />
      </div>
      <div className="summary">
        <h3>总结</h3>
        <p>{data.summary}</p>
      </div>
    </div>
  );
};

export default ThreeColumnLayout; 