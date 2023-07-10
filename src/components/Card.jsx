import React from "react";

const Card = ({ PicPath, Headline, summary, Inverse = false}) => {
  return (
    <div className={`flex bg-primary gap-10 p-5 rounded lg:flex-row flex-col
    ${Inverse ? "flex-row-reverse" : "flex-row"}`}>
      <div className="xl:w-1/2 relative">
        <h3 className=" font-semibold text-xl">{Headline}</h3>
        <p className=" mt-5">
          {summary}
        </p>
        <span className=" text-secondary  right-0 bottom-0 absolute hover:text-white transition duration-200 ease-in-out">
            see details →
        </span>
      </div>
      <div className="xl:w-1/2">
        <img src={PicPath} className="rounded h-full w-full" alt="" />
      </div>
    </div>
  );
};

export default Card;
