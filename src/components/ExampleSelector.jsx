import React from 'react';

const ExampleSelector = ({ examples, currentExample, onSelect }) => {
  return (
    <div className="example-selector">
      <select 
        value={currentExample} 
        onChange={(e) => onSelect(e.target.value)}
      >
        {examples.map((example) => (
          <option key={example.id} value={example.id}>
            示例 {example.id} - {example.category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ExampleSelector; 