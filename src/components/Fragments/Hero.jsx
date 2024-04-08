import React from "react";
import Button from "../Elements/Button";
import { motion } from "framer-motion";
import { fadeIn } from "../Animate/variant";

const Hero = () => {
  return (
    <section
      id="Home"
      className="w-full h-[80vh] text-center flex items-center"
    >
      <div className="flex flex-col gap-y-6 max-w-[796px] mx-auto items-center">
        <motion.div
          variants={fadeIn("up", 0)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.4 }}
          className="flex flex-col gap-y-1"
        >
          <h1 className="font-bold text-[30px] md:text-[36px] tracking-[5%] text-primary">
            Solusi Cepat <span className="text-secondary">Cuci Kendaraan</span>
          </h1>
          <h6 className="font-medium text-[15px] text-ternitary tracking-[3%] max-w-[776px]">
            AlmasJetKit pilihan terbaik tempat cuci kendaraan motor dan mobil
            dengan harga yang terjangkau, melalui metode cuci manual dapat lebih
            memaksimalkan pembersihan debu dan kotoran hingga ke sela - sela
            mesin.
          </h6>
        </motion.div>
        <motion.div
          variants={fadeIn("up", 0.1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.4 }}
        >
          <Button>
            <a href="https://maps.app.goo.gl/YJ3sMeu3ofAKBB1m7">Lihat Lokasi</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
