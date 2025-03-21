// lib/sanity.js

import { client } from "./sanity.client";

export async function getProperties1() {
  const query = `*[_type == "properties"] | order(_createdAt desc)`;
  const response = await client.fetch(query);
  return response;
}

export const getRecentPropertiesSale = async (limit = 5) => {
  const query = `*[_type == "properties"] | order(_createdAt desc)[0...$limit] {
    _id,
    title,
    sellPrice,
    location->{
      locationName
    },
    "image": mainImage.asset->url,
    slug,
    flash_text
  }`;

  const properties = await client.fetch(query, { limit });

  return properties.map((p: any) => ({
    id: p._id,
    title: p.title,
    price: p.sellPrice,
    location: p.location?.locationName || "",
    image: p.image,
    tag: p.flash_text,
    link: `/property/${p.slug?.current}`,
  }));
};