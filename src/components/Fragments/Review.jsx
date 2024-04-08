import React from "react";
import { FaCircle, FaStar } from "react-icons/fa";
import { IoMdArrowDropright } from "react-icons/io";
import { testimonials } from "../../data/data";
import { motion } from "framer-motion";
import { fadeIn } from "../Animate/variant";

const Review = () => {
  return (
    <section id="Review" className="w-full h-fit md:h-[60vh] flex items-start">
      <div className="flex flex-col gap-y-6 w-full items-center">
        <motion.div
          variants={fadeIn("up", 0)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="flex flex-col gap-y-3"
        >
          <h1 className="font-bold text-[22px] md:text-[24px] tracking-[3%] text-secondary text-center">
            Customer Review
          </h1>
          <h6 className="font-medium text-[16px] tracking-[3%] text-ternitary text-center">
            Berikut adalah review customer berdasarkan google review mengenai
            layanan kami
          </h6>
        </motion.div>
        <motion.div
          variants={fadeIn("up", 0.1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.4 }}
          className="flex flex-wrap justify-center md:flex-nowrap gap-6 mt-6"
        >
          {testimonials.map((testi) => (
            <div
              key={testi.name}
              className="w-full md:w-[260px] flex flex-col gap-y-3 p-3 rounded-md border border-secondary border-opacity-30 shadow-md"
            >
              <FaCircle className="w-[40px] h-[40px]" />
              <div className="flex gap-x-6 items-center">
                <h6 className="font-medium text-[15px] tracking-[3%] text-secondary">
                  {testi.name}
                </h6>
                <div className="flex items-center gap-1">
                  <FaStar className="text-yellow-400" />
                  <h6 className="font-medium text-[15px] tracking-[3%] text-secondary">
                    {testi.rating}/5
                  </h6>
                </div>
              </div>
              <p className="font-medium text-[13px] tracking-[3%] text-ternitary max-w-[260px]">
                {testi.comment}
              </p>
              <div className="flex items-center justify-end">
                <a
                  href="#"
                  className="font-medium text-[13px] tracking-[3%] text-primary leading-3"
                >
                  Lihat Detail
                </a>
                <IoMdArrowDropright className="w-[20px] h-[20px] text-primary" />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Review;
