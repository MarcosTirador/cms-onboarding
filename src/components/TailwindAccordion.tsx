'use client';
import { useState } from 'react';

type Props = {
  title: string;
  content: string;
};

export default function TailwindAccordion({ title, content }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded mb-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left px-4 py-3 bg-white hover:bg-gray-50 font-semibold flex items-center justify-between"
      >
        <span>{title}</span>
        <span className="text-xl">{isOpen ? '▲' : '▼'}</span>
      </button>
      {isOpen && (
        <div className="px-4 py-3 bg-gray-50 text-gray-700 leading-relaxed">
          {content}
        </div>
      )}
    </div>
  );
}
