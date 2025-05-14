import Head from 'next/head';
import type { Block } from 'payload';
import Heading from './Heading';
import Text from './Text';
import Button from './Button';
import Accordion from './Accordion';

const Grid: Block = {
  slug: 'grid',
  fields: [
    {
      name: 'columns',
      type: 'number',
      defaultValue: 2,
      required: true,
      admin: {
        description: 'Número de columnas del grid (de 1 a 12)',
      },
    },
    {
      name: 'gap',
      type: 'number',
      defaultValue: 4,
      admin: {
        description: 'Espaciado entre columnas (Tailwind gap)',
      },
    },
    {
      name: 'children',
      type: 'blocks',
      blocks: [
        Heading, Text, Button, Accordion
        // puedes agregar más bloques si quieres
      ],
    },
  ],
};

export default Grid;
