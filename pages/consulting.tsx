import Image from "next/image";
import Link from "next/link";
import React from "react";
import Reference from "../components/Reference";
import business from "../public/assets/images/business.jpg";
import investment from "../public/assets/images/investment.jpg";
import travel from "../public/assets/images/travel.jpg";
import { client } from "../lib/sanity.client";
import Head from "next/head";
import { GetStaticProps } from "next";

export const getStaticProps: GetStaticProps = async () => {
  const references = await client.fetch(`*[_type == "references"]`);
  const consulting = await client.fetch(
    `*[_type == "consulting"] | order(ordering)`
  );

  return {
    props: {
      references,
      consulting,
    },
    revalidate: 10,
  };
};

const ConsultingPage = ({ references, consulting }: any) => {
  return (
    <div className="min-h-screen">
      <Head>
        <title>Consuling | Ingigante</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='bg-[url("/assets/images/consulting.png")] bg-no-repeat bg-cover py-52 text-secondary top-0'>
        <div className="flex flex-col justify-center items-center">
          <div className="max-w-7xl w-full">
            <h1 className="text-center font-bely text-[30px] md:text-[60px]">
              CONSULTING
            </h1>
            <p className="text-[16px] text-center">
              The ultimate goal of real estate consulting is to help clients
              achieve their real estate objectives and maximize the value of
              their assets. By providing expert guidance and advice, real estate
              consultants can help clients make informed decisions that lead to
              successful outcomes.
            </p>
          </div>
        </div>
      </div>
      <section className="text-primary flex px-4 xl:justify-center">
        <div className="flex flex-col items-center lg:flex-row lg:space-x-10 mt-12 mb-12 max-w-7xl ">
          <Image
            src={business}
            alt="about"
            className="w-[350px] sm:w-[450px] md:w-[450px] lg:w-[500px] xl:w-[600px] 2xl:w-[650px]"
          />
          <div className="text-[17px] lg:w-[350px]">
            <h2 className="text-[35px] lg:text-[50px]">Business</h2>
            <div className="">
              <p>
                Real estate business consulting involves providing expert
                guidance and advice to individuals or companies operating in the
                real estate industry. This type of consulting can cover a wide
                range of services, including market analysis, feasibility
                studies, property valuation, financial analysis, and strategic
                planning.
              </p>
              <p>
                Overall, real estate business consulting can provide valuable
                insights and support to help businesses maximize their potential
                and achieve long-term success in a highly competitive industry.
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
            src={investment}
            alt="about"
            className="w-[350px] sm:w-[450px] md:w-[450px] lg:w-[500px] xl:w-[600px] 2xl:w-[650px]"
          />
          <div className="text-[17px] lg:w-[350px]">
            <h2 className="text-[35px] lg:text-[50px]">Investment</h2>
            <div className="">
              <p>
                Real estate investment consultants work closely with their
                clients to understand their investment goals and risk tolerance,
                and then provide customized solutions to help them achieve their
                objectives. They may also assist with identifying and analyzing
                potential investment opportunities, negotiating deals, and
                managing the ongoing performance of the investment.
              </p>
              <Link href={"/contact"} className="underline font-bold">
                Contact Us {">"}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="text-primary flex px-4 xl:justify-center">
        <div className="flex flex-col items-center lg:flex-row lg:space-x-10 mt-12 mb-12 max-w-7xl ">
          <Image
            src={travel}
            alt="about"
            className="w-[350px] sm:w-[450px] md:w-[450px] lg:w-[500px] xl:w-[600px] 2xl:w-[650px]"
          />
          <div className="text-[17px] lg:w-[350px]">
            <h2 className="text-[35px] lg:text-[50px]">Travel</h2>
            <div className="">
              <p>
                A real estate travel plan is a strategic plan that is designed
                to help real estate professionals expand their knowledge and
                expertise by traveling to different locations and exploring new
                markets. This type of plan can involve visiting various cities,
                attending conferences, and networking with other professionals
                in the real estate industry. The goal of a real estate travel
                plan is to gain insights and knowledge about different markets,
                learn about new trends and best practices, and establish
                relationships with key players in the industry.
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

export default ConsultingPage;
