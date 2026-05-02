import React, { createContext, useState } from 'react';

export const PlaygroundContext = createContext();

// eslint-disable-next-line react/prop-types
export function PlaygroundProvider({ children }) {
  const [htmlCode, setHtmlCode] = useState('<h1>Hello Cyber World</h1>');
  const [cssCode, setCssCode] = useState('h1 { color: #10b981; font-family: sans-serif; }');
  const [jsCode, setJsCode] = useState('// Test your DOM payloads here\nconsole.log("Ready");');
  
  const [activeTab, setActiveTab] = useState('html'); // html, css, js
  const [isDarkMode, setIsDarkMode] = useState(true);

  return (
    <PlaygroundContext.Provider value={{ 
      htmlCode, setHtmlCode, 
      cssCode, setCssCode, 
      jsCode, setJsCode, 
      activeTab, setActiveTab, 
      isDarkMode, setIsDarkMode 
    }}>
      {children}
    </PlaygroundContext.Provider>
  );
}