import { useParams } from "react-router-dom";
import NavProjectBar from "../components/NavProjectBar.jsx";
import projects from "../settings/projects.js";

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects[id];

  return (
    <div className="">
      <NavProjectBar projects={projects} currentProject={project} />
      <div className="bg-secondary px-10 lg:px-20 pt-24">
        <div
          className={`${project.bg} flex  justify-center items-center gap-10 m-auto w-full sm:w-fit  sm:px-16 py-10 sm:py-20 rounded-xl`}
        >
          <img src={project.logo} className=" w-14" alt="" />
          <h2 className="sm:text-4xl text-2xl font-semibold">
            {project.title}
          </h2>
        </div>

        <section className="pb-16">
          <h2 className=" text-white text-3xl mt-10">{project.title}</h2>
          <hr className="my-2" />
          <div className=" relative">
            <h3
              className=" text-primary text-xl underline absolute right-0
             hover:text-white transition duration-200 ease-in-out cursor-pointer"
            >
              <a href={project.link} target="_blank" rel="noreferrer">
                see Live demo 🡥
              </a>
            </h3>
          </div>

          <div className="mt-6">
            <h3 className=" text-white text-xl mt-10">Technologies used:</h3>
            <div className=" flex flex-wrap gap-5 mt-5">
              {project.technologies.map((item, index) => (
                <img src={item} className=" w-16" alt="" key={index} />
              ))}
            </div>
          </div>
          <div className="mt-16">
            <h3 className=" text-white text-xl mt-10">Features:</h3>
            <ul className=" text-primary mt-5 list-disc list-inside pl-10 text-lg">
              {project.features.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </section>
      </div>

      <div>
        {Object.keys(project.images).map((key) => (
          <section key={key} className=" bg-primary py-10  px-10 lg:px-20">
            <h2 className=" text-white text-4xl text-center py-5">{key}</h2>
            <img
              src={project.images[key]}
              className=" py-10 lg:px-60 w-full"
              alt=""
            />
          </section>
        ))}
      </div>
    </div>
  );
};

export default ProjectDetails;
