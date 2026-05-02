import { useEffect, useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Moon, Sun, ShieldAlert } from 'lucide-react';
import { PlaygroundProvider, PlaygroundContext } from './context/PlaygroundContext';
import Playground from './pages/Playground';

function AppContent() {
  const { isDarkMode, setIsDarkMode } = useContext(PlaygroundContext);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-slate-900 transition-colors duration-200">
      
      {/* Upgraded Navbar */}
      <nav className="h-[64px] bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-slate-700 flex justify-between items-center px-6 shadow-sm z-10">
        <div className="flex items-center gap-3 text-xl font-extrabold text-slate-800 dark:text-white tracking-tight">
          <ShieldAlert className="text-emerald-500" size={28}/>
          <span>Secure Sandbox</span>
        </div>
        <button 
          onClick={() => setIsDarkMode(!isDarkMode)}
          className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-emerald-400 transition-all border border-transparent dark:border-slate-600"
        >
          {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </nav>

      <main className="flex-grow flex flex-col">
        <Routes>
          <Route path="/" element={<Playground />} />
        </Routes>
      </main>
    </div>
  );
}

export default function App() {
  return (
    <PlaygroundProvider>
      <Router>
        <AppContent/>
      </Router>
    </PlaygroundProvider>
  );
}