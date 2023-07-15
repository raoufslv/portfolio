import { useParams } from "react-router-dom";
import NavProjectBar from "../components/NavProjectBar.jsx";
import projects from "../settings/projects.js";
import { motion } from "framer-motion";
import { useState } from "react";

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects[id];

  const [AboutHovered, setAboutHovered] = useState(false);

  return (
    <div className="">
      <NavProjectBar projects={projects} currentProject={project} />
      <div className="bg-secondary px-10 lg:px-20 pt-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.2 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className={`${project.bg} flex  justify-center items-center gap-10 m-auto w-full sm:w-fit  sm:px-16 py-10 sm:py-20 rounded-xl`}
        >
          <img src={project.logo} className=" w-14" alt="" />
          <h2 className="sm:text-4xl text-2xl font-semibold">
            {project.title}
          </h2>
        </motion.div>

        <section className="pb-16">
          <motion.h2
            initial={{ opacity: 0, x: -200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className=" text-white text-3xl mt-10"
          >
            {project.title}
          </motion.h2>
          <motion.hr
            initial={{ opacity: 0, x: -400 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="my-2"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.5 }}
            className=" relative"
          >
            <h3
              className=" text-white text-xl absolute right-0
            transition duration-200 ease-in-out cursor-pointer"
            >
              <a
                onMouseEnter={() => setAboutHovered(true)}
                onMouseLeave={() => setAboutHovered(false)}
                href={project.link}
                target="_blank"
                rel="noreferrer"
              >
                see Live demo 🡥
                <motion.div
                  initial={{ scaleX: 0, originX: 0.5 }}
                  animate={{
                    scaleX: AboutHovered ? 1 : 0,
                  }}
                  exit={{ scaleX: 0 }}
                  transition={{ duration: 0.4 }}
                  className="h-1 bg-white rounded mt-[0.1rem]"
                />
              </a>
            </h3>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -400 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1.7 }}
            className="mt-6"
          >
            <h3 className=" text-white text-xl mt-10">Technologies used:</h3>
            <div className=" flex flex-wrap gap-5 mt-5">
              {project.technologies.map((item, index) => (
                <motion.img
                  alt="icon"
                  exit={{ x: 100, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                  src={item}
                  className="cursor-pointer w-16"
                  key={index}
                />
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -400 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 2 }}
            className="mt-16"
          >
            <h3 className=" text-white text-xl mt-10">Features:</h3>
            <ul className=" text-primary mt-5 list-disc list-inside pl-10 text-lg">
              {project.features.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </motion.div>
        </section>
      </div>

      <div>
        {Object.keys(project.images).map((key) => (
          <section key={key} className=" bg-primary py-10  px-10 lg:px-20">
            <h2 className=" text-white text-4xl text-center py-5">{key}</h2>
            <img
              src={project.images[key]}
              className={`py-10 lg:px-60  m-auto  ${
                key.includes("Mobile") ? " w-1/2" : "w-full"
              }`}
              alt=""
            />
          </section>
        ))}
      </div>
    </div>
  );
};

export default ProjectDetails;
