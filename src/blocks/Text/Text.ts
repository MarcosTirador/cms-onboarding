import { Block } from 'payload';

const Text: Block = {
  slug: 'text',
  labels: {
    singular: 'Text',
    plural: 'Texts',
  },
  fields: [
    {
      name: 'content',
      type: 'textarea',
      required: true,
    },
    {
      name: 'size',
      type: 'select',
      defaultValue: 'normal',
      options: [
        { label: 'Small', value: 'small' },
        { label: 'Normal', value: 'normal' },
        { label: 'Large', value: 'large' },
      ],
    },
  ],
};

export default Text;
