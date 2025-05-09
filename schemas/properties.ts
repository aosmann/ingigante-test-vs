//../pages/schemas/properties.ts
import { defineField, defineType } from "sanity";
import { BsBuilding as icon } from "react-icons/bs";

export default defineType({
  name: "properties",
  title: "Sales Listings",
  type: "document",
  icon,
  fields: [
    defineField({
      name: "sellPrice",
      title: "Price",
      type: "number",
    }),
    defineField({
      name: "price_old",
      title: "market Value (Price Old)",
      type: "number",
    }),
    defineField({
      name: "mortgage",
      title: "Mortgage",
      type: "number",
    }),
    defineField({
      name: "propertyId",
      title: "Property ID",
      type: "number",
    }),
    defineField({
      name: "propertyType",
      title: "Property Type",
      type: "reference",
      to: [{ type: "propertyType" }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "location",
      title: "Location",
      type: "reference",
      to: [{ type: "locations" }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "flash_text",
      title: "Flash text",
      type: "string",
    }),
    defineField({
      name: "featured",
      title: "Featured Listing",
      type: "boolean",
    }),
    defineField({
      name: "area_total",
      title: "Area",
      type: "number",
    }),
    defineField({
      name: "parking",
      title: "Parking",
      type: "string",
      options: {
        list: [
          { title: "Yes", value: "Yes" },
          { title: "No", value: "No" },
        ],
        layout: "radio",
      },
    }),
    defineField({
      name: "rooms",
      title: "Number of rooms",
      type: "number",
    }),
    defineField({
      name: "bathrooms",
      title: "Bathrooms",
      type: "number",
    }),
    defineField({
      name: "propertySize",
      title: "Property Size",
      type: "number",
    }),
    defineField({
      name: "lotSize",
      title: "Lot Size",
      type: "number",
    }),
    defineField({
      name: "beachfront",
      title: "Beachfront",
      type: "string",
      options: {
        list: [
          { title: "Yes", value: "Yes" },
          { title: "No", value: "No" },
        ],
        layout: "radio",
      },
    }),
    defineField({
      name: "mainImage",
      title: "Main Image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "images",
      title: "Images",
      type: "array",
      of: [{ type: "propertyImage" }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "vrview",
      title: "360 View",
      type: "string",
    }),
    defineField({
      name: "overview",
      title: "Overview",
      type: "blockContent",
    }),
    defineField({
      title: "Map Location",
      name: "maplocation",
      type: "geopoint",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      validation: (Rule) => Rule.required(),
      options: {
        source: "title",
        maxLength: 100,
      },
    }),
  ],
  preview: {
    select: {
      media: "mainImage",
      title: "title",
    },
  },
});
