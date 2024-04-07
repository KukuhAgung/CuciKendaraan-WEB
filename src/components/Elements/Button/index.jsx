import React from "react";

const index = (props) => {
  const {
    children,
    textsize = "[12px]",
    text = "text-white",
    variant = "bg-primary",
    px = "px-6",
    onClick = () => {},
    type = "button",
  } = props;
  return (
    <button
      type={type}
      onClick={onClick}
      className={`w-fit text-center font-medium text-${textsize} ${px} py-[10px] ${variant} ${text} rounded-md`}
    >
      {children}
    </button>
  );
};

export default index;
