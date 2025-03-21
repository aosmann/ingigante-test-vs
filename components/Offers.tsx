import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, BedDouble, Bath, Ruler } from "lucide-react";
import urlFor from "../lib/urlFor";
import { useEffect, useRef, useState } from "react";

const Offers = ({ properties }: any) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollAmount = 340;
  const [autoScrollIndex, setAutoScrollIndex] = useState(0);

  // Add CTA card to end
  const allCards = [...properties.slice().reverse(), { isSeeAllCard: true }];


  const scrollToIndex = (index: number, smooth = true) => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollTo({
      left: index * scrollAmount,
      behavior: smooth ? "smooth" : "auto",
    });
  };

  const handleNext = () => {
    const nextIndex = autoScrollIndex + 1;
    if (nextIndex >= allCards.length) return;
    setAutoScrollIndex(nextIndex);
    scrollToIndex(nextIndex);
  };

  const handlePrev = () => {
    const prevIndex = autoScrollIndex - 1;
    if (prevIndex < 0) return;
    setAutoScrollIndex(prevIndex);
    scrollToIndex(prevIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (autoScrollIndex + 1) % allCards.length;
      setAutoScrollIndex(nextIndex);
      scrollToIndex(nextIndex);
    }, 5000);
    return () => clearInterval(interval);
  }, [autoScrollIndex]);

  return (
    <section className="w-full py-12 bg-[#F4F4F4]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Featured Listings</h2>
            <p className="text-gray-600 mt-1 text-sm">
              Fulfill your career dreams, enjoy all the achievements of the city center and luxury housing to the fullest
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/sales">
              <button className="p-2 border border-gray-300 rounded-md hover:bg-gray-100 text-sm text-primary hover:text-primary/80">
                See All Listings
              </button>
            </Link>
            <button onClick={handlePrev} className="p-2 border border-gray-300 rounded-md hover:bg-gray-100">
              <ChevronLeft size={20} />
            </button>
            <button onClick={handleNext} className="p-2 border border-gray-300 rounded-md hover:bg-gray-100">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Cards Slider */}
        <div
          ref={scrollRef}
          className="flex space-x-4 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 scrollbar-hide"
        >
          {allCards.map((property: any, index: number) => {
            if (property.isSeeAllCard) {
              // See All Listings Card
              return (
                <Link
                  key="see-all-card"
                  href="/sales"
                  className="flex-shrink-0 snap-start min-w-[75%] sm:min-w-[60%] md:min-w-[45%] bg-primary lg:min-w-[30%] max-w-sm bg-gradient-to-r from-[#b2a978] to-[#cec597] text-white rounded-lg shadow-md overflow-hidden transition duration-300 flex flex-col justify-center items-center text-center p-6"
                >
                  <h2 className="text-xl font-bold mb-2">See All Listings</h2>
                  <p className="text-sm opacity-90 mb-4">Browse all our stunning beachfront & luxury listings.</p>
                  <span className="inline-block bg-white text-[#b2a978] font-semibold px-4 py-2 rounded-md hover:bg-gray-100 transition">
                    View Listings →
                  </span>
                </Link>
              );
            }

            return (
              <Link
                key={`${property._id}-${index}`}
                href={`/property/${property.slug.current}`}
                className="flex-shrink-0 snap-start min-w-[75%] sm:min-w-[60%] md:min-w-[45%] lg:min-w-[30%] max-w-sm bg-white rounded-lg shadow-md overflow-hidden transition duration-300"
              >
                <div className="relative w-full h-[250px]">
                  <Image
                    src={`${urlFor(property.mainImage).url()}?w=390&h=290&fit=crop&crop=center`}
                    alt={property.title}
                    fill
                    className="object-cover"
                  />
                  {property.propertyType?.typeName && (
                    <div className="absolute bottom-3 left-3 bg-[#008975] text-white text-xs px-3 py-1 rounded-md uppercase font-extrabold">
                      {property.propertyType.typeName}
                    </div>
                  )}
                  {property.beachfront === "Yes" && (
                    <div className="absolute bottom-3 right-3 bg-[#0171d0] text-white text-xs px-3 py-1 rounded-md uppercase font-extrabold">
                      Beachfront
                    </div>
                  )}
                </div>

                <div className="flex flex-col justify-between p-4 space-y-2">
                  <div>
                    <h2 className="text-lg font-bold text-gray-900 line-clamp-2 leading-snug">{property.title}</h2>
                    <p className="text-sm text-gray-600 line-clamp-1 min-h-[1.25rem]">
                      {property.location?.locationName}, Nicaragua
                    </p>
                  </div>

                  {property.sellPrice && (
                    <p className="text-lg font-bold text-green-700">
                      ${property.sellPrice?.toLocaleString()}
                    </p>
                  )}

                  <div className="flex flex-wrap items-center text-sm text-gray-700 mt-2 gap-x-4 gap-y-2 border-t border-gray-200 pt-4">
                    {property.rooms && (
                      <div className="flex items-center gap-1">
                        <BedDouble className="h-4 w-4" />
                        <span>{property.rooms} beds</span>
                      </div>
                    )}
                    {property.bathrooms && (
                      <div className="flex items-center gap-1">
                        <Bath className="h-4 w-4" />
                        <span>{property.bathrooms} baths</span>
                      </div>
                    )}
                    {property.area_total && (
                      <div className="flex items-center gap-1">
                        <Ruler className="h-4 w-4" />
                        <span>{property.area_total.toLocaleString()} sqft</span>
                      </div>
                    )}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Offers;
