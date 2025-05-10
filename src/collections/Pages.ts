import { CollectionConfig } from 'payload';
import slug from '@/fields/slug'; // Este será un campo custom que conecta con el título
import Heading from '@/blocks/Heading';
import Flex from '@/blocks/Flex';
import Button from '@/blocks/Button';
import Text from '@/blocks/Text';
import Accordion from '@/blocks/Accordion';
export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug'],
  },
  access: {
    read: () => true, // tanto Admin como Editor pueden leer y usar páginas
    create: ({ req: { user } }) => ['admin', 'editor'].includes(user?.role),
    update: ({ req: { user } }) => ['admin', 'editor'].includes(user?.role),
    delete: ({ req: { user } }) => user?.role === 'admin',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    slug('title'), // genera el slug dinámicamente basado en el título
    {
      name: 'layout',
      type: 'blocks',
      blocks: [
        Heading, Text, Flex, Button, Accordion
        // Aquí luego agregarás los bloques como Heading, Text, Flex, etc.
      ],
    },
  ],
};
