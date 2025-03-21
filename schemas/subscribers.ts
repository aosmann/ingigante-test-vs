import { defineField, defineType } from "sanity";
import { BsPersonPlus as icon } from "react-icons/bs";

export default defineType({
  name: "subscribers",
  type: "document",
  title: "Subscribers",
  icon,
  fields: [
    defineField({
      name: "email",
      type: "string",
      title: "Email Address",
    }),
  ],
  preview: {
    select: { title: "email" },
  },
});
