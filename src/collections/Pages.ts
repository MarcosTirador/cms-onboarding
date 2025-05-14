import { CollectionConfig } from 'payload';
import slug from '@/fields/slug'; // Este será un campo custom que conecta con el título
import Heading from '@/blocks/Heading/Heading';
import Flex from '@/blocks/Flex/Flex';
import Button from '@/blocks/Button/Button';
import Text from '@/blocks/Text/Text';
import Accordion from '@/blocks/Accordion/Accordion';
import Grid from '@/blocks/Grid/Grid';
import { isAdmin } from '../access/isAdmin';
import { isAdminOrEditor } from '../access/isAdminOrEditor';


export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug'],
  },
  access: {
    read: () => true, // tanto Admin como Editor pueden leer y usar páginas
    create: isAdminOrEditor,
    update: isAdminOrEditor,
    delete: isAdmin,
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
        Heading, Text, Flex, Button, Accordion, Grid
        // Aquí luego agregarás los bloques como Heading, Text, Flex, etc.
      ],
    },
  ],
};
