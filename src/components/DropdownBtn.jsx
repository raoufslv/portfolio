import React from "react";

const DropdownBtn = () => {
  return (
    <div>
      <button
        className=" bg-primary rounded py-2 px-4 flex items-center gap-2"
        onClick={() => (window.location.href = "/")}
      >
        <img
          src="src/assets/LogoIcon.svg"
          className=" rounded-full w-10 h-10 bg-white p-2"
          alt=""
        />
        <p className=" text-white font-semibold">EKRI & ECHRI</p>
        <img src="src/assets/arrow.svg" className="" alt="" />
      </button>
    </div>
  );
};

export default DropdownBtn;
