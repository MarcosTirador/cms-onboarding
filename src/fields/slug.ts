import { Field } from 'payload';

const slug = (fromField = 'title'): Field => ({
  name: 'slug',
  type: 'text',
  required: true,
  unique: true,
  index: true,
  admin: {
    position: 'sidebar',
  },
  hooks: {
    beforeValidate: [
      ({ value, data }) => {
        if (typeof value === 'string') return value;
        const title = data?.[fromField];
        return title?.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
      },
    ],
  },
});

export default slug;