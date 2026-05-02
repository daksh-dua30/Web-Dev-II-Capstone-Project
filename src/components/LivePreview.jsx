import { useContext, useEffect, useState } from 'react';
import { PlaygroundContext } from '../context/PlaygroundContext';
import { useDebounce } from '../hooks/useDebounce';
import { LayoutTemplate } from 'lucide-react';

export default function LivePreview() {
  const { htmlCode, cssCode, jsCode } = useContext(PlaygroundContext);
  const [srcDoc, setSrcDoc] = useState('');

  const debouncedHtml = useDebounce(htmlCode, 500);
  const debouncedCss = useDebounce(cssCode, 500);
  const debouncedJs = useDebounce(jsCode, 500);

  useEffect(() => {
    const combinedCode = `
      <html>
        <head>
          <style>
            body { margin: 0; padding: 16px; }
            ${debouncedCss}
          </style>
        </head>
        <body>
          ${debouncedHtml}
          <script>${debouncedJs}</script>
        </body>
      </html>
    `;
    setSrcDoc(combinedCode);
  }, [debouncedHtml, debouncedCss, debouncedJs]);

  return (
    <div className="flex flex-col h-full w-full bg-white dark:bg-slate-900">
      {/* Added Header Bar */}
      <div className="h-[43px] flex items-center px-4 bg-gray-100 dark:bg-slate-950 border-b border-gray-200 dark:border-slate-700 text-sm font-semibold text-gray-500 dark:text-slate-400">
        <LayoutTemplate size={16} className="mr-2" />
        LIVE PREVIEW
      </div>
      
      {/* Iframe Container */}
      <div className="flex-grow bg-white">
        <iframe
          srcDoc={srcDoc}
          title="Live Preview"
          sandbox="allow-scripts allow-modals"
          className="w-full h-full border-none"
        />
      </div>
    </div>
  );
}