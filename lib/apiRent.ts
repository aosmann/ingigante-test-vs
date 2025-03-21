// lib/api.js
import { client } from "./sanity.client";

export async function getPropertiesRent({
  category = null,
  minBedrooms = null,
  minBathrooms = null,
  sortByPrice = false,
  sortDescending = false,
  searchQuery = "",
  priceMin = null,
  priceMax = null,
  location = null,
}) {
  let query = `*[_type == "properties"`;
  let params = {};

  if (searchQuery) {
    query += ` && title match $searchTerm`;
    params.searchTerm = searchQuery;
  }

  if (category) {
    query += ` && propertyType->typeName == $categoryID`;
    params.categoryID = category;
  }

  if (priceMin) {
    query += ` && sellPrice >= $priceMin`;
    params.priceMin = priceMin;
  }

  if (priceMax) {
    query += ` && sellPrice <= $priceMax`;
    params.priceMax = priceMax;
  }

  if (location) {
    query += ` && location->locationName == $location`;
    params.location = location;
  }

  if (minBedrooms !== null) {
    query += ` && bedrooms >= $minBedrooms`;
    params.minBedrooms = minBedrooms;
  }

  if (minBathrooms !== null) {
    query += ` && bathrooms >= $minBathrooms`;
    params.minBathrooms = minBathrooms;
  }

  query += `]`;

  if (sortByPrice) {
    query += `| order(sellPrice ${sortDescending ? "desc" : "asc"})`;
  }

  query += ` {
      ...,
      location->,
      propertyType->
    }`;

  const response = await client.fetch(query, params);
  console.log(query);
  console.log(response);

  return response;
}
