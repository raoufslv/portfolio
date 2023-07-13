import React from "react";
import { Link } from "react-router-dom";
import { Tilt } from "react-tilt";
import { motion, AnimatePresence } from "framer-motion";

const Card = (props) => {
  const defaultOptions = {
    reverse: true, // reverse the tilt direction
    max: 15, // max tilt rotation (degrees)
    perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1.02, // 2 = 200%, 1.5 = 150%, etc..
    speed: 10, // Speed of the enter/exit transition
    transition: true, // Set a transition on enter/exit.
    axis: null, // What axis should be disabled. Can be X or Y.
    reset: true, // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
  };

  const { index } = props; // Extract the index from props
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
    >
      <Tilt options={defaultOptions}>
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
            to={`/project/${props.index}`}
            onClick={() => window.scrollTo(0, 0)}
            className="text-secondary cursor-pointer hover:text-white transition duration-200 ease-in-out self-end"
          >
            see details →
          </Link>
        </div>
      </Tilt>
    </motion.div>
  );
};

export default Card;
