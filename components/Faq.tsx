import React from "react";
import { BiChevronDown } from "react-icons/bi";

const Faq = ({ faqs }) => {
  function toggleAccordion(id) {
    const accordion = document.getElementById(`accordion${id}`);
    const chevron = document.getElementById(`chevron${id}`);
    accordion.classList.toggle("hidden");
    chevron.classList.toggle("rotate-180");
  }

  return (
    <section className="bg-primary flex flex-col py-6">
      <div className="w-full px-4 flex justify-center pb-14">
        <div className="max-w-4xl w-full py-14 space-y-4 text-secondary  px-4">
          <h1 className="text-[35px] sm:text-[50px] text-center">FAQ</h1>

          {faqs.map((faq) => (
            <div key={faq._id} className="border-b border-secondary pb-2">
              <div
                className="cursor-pointer flex justify-between items-center"
                onClick={() => {
                  toggleAccordion(faq._id);
                }}
              >
                <p className="text-lg">{faq.question}</p>
                <BiChevronDown
                  className="transform transition-transform duration-500"
                  id={`chevron${faq._id}`}
                  size={36}
                />
              </div>
              <div className="pb-4 hidden  text-justify" id={`accordion${faq._id}`}>
                <p>{faq.answer}</p>
              </div>
              <div className=""></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
