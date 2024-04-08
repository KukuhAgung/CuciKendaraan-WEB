import React from "react";
import Card from "../Elements/Card";
import { motion } from "framer-motion";
import { fadeIn } from "../Animate/variant";

const Price = () => {
  return (
    <section id="Tarif" className="w-full h-fit md:h-fit flex items-start">
      <div className="flex flex-col gap-y-6 w-full items-center">
        <motion.div
          variants={fadeIn("up", 0)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.5 }}
          className="flex flex-col gap-y-3"
        >
          <h1 className="font-bold text-[22px] md:text-[24px] tracking-[3%] text-secondary text-center">
            Tertarik untuk mencoba layanan kami ?
          </h1>
          <h6 className="font-medium text-[16px] tracking-[3%] text-ternitary text-center">
            Berikut adalah informasi mengenai tarif yang kami banderol untuk
            masing masing kendaraan
          </h6>
        </motion.div>
        <div className="flex flex-wrap justify-center md:flex-nowrap gap-6 mt-6">
          <Card kendaraan={"Motor"} />
          <Card kendaraan={"Mobil"} />
        </div>
      </div>
    </section>
  );
};

export default Price;
