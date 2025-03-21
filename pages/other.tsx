import React from "react";
import Image from "next/image";

import Link from "next/link";
import Reference from "../components/Reference";
import { client } from "../lib/sanity.client";
import Head from "next/head";
import escrow from "../public/assets/images/escrow.jpg";
import eventplan from "../public/assets/images/eventplan.jpg";

import OtherSection from "../components/OtherSection";

import { GetStaticProps } from "next";

export const getStaticProps: GetStaticProps = async () => {
  const references = await client.fetch(`*[_type == "references"]`);
  const otherServices = await client.fetch(
    `*[_type == "otherServices"] | order(ordering)`
  );
  return {
    props: {
      references,
      otherServices,
    },
    revalidate: 10,
  };
};

const other = ({ references, otherServices }) => {
  return (
    <div className="min-h-screen">
      <Head>
        <title>Services | Ingigante</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='bg-[url("/assets/images/consulting.png")] bg-no-repeat bg-cover py-52 text-secondary top-0'>
        <div className="flex flex-col justify-center items-center">
          <div className="max-w-7xl w-full">
            <h1 className=" text-center font-bely text-[30px] md:text-[60px]">
              OTHER SERVICES
            </h1>
            <p className="text-[16px] text-center">
              Professional services that assist clients in buying, selling,
              leasing, managing, and investing in real estate properties and
              much more.
            </p>
          </div>
        </div>
      </div>
      {/* {references.map((serv) => {
        <OtherSection services={otherServices} />;
      })} */}
      <section className="text-primary flex px-4 xl:justify-center">
        <div className="flex flex-col items-center lg:flex-row lg:space-x-10 mt-12 mb-12 max-w-7xl ">
          <Image
            src={escrow}
            alt="about"
            className="w-[350px] sm:w-[450px] md:w-[450px] lg:w-[500px] xl:w-[600px] 2xl:w-[650px]"
          />
          <div className="text-[17px] lg:w-[350px]">
            <h2 className="text-[35px] lg:text-[50px]">Escrow</h2>
            <div className="">
              <p>
                An escrow service is a third-party intermediary that helps
                facilitate transactions between two parties by holding funds or
                assets until the transaction is complete. In a real estate
                context, an escrow service is often used to manage the transfer
                of funds and ownership during the sale of a property.
              </p>
              <p>
                This provides a level of protection to both the buyer and
                seller, as it minimizes the risk of fraud and ensures that the
                transaction is completed according to the terms agreed upon.
                Escrow services may also be used in other types of transactions,
                such as the sale of a business or the transfer of intellectual
                property.
              </p>
              <Link href={"/contact"} className="underline font-bold">
                Contact Us {">"}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="text-primary flex px-4 xl:justify-center">
        <div className="flex flex-col items-center lg:flex-row-reverse lg:space-x-reverse lg:space-x-10 mt-12 mb-12 max-w-7xl ">
          <Image
            src={eventplan}
            alt="about"
            className="w-[350px] sm:w-[450px] md:w-[450px] lg:w-[500px] xl:w-[600px] 2xl:w-[650px]"
          />
          <div className="text-[17px] lg:w-[350px]">
            <h2 className="text-[35px] lg:text-[50px] leading-tight">
              Event Planning
            </h2>
            <div className="">
              <p>
                Event planning is the process of coordinating and managing
                various aspects of an event, such as a conference, wedding, or
                party. This can include everything from selecting a venue and
                organizing logistics, to arranging catering, entertainment, and
                decorations. Event planners work closely with clients to
                understand their specific needs and objectives, and then use
                their creativity and organizational skills to bring those plans
                to life.{" "}
              </p>
              <Link href={"/contact"} className="underline font-bold">
                Contact Us {">"}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Reference references={references} />
    </div>
  );
};

export default other;
