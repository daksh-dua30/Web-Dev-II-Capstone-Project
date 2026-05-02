import React from 'react';
import CodeEditor from '../components/EditorPanel.jsx';
import LivePreview from '../components/LivePreview.jsx';

export default function Playground() {
  return (
    <div className="flex flex-col md:flex-row h-[calc(100vh-60px)]">
      <div className="w-full md:w-1/2 h-1/2 md:h-full">
        <CodeEditor />
      </div>
      <div className="w-full md:w-1/2 h-1/2 md:h-full">
        <LivePreview />
      </div>
    </div>
  );
}