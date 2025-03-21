// lib/api.js
import { client } from "./sanity.client";

export async function getProperties({
  category = null,
  minBedrooms = null,
  minBathrooms = null,
  sortByPrice = null,
  sortDescending = null,
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

  // if (minBedrooms !== null) {
  //   query += ` && bedrooms >= $minBedrooms`;
  //   params.minBedrooms = minBedrooms;
  // }

  // if (minBathrooms !== null) {
  //   query += ` && bathrooms >= $minBathrooms`;
  //   params.minBathrooms = minBathrooms;
  // }

  query += `]`;

  if (sortByPrice) {
    query += `| order(sellPrice ${
      sortDescending === "sellPrice-desc" ? "desc" : "asc"
    })`;
  }

  query += ` {
      ...,
      location->,
      propertyType->
    }`;

  const response = await client.fetch(query, params);

  return response;
}

export async function getPropertiesRent({
  category = null,
  minBedrooms = null,
  minBathrooms = null,
  sortByPrice = null,
  sortDescending = null,
  searchQuery = "",
  priceMin = null,
  priceMax = null,
  location = null,
  feature = null,
  priceCategory = null,
}) {
  let query = `*[_type == "propertiesRent"`;
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
    query += ` && price >= $priceMin`;
    params.priceMin = priceMin;
  }

  if (priceMax) {
    query += ` && price <= $priceMax`;
    params.priceMax = priceMax;
  }

  if (priceCategory) {
    query += ` && category == $priceCategory`;
    params.priceCategory = priceCategory;
  }

  if (location) {
    query += ` && location->locationName == $location`;
    params.location = location;
  }

  if (feature) {
    query += ` && features->featureName == $feature`;
    params.feature = feature;
  }

  query += `]`;

  if (sortByPrice) {
    query += `| order(price ${
      sortDescending === "price-desc" ? "desc" : "asc"
    })`;
  }

  query += ` {
      ...,
      location->,
      propertyType->,
      features->
    }`;

  const response = await client.fetch(query, params);

  console.log(query);
  console.log(response);

  return response;
}
