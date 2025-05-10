import { CollectionConfig } from 'payload';

export const EmployeeNotes: CollectionConfig = {
  slug: 'employee-notes',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: ({ req: { user } }) => user?.role === 'admin',
    create: ({ req: { user } }) => user?.role === 'admin',
    update: ({ req: { user } }) => user?.role === 'admin',
    delete: ({ req: { user } }) => user?.role === 'admin',
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
