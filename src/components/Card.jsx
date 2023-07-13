import React from "react";
import { Link } from "react-router-dom";

const Card = (props) => {
  const { index } = props; // Extract the index from props
  return (
    <div
      className={`flex bg-primary gap-1 p-5 rounded flex-col relative w-[20rem]`}
    >
      <div className="">
        <img
          src={props.info.image}
          className="rounded w-[17.5rem] h-full"
          alt=""
        />
      </div>
      <h3 className="font-semibold text-xl">{props.info.title}</h3>
      <p className="mt-3 text-md font-light">{props.info.description}</p>
      <Link
        to={`/project/${props.index}`} // Pass the project index as a parameter
        className="text-secondary cursor-pointer hover:text-white transition duration-200 ease-in-out self-end"
      >
        see details →
      </Link>
    </div>
  );
};

export default Card;
