import React from "react";
import { questions } from "../../data/data";
import { motion } from "framer-motion";
import { fadeIn } from "../Animate/variant";

const FAQ = () => {
  return (
    <section className="w-full h-[110vh] md:h-[80vh] flex items-center">
      <div className="flex flex-wrap gap-6 justify-center">
        <motion.div
          variants={fadeIn("right", 0)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="w-full md:w-[36%] flex flex-col gap-y-3"
        >
          <h1 className="font-bold text-[22px] md:text-[24px] tracking-[3%] text-secondary">
            Paling Sering Ditanyakan
          </h1>
          <h6 className="font-medium text-[16px] tracking-[3%] text-ternitary">
            Pada halaman ini anda bisa mendapatkan informasi berdasarkan
            pertanyaan yang paling sering ditanyakan oleh customer
          </h6>
        </motion.div>
        <motion.div
          variants={fadeIn("left", 0)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="w-full md:w-[60%]"
        >
          {questions.map((question) => (
            <div key={question.id} className="collapse">
              <input type="radio" name="my-accordion-1" />
              <div className="collapse-title text-[16px] font-semibold border-t">
                {question.question}
              </div>
              <div className="collapse-content">
                <p className="text-ternitary text-[14px]">{question.answer}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
