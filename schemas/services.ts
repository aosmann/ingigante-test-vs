import { defineField, defineType } from 'sanity';
import { AiOutlinePaperClip as icon } from 'react-icons/ai';
export default defineType({
  name: 'services',
  type: 'document',
  title: 'Services',
  icon,
  fields: [
    defineField({
      name: 'servicesTitle',
      type: 'string',
      title: 'Header',
    }),
    defineField({
      name: 'servicesText',
      type: 'blockContent',
      title: 'Text',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'ordering',
      type: 'number',
      title: 'Ordering',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      media: 'image',
      title: 'servicesTitle',
    },
  },
});
