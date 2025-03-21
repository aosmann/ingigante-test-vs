import React from 'react';
import Image from 'next/image';
import investment from '../public/assets/images/investment.jpg';
import Link from 'next/link';

const ServicesComponent = () => {
  return (
    <section className='text-primary flex px-4 xl:justify-center'>
      <div className='flex flex-col items-center lg:flex-row-reverse lg:space-x-reverse lg:space-x-10 mt-12 mb-12 max-w-7xl '>
        <Image
          src={investment}
          alt='about'
          className='w-[350px] sm:w-[450px] md:w-[450px] lg:w-[500px] xl:w-[600px] 2xl:w-[650px]'
        />
        <div className='text-[17px] lg:w-[350px]'>
          <h2 className='text-[35px] lg:text-[50px]'>Escrow</h2>
          <div className=''>
            <p>
              Real estate investment consultants work closely with their clients
              to understand their investment goals and risk tolerance, and then
              provide customized solutions to help them achieve their
              objectives. They may also assist with identifying and analyzing
              potential investment opportunities, negotiating deals, and
              managing the ongoing performance of the investment.
            </p>
            <Link href={'/contact'} className='underline font-bold'>
              Contact Us {'>'}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesComponent;
