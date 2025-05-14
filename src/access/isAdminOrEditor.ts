import { Access } from 'payload';

export const isAdminOrEditor: Access = ({ req: { user } }) => ['admin', 'editor'].includes(user?.role);