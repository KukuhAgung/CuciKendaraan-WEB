import React from "react";
import Button from "../Elements/Button";

const Hero = () => {
  return (
    <>
      <section
        id="Home"
        className="w-full h-[80vh] text-center flex items-center"
      >
        <div className="flex flex-col gap-y-6 max-w-[796px] mx-auto items-center">
          <div className="flex flex-col gap-y-1">
            <h1 className="font-bold text-[30px] md:text-[36px] tracking-[5%] text-primary">
              Solusi Cepat{" "}
              <span className="text-secondary">Cuci Kendaraan</span>
            </h1>
            <h6 className="font-medium text-[15px] text-ternitary tracking-[3%] max-w-[776px]">
              AlmasJetKit pilihan terbaik tempat cuci kendaraan motor dan mobil
              dengan harga yang terjangkau, melalui metode cuci manual dapat
              lebih memaksimalkan pembersihan debu dan kotoran hingga ke sela -
              sela mesin.
            </h6>
          </div>
          <Button>Lihat Lokasi</Button>
        </div>
      </section>
    </>
  );
};

export default Hero;
