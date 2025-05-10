import { Block } from 'payload';
import Heading from './Heading';
import Text from './Text';

const Flex: Block = {
  slug: 'flex',
  labels: {
    singular: 'Flex Layout',
    plural: 'Flex Layouts',
  },
  fields: [
    {
      name: 'direction',
      type: 'select',
      options: [
        { label: 'Row', value: 'row' },
        { label: 'Column', value: 'column' },
      ],
      defaultValue: 'row',
      required: true,
    },
    {
      name: 'align',
      type: 'select',
      options: [
        { label: 'Start', value: 'flex-start' },
        { label: 'Center', value: 'center' },
        { label: 'End', value: 'flex-end' },
        { label: 'Stretch', value: 'stretch' },
      ],
      defaultValue: 'stretch',
    },
    {
      name: 'justify',
      type: 'select',
      options: [
        { label: 'Start', value: 'flex-start' },
        { label: 'Center', value: 'center' },
        { label: 'End', value: 'flex-end' },
        { label: 'Space Between', value: 'space-between' },
        { label: 'Space Around', value: 'space-around' },
      ],
      defaultValue: 'flex-start',
    },
    {
      name: 'children',
      type: 'blocks',
      label: 'Contenido interno',
      blocks: [
        Heading,
        Text,
        // puedes agregar más bloques aquí más adelante
      ],
    },
  ],
};

export default Flex;
