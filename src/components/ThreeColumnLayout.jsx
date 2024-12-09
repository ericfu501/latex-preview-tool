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
        <div className="summary-row">
          <div className="summary-item">
            <h3>问题类型</h3>
            <p>{data.type}</p>
          </div>
          <div className="summary-item">
            <h3>修改正确率</h3>
            <p>{data.percentage}%</p>
          </div>
        </div>

        <div className="summary-row">
          <div className="summary-item points-section">
            <h3>修改要点</h3>
            <div className="points-container">
              <div className="right-points">
                {data.right && data.right.map((point, index) => (
                  <p key={index}>✅ {point}</p>
                ))}
              </div>
              <div className="wrong-points">
                {data.wrong && data.wrong.map((point, index) => (
                  <p key={index}>❌ {point}</p>
                ))}
              </div>
            </div>
          </div>
          <div className="summary-item">
            <h3>问题总结</h3>
            <p>{data.summary}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThreeColumnLayout; 