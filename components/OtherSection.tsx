import React from "react";
import Image from "next/image";
import escrow from "../public/assets/images/escrow.jpg";

const OtherSection = ({ services }) => {
  return (
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
              context, an escrow service is often used to manage the transfer of
              funds and ownership during the sale of a property.
            </p>
            <p>
              This provides a level of protection to both the buyer and seller,
              as it minimizes the risk of fraud and ensures that the transaction
              is completed according to the terms agreed upon. Escrow services
              may also be used in other types of transactions, such as the sale
              of a business or the transfer of intellectual property.
            </p>
            <Link href={"/contact"} className="underline font-bold">
              Contact Us {">"}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OtherSection;
