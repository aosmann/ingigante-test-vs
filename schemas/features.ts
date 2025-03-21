import { defineField, defineType } from 'sanity';
import { AiOutlineStar as icon } from 'react-icons/ai';

export default defineType({
  name: 'features',
  type: 'document',
  title: 'Features',
  icon,
  fields: [
    defineField({
      name: 'featureName',
      type: 'string',
      title: 'Feature Name',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'featureName',
        maxLength: 100,
      },
    }),
  ],
  preview: {
    select: { title: 'featureName' },
  },
});
