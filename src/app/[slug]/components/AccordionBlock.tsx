'use client';
import { useState } from 'react';

type Props = {
  title: string;
  content: string;
};

export default function AccordionBlock({ title, content }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ border: '1px solid #ccc', borderRadius: '4px', marginBottom: '1rem' }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: '100%',
          padding: '0.75rem 1rem',
          background: '#f9fafb',
          border: 'none',
          textAlign: 'left',
          fontWeight: 'bold',
          cursor: 'pointer',
        }}
      >
        {title} {open ? '▲' : '▼'}
      </button>
      {open && (
        <div style={{ padding: '1rem', background: 'white' }}>
          {content}
        </div>
      )}
    </div>
  );
}
