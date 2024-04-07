import React from "react";
import { IoWallet } from "react-icons/io5";
import { Tb3DRotate } from "react-icons/tb";
import { FaBusinessTime } from "react-icons/fa";
import { FaLayerGroup } from "react-icons/fa6";

const Pelayanan = () => {
  return (
    <section id="Pelayanan" className="w-full h-[150vh] md:h-screen flex items-center">
      <div className="flex flex-col gap-6 md:flex-row-reverse items-center w-full">
        <div className="w-full md:w-[40%] flex flex-col gap-y-6">
          <div className="w-[95%] md:w-full">
            <h1 className="font-bold text-[22px] md:text-[24px] tracking-[3%] text-secondary">
              Mengapa anda perlu memilih layanan kami untuk kebersihan kendaraan
              anda ?
            </h1>
          </div>
          <div className="grid grid-cols-2 gap-6 mt-10">
            <div className="relative flex items-end text-center px-4 py-5 border border-stroke rounded-lg shadow-md h-[160px]">
              <div className="absolute px-4 py-4 rounded-full border w-fit border-green -top-6 left-[35%] bg-white">
                <IoWallet className="w-[28px] h-[28px] md:w-[32px] md:h-[32px] text-green" />
              </div>
              <p className="font-medium text-[12px] text-ternitary">
                Kami menyediakan tarif harga yang terjangkau untuk semua jenis
                kendaraan
              </p>
            </div>
            <div className="relative flex items-end text-center px-4 py-5 border border-stroke rounded-lg shadow-md h-[160px]">
              <div className="absolute px-4 py-4 rounded-full border w-fit border-orange -top-6 left-[35%] bg-white">
                <Tb3DRotate className="w-[28px] h-[28px] md:w-[32px] md:h-[32px] text-orange" />
              </div>
              <p className="font-medium text-[12px] text-ternitary">
                Melalui layanan kami anda tidak perlu lagi repot - repot
                mengatasi kebersihan motor anda
              </p>
            </div>
            <div className="relative flex items-end text-center px-4 py-5 border border-stroke rounded-lg shadow-md h-[160px] mt-6">
              <div className="absolute px-4 py-4 rounded-full border w-fit border-primary -top-6 left-[35%] bg-white">
                <FaBusinessTime className="w-[28px] h-[28px] md:w-[32px] md:h-[32px] text-primary" />
              </div>
              <p className="font-medium text-[12px] text-ternitary">
                Pengerjaan tidak membutuhkan banyak waktu anda bisa langsung
                menunggu ditempat
              </p>
            </div>
            <div className="relative flex items-end text-center px-4 py-5 border border-stroke rounded-lg shadow-md h-[160px] mt-6">
              <div className="absolute px-4 py-4 rounded-full border w-fit border-pink -top-6 left-[35%] bg-white">
                <FaLayerGroup className="w-[28px] h-[28px] md:w-[32px] md:h-[32px] text-pink" />
              </div>
              <p className="font-medium text-[12px] text-ternitary">
                Pembersihan manual sehingga kami dapat memberikan kendaraan anda
                secara maksimal
              </p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-[60%] flex items-center justify-center mt-6">
          <img src="../images/pelayanan.png" alt="pelayanan" width="500px" />
        </div>
      </div>
    </section>
  );
};

export default Pelayanan;
