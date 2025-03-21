import Head from "next/head";
import Link from "next/link";
import React from "react";
import { client } from "../../lib/sanity.client";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import urlFor from "../../lib/urlFor";
import RichTextComponent from "../../components/RichTextComponent";
import { BsArrowLeftShort } from "react-icons/bs";

const BlogDetails = ({ blog }) => {
  return (
    <div className="min-h-screen">
      <Head>
        <title>Consuling | Ingigante</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col relative w-screen h-[260px]">
            <Image
              src={urlFor(blog.mainImage).url()}
              alt={blog.slug.current}
              fill
              className="object-cover object-center"
            />
          </div>
      {/*<div className='bg-[url("/assets/images/blogbg.png")] bg-no-repeat bg-cover py-52 text-secondary top-0'></div> */}
      <section className="text-primary flex flex-col px-4 items-center">
        <div className="flex flex-col mt-12 mb-12 max-w-3xl ">
          <Link href={"/blog"} className="flex items-center font-bold">
            <BsArrowLeftShort size={32} />
            Back
          </Link>
          <h1 className="text-[50px] py-4">{blog.title}</h1>
          
          <div className="pb-12 text-justify">
            <PortableText value={blog.body} components={RichTextComponent} />
            <Link href={"/blog"} className="flex items-center font-bold py-6">
              <BsArrowLeftShort size={32} />
              Back
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export const getServerSideProps = async (pageContext) => {
  const pageSlug = pageContext.query.slug;

  const query = `*[ _type == "blog" && slug.current == $pageSlug][0]`;

  const blog = await client.fetch(query, { pageSlug });

  if (!blog) {
    return {
      props: null,
      notFound: true,
    };
  } else {
    return {
      props: {
        blog,
      },
    };
  }
};

export default BlogDetails;
