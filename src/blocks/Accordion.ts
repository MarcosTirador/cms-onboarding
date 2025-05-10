import { Block } from 'payload';

const Accordion: Block = {
  slug: 'accordion',
  labels: {
    singular: 'Accordion',
    plural: 'Accordions',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'content',
      type: 'textarea',
      required: true,
    },
  ],
};

export default Accordion;