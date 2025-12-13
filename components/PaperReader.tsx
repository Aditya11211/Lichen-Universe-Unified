import React from 'react';
import { Paper, Section } from '../types';

interface PaperReaderProps {
  paper: Paper;
}

const PaperReader: React.FC<PaperReaderProps> = ({ paper }) => {
  return (
    <article className="max-w-4xl mx-auto bg-white p-8 md:p-16 shadow-sm border border-gray-200 min-h-screen">
      {/* Header */}
      <header className="border-b border-gray-300 pb-8 mb-8 text-center">
        <div className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">
          {paper.style} &bull; {paper.version}
        </div>
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4 leading-tight">
          {paper.title}
        </h1>
        {paper.subtitle && (
          <h2 className="text-xl md:text-2xl font-serif text-gray-600 mb-6 font-light italic">
            {paper.subtitle}
          </h2>
        )}
        <div className="text-sm md:text-base font-medium text-gray-800">
          {paper.author}
        </div>
      </header>

      {/* Abstract */}
      <div className="bg-gray-50 p-6 rounded-lg mb-10 border-l-4 border-gray-400">
        <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Abstract / Résumé</h3>
        <p className="font-serif text-gray-700 leading-relaxed italic">
          {paper.summary}
        </p>
      </div>

      {/* Content */}
      <div className="space-y-10">
        {paper.sections.map((section: Section, idx) => (
          <section key={idx} className="group">
            {section.title && (
              <h3 className="text-xl font-bold text-gray-900 mb-4 font-sans border-b border-gray-100 pb-2">
                {section.title}
              </h3>
            )}
            
            <div className="font-serif text-gray-800 leading-7 space-y-4">
              {section.content.map((paragraph, pIdx) => (
                <p key={pIdx} className="text-justify">
                  {paragraph}
                </p>
              ))}
            </div>

            {section.equation && (
              <div className="my-6 p-4 bg-gray-50 text-center rounded border border-gray-200 overflow-x-auto">
                <code className="text-lg md:text-xl font-mono text-blue-900">
                  {section.equation}
                </code>
              </div>
            )}

            {section.listItems && (
              <ul className="list-disc pl-6 mt-4 space-y-2 font-serif text-gray-800">
                {section.listItems.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            )}

            {section.table && (
              <div className="my-6 overflow-x-auto">
                <table className="min-w-full border-collapse border border-gray-300 text-sm font-sans">
                  <thead>
                    <tr className="bg-gray-100">
                      {section.table.headers.map((h, hIdx) => (
                        <th key={hIdx} className="border border-gray-300 px-4 py-2 text-left font-semibold text-gray-700">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {section.table.rows.map((row, rIdx) => (
                      <tr key={rIdx} className="hover:bg-gray-50">
                        {row.map((cell, cIdx) => (
                          <td key={cIdx} className="border border-gray-300 px-4 py-2 text-gray-700">{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </section>
        ))}
      </div>

      {/* Footer */}
      <footer className="mt-16 pt-8 border-t border-gray-300 text-center text-gray-400 text-sm font-sans">
        &copy; {new Date().getFullYear()} Ouellet Research Archive. All rights reserved. <br/>
        Generated from the White Paper Repository.
      </footer>
    </article>
  );
};

export default PaperReader;