import Head from "next/head";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Reference from "../components/Reference";

import business from "../public/assets/images/business.jpg";
import investment from "../public/assets/images/investment.jpg";
import travel from "../public/assets/images/travel.jpg";
import { client } from "../lib/sanity.client";
import ServicesComponent from "../components/ServicesComponent";
import { PortableText } from "@portabletext/react";
import RichTextComponent from "../components/RichTextComponent";
import urlFor from "../lib/urlFor";
import { GetStaticProps } from "next";

export const getStaticProps: GetStaticProps = async () => {
  const references = await client.fetch(
    `*[_type == "references" && _id in path("drafts.**") == false]`
  );
  const services = await client.fetch(
    `*[_type == "services" && _id in path("drafts.**") == false]|order(ordering)`
  );

  console.log(services);

  return {
    props: {
      references,
      services,
    },
    revalidate: 10,
  };
};

const Services = ({ references, services }) => {
  return (
    <div className="min-h-screen">
      <Head>
        <title>Services | Ingigante</title>
        <link rel="icon" href="/favicon.ico" />

        {/* Google Tag Manager */}
          <script async src="https://www.googletagmanager.com/gtag/js?id=AW-11184375903"></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'AW-11184375903');
              `,
            }}
          />
        
        {/* Google Analytics Manager */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-TWF5MYQK4E"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-TWF5MYQK4E');
            `,
          }}
        />
        
      </Head>
      <div className='bg-[url("/assets/images/consulting.png")] bg-no-repeat bg-cover py-40 sm:py-25 text-secondary top-0'>
        <div className="flex flex-col justify-center items-center">
          <div className="max-w-7xl w-full">
            <h1 className="text-center font-bely text-[30px] md:text-[60px]">
              SERVICES
            </h1>
            <p className="text-[16px] text-center max-w-4xl m-auto">
              We provide complete services for the sale, purchase and rental of
              real estate. We also offer business consulting services for a
              variety of industries. Let our local knowledge and experience
              guide you
            </p>
          </div>
        </div>
      </div>
      <section className="text-primary bg-white pt-9">
        <div className="flex justify-center mt-10 mb-10 px-4">
          <div className="grid grid-cols-1 gap-10 md:gap-44 mb-8 max-w-7xl">
            {services.map((service) => (
              <div
                className={`flex flex-col ${
                  service.ordering % 2 === 0
                    ? "sm:flex-row-reverse sm:space-x-reverse sm:space-x-10"
                    : "sm:flex-row sm:space-x-10"
                }   items-start space-y-6 sm:space-y-0 md:items-center relative`}
                key={service._id}
              >
                {/* <Image
                  src={`${urlFor(
                    service.image
                  ).url()}?w=628&h=413&fit=crop&crop=center`}
                  alt="card"
                  width={628}
                  height={413}
                  style={{ objectFit: "cover" }}
                  priority
                /> */}

                <div className="lg:w-1/2">
                  <img
                    src={urlFor(service.image).url()}
                    alt="123"
                    className="lg:h-96 w-full object-cover lg:object-center"
                  />
                </div>

                

                <div className="flex flex-col space-y-6 sm:space-y-0 lg:max-w-[50%]">
                  <h1 className="font-bold text-[45px] leading-none">
                    {service.servicesTitle}
                  </h1>
                  <div className="text-[18px] text-justify pt-4">
                    <PortableText
                      value={service.servicesText}
                      components={RichTextComponent}
                    />
                    <br />
                    <Link href={"/contact"} className="underline font-bold py-4">
                      Contact Us
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* <section className='text-primary flex px-4 xl:justify-center'>
        <div className='flex flex-col items-center lg:flex-row-reverse lg:space-x-reverse lg:space-x-10 mt-12 mb-12 max-w-7xl '>
          <Image
            src={investment}
            alt='about'
            className='w-[350px] sm:w-[450px] md:w-[450px] lg:w-[500px] xl:w-[600px] 2xl:w-[650px]'
          />
          <div className='text-[17px] lg:w-[350px]'>
            <h2 className='text-[35px] lg:text-[50px]'>Property Management</h2>
            <div className=''>
              <p>
                We are a company that connects the world of real estate and
                finance. We provide a complete service for the sale, purchase or
                rental of real estate. Our advantage is more than 15 years of
                experience and soil in attractive locat We have a connection to
                all banks on the Slovak market, so we can solve everything under
                one roof. By constantly innovating our business activities, we
                move forward and we are able to offer truly
              </p>
              <Link href={'/contact'} className='underline font-bold'>
                Contact Us {'>'}
              </Link>
            </div>
          </div>
        </div>
      </section> */}
      <Reference references={references} />
    </div>
  );
};

export default Services;
