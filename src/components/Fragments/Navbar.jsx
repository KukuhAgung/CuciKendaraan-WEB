import React from "react";
import { Squeeze as Hamburger } from "hamburger-react";
import { useState } from "react";
import { navList } from "../../data/data";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const position = isOpen ? "top-0" : "-top-[200%]";
  return (
    <>
      <nav
        className={`z-10 fixed flex flex-col gap-y-6 items-center justify-center text-center w-full bg-white h-screen transition-all ease-in-out duration-500 ${position}`}
      >
        {navList.map((nav) => (
          <div key={nav.id} className="w-full h-fit">
            <a href="#" className="font-medium text-secondary text-xl">
              {nav.name}
            </a>
          </div>
        ))}
      </nav>
      <nav className="flex w-full justify-between py-4 items-center z-1">
        <h1 className="text-[22px] font-bold italic tracking-[2%]">
          AlmasJetKit
        </h1>
        <div className="hidden md:flex gap-x-4">{navList.map((nav) => (
          <a key={nav.id} href="#" className="font-medium text-[15px] text-secondary">{nav.name}</a>
        ))}</div>
      </nav>
      <div className="absolute top-2 right-2 z-50 md:hidden">
        <Hamburger
          color="#2C2C2C"
          size={25}
          easing="ease-in-out"
          rounded
          onToggle={() => setIsOpen(!isOpen)}
          toggled={isOpen}
        />
      </div>
    </>
  );
};

export default Navbar;
