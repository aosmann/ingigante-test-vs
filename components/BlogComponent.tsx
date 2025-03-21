import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';

import urlFor from '../lib/urlFor';
import Image from 'next/image';
import Link from 'next/link';

const BlogComponent = ({ blogs }) => {
  return (
    <section className='text-primary bg-white mt-10 mb-10 items-center justify-center xl:flex'>
      <div className='max-w-7xl px-4'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8 mb-8'>
          {blogs.map((blog) => (
            <Link key={blog._id} href={`/blog/${blog.slug.current}`}>
              <div className='flex flex-col cursor-pointer group'>
                <div className='relative w-full transition-transform duration-200 ease-out h-80 drop-shadow-xl group-hover:scale-105 '>
                  <Image
                    className='object-cover object-left lg:object-center'
                    src={urlFor(blog.mainImage).url()}
                    alt={blog.title}
                    fill
                  />
                  <div className='absolute bottom-0 w-full bg-opacity-20 bg-primary backdrop-blur-lg rounded drop-shadow-lg text-white p-5 flex justify-between'>
                    <div>
                      <p className='font-bold'>{blog.title}</p>

                      <p>
                        {new Date(blog.publishedAt).toLocaleDateString(
                          'en-US',
                          {
                            day: 'numeric',
                            month: 'long',
                            year: 'numeric',
                          }
                        )}
                      </p>
                    </div>
                  </div>
                </div>

                <div className='mt-5 flex-1 '>
                  <p className='underline text-lg font-bold'>{blog.title}</p>
                  <p className='line-clamp-2 text-gray-500 text-justify'>
                    {blog.description}
                  </p>
                </div>

                <p className='mt-5 font-bold flex items-center group-hover:underline'>
                  Read Post
                  <AiOutlineArrowRight className='ml-2 h-4 w-4' />
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogComponent;
