import { useContext } from 'react';
import Editor from '@monaco-editor/react';
import { PlaygroundContext } from '../context/PlaygroundContext';
import { Code2 } from 'lucide-react';

export default function EditorPanel() {
  const { 
    htmlCode, setHtmlCode, 
    cssCode, setCssCode, 
    jsCode, setJsCode, 
    activeTab, setActiveTab,
    isDarkMode 
  } = useContext(PlaygroundContext);

  const getEditorValue = () => {
    if (activeTab === 'html') return htmlCode;
    if (activeTab === 'css') return cssCode;
    return jsCode;
  };

  const handleEditorChange = (value) => {
    if (activeTab === 'html') setHtmlCode(value);
    if (activeTab === 'css') setCssCode(value);
    if (activeTab === 'js') setJsCode(value);
  };

  const getLanguage = () => {
    if (activeTab === 'js') return 'javascript';
    return activeTab;
  };

  return (
    <div className="flex flex-col h-full border-r border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-900">
      
      {/* Upgraded Tabs UI */}
      <div className="flex bg-gray-100 dark:bg-slate-950 px-2 pt-2 gap-1 border-b border-gray-200 dark:border-slate-700">
        {['html', 'css', 'js'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-5 py-2 text-sm font-semibold uppercase rounded-t-md transition-colors flex items-center gap-2 ${
              activeTab === tab 
                ? 'bg-white dark:bg-slate-900 text-emerald-600 dark:text-emerald-400 border-t-2 border-emerald-500' 
                : 'bg-transparent text-gray-500 dark:text-slate-400 hover:bg-gray-200 dark:hover:bg-slate-800'
            }`}
          >
            <Code2 size={16} />
            {tab}
          </button>
        ))}
      </div>
      
      <div className="flex-grow pt-2">
        <Editor 
          height="100%" 
          language={getLanguage()} 
          theme={isDarkMode ? 'vs-dark' : 'light'} 
          value={getEditorValue()} 
          onChange={handleEditorChange} 
          options={{ minimap: { enabled: false }, fontSize: 16, padding: { top: 10 } }}
        />
      </div>
    </div>
  );
}