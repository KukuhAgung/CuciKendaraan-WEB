import React from "react";
import Card from "../Elements/Card";

const Price = () => {
  return (
    <section id="Tarif" className="w-full h-[120vh] md:h-screen flex items-center">
      <div className="flex flex-col gap-y-6 w-full items-center">
        <div className="flex flex-col gap-y-3">
          <h1 className="font-bold text-[22px] md:text-[24px] tracking-[3%] text-secondary text-center">
            Tertarik untuk mencoba layanan kami ?
          </h1>
          <h6 className="font-medium text-[16px] tracking-[3%] text-ternitary text-center">
            Berikut adalah informasi mengenai tarif yang kami banderol untuk
            masing masing kendaraan
          </h6>
        </div>
        <div className="flex flex-wrap justify-center md:flex-nowrap gap-6 mt-6">
          <Card kendaraan={"Motor"} />
          <Card kendaraan={"Mobil"} />
        </div>
      </div>
    </section>
  );
};

export default Price;
