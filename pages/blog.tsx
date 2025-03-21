import Head from "next/head";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Reference from "../components/Reference";

import { client } from "../lib/sanity.client";

import BlogComponent from "../components/BlogComponent";
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from "next";

export const getStaticProps: GetStaticProps = async () => {
  const references = await client.fetch(`*[_type == "references"]`);
  const blogs = await client.fetch(`*[_type == "blog"]`);

  return {
    props: {
      references,
      blogs,
    },
    revalidate: 10,
  };
};

const blog = ({ references, blogs }) => {
  return (
    <div className="min-h-screen">
      <Head>
        <title>Blog | Ingigante</title>
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
        <div className="flex flex-col justify-center items-center px-4">
          <div className="max-w-7xl w-full">
            <h1 className="text-center font-bely text-[30px] md:text-[60px]">
              BLOG
            </h1>
            <p className="text-[16px] text-center max-w-4xl m-auto">
              Real estate blogs can be particularly useful for first-time
              homebuyers or investors who are looking to learn more about the
              industry and make informed decisions.
            </p>
          </div>
        </div>
      </div>
      <BlogComponent blogs={blogs} />
      <Reference references={references} />
    </div>
  );
};

export default blog;
