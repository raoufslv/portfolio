import { useState } from "react";
import Listicons from "./Listicons";
import { motion } from "framer-motion";

export default function Skills() {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  const [isSelected, setIsSelected] = useState("Web dev");
  const [hoveredSection, setHoveredSection] = useState(null);

  const handleSectionHover = (section) => {
    setHoveredSection(section);
  };

  return (
    <div className="flex flex-col lg:flex-grow gap-10 justify-between">
      <motion.div
        initial={{ x: 300, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex gap-6 flex-wrap text-xl"
      >
        <button
          className={classNames(
            isSelected === "Web dev"
              ? "text-white"
              : "text-secondary hover:text-white",
            "transition duration-300 linear relative"
          )}
          onClick={() => setIsSelected("Web dev")}
          onMouseEnter={() => handleSectionHover("Web dev")}
          onMouseLeave={() => handleSectionHover(null)}
        >
          Web dev
          <motion.div
            initial={{ scaleX: 0, originX: 0.5 }}
            animate={{
              scaleX:
                isSelected === "Web dev" || hoveredSection === "Web dev"
                  ? 1
                  : 0,
            }}
            exit={{ scaleX: 0 }}
            transition={{ duration: 0.4 }}
            className="h-1 bg-white rounded mt-[0.2rem]"
          />
        </button>
        <button
          className={classNames(
            isSelected === "Programmation"
              ? "text-white"
              : "text-secondary hover:text-white",
            "transition duration-300 linear relative"
          )}
          onClick={() => setIsSelected("Programmation")}
          onMouseEnter={() => handleSectionHover("Programmation")}
          onMouseLeave={() => handleSectionHover(null)}
        >
          Programmation
          <motion.div
            initial={{ scaleX: 0, originX: 0.5 }}
            animate={{
              scaleX:
                isSelected === "Programmation" ||
                hoveredSection === "Programmation"
                  ? 1
                  : 0,
            }}
            exit={{ scaleX: 0 }}
            transition={{ duration: 0.4 }}
            className="h-1 bg-white rounded mt-[0.2rem]"
          />
        </button>
        <button
          className={classNames(
            isSelected === "Machine learning"
              ? "text-white"
              : "text-secondary hover:text-white",
            "transition duration-300 linear relative"
          )}
          onClick={() => setIsSelected("Machine learning")}
          onMouseEnter={() => handleSectionHover("Machine learning")}
          onMouseLeave={() => handleSectionHover(null)}
        >
          Machine learning
          <motion.div
            initial={{ scaleX: 0, originX: 0.5 }}
            animate={{
              scaleX:
                isSelected === "Machine learning" ||
                hoveredSection === "Machine learning"
                  ? 1
                  : 0,
            }}
            exit={{ scaleX: 0 }}
            transition={{ duration: 0.4 }}
            className="h-1 bg-white rounded mt-[0.2rem]"
          />
        </button>
        <button
          className={classNames(
            isSelected === "Databases"
              ? "text-white"
              : "text-secondary hover:text-white",
            "transition duration-300 linear relative"
          )}
          onClick={() => setIsSelected("Databases")}
          onMouseEnter={() => handleSectionHover("Databases")}
          onMouseLeave={() => handleSectionHover(null)}
        >
          Databases
          <motion.div
            initial={{ scaleX: 0, originX: 0.5 }}
            animate={{
              scaleX:
                isSelected === "Databases" || hoveredSection === "Databases"
                  ? 1
                  : 0,
            }}
            exit={{ scaleX: 0 }}
            transition={{ duration: 0.4 }}
            className="h-1 bg-white rounded mt-[0.2rem]"
          />
        </button>
        <button
          className={classNames(
            isSelected === "Tools"
              ? "text-white"
              : "text-secondary hover:text-white",
            "transition duration-300 linear relative"
          )}
          onClick={() => setIsSelected("Tools")}
          onMouseEnter={() => handleSectionHover("Tools")}
          onMouseLeave={() => handleSectionHover(null)}
        >
          Tools
          <motion.div
            initial={{ scaleX: 0, originX: 0.5 }}
            animate={{
              scaleX:
                isSelected === "Tools" || hoveredSection === "Tools" ? 1 : 0,
            }}
            exit={{ scaleX: 0 }}
            transition={{ duration: 0.4 }}
            className="h-1 bg-white rounded mt-[0.2rem]"
          />
        </button>
      </motion.div>
      <div>
        <Listicons selected={isSelected} />
      </div>
    </div>
  );
}
