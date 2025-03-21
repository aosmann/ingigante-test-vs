// ✅ FULL RentalDetails Page Redesign Based on Example Design
import { PortableText } from "@portabletext/react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import React, { useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { MdOutlineArrowBack } from "react-icons/md";
import { client, client_with_token } from "../../lib/sanity.client";
import Map from "../../components/Map";
import ImageCarousel from "../../components/ImageCarousel";
import RichTextComponent from "../../components/RichTextComponent";
import { Car, Bath, BedDouble, Ruler } from "lucide-react";
import RecentPropertiesSlider from "../../components/RecentPropertiesSlider";
import { getRecentPropertiesSale } from "../../lib/getProperties";
import { getProperties } from "../../lib/api";


export const getServerSideProps = async (pageContext) => {
  const pageSlug = pageContext.query.slug;

  const query = `*[ _type == "propertiesRent" && slug.current == $pageSlug][0]{ _id, ..., location->, propertyType-> }`;
  const rentals = await client.fetch(query, { pageSlug });

  let allImages = rentals?.images?.concat(rentals?.mainImage) || [];

  const properties = await getProperties({}); // Or use a filtered helper like getRecentPropertiesSale

  if (!rentals) return { props: null, notFound: true };

  return {
    props: {
      rentals,
      allImages,
      properties, // 👈 pass as prop
    },
  };
};



const RentalDetails = ({ rentals, allImages, recentProperties }: any) => {
  const formRef = useRef();
  const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', phone: '', message: '' });

  const submitContact = async (e: any) => {
    e.preventDefault();
    const newContact = {
      _type: "contactForm",
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
      property: { _type: "reference", _ref: rentals._id },
    };
    client_with_token.create(newContact)
      .then(() => {
        toast.success("Thank you for your message. We will get back shortly!");
        formRef.current.reset();
        setFormData({ firstName: '', lastName: '', email: '', phone: '', message: '' });
      })
      .catch(() => toast.error("Something went wrong. Please try again."));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Head>
        <title>{rentals.propertyType.typeName} for Rent in {rentals.location.locationName}, Nicaragua</title>
      </Head>

      <div className="space-y-4 mb-6">
        <Link href="/rentals" className="flex items-center text-gray-600 hover:text-primary">
          <MdOutlineArrowBack className="mr-2" /> Back
        </Link>
        <h1 className="text-2xl text-gray-600">{rentals.propertyType.typeName} for Rent in {rentals.location.locationName}</h1>
      </div>

      <div className="space-y-4 mb-6">
        <ImageCarousel images={allImages} />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Property Details */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">        
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">{rentals.title}</h2>
              <p className="text-xl text-primary font-semibold">${rentals.price} / {rentals.category}</p>
              <p className="text-gray-600">{rentals.location.locationName}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">{rentals.propertyType.typeName}</span>
                {rentals.beachfront === "Yes" && (
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Beachfront</span>
                )}
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-6 text-gray-700 py-6 border-y border-gray-200 text-sm">
                {rentals.rooms && (
                  <div className="flex items-center gap-2">
                    <BedDouble className="h-5 w-5" />
                    <span>{rentals.rooms} Rooms</span>
                  </div>
                )}
                {rentals.bathrooms && (
                  <div className="flex items-center gap-2">
                    <Bath className="h-5 w-5" />
                    <span>{rentals.bathrooms} Bathrooms</span>
                  </div>
                )}
                {rentals.area_total && (
                  <div className="flex items-center gap-2">
                    <Ruler className="h-5 w-5" />
                    <span>{rentals.area_total.toLocaleString()} m² total</span>

                  </div>
                )}
                {rentals.parking === "Yes" && (
                  <div className="flex items-center gap-2">
                    <Car className="h-5 w-5" />
                    <span>Parking</span>
                  </div>
                )}
              </div>

              <div className="mt-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">Description</h2>
                <div className="text-gray-700 text-sm leading-relaxed">
                  <PortableText value={rentals.overview} components={RichTextComponent} />
                </div>
                {rentals.vrview && (
                  <div className="mt-4">
                    <iframe width="100%" height="400" src={rentals.vrview} allowFullScreen></iframe>
                  </div>
                )}
              </div>

              <div className="mt-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">Map</h2>
                <Map location={rentals.maplocation} />
              </div>
            </div>
          </div>

        </div>


        {/* Contact Form Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Interested in this property?</h2>
            <form onSubmit={submitContact} ref={formRef} className="space-y-4">
              <input type="text" required name="firstName" placeholder="First Name" value={formData.firstName} onChange={(e) => setFormData({ ...formData, firstName: e.target.value })} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary" />
              <input type="text" required name="lastName" placeholder="Last Name" value={formData.lastName} onChange={(e) => setFormData({ ...formData, lastName: e.target.value })} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary" />
              <input type="email" required name="email" placeholder="Email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary" />
              <input type="tel" name="phone" placeholder="Phone" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary" />
              <textarea rows={4} required name="message" placeholder="Message" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary"></textarea>
              <button type="submit" className="w-full py-3 text-sm font-medium text-white bg-primary rounded-md hover:bg-primary/90">Contact Agent</button>
            </form>
          </div>
        </div>
      </div>
      {/* */}
     
 
    </div>
  );
};

export default RentalDetails;