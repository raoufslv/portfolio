import { useRef, useState } from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Skills from "../components/Skills";
import { motion } from "framer-motion";
import projects from "../settings/projects.js";

const Home = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // verify the form and its fields
    if (
      !form.current.user_name.value ||
      !form.current.user_email.value ||
      !form.current.user_phone.value ||
      !form.current.message.value
    ) {
      toast.error("Please fill all the fields", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      return;
    }

    emailjs
      .sendForm(
        "service_c9u7xmt",
        "template_nh859lc",
        form.current,
        "0tpKHe5kk_qrOyDsB"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("email sent");
          e.target.reset();
          // show success message
          toast.success("Message sent successfully", {
            position: toast.POSITION.BOTTOM_RIGHT,
          });
        },
        (error) => {
          console.log(error.text);
          console.log("email not sent");
          // show error message
          toast.error("Message not sent", {
            position: toast.POSITION.BOTTOM_RIGHT,
          });
        }
      );
  };

  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = "/assets/CV.pdf"; // Replace with the desired file path
    link.download = "CV.pdf"; // Replace with the desired name of the downloaded file
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollToSection = (id) => {
    const element = document.querySelector(id);
    const offsetTop = element.offsetTop;
    window.scrollTo({
      top: offsetTop - 80,
      behavior: "smooth",
    });
  };

  // declare 2 variables de type boolean
  const [AboutHovered, setAboutHovered] = useState(false);
  return (
    <div className="text-white w-screen overflow-hidden">
      <Navbar />
      <div>
        {/* ***************************************************************** HOME SECTION ********************************************************************** */}

        <section
          id="Home"
          className=" w-full h-auto min-h-screen bg-primary pt-20 px-5 lg:px-20"
        >
          {/* boxes */}
          <div className="bg-secondary-transparent h-1/2 w-1/6 absolute bottom-44 right-32 lg:block hidden"></div>
          <div className="bg-secondary-transparent box opacity-80 rounded absolute bottom-0 left-0  lg:block hidden"></div>
          <div className="bg-secondary-transparent box rounded absolute bottom-10 left-10  lg:block hidden"></div>
          <div className="bg-secondary-transparent box rounded absolute bottom-1/3 persenolize z-20 lg:block hidden"></div>
          <div className="bg-secondary-transparent h-1/6 w-24 rounded absolute md:block hidden persenolize2"></div>

          <div className="mt-20">
            <h2 className="text-xl font-bold">Hello, i'm</h2>
            <h1 className=" text-6xl sm:text-7xl md:text-9xl font-bold mt-6 flex gap-64 lg:gap-48 xl:gap-64 navbar-font">
              <motion.span
                initial={{ x: -200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                Raouf
              </motion.span>
              <motion.span
                initial={{ x: 200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="last-name z-10 hidden lg:block lg:text-[4rem] xl:text-[6rem] 2xl:text-9xl min-[1130px]:text-[5rem] lg:pt-10 min-[1130px]:pt-8 xl:pt-6 2xl:pt-0"
              >
                ABDALLAH
              </motion.span>
            </h1>
            <h1 className=" text-2xl sm:text-3xl md:text-4xl font-bold mt-6">
              Fullstack Web Developer
            </h1>
            <div className="flex gap-10 sm:gap-14 md:gap-20 my-10">
              <motion.button
                className="px-6 py-4 bg-slate-500 rounded text-2xl font-semibold flex gap-4 hover:bg-slate-600"
                onClick={() => scrollToSection("#Contact")}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.2 }}
              >
                Contact
                <img src="/assets/mail.svg" className=" w-8" alt="sa" />
              </motion.button>
              <button
                className="text-xl mb-1 font-medium"
                onClick={() => scrollToSection("#About")}
                onMouseEnter={() => setAboutHovered(true)}
                onMouseLeave={() => setAboutHovered(false)}
              >
                About Me
                <motion.div
                  initial={{ scaleX: 0, originX: 0.5 }}
                  animate={{
                    scaleX: AboutHovered ? 1 : 0,
                  }}
                  exit={{ scaleX: 0 }}
                  transition={{ duration: 0.4 }}
                  className="h-1 bg-white rounded mt-[0.2rem]"
                />
              </button>
            </div>
          </div>

          <motion.img
            initial={{ y: 200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            src="/assets/raouf2.png"
            className="w-1/3 hidden lg:block absolute bottom-0 lg:right-64 xl:right-80 z-10"
            alt=""
          />
          <div
            className="scroll-downs cursor-pointer z-10 absolute bottom-0 left-1/2 transform -translate-x-1/2 hidden lg:block"
            onClick={() => scrollToSection("#About")}
          >
            <div className="mousey">
              <div className="scroller"></div>
            </div>
          </div>
        </section>

        {/* ***************************************************************** About SECTION ********************************************************************** */}

        <section
          id="About"
          className=" w-full h-auto min-h-screen py-24 bg-secondary relative flex lg:gap-72 items-center justify-center px-5 lg:px-20"
        >
          {/* boxes */}
          <div className="bg-primary h-80 w-1/6 lg:block hidden absolute bottom-96 rounded right-32"></div>
          <div className="bg-primary-transparent box rounded absolute bottom-0 right-0  lg:block hidden"></div>
          <div className="bg-primary-transparent box rounded absolute bottom-10 right-10  lg:block hidden"></div>
          <motion.div
            initial={{ x: -200, y: 250, opacity: 0 }}
            whileInView={{ x: 0, y: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-primary h-1/4 w-40 left-56 lg:block hidden rounded absolute "
          ></motion.div>
          <motion.div
            initial={{ x: -200, y: -150, opacity: 0 }}
            whileInView={{ x: 0, y: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className=" bg-transparent border-4 h-1/3 w-44 lg:block hidden left-40 z-20 top-28 absolute "
          ></motion.div>

          <motion.div
            initial={{ x: -300, y: 300, opacity: 0 }}
            whileInView={{ x: 0, y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="z-10 lg:block hidden"
          >
            <div className="bg-black rounded-xl w-56 mb-60">
              <img src="/assets/raouf.png" className="rounded-xl" alt="" />
            </div>
          </motion.div>
          <motion.div
            initial={{ x: 300, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className=" lg:z-10"
          >
            <h3 className="text-primary text-2xl mb-5 font-semibold">
              About Me
            </h3>
            <h2 className=" text-5xl text-primary navbar-font font-medium">
              <span className="text-white">I'm</span> Raouf
              <br />
              ABDALLAH,
              <br />
              <span className="text-white">a Web</span>
              <br />
              Developer
            </h2>
            <h3 className="text-white text-2xl mt-5 font-medium">
              Based in Algiers, Algeria
            </h3>
            <p className=" md:w-96  mt-8 text-lg">
              I'm a Fullstack web developer with +3 years of experience in
              designing and building responsive web apps. Proficient in CSS,
              React Js as well as a good experience in Backend with PHP,Nodejs
              and expressjs,and also Nextjs with knowledge of UI, UX.
            </p>
            <button
              className=" bg-primary px-5 py-3 rounded mt-10 flex justify-center items-center gap-2"
              onClick={downloadCV}
            >
              Download CV
              <img
                src="/assets/download.svg"
                className=" w-10"
                alt="download icon"
              />
            </button>
          </motion.div>
        </section>

        {/* ***************************************************************** Skills SECTION ********************************************************************** */}

        <section
          id="Skills"
          className=" w-screen h-auto min-h-screen py-32 bg-primary relative flex flex-col lg:flex-row justify-center 2xl:gap-80 lg:gap-56 items-center px-5 lg:px-44"
        >
          <div className="bg-secondary-transparent box opacity-80 rounded absolute bottom-0 left-0  lg:block hidden"></div>
          <div className="bg-secondary-transparent box rounded absolute bottom-10 left-10  lg:block hidden"></div>
          <div className="bg-secondary-transparent h-56 w-32 rounded-b absolute left-24 top-0"></div>

          <div
            className="bg-secondary  h-2 rounded-full absolute right-52 top-0
          "
          ></div>

          <motion.div
            initial={{ x: -300, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className=" text-2xl mb-5 font-semibold">My Skills</h3>
            <br />
            <h2 className=" text-5xl navbar-font font-medium">
              Brining your vision
              <br />
              to life !
            </h2>
            <br />
            <br />
            <p className="w-96 lg:block hidden">
              Through my skills in coding and design, I have created a few
              projects in diverse industries and have successfully increased my
              coding abilities and problem-solving skills.
            </p>
          </motion.div>

          <Skills />
        </section>

        {/* ***************************************************************** Projects SECTION ********************************************************************** */}

        <section
          id="Projects"
          className=" w-screen h-auto min-h-screen bg-secondary relative p-5 pb-20 lg:px-20"
        >
          {/* boxes */}
          <div className="bg-primary-transparent box rounded absolute bottom-0 right-0  lg:block hidden"></div>
          <div className="bg-primary-transparent box rounded absolute bottom-10 right-10  lg:block hidden"></div>

          <div>
            <h3 className="text-4xl navbar-font pt-10 text-center">
              My Projects
            </h3>
            <p className="text-center mt-5">
              I find enjoyment in every phase of the development journey, from
              idea generation and teamwork to bringing concepts to life.
            </p>
          </div>

          <div className="flex gap-10 items-center justify-center mt-10 flex-wrap">
            {projects.map((project, index) => (
              <Card key={index} info={project} index={index} /> // Pass the index prop
            ))}
          </div>
        </section>

        {/* ***************************************************************** Resume SECTION ********************************************************************** */}

        <section
          id="Resume"
          className=" w-screen h-auto min-h-screen bg-primary relative flex  justify-center items-center py-10 px-5 lg:px-20"
        >
          <div className="bg-secondary-transparent box opacity-80 rounded absolute bottom-0 left-0  lg:block hidden"></div>
          <div className="bg-secondary-transparent box rounded absolute bottom-10 left-10  lg:block hidden"></div>
          <div className="bg-secondary-transparent h-52 w-32 rounded absolute right-20 top-10 lg:block hidden"></div>

          <div className="bg-secondary h-2 rounded-full absolute right-52 top-0"></div>
          <div>
            <h3 className=" text-4xl navbar-font text-center">My Resume</h3>
            <div className="flex gap-20 items-center mt-10 flex-col lg:flex-row">
              <motion.div
                initial={{ x: -300, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="lg:self-start lg:mt-5"
              >
                <div className=" flex items-center gap-3">
                  <hr className="h-1-2 bg-secondary w-5 border-0" />
                  <h4 className="text-2xl navbar-font">Experience</h4>
                </div>
                <div className="flex sm:gap-5 gap-2 my-8">
                  <img
                    src="/assets/work-icon.svg"
                    className="self-start mt-2"
                    alt="icon"
                  />
                  <div className="">
                    <div className="flex justify-between">
                      <h4 className="sm:text-2xl text-xl navbar-font">
                        Dev member
                      </h4>
                      <h5>2020 - present</h5>
                    </div>
                    <div className="md:w-[31.6rem] w-[17rem]">
                      <p className=" font-extralight opacity-60 flex-col">
                        Micro club - University of Science and Technology Houari
                        Boumediene
                      </p>

                      <p className="font-extralight opacity-100 mt-3">
                        In my role as a developer in the 'Micro Club,' I've
                        gained valuable experience in computer science and web
                        development. One standout project involved creating a
                        website for the 'MGV' hackathon using Next.js,
                        Typescript, and framer motion. Additionally, my club
                        involvement has enhanced my soft skills, including
                        teamwork and communication, through collaboration with
                        fellow members on various projects.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex sm:gap-5 gap-2 my-8">
                  <img
                    src="/assets/work-icon.svg"
                    className="self-start mt-2"
                    alt="icon"
                  />
                  <div className="">
                    <div className="flex justify-between">
                      <h4 className="sm:text-2xl text-xl navbar-font">
                        Freelancer web developer
                      </h4>
                      <h5>2022 - present</h5>
                    </div>
                    <div className="md:w-[31.6rem] w-[17rem]">
                      <p className=" font-extralight opacity-60 flex-col">
                        Customers researched
                      </p>

                      <p className="font-extralight opacity-100 mt-3">
                        Throughout my freelancing adventures, I've had the
                        chance to work on a variety of web development projects.
                        During this time, I've taken the initiative to learn and
                        experiment with new web technologies to keep up with the
                        ever-changing trends in the field. This independent
                        journey has been both exciting and rewarding, helping me
                        grow my skill set and stay up-to-date in the dynamic
                        world of web development.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex sm:gap-5 gap-2 my-8">
                  <img
                    src="/assets/work-icon.svg"
                    className="self-start mt-2"
                    alt="icon"
                  />
                  <div className="">
                    <div className="flex justify-between">
                      <h4 className="sm:text-2xl text-xl navbar-font">
                        Dev participant
                      </h4>
                      <h5>2022 - present</h5>
                    </div>
                    <div className="md:w-[31.6rem] w-[17rem]">
                      <p className=" font-extralight opacity-60 flex-col">
                        Hackathons - USTHB & ESI ...
                      </p>

                      <p className="font-extralight opacity-100 mt-3">
                        Participating in hackathons as a web developer and
                        designer was a game-changer. I got to show off my skills
                        in creating websites, solving problems, and
                        collaborating with others. Working under pressure, I
                        quickly adapted, came up with creative ideas, and
                        communicated well with my team. Using the latest
                        technologies, I built visually attractive and functional
                        web experiences. Hackathons pushed me to grow, fostering
                        teamwork and a passion for constant learning in my
                        field.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ x: 300, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="lg:self-start lg:mt-5"
              >
                <div className=" flex items-center gap-3">
                  <hr className="h-1-2 bg-secondary w-5 border-0" />
                  <h4 className="sm:text-2xl text-xl navbar-font">Education</h4>
                </div>
                <div className=" flex flex-col">
                  <div className="flex sm:gap-5 gap-2 my-8">
                    <img
                      src="/assets/education2.svg"
                      className="self-start mt-2"
                      alt="icon"
                    />
                    <div>
                      <div className="flex justify-between">
                        <h4 className="sm:text-2xl text-xl navbar-font">
                          Computer Vision
                        </h4>
                        <h5>2022 - present</h5>
                      </div>
                      <div className="md:w-[31.6rem] w-[17rem]">
                        <p className=" font-extralight opacity-60">
                          Master's degree - University of Science and Technology
                          Houari Boumediene
                        </p>
                        <br />
                        <h6 className="font-extralight opacity-100">
                          Image processing, machine learning, Design and
                          development of video games, Visualization of large
                          masses of data, Multimedia communication and image
                          compression.
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="flex sm:gap-5 gap-2 my-8">
                    <img
                      src="/assets/education2.svg"
                      className="self-start mt-2"
                      alt="icon"
                    />
                    <div>
                      <div className="flex justify-between">
                        <h4 className="sm:text-2xl text-xl navbar-font">
                          Computer Science
                        </h4>
                        <h5>2019 - 2022</h5>
                      </div>
                      <div className="md:w-[31.6rem] w-[17rem]">
                        <p className=" font-extralight opacity-60">
                          Bachelor's degree - University of Science and
                          Technology Houari Boumediene
                        </p>
                        <br />
                        <h6 className="font-extralight opacity-100">
                          Algorithms, logic, programming languages (python, C,
                          Java, JS,PHP), database (SQL), compilation, design of
                          architectures and systems, object-oriented
                          programming.
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ***************************************************************** Contact SECTION ********************************************************************** */}

        <section
          id="Contact"
          className=" w-screen h-auto min-h-screen bg-secondary relative px-5 lg:px-20 pb-10"
        >
          <div className="bg-primary-transparent box rounded absolute bottom-0 right-0  lg:block hidden"></div>
          <div className="bg-primary-transparent box rounded absolute bottom-10 right-10  lg:block hidden"></div>
          <div className="bg-primary h-52 w-36 rounded absolute left-5 bottom-16 lg:block hidden"></div>

          <div className="flex flex-col gap-5 items-center">
            <h3 className=" text-4xl navbar-font pt-10 lg:pb-10 text-center">
              Contact Me
            </h3>
            <div className=" flex lg:gap-56 gap-10 flex-col lg:flex-row">
              <motion.div
                initial={{ x: -300, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <h4 className=" text-xl lg:block hidden">
                  Please fill out the form on this section <br /> to contact me.
                </h4>
                <div className="my-5 mt-10 flex gap-5 items-center">
                  <img src="/assets/phone.svg" alt="" />
                  <div>
                    <h4 className=" text-xl">Call me</h4>
                    <h4 className="text-primary font-bold text-xl">
                      +213 540 60 87 26
                    </h4>
                  </div>
                </div>
                <div className="my-5 mt-10 flex gap-5 items-center">
                  <img src="/assets/message.svg" className=" z-50" alt="" />
                  <div>
                    <h4 className=" text-xl">Email me</h4>
                    <h4 className="text-primary font-bold md:text-xl sm:text-lg">
                      <a href="mailto: abderraouf.abdallah1812@gmail.com">
                        abderraouf.abdallah1812@gmail.com
                      </a>
                    </h4>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ x: 300, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="flex-grow"
              >
                <form
                  className="flex flex-col gap-5 text-black md:w-96 md:h-96"
                  ref={form}
                  onSubmit={sendEmail}
                >
                  <input
                    type="text"
                    name="user_name"
                    className="bg-secondary2 rounded-lg p-2 focus:border-slate-700  focus:ring-slate-700"
                    placeholder="Name"
                  />
                  <input
                    type="email"
                    name="user_email"
                    className="bg-secondary2 rounded-lg p-2 focus:border-slate-700  focus:ring-slate-700"
                    placeholder="Email"
                  />
                  <input
                    type="tel"
                    name="user_phone"
                    className="bg-secondary2 rounded-lg p-2 focus:border-slate-700  focus:ring-slate-700"
                    placeholder="Phone Number"
                  />
                  <textarea
                    name="message"
                    className="bg-secondary2 rounded-lg p-2 h-40 focus:border-slate-700  focus:ring-slate-700"
                    placeholder="Message"
                  />
                  <button
                    type="submit"
                    value="Send"
                    className="bg-primary rounded-lg p-2 w-28 text-white cursor-pointer hover:bg-secondary2 hover:text-primary"
                  >
                    Send
                  </button>
                </form>
                <ToastContainer />
              </motion.div>
            </div>
          </div>
        </section>

        {/* ***************************************************************** Footer SECTION ********************************************************************** */}

        <section
          id="footer"
          className="w-screen max-h-screen bg-primary relative py-16 px-5 lg:px-20"
        >
          <div className=" bg-transparent border-4 md:h-64 h-56 w-44 md:left-16 z-20 md:bottom-14 bottom-12 left-3 absolute flex items-end">
            <a href="/" className="m-2 md:m-1">
              <img src="/assets/Logowhite.png" alt="" />
            </a>
          </div>
          <div className="flex justify-end">
            <div className=" flex items-center gap-8 flex-col lg:flex-row">
              <h4 className=" text-3xl navbar-font">My socials</h4>
              <div className="flex gap-5">
                <a
                  href="https://web.facebook.com/raouf.abdou.5855"
                  target="_blank"
                >
                  <img src="/assets/facebook.svg" alt="" />
                </a>
                <a href="https://www.linkedin.com/in/raoufslv/" target="_blank">
                  <img src="/assets/linkdin.svg" alt="" />
                </a>
                <a href="https://github.com/raoufslv" target="_blank">
                  <img src="/assets/github.svg" alt="" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
