// ✅ Enhanced ImageCarousel: Grid View + Overlay + Image Viewer Modal + Keyboard Navigation + Mobile Friendly + Overlay Click Close
import React, { useState, useEffect } from "react";
import Image from "next/image";
import urlFor from "../lib/urlFor";
import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai";

interface ImageCarouselProps {
  images: any[];
}

const ImageCarousel = ({ images }: ImageCarouselProps) => {
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openViewer = (index: number) => {
    setCurrentIndex(index);
    setIsViewerOpen(true);
  };

  const closeViewer = () => setIsViewerOpen(false);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isViewerOpen) return;
      if (e.key === "Escape") closeViewer();
      else if (e.key === "ArrowRight") nextImage();
      else if (e.key === "ArrowLeft") prevImage();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isViewerOpen]);

  useEffect(() => {
    document.body.style.overflow = isViewerOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isViewerOpen]);

  return (
    <div className="grid grid-cols-4 grid-rows-2 gap-4 max-sm:grid-cols-2 max-sm:grid-rows-[auto_auto_auto]">
      {/* Large Primary Image - force first in DOM order for mobile */}
      {images[0] && (
        <div
          className="col-span-2 row-span-2 max-sm:col-span-2 max-sm:row-span-1 order-1 relative w-full h-96 sm:h-full rounded-lg overflow-hidden cursor-pointer"
          onClick={() => openViewer(0)}
        >
          <Image
            src={urlFor(images[0].asset).url()}
            alt="Main Image"
            fill
            className="object-cover"
          />
        </div>
      )}

      {/* Thumbnails */}
      {images[1] && (
        <div
          className="col-start-3 row-start-1 max-sm:col-span-1 max-sm:order-2 relative h-44 w-full rounded-lg overflow-hidden cursor-pointer"
          onClick={() => openViewer(1)}
        >
          <Image
            src={urlFor(images[1].asset).url()}
            alt="Image 2"
            fill
            className="object-cover"
          />
        </div>
      )}

      {images[2] && (
        <div
          className="col-start-4 row-start-1 max-sm:col-span-1 max-sm:order-3 relative h-44 w-full rounded-lg overflow-hidden cursor-pointer"
          onClick={() => openViewer(2)}
        >
          <Image
            src={urlFor(images[2].asset).url()}
            alt="Image 3"
            fill
            className="object-cover"
          />
        </div>
      )}

      {images[3] && (
        <div
          className="col-start-3 row-start-2 max-sm:col-span-1 max-sm:order-4 relative h-44 w-full rounded-lg overflow-hidden cursor-pointer"
          onClick={() => openViewer(3)}
        >
          <Image
            src={urlFor(images[3].asset).url()}
            alt="Image 4"
            fill
            className="object-cover"
          />
        </div>
      )}

      {images[4] && (
        <div
          className="col-start-4 row-start-2 max-sm:col-span-1 max-sm:order-5 relative h-44 w-full rounded-lg overflow-hidden cursor-pointer"
          onClick={() => openViewer(4)}
        >
          <Image
            src={urlFor(images[4].asset).url()}
            alt="Image 5"
            fill
            className="object-cover"
          />
          {images.length > 5 && (
            <div
              className="absolute inset-0 bg-black bg-opacity-60 text-white flex items-center justify-center text-lg font-semibold"
              onClick={() => openViewer(4)}
            >
              +{images.length - 5} more
            </div>
          )}
        </div>
      )}

      {/* Fullscreen Viewer */}
      {isViewerOpen && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center px-2"
          onClick={closeViewer}
        >
          <div className="absolute inset-0" onClick={closeViewer}></div>

          <button
            className="absolute top-4 right-4 text-white text-5xl z-50 p-4"
            onClick={closeViewer}
          >
            &times;
          </button>

          <button
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-3xl z-50"
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
          >
            <AiFillLeftCircle size={40} />
          </button>

          <div
            className="relative w-full max-w-5xl h-[80vh] z-40"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={urlFor(images[currentIndex].asset).url()}
              alt={`Image ${currentIndex + 1}`}
              fill
              className="object-contain"
            />
          </div>

          <button
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-3xl z-50"
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
          >
            <AiFillRightCircle size={40} />
          </button>
        </div>
      )}
    </div>
  );
};

export default ImageCarousel;
