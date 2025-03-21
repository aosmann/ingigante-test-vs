import { defineField, defineType } from "sanity";
import { RiContactsBookLine as icon } from "react-icons/ri";

export default defineType({
  name: "contactForm",
  type: "document",
  title: "Contact Form",
  icon,
  fields: [
    defineField({
      name: "firstName",
      type: "string",
      title: "First Name",
    }),
    defineField({
      name: "lastName",
      type: "string",
      title: "Last Name",
    }),
    defineField({
      name: "email",
      type: "string",
      title: "Email Address",
    }),
    defineField({
      name: "phone",
      type: "string",
      title: "Phone Number",
    }),
    defineField({
      name: "message",
      type: "text",
      title: "Message",
    }),
    defineField({
      name: "property",
      title: "Related Property",
      type: "reference",
      to: [{ type: "properties" }, { type: "propertiesRent" }],
    }),
  ],
  preview: {
    select: { title: "email" },
  },
});
