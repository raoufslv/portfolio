import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const DropdownBtn = ({ projects, currentProject }) => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleProjectChange = (id) => {
    navigate(`/project/${id}`);
    setIsOpen(false);
  };

  const dropdownVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="relative">
      <button
        className="bg-primary rounded py-2 px-3 lg:px-4 flex items-center lg:gap-2 gap-5"
        onClick={() => setIsOpen(!isOpen)}
      >
        <img
          src={currentProject.logo}
          className={`${currentProject.bg} rounded-full w-10 h-10 bg-white p-2`}
          alt=""
        />
        <p className="text-white font-semibold hidden lg:block">
          {currentProject.title}
        </p>
        <img src="/assets/arrow.svg" className="" alt="" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute top-12 bg-primary rounded py-2 px-3 shadow w-full"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={dropdownVariants}
          >
            {projects.map((project, index) => (
              <div key={index}>
                { (
                  <motion.button
                    className={`py-1 px-2 text-white flex gap-3 justify-center items-center hover:text-slate-600 transition duration-200 linear ${ project.title === currentProject.title ? "text-slate-600" : "" }`}
                    onClick={() => handleProjectChange(index)}
                  >
                    <img
                      src={project.logo}
                      className={`${project.bg} rounded-full w-10 h-10 bg-white p-2`}
                      alt=""
                    />
                    {project.title}
                  </motion.button>
                )}
                {index < projects.length - 1 && (
                  <hr className="m-2" />
                )}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DropdownBtn;
