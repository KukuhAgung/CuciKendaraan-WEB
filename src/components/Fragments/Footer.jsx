import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../Animate/variant";

const Footer = () => {
  return (
    <>
      <footer className="w-full h-[80vh] flex items-center">
        <div className="flex flex-col gap-y-10 w-full gap-6">
          <motion.div
            variants={fadeIn("up", 0)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="flex items-center w-full"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d247.20858416301203!2d109.16780876558207!3d-7.538138297232102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e656929f1ff58f3%3A0xf4a65d994c1df614!2sShooshop!5e0!3m2!1sid!2sid!4v1712558124283!5m2!1sid!2sid"
              className="w-[500px] h-[300px]"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
          <motion.div
            variants={fadeIn("up", 0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="flex flex-col gap-y-2 w-full md:max-w-[400px]"
          >
            <h6 className="font-medium text-[16px] tracking-[3%] text-secondary">
              Alamat
            </h6>
            <p className="font-medium text-[14px] tracking-[3%] text-ternitary">
              Jl. Nasional III, Bayeman, Banjarparakan, Kec. Rawalo, Kabupaten
              Banyumas, Jawa Tengah 53173
            </p>
          </motion.div>
        </div>
      </footer>
      <footer className="w-full flex py-6 justify-center">
        <h1 className="font-medium text-[14px] tracking-[3%] text-ternitary text-center">
          Copyright©2024 | Immanuel. All rights reserved.
        </h1>
      </footer>
    </>
  );
};

export default Footer;
