import { createClient } from "next-sanity";

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION;
export const token = process.env.NEXT_PUBLIC_SANITY_TOKEN;

// console.log({projectId,dataset,apiVersion})

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  // token,
  useCdn: false,
});

export const client_with_token = createClient({
  projectId,
  dataset,
  apiVersion,
  token,
  useCdn: false,
});
