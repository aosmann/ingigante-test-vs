import { defineField, defineType } from "sanity";
import { HiOutlineDotsCircleHorizontal as icon } from "react-icons/hi";

export default defineType({
  name: "otherServices",
  type: "document",
  title: "Other Services",
  icon,
  fields: [
    defineField({
      name: "other_header",
      type: "string",
      title: "Header",
    }),
    defineField({
      name: "other_text",
      type: "text",
      title: "Text",
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "link_text",
      type: "string",
      title: "Link Test",
    }),
    defineField({
      name: "link_address",
      type: "string",
      title: "Link Address",
    }),
    defineField({
      name: "ordering",
      type: "number",
      title: "Ordering",
    }),
  ],
  preview: {
    select: { title: "other_header" },
  },
});
