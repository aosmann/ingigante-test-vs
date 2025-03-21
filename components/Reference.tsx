import React from "react";
import Slider from "react-slick";
import { GoQuote } from "react-icons/go";

const Reference = ({ references }) => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 600,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-2">References</h2>
        <p className="text-base sm:text-lg text-gray-600 mb-10">
          Here is what our customers say about us.
        </p>

        <Slider {...settings}>
          {references.map((reference) => (
            <div key={reference._id} className="px-4">
              <div className="bg-[#F4F4F4] p-6 sm:p-8 h-full rounded-xl flex flex-col justify-between min-h-[300px] text-left">
                <div className="flex-1">
                  <GoQuote className="text-4xl text-gray-300 mb-4" />
                  <p className="text-gray-700 text-sm leading-relaxed">{reference.referenceText}</p>
                </div>
                <div className="mt-6 border-t pt-4 border-gray-300">
                  <h3 className="text-lg font-semibold text-gray-800">{reference.clientName}</h3>
                  <p className="text-sm text-gray-500">{reference.propertyName}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Reference;
