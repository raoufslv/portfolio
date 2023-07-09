import React from "react";
import DropdownBtn from "../components/DropdownBtn";

const AIarticle = () => {
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
          <img src="/assets/LogoAI.png" className=" w-16" alt="" />
          <h2 className="sm:text-4xl text-2xl font-bold text-blue-800">
            AI Article
          </h2>
        </div>

        <section className="pb-16">
          <h2 className=" text-white text-4xl mt-10">AI Article</h2>
          <hr className="my-2" />

          <div className=" flex lg:flex-row lg:justify-between flex-col">
            <table className="lg:flex-shrink-0 text-left">
              <tbody>
                <tr className="text-white text-xl">
                  <th className="font-semibold lg:pr-20 py-5 w-[40%]">
                    Category:
                  </th>
                  <th className="font-normal lg:pr-20 py-5">Static Website</th>
                </tr>
                <tr className="text-white text-xl">
                  <th className="font-semibold lg:pr-20 py-5">Year :</th>
                  <th className="font-normal lg:pr-20 py-5">2022</th>
                </tr>
                <tr className="text-white text-xl">
                  <th className="font-semibold lg:pr-20 py-5">Team :</th>
                  <th className="font-normal lg:pr-20 py-5">Raouf ABDALLAH</th>
                </tr>
                <tr className="text-white text-xl">
                  <th className="font-semibold lg:pr-20 py-5">Client :</th>
                  <th className="font-normal lg:pr-20 py-5">
                    University project
                  </th>
                </tr>
              </tbody>
            </table>
            <div className="text-white  lg:w-1/2">
              <h1 className="text-2xl py-5 font-semibold">Details :</h1>
              <p className="text-xl">
                The AI Article website is built using using HTMLand CSS only.
                The website aims to provide an articles about AI and it's
                subdomains.
              </p>
            </div>
          </div>
        </section>
      </div>

      <div>
        <section className=" bg-primary py-10  px-10 lg:px-20">
          <h2 className=" text-white text-4xl text-center py-5">Home Page</h2>
          <img
            src="/assets/AI pics/Home.png"
            className=" py-10 lg:px-60 w-full"
            alt=""
          />
        </section>

        <section className="bg-secondary py-10 px-10 lg:px-20">
          <h2 className=" text-white text-4xl text-center py-5">
            Articles DropDown menu
          </h2>
          <img
            src="/assets/AI pics/Dropdown.png"
            className=" py-10 lg:px-60"
            alt=""
          />
        </section>

        <section className=" bg-primary py-10  px-10 lg:px-20">
          <h2 className=" text-white text-4xl text-center py-5">
            Machine learning page
          </h2>
          <img
            src="/assets/AI pics/Machinlearning.png"
            className=" py-10 lg:px-60"
            alt=""
          />
        </section>

        <section className=" bg-secondary py-10  px-10 lg:px-20">
          <h2 className=" text-white text-4xl text-center py-5">
            Deep learning Page
          </h2>
          <img
            src="/assets/AI pics/deeplearning.png"
            className=" py-10 lg:px-60"
            alt=""
          />
        </section>

        <section className=" bg-primary py-10 px-10 lg:px-20">
          <h2 className=" text-white text-4xl text-center py-5">
            Computer vision page
          </h2>
          <img
            src="/assets/AI pics/ComputerVision.png"
            className=" py-10 lg:px-60"
            alt=""
          />
        </section>

        <section className=" bg-secondary py-10 px-10 lg:px-20">
          <h2 className=" text-white text-4xl text-center py-5">NLP Page</h2>
          <img
            src="/assets/AI pics/NLP.png"
            className=" py-10 lg:px-60"
            alt=""
          />
        </section>
      </div>
    </div>
  );
};

export default AIarticle;
