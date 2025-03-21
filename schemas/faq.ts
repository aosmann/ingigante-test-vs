import { defineField, defineType } from 'sanity';
import { AiOutlineQuestionCircle as icon } from 'react-icons/ai';

export default defineType({
  name: 'faq',
  type: 'document',
  title: 'FAQ',
  icon,
  fields: [
    defineField({
      name: 'question',
      type: 'string',
      title: 'Question',
    }),
    defineField({
      name: 'answer',
      type: 'string',
      title: 'Answer',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'question',
        maxLength: 100,
      },
    }),
  ],
  preview: {
    select: { title: 'question' },
  },
});
