import React, { useState } from 'react';
import ThreeColumnLayout from './components/ThreeColumnLayout';
import ExampleSelector from './components/ExampleSelector';
import { exampleData } from './data/examples';
import './index.css';

function App() {
  const [currentExampleId, setCurrentExampleId] = useState(exampleData[0].id);
  
  const currentExample = exampleData.find(
    example => example.id === currentExampleId
  );

  return (
    <div className="app">
      <h1>LaTeX 预览工具</h1>
      <ExampleSelector 
        examples={exampleData}
        currentExample={currentExampleId}
        onSelect={setCurrentExampleId}
      />
      <ThreeColumnLayout data={currentExample} />
    </div>
  );
}

export default App; 