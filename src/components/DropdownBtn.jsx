import React from "react";

const DropdownBtn = () => {
  return (
    <div>
      <button
        className=" bg-primary rounded py-2 px-3 lg:px-4 flex items-center lg:gap-2 gap-5"
        onClick={() => (window.location.href = "/")}
      >
        <img
          src="/assets/LogoIcon.svg"
          className=" rounded-full w-10 h-10 bg-white p-2"
          alt=""
        />
        <p className=" text-white font-semibold hidden lg:block">EKRI & ECHRI</p>
        <img src="/assets/arrow.svg" className="" alt="" />
      </button>
    </div>
  );
};

export default DropdownBtn;
