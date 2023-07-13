import React from "react";
import DropdownBtn from "../components/DropdownBtn";

const EkriEchri = () => {
  return (
    <div className="">
      <div className="bg-secondary px-10 lg:px-20">
        <nav className="py-7 flex justify-between">
          <button className="" onClick={() => (window.location.href = "/")}>
            <img src="/assets/Logowhite.png" alt="" />
          </button>
          <DropdownBtn />
        </nav>

        <div className="bg-white flex  justify-center items-center gap-10 m-auto w-full sm:w-fit  sm:px-16 py-10 sm:py-20 rounded-xl">
          <img src="/assets/LogoIcon.svg" className=" w-14" alt="" />
          <h2 className="sm:text-4xl text-2xl font-semibold text-blue-900">
            EKRI & ECHRI
          </h2>
        </div>

        <section className="pb-16">
          <h2 className=" text-white text-3xl mt-10">EKRI & ECHRI</h2>
          <hr className="my-2" />
          <div className=" relative">
            <h3
              className=" text-primary text-xl underline absolute right-0
             hover:text-white transition duration-200 ease-in-out cursor-pointer"
            >
              see Live demo 🡥
            </h3>
          </div>

          <div className="mt-6">
            <h3 className=" text-white text-xl mt-10">Technologies used:</h3>
            <div className=" flex flex-wrap gap-5 mt-5">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" className=" w-16" alt="" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" className=" w-16" alt="" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" className=" w-16" alt="" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" className=" w-16" alt="" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain-wordmark.svg" className=" w-16" alt="" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" className=" w-16" alt="" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" className=" w-16" alt="" />
            </div>
          </div>
          <div className="mt-16">
            <h3 className=" text-white text-xl mt-10">Features:</h3>
            <ul className=" text-primary mt-5 list-disc list-inside pl-10 text-lg">
              <li>Sign in / Log in with email verification plus the ability to sign in with google (using Google API)</li>
              <li>Post / Modify / Like / Report articles</li>
              <li>Implementing and using Google map API to show the location of the article</li>
              <li>Implementing real-time messages between users with web socket.</li>
              <li>Implementing real-time system notifications</li>
              <li>Implementing admin manager of the site.</li>
            </ul>
          </div>
        </section>
      </div>

      <div>
        <section className=" bg-primary py-10  px-10 lg:px-20">
          <h2 className=" text-white text-4xl text-center py-5">Home Page</h2>
          <img
            src="/assets/EKRI&ECHRI pics/Home.png"
            className=" py-10 lg:px-60 w-full"
            alt=""
          />
        </section>

        <section className="bg-secondary py-10 px-10 lg:px-20">
          <h2 className=" text-white text-4xl text-center py-5">Log in Page</h2>
          <img
            src="/assets/EKRI&ECHRI pics/LogIn.png"
            className=" py-10 lg:px-60"
            alt=""
          />
        </section>

        <section className=" bg-primary py-10  px-10 lg:px-20">
          <h2 className=" text-white text-4xl text-center py-5">
            Sign in Page
          </h2>
          <img
            src="/assets/EKRI&ECHRI pics/signIn.png"
            className=" py-10 lg:px-60"
            alt=""
          />
        </section>

        <section className=" bg-secondary py-10  px-10 lg:px-20">
          <h2 className=" text-white text-4xl text-center py-5">
            Notification Page
          </h2>
          <img
            src="/assets/EKRI&ECHRI pics/Notification.png"
            className=" py-10 lg:px-60"
            alt=""
          />
        </section>

        <section className=" bg-primary py-10 px-10 lg:px-20">
          <h2 className=" text-white text-4xl text-center py-5">
            Messages Page
          </h2>
          <img
            src="/assets/EKRI&ECHRI pics/messages.png"
            className=" py-10 lg:px-60"
            alt=""
          />
        </section>

        <section className=" bg-secondary py-10 px-10 lg:px-20">
          <h2 className=" text-white text-4xl text-center py-5">
            Articles page
          </h2>
          <img
            src="/assets/EKRI&ECHRI pics/Annonces.png"
            className=" py-10 lg:px-60"
            alt=""
          />
        </section>

        <section className=" bg-primary py-10 px-10 lg:px-20">
          <h2 className=" text-white text-4xl text-center py-5">
            Article page
          </h2>
          <img
            src="/assets/EKRI&ECHRI pics/Annonce.png"
            className=" py-10 lg:px-60"
            alt=""
          />
        </section>

        <section className=" bg-secondary py-10 px-10 lg:px-20">
          <h2 className=" text-white text-4xl text-center py-5">
            Post Article Page
          </h2>
          <img
            src="/assets/EKRI&ECHRI pics/deposer Annonce.png"
            className=" py-10 lg:px-60"
            alt=""
          />
        </section>

        <section className=" bg-primary py-10 px-10 lg:px-20">
          <h2 className=" text-white text-4xl text-center py-5">
            Modify Article page
          </h2>
          <img
            src="/assets/EKRI&ECHRI pics/Modifier Annonce.png"
            className=" py-10 lg:px-60"
            alt=""
          />
        </section>

        <section className=" bg-secondary py-10 px-10 lg:px-20">
          <h2 className=" text-white text-4xl text-center py-5">Admine Page</h2>
          <img
            src="/assets/EKRI&ECHRI pics/Admin.png"
            className=" py-10 lg:px-60 blur-sm"
            alt=""
          />
        </section>
      </div>
    </div>
  );
};

export default EkriEchri;
