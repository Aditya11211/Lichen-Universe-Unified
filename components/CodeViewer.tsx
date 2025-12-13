import React from 'react';
import { CodeSnippet } from '../types';
import { FileCode, Copy } from 'lucide-react';

interface CodeViewerProps {
  snippet: CodeSnippet;
}

export const CodeViewer: React.FC<CodeViewerProps> = ({ snippet }) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(snippet.code);
  };

  return (
    <div className="rounded-lg overflow-hidden border border-slate-700 bg-void-950 my-4 shadow-2xl">
      <div className="flex items-center justify-between px-4 py-2 bg-slate-800 border-b border-slate-700">
        <div className="flex items-center gap-2 text-slate-300">
          <FileCode size={16} className="text-lichen-400" />
          <span className="text-xs font-mono">{snippet.filename}</span>
        </div>
        <button 
            onClick={handleCopy}
            className="text-slate-400 hover:text-white transition-colors"
            title="Copier"
        >
            <Copy size={14} />
        </button>
      </div>
      <div className="p-4 overflow-x-auto">
        <pre className="text-sm font-mono text-slate-300">
          <code>{snippet.code}</code>
        </pre>
      </div>
    </div>
  );
};