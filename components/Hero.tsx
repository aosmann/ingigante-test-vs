import React, { useState } from "react";
import Image from "next/image";
import { FaMapMarkerAlt } from "react-icons/fa";
import hero from "../public/assets/images/hero.png";
import { FiSearch, FiChevronDown } from "react-icons/fi";
import Link from "next/link";

import Select from "react-select";

const Hero = ({ propertyType, locations }) => {
  const [location, setLocation] = useState(null);
  const [category, setCategory] = useState(null);

  // const [searchCat, setSearchCat] = useState(null);

  function handleCategoryChange(event) { 
    setCategory(event.value);
  }

  function handleLocationChange(event) {
    setLocation(event.value);
  }

  const locationOptions = locations.map((item) => ({
    value: item.locationName,
    label: item.locationName,
  }));

  const typeOptions = [
    { value: "rentals", label: "For Rent" },
    { value: "sales", label: "For Sale" },
  ];

  return (
    <section className="bg-primary py-16 flex flex-col justify-center items-center top-0 sm:mt-4 m--1 overflow-y-hidden z-10">
      <div className="flex flex-col space-y-5 lg:items-center justify-center max-w-7xl lg:flex-row p-4 relative items-center">
        <div className="space-y-4 md:mb-20 sm:mb-10">
          <h1
            className="text-[35px] lg:text-[64px] text-secondary font-bely uppercase leading-snug"
            id="customFont"
          >
            YOUR LOCAL EXPERTS!
          </h1>
          <p className="text-secondary-light font-thin tracking-wider leading-[30px] text-[14px] sm:text-[21px] mb-4 line-h-2 pt-4 sm:pt-0">
            We have developed a deep understanding of the local market and are
            dedicated to helping our clients achieve their real estate goals.
          </p>
        </div>
        <Image
          src={hero}
          alt="hero"
          className="w-[300px] sm:w-[400px] md:w-[400px] lg:w-[500px] xl:w-[550px] 2xl:w-[650px]"
        />
        <div className="bg-[#F4F4F4] p-4 rounded mt-6 lg:absolute lg:w-2/3 w-full lg:bottom-14 lg:left-4 xl:bottom-20 2xl:bottom-34 max-w-[47rem] z-50">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between lg:space-x-4 ">
            <div className="relative mb-6 lg:mb-0 lg:w-full z-20">
              <Select
                defaultValue={category}
                onChange={handleCategoryChange}
                options={typeOptions}
                isSearchable={false}
                placeholder="Type"
              />
              {/* <select
                value={category || ""}
                onChange={handleCategoryChange}
                className="w-full block bg-white border border-btn p-2.5 rounded-md text-sm appearance-none md:pr-20"
              >
                <option value={""}>Property Type</option>
                <option value={"House"}>House</option>
                <option value={"Townhomes"}>Townhomes</option>
                <option value={"Multi"}>Multi-family</option>
                <option value={"Condos"}>Condos/Co-ops</option>
                <option value={"Lots"}>Lots/Lands</option>
                <option value={"Apartment"}>Apartment</option>
                <option value={"Manufactured"}>Manufactured</option>
              </select> */}

              {/* <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <FiChevronDown color="primary" className="opacity-30" />
              </div> */}
            </div>
            <div className="relative mb-6 lg:mb-0 lg:w-full z-10">
              <Select
                defaultValue={location}
                onChange={handleLocationChange}
                options={locationOptions}
                isSearchable={false}
                placeholder="Location"
                maxMenuHeight={145}
              />
              
              {/* <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <FaMapMarkerAlt color="primary" className="opacity-30" />
              </div>
              <input
                type="text"
                className="bg-white border border-gray-300 text-gray-900 text-sm rounded-md  block w-full pl-10 p-2.5"
                placeholder="Search of location"
                onChange={handleSearchQuery}
              ></input> */}
            </div>
            <Link
              href={{
                pathname: category == "sales" ? "/sales" : "/rentals",
                query: { loc: location },
              }}
            >
              <button className="bg-btn text-white flex items-center justify-center py-3 rounded-md lg:py-2 lg:px-4 w-full">
                <span>
                  <FiSearch className="mr-4" />
                </span>
                Search
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
