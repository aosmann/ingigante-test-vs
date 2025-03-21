import { client } from "./sanity.client";

export async function querySearch(searchTerm) {
  const query =
    searchTerm == ""
      ? `*[_type == "properties"]`
      : `*[_type == "properties" && title match "${searchTerm}*" || city match "${searchTerm}*"]`;
  const response = await client.fetch(query);

  return response;
}
