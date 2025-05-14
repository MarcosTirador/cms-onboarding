import { Block } from 'payload';

const Heading: Block = {
  slug: 'heading',
  labels: {
    singular: 'Heading',
    plural: 'Headings',
  },
  fields: [
    {
      name: 'text',
      type: 'text',
      required: true,
    },
    {
      name: 'size',
      type: 'select',
      defaultValue: 'h2',
      options: [
        { label: 'H1', value: 'h1' },
        { label: 'H2', value: 'h2' },
        { label: 'H3', value: 'h3' },
      ],
    },
  ],
};

export default Heading;
