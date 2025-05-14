import { CollectionConfig } from 'payload';
import { isAdmin } from '../access/isAdmin';

export const EmployeeNotes: CollectionConfig = {
  slug: 'employee-notes',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read:   isAdmin,
    create: isAdmin,
    update: isAdmin,
    delete: isAdmin,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'note',
      type: 'textarea', // puedes usar 'richText' si haces la sección bonus
      required: true,
    },
  ],
};
