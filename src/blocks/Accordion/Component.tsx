'use client';
import { useState } from 'react';

export default function AccordionBlock({ title, content }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded mb-4">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left px-4 py-3 bg-gray-50 hover:bg-gray-100 font-semibold"
      >
        {title} {open ? '▲' : '▼'}
      </button>
      {open && (
        <div className="px-4 py-3 bg-blue text-gray-700">
          {content}
        </div>
      )}
    </div>
  );
}
