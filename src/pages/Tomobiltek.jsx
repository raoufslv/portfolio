import React, { Component } from "react";
import DropdownBtn from "../components/DropdownBtn";

class Tomobiltek extends Component {
  render() {
    return (
      <div className="">
        <div className="bg-secondary px-10 lg:px-20">
          <nav className="py-7 flex justify-between">
            <button className="" onClick={() => (window.location.href = "/")}>
              <img src="/assets/Logowhite.png" alt="" />
            </button>
            <DropdownBtn />
          </nav>

          <div className="bg-purple-600 flex  justify-center items-center gap-10 m-auto w-full sm:w-fit  sm:px-16 py-10 sm:py-20 rounded-xl">
            <img src="/assets/logoTomobiltek.svg" className=" w-16" alt="" />
            <h2 className="sm:text-4xl text-2xl font-semibold text-white">
              Tomobiltek
            </h2>
          </div>

          <section className="pb-16">
            <h2 className=" text-white text-4xl mt-10">Tomobiltek</h2>
            <hr className="my-2" />

            <div className=" flex lg:flex-row flex-col">
              <table className="lg:flex-shrink-0 text-left">
                <tbody>
                  <tr className="text-white text-xl">
                    <th className="font-semibold lg:pr-20 py-5 w-[40%]">
                      Category :
                    </th>
                    <th className="font-normal lg:pr-20 py-5">
                      Dynamic Website
                    </th>
                  </tr>
                  <tr className="text-white text-xl">
                    <th className="font-semibold lg:pr-20 py-5">year :</th>
                    <th className="font-normal lg:pr-20 py-5">2022</th>
                  </tr>
                  <tr className="text-white text-xl">
                    <th className="font-semibold lg:pr-20 py-5">Team :</th>
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
              src="/assets/Tomobiltek pics/Home.png"
              className=" py-10 lg:px-60 w-full"
              alt=""
            />
          </section>

          <section className="bg-secondary py-10 px-10 lg:px-20">
            <h2 className=" text-white text-4xl text-center py-5">
              Log in Page
            </h2>
            <img
              src="/assets/Tomobiltek pics/Login.png"
              className=" py-10 lg:px-60"
              alt=""
            />
          </section>

          <section className=" bg-primary py-10  px-10 lg:px-20">
            <h2 className=" text-white text-4xl text-center py-5">
              Sign in Page
            </h2>
            <img
              src="/assets/Tomobiltek pics/Signup.png"
              className=" py-10 lg:px-60"
              alt=""
            />
          </section>

          <section className=" bg-secondary py-10  px-10 lg:px-20">
            <h2 className=" text-white text-4xl text-center py-5">
              Articles page
            </h2>
            <img
              src="/assets/Tomobiltek pics/Annonces.png"
              className=" py-10 lg:px-60"
              alt=""
            />
          </section>

          <section className=" bg-primary py-10 px-10 lg:px-20">
            <h2 className=" text-white text-4xl text-center py-5">
              Article page
            </h2>
            <img
              src="/assets/Tomobiltek pics/Annonce.png"
              className=" py-10 lg:px-60"
              alt=""
            />
          </section>

          <section className=" bg-secondary py-10 px-10 lg:px-20">
            <h2 className=" text-white text-4xl text-center py-5">
              Post Article Page
            </h2>
            <img
              src="/assets/Tomobiltek pics/Creer annonce.png"
              className=" py-10 lg:px-60"
              alt=""
            />
          </section>

          <section className=" bg-primary py-10 px-10 lg:px-20">
            <h2 className=" text-white text-4xl text-center py-5">
              Information page
            </h2>
            <img
              src="/assets/Tomobiltek pics/Mes info.png"
              className=" py-10 lg:px-60"
              alt=""
            />
          </section>
        </div>
      </div>
    );
  }
}

export default Tomobiltek;
