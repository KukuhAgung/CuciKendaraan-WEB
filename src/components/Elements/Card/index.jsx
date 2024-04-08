import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import Button from "../Button";
import { motion } from "framer-motion";
import { fadeIn } from "../../Animate/variant";

const index = ({ kendaraan }) => {
  return (
    <motion.div
      variants={fadeIn("up", 0.1)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.4 }}
      className="w-[80%] flex flex-col gap-y-6 px-10 py-4 rounded-lg border border-stroke shadow-md"
    >
      <div className="w-full flex flex-col gap-y-2 text-center">
        <h1 className="font-bold text-[22px] md:text-[24px] tracking-[3%] text-secondary capitalize">
          {kendaraan}
        </h1>
        <h6 className="font-medium text-[15px] tracking-[3%] text-ternitary lowercase">
          Harga cuci kendaraan {kendaraan}
        </h6>
      </div>
      <h1 className="w-full text-center font-bold text-[18px] md:text-[20px] tracking-[3%] text-secondary">
        Rp 10.000 / kendaraan
      </h1>
      <div className="flex flex-col gap-y-4 w-full">
        <h6 className="font-semibold text-[14px] tracking-[3%] text-ternitary">
          Pelayanan
        </h6>
        <div className="flex flex-col gap-y-2">
          <div className="flex gap-x-2 items-center py-3 border-b border-ternitary">
            <FaCheckCircle />
            <h6 className="font-medium text-[15px] tracking-[3%] text-ternitary">
              Cuci
            </h6>
          </div>
          <div className="flex gap-x-2 items-center py-3  border-b border-ternitary">
            <FaCheckCircle />
            <h6 className="font-medium text-[15px] tracking-[3%] text-ternitary">
              Semir Ban
            </h6>
          </div>
          <div className="flex gap-x-2 items-center py-3">
            <FaCheckCircle />
            <h6 className="font-medium text-[15px] tracking-[3%] text-ternitary">
              Parfum dan Anti bacteri
            </h6>
          </div>
        </div>
      </div>
      <Button
        variant="border border-ternitary w-full"
        text="text-secondary"
        textsize="[16px]"
      >
        Contact
      </Button>
    </motion.div>
  );
};

export default index;
