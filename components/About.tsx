import React from 'react';
import Image from 'next/image';
import about from '../public/assets/images/about.png';

const About = () => {
  return (
    <section
      id="about"
      className="py-16 px-4 text-primary bg-white"
      aria-labelledby="about-heading"
    >
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12">
        {/* Text Content */}
        <article className="lg:w-1/2 text-center lg:text-left">
          <h2
            id="about-heading"
            className="text-4xl md:text-5xl font-bold mb-4 relative inline-block"
          >
            About Us
            <span className="block w-20 h-1 bg-primary mt-2 mx-auto lg:mx-0 rounded-full" />
          </h2>
          <p className="text-lg leading-relaxed text-gray-700">
            We are a trusted real estate team dedicated to helping buyers, sellers, and investors
            succeed in today’s competitive housing market. Our experienced real estate agents,
            brokers, property managers, and consultants collaborate to deliver expert guidance,
            custom solutions, and reliable service tailored to your unique goals.
          </p>
          <p className="text-lg leading-relaxed text-gray-700 mt-4">
            Whether you’re looking to purchase your dream home, sell your property, or manage real estate investments, we’re here to make the process smooth, efficient, and rewarding.
            Discover how we can help you succeed in your real estate journey.
          </p>
        </article>

        {/* Image with SEO-friendly alt */}
        <div className="lg:w-1/2">
          <div className="w-full max-w-[600px] mx-auto rounded-2xl overflow-hidden shadow-lg">
            <Image
              src={about}
              alt="Experienced real estate team discussing property solutions"
              className="object-cover w-full h-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
