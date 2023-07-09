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
          <h2 className=" text-white text-4xl mt-10">EKRI & ECHRI</h2>
          <hr className="my-2" />

          <div className=" flex lg:flex-row flex-col">
            <table className="lg:flex-shrink-0 text-left">
              <tbody>
                <tr className="text-white text-xl">
                  <th className="font-semibold lg:pr-20 py-5 w-[40%]">
                    Categorie :
                  </th>
                  <th className="font-normal lg:pr-20 py-5">Dynamic Website</th>
                </tr>
                <tr className="text-white text-xl">
                  <th className="font-semibold lg:pr-20 py-5">Année :</th>
                  <th className="font-normal lg:pr-20 py-5">2022</th>
                </tr>
                <tr className="text-white text-xl">
                  <th className="font-semibold lg:pr-20 py-5">Equipe :</th>
                  <th className="font-normal lg:pr-20 py-5">
                    Raouf ABDALLAH & Issam HANAGRIA
                  </th>
                </tr>
                <tr className="text-white text-xl">
                  <th className="font-semibold lg:pr-20 py-5">Client :</th>
                  <th className="font-normal lg:pr-20 py-5">
                    graduation project
                  </th>
                </tr>
              </tbody>
            </table>
            <div className="text-white  lg:w-1/2">
              <h1 className="text-2xl py-5 font-semibold">Details :</h1>
              <p className="text-xl">
                The EKRI & ECHRI project involves the development of a housing
                advertisement website using HTML, CSS Bootstrap, JavaScript,
                JQuery, Ajax, WebSocket, PHP, and MySQL. The website aims to
                provide a responsive user-friendly platform for individuals to
                advertise and search for housing options. It incorporates
                features such as user sign-in with Google API, real-time
                messaging and notifications, Google Maps integration, and an
                admin manager module. The project aims to enhance user
                convenience, communication, and browsing experience while
                ensuring efficient site management.
              </p>
            </div>
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
