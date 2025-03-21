import { defineField, defineType } from "sanity";
import { BsChatLeftQuote as icon } from "react-icons/bs";

export default defineType({
  name: "references",
  title: "References",
  type: "document",
  icon,
  fields: [
    defineField({
      name: "referenceText",
      title: "Reference Text",
      type: "text",
    }),
    defineField({
      name: "clientName",
      title: "Client Name",
      type: "string",
    }),
    defineField({
      name: "propertyName",
      title: "Property Name",
      type: "string",
    }),
  ],
  preview: {
    select: { title: "clientName" },
  },
});
