import Head from "next/head";
import Hero from "../components/Hero";
import Offers from "../components/Offers";
import About from "../components/About";
import Reference from "../components/Reference";
import OurTeam from "../components/OurTeam";
import Faq from "../components/Faq";
import { client } from "../lib/sanity.client";

import { GetStaticProps } from "next";

export const getStaticProps: GetStaticProps = async (context) => {
  const properties = await client.fetch(
    `*[_type == "properties" && _id in path("drafts.**") == false && featured == true]{
      ...,
      location->,
      propertyType->{
        typeName
      }
    } | order(_createdAt desc)`
  );
  
  const references = await client.fetch(
    `*[_type == "references" && _id in path("drafts.**") == false]`
  );
  const ourteam = await client.fetch(
    `*[_type == "team" && _id in path("drafts.**") == false] | order(ordering asc)`
  );
  const faq = await client.fetch(
    `*[_type == "faq" && _id in path("drafts.**") == false]`
  );
  const propertyType =
    await client.fetch(`*[_type == "propertyType" && _id in path("drafts.**") == false]{
    ...,
    propertyType->,
    location->
  }`);

  const locations =
    await client.fetch(`*[_type == "locations" && _id in path("drafts.**") == false]{
    ...,
  }`);

  return {
    props: {
      properties,
      references,
      ourteam,
      faq,
      propertyType,
      locations,
    },
    revalidate: 10,
  };
};

function Home({
  properties,
  ourteam,
  references,
  faq,
  propertyType,
  locations,
}) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center overflow-x-hidden	">
      <Head>
        <title>Ingigante | Real Estate in Nicaragua</title>
        <meta
          name="description"
          content="Explore the best real estate opportunities in Nicaragua with Ingigante. Find beachfront properties, rental homes, and investment opportunities in paradise."
        />
        <meta
          name="keywords"
          content="Real estate Nicaragua, beachfront properties, homes for rent Nicaragua, investment properties Nicaragua, Ingigante real estate"
        />
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

      <main className="flex w-full flex-1 flex-col">
        <Hero propertyType={propertyType} locations={locations} />
        <Offers properties={properties} />
        <About />
        <OurTeam teamMembers={ourteam} />
        <Faq faqs={faq} />
        <Reference references={references} />
      </main>

      {/*
      <main className="relative flex w-full flex-1 flex-col">
        <div className="relative z-50">
          <Hero propertyType={propertyType} locations={locations} />
        </div>
        <div className="relative z-10">
          <Offers properties={properties} />
        </div>
        <div className="relative z-10">
          <About />
        </div>
        <div className="relative z-10">
          <OurTeam teamMembers={ourteam} />
        </div>
        <div className="relative z-10">
          <Faq faqs={faq} />
        </div>
        <div className="relative z-10">
          <Reference references={references} />
        </div>
      </main>
*/}
    </div>
  );
}

export default Home;
