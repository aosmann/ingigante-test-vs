// pages/index.js

import { useState, useEffect } from "react";
import { getProperties } from "../lib/api";

export default function open() {
  const [properties, setProperties] = useState([]);
  const [category, setCategory] = useState(null);
  const [minBedrooms, setMinBedrooms] = useState(null);
  const [minBathrooms, setMinBathrooms] = useState(null);
  const [sortByPrice, setSortByPrice] = useState(false);
  const [sortDescending, setSortDescending] = useState(false);

  useEffect(() => {
    async function fetchProperties() {
      const data = await getProperties({
        category,
        minBedrooms,
        minBathrooms,
        sortByPrice,
        sortDescending,
      });
      setProperties(data);
    }
    fetchProperties();
  }, [category, minBedrooms, minBathrooms, sortByPrice, sortDescending]);

  function handleCategoryChange(event) {
    setCategory(event.target.value);
  }

  function handleBedroomsChange(event) {
    setMinBedrooms(parseInt(event.target.value) || null);
  }

  function handleBathroomsChange(event) {
    setMinBathrooms(parseInt(event.target.value) || null);
  }

  function handleSortChange(event) {
    const value = event.target.value;
    setSortByPrice(value === "sellPrice");
    setSortDescending(value === "sellPrice-desc");
  }

  return (
    <div>
      <h1>Properties</h1>
      <div>
        <label>
          Category:
          <select value={category || ""} onChange={handleCategoryChange}>
            <option value="">All</option>
            <option value="House">House</option>
            <option value="Apartment">Apartment</option>
            <option value="category3-id">Category 3</option>
          </select>
        </label>
        <label>
          Minimum Bedrooms:
          <input
            type="number"
            value={minBedrooms || ""}
            onChange={handleBedroomsChange}
          />
        </label>
        <label>
          Minimum Bathrooms:
          <input
            type="number"
            value={minBathrooms || ""}
            onChange={handleBathroomsChange}
          />
        </label>
        <label>
          Sort by:
          <select
            value={
              sortByPrice
                ? sortDescending
                  ? "sellPrice-desc"
                  : "Price"
                : "none"
            }
            onChange={handleSortChange}
          >
            <option value="none">None</option>
            <option value="sellPrice">Price (low to high)</option>
            <option value="sellPrice-desc">Price (high to low)</option>
          </select>
        </label>
      </div>
      <ul>
        {properties.map((property) => (
          <li key={property._id}>
            <h2>{property.title}</h2>
            <div>{property.sellPrice}</div>
            <div>{property.bedrooms} Bedrooms</div>
            <div>{property.bathrooms} Bathrooms</div>
            {/* <div>Categories: {property.categories.map((category) => category.title).join(', ')}</div> */}
          </li>
        ))}
      </ul>
    </div>
  );
}
