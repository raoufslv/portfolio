import React from "react";

const Card = ({ PicPath, Headline, summary, Inverse = false}) => {
  return (
    <div className={`flex bg-primary gap-10 xl:gap-20 p-5 rounded lg:flex-row flex-col
    ${Inverse ? "flex-row-reverse" : "flex-row"}`}>
      <div className="xl:w-1/2">
        <h3 className=" font-semibold text-xl">{Headline}</h3>
        <p className=" mt-5">
          {summary}
        </p>
      </div>
      <div>
        <img src={PicPath} className="xl:w-80 rounded" alt="" />
      </div>
    </div>
  );
};

export default Card;
