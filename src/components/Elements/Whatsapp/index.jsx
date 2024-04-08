import { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";

const index = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, 2000);
  }, []);
  return (
    <div className="fixed bottom-10 right-5">
      {show ? (
        <span className="loading loading-dots loading-md"></span>
      ) : (
        <div className="p-3 rounded-full border border-primary items-center hover:bg-primary hover:text-white transition-all duration-300 ease-in-out">
          <a href="https://wa.me/+62895324451367">
            <FaWhatsapp className="w-[30px] h-[28px]" />
          </a>
        </div>
      )}
    </div>
  );
};

export default index;
