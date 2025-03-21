import { defineField, defineType } from "sanity";

export default defineType({
  name: "propertyImage",
  title: "Property Image",
  type: "image",
  options: {
    hotspot: true,
  },
  fields: [
    defineField({
      name: "caption",
      title: "Caption",
      type: "string",
    }),
  ],
});
