import React from "react";
import urlFor from "../lib/urlFor";
import Image from "next/image";

const OurTeam = ({ teamMembers }) => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-12">Our Team</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-12 place-items-center">
          {teamMembers.map((member) => (
            <div
              key={member._id}
              className="transition duration-300 w-full max-w-xs text-center"
            >
              <div className="relative w-full aspect-[16/23] overflow-hidden">
                <Image
                  src={urlFor(member.image).url()}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">{member.name}</h3>
                <p className="text-sm text-gray-500">{member.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
