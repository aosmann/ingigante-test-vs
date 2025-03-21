import { defineField, defineType } from 'sanity';
import { GoLocation as icon } from 'react-icons/go';

export default defineType({
  name: 'locations',
  type: 'document',
  title: 'Locations',
  icon,
  fields: [
    defineField({
      name: 'locationName',
      type: 'string',
      title: 'Location Name',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'locationName',
        maxLength: 100,
      },
    }),
  ],
  preview: {
    select: { title: 'locationName' },
  },
});
