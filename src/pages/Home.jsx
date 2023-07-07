import React, { useRef } from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

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
    link.href = "/assets/cv.pdf"; // Replace with the desired file path
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
      top: offsetTop,
      behavior: "smooth",
    });
  };

  // declare 3 variables de type string
  let p1 = "";
  let p2 = "";
  let p3 = "";
  return (
    <div className="text-white">
      <Navbar />
      <div>
        {/* ***************************************************************** HOME SECTION ********************************************************************** */}

        <section
          id="Home"
          className=" w-full h-screen bg-primary pt-20 px-5 lg:px-20"
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
              <span>Raouf</span>
              <span className="last-name z-10 hidden lg:block lg:text-[4rem] xl:text-[6rem] 2xl:text-9xl min-[1130px]:text-[5rem] lg:pt-10 min-[1130px]:pt-8 xl:pt-6 2xl:pt-0">
                ABDALLAH
              </span>
            </h1>
            <h1 className=" text-2xl sm:text-3xl md:text-4xl font-bold mt-6">Fullstack Web Developer</h1>
            <div className="flex gap-10 sm:gap-14 md:gap-20 my-10">
              <button
                className="px-6 py-4 bg-slate-500 rounded text-2xl font-semibold flex gap-4"
                onClick={() => scrollToSection("#Contact")}
              >
                Contact
                <img src="/assets/mail.svg" className=" w-8" alt="sa" />
              </button>
              <button
                className="text-xl mb-1 font-medium"
                onClick={() => scrollToSection("#About")}
              >
                About Me
              </button>
            </div>
          </div>

          <img
            src="/assets/raouf2.png"
            className="w-1/3 hidden lg:block absolute bottom-0 lg:right-64 xl:right-80 z-10"
            alt=""
          />
          <img
            src="/assets/mouse.svg"
            className=" absolute bottom-0 left-1/2 right-1/2 mb-5 md:block hidden"
            alt=""
          />
        </section>

        {/* ***************************************************************** About SECTION ********************************************************************** */}

        <section
          id="About"
          className=" w-full h-screen bg-secondary relative flex lg:gap-72 items-center justify-center px-5 lg:px-20"
        >
          {/* boxes */}
          <div className="bg-primary h-80 w-1/6 lg:block hidden absolute bottom-96 rounded right-32"></div>
          <div className="bg-primary-transparent box rounded absolute bottom-0 right-0  lg:block hidden"></div>
          <div className="bg-primary-transparent box rounded absolute bottom-10 right-10  lg:block hidden"></div>
          <div className="bg-primary h-1/4 w-40 left-56 lg:block hidden rounded absolute "></div>
          <div className=" bg-transparent border-4 h-1/3 w-44 lg:block hidden left-40 z-20 top-28 absolute "></div>

          <div className="z-10 lg:block hidden">
            <div className="bg-black rounded-xl w-56 mb-60 ">
              <img src="/assets/raouf.png" className="rounded-xl" alt="" />
            </div>
          </div>
          <div className=" lg:z-10">
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
              I'm a Fullstack web developer with 2 year of experience in
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
          </div>
        </section>

        {/* ***************************************************************** Skills SECTION ********************************************************************** */}

        <section
          id="Skills"
          className=" w-screen h-screen bg-primary relative flex flex-col lg:flex-row justify-center lg:gap-72 items-center px-5 lg:px-56"
        >
          <div className="bg-secondary-transparent box opacity-80 rounded absolute bottom-0 left-0  lg:block hidden"></div>
          <div className="bg-secondary-transparent box rounded absolute bottom-10 left-10  lg:block hidden"></div>
          <div className="bg-secondary-transparent h-52 w-32 rounded absolute right-52 top-0"></div>

          <div
            className="bg-secondary  h-2 rounded-full absolute right-52 top-0
          "
          ></div>

          <div>
            <h3 className="text-secondary text-2xl mb-5 font-semibold">
              My Skills
            </h3>
            <br />
            <h2 className=" text-5xl text-secondary navbar-font font-medium">
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
          </div>

          <div className=" flex flex-col lg:flex-grow">
            <div className=" relative">
              <div className=" flex justify-between">
                <h4>Website Design (Figma)</h4>
                <h4>65%</h4>
              </div>

              <div className="bg-secondary  h-2 w-full rounded-full mt-2 absolute top-6"></div>
              <div className="bg-white  h-2 w-[65%] rounded-full mt-2 absolute top-6"></div>
            </div>

            <br />
            <br />

            <div className=" relative">
              <div className=" flex justify-between">
                <h4>
                  Frontend (HTML, CSS, Bootstrap, Tailwind, <br /> JavaScript,
                  JQuery, Ajax, React)
                </h4>

                <h4 className=" mt-5">80%</h4>
              </div>

              <div className="bg-secondary  h-2 w-full rounded-full mt-2 absolute top-12"></div>
              <div className="bg-white  h-2 w-[80%] rounded-full mt-2 absolute top-12"></div>
            </div>

            <br />
            <br />

            <div className=" relative">
              <div className=" flex justify-between">
                <h4>
                  Backend (PHP, Nodejs, Nextjs, MySQL, <br />
                  MongoDB, Websocket)
                </h4>
                <h4 className=" mt-5">75%</h4>
              </div>
              <div className="bg-secondary  h-2 w-full rounded-full mt-2 absolute top-12"></div>
              <div className="bg-white  h-2 w-[75%] rounded-full mt-2 absolute top-12"></div>
            </div>

            <br />
            <br />

            <div className=" relative">
              <div className=" flex justify-between">
                <h4>Project Management (Git)</h4>
                <h4>65%</h4>
              </div>
              <div className="bg-secondary  h-2 w-full rounded-full mt-2 absolute top-6"></div>
              <div className="bg-white  h-2 w-[65%] rounded-full mt-2 absolute top-6"></div>
            </div>
          </div>
        </section>

        {/* ***************************************************************** Projects SECTION ********************************************************************** */}

        <section
          id="Projects"
          className=" w-screen h-auto bg-secondary relative px-5 lg:px-20"
        >
          {/* boxes */}
          <div className="bg-primary h-80 w-1/12 absolute top-10 rounded right-10 hidden lg:block"></div>
          <div className="bg-primary-transparent box rounded absolute bottom-0 right-0  lg:block hidden"></div>
          <div className="bg-primary-transparent box rounded absolute bottom-10 right-10  lg:block hidden"></div>
          <div className="bg-primary h-1/4 w-40 left-40 rounded absolute top-96  hidden lg:block"></div>
          <div className=" bg-transparent border-4 h-1/3 w-44 left-24 z-20 top-48 absolute  hidden lg:block"></div>

          <div>
            <h3 className="text-secondary text-4xl navbar-font pt-10 text-center">
              My Projects
            </h3>
            <p className="ml-96 pl-10 mt-9  hidden lg:block">
              I find enjoyment in every phase of the development journey, from
              idea generation and teamwork <br />
              to bringing concepts to life.
            </p>
          </div>

          <div className="flex flex-col mx-10 sm:mx-20 md:mx-40 lg:mx-96 gap-5 py-14">
            <div className="hidden">
              {
                (p1 =
                  "in this project i worked on both fronted and backend, For the front i use Html, css with Bootstrap, Vanilla javascript with JQuery and Ajax, And for the Backend i used PHP.")
              }
              {
                (p2 =
                  "in this project i worked on the fronted side, i used different technologies like react and Tailwind.")
              }
              {
                (p3 =
                  "This is a simple website for an AI Article, implimented using only html and css.")
              }
            </div>

            <a href="/EkriEchri">
              <Card
                Headline={"Ekri&Echri"}
                PicPath="/assets/Ekri&Echri.png"
                summary={p1}
              ></Card>
            </a>

            <a href="/Tomobiltek">
              <Card
                Inverse={true}
                Headline={"Tomobiltek"}
                PicPath="/assets/Tomobiltek.png"
                summary={p2}
              ></Card>
            </a>

            <a href="/AIarticle">
              <Card
                Headline={"A site about AI"}
                PicPath="/assets/AI-site.png"
                summary={p3}
              ></Card>
            </a>
          </div>
        </section>

        {/* ***************************************************************** Resume SECTION ********************************************************************** */}

        <section
          id="Resume"
          className=" w-screen h-auto bg-primary relative flex  justify-center items-center py-10 px-5 lg:px-20"
        >
          <div className="bg-secondary-transparent box opacity-80 rounded absolute bottom-0 left-0  lg:block hidden"></div>
          <div className="bg-secondary-transparent box rounded absolute bottom-10 left-10  lg:block hidden"></div>
          <div className="bg-secondary-transparent h-52 w-32 rounded absolute right-20 top-10 lg:block hidden"></div>

          <div className="bg-secondary h-2 rounded-full absolute right-52 top-0"></div>
          <div>
            <h3 className="text-secondary text-4xl navbar-font text-center">
              My Resume
            </h3>
            <div className="flex gap-20 items-center mt-10 flex-col lg:flex-row">
              <div className="lg:self-start lg:mt-5">
                <div className=" flex items-center gap-3">
                  <hr className="h-1-2 bg-secondary w-5 border-0" />
                  <h4 className="text-2xl navbar-font">Experience</h4>
                </div>
                <div className="flex sm:gap-5 gap-2 my-8">
                  <img
                    src="/assets/education2.svg"
                    className="pb-32"
                    alt="icon"
                  />
                  <div className="">
                    <div className="flex justify-between">
                      <h4 className="sm:text-2xl text-xl navbar-font">Training Camp</h4>
                      <h5>December 2022</h5>
                    </div>
                    <div>
                      <p className=" font-extralight opacity-60 flex-col">
                        Etic club - Ecole supérieure d'informatique
                      </p>

                      <p className="font-extralight opacity-100 mt-3 md:w-96 w-[17rem]">
                        I worked on a project to "create a web application
                        allowing Algerians to submit their automobile sale
                        announcement and consult those published by other users"
                        at the 9th edition of the training camp held by the ETIC
                        club.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:self-start lg:mt-5">
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
              </div>
            </div>
          </div>
        </section>

        {/* ***************************************************************** Contact SECTION ********************************************************************** */}

        <section
          id="Contact"
          className=" w-screen h-auto bg-secondary relative px-5 lg:px-20 pb-10"
        >
          <div className="bg-primary-transparent box rounded absolute bottom-0 right-0  lg:block hidden"></div>
          <div className="bg-primary-transparent box rounded absolute bottom-10 right-10  lg:block hidden"></div>
          <div className="bg-primary h-52 w-36 rounded absolute left-5 bottom-16 lg:block hidden"></div>

          <div className="flex flex-col gap-5 items-center">
            <h3 className="text-secondary text-4xl navbar-font pt-10 lg:pb-10 text-center">
              Contact Me
            </h3>
            <div className=" flex lg:gap-56 gap-10 flex-col lg:flex-row">
              <div>
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
                  <img src="/assets/message.svg" alt="" />
                  <div>
                    <h4 className=" text-xl">Email me</h4>
                    <h4 className="text-primary font-bold md:text-xl sm:text-lg">
                      abderraouf.abdallah1812@gmail.com
                    </h4>
                  </div>
                </div>
              </div>
              <div className="flex-grow">
                <form
                  className="flex flex-col gap-5 text-black md:w-96 md:h-96"
                  ref={form}
                  onSubmit={sendEmail}
                >
                  <input
                    type="text"
                    name="user_name"
                    className="bg-secondary2 rounded-lg p-2"
                    placeholder="Name"
                  />
                  <input
                    type="email"
                    name="user_email"
                    className="bg-secondary2 rounded-lg p-2"
                    placeholder="Email"
                  />
                  <input
                    type="tel"
                    name="user_phone"
                    className="bg-secondary2 rounded-lg p-2"
                    placeholder="Phone Number"
                  />
                  <textarea
                    name="message"
                    className="bg-secondary2 rounded-lg p-2 h-40"
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
              </div>
            </div>
          </div>
        </section>

        {/* ***************************************************************** Footer SECTION ********************************************************************** */}

        <section
          id="footer"
          className="w-screen max-h-screen bg-primary relative py-16 px-5 lg:px-20"
        >
          <div className=" bg-transparent border-4 md:h-64 h-56 w-44 md:left-16 z-20 md:bottom-14 bottom-12 left-3 absolute "></div>
          <div className="flex justify-between">
            <a href="/" className=" z-50">
              <img src="/assets/Logowhite.png" alt="" />
            </a>

            <div className=" flex items-center gap-8 flex-col lg:flex-row">
              <h4 className="text-secondary text-3xl navbar-font">
                My socials
              </h4>
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
