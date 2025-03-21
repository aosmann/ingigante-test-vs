import { defineField, defineType } from 'sanity';
import { AiOutlineEdit as icon } from 'react-icons/ai';

export default defineType({
  name: 'propertyType',
  type: 'document',
  title: 'Property Types',
  icon,
  fields: [
    defineField({
      name: 'typeName',
      type: 'string',
      title: 'Type',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'typeName',
        maxLength: 100,
      },
    }),
  ],
  preview: {
    select: { title: 'typeName' },
  },
});
