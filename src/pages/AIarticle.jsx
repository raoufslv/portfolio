import React, { Component } from "react";
import DropdownBtn from "../components/DropdownBtn";
import DropdownComponent from "../components/DropdownComponent";
import DropdownComponent2 from "../components/DropdownComponent2";

class AIarticle extends Component {
  render() {
    return (
      <div className=" bg-secondary ">
        <nav className=" p-7 flex justify-between">
          <button className="" onClick={() => (window.location.href = "/")}>
            <img src="/assets/Logowhite.png" alt="" />
          </button>
          <DropdownBtn />
          <DropdownComponent />
          <DropdownComponent2 />
        </nav>

        <div className="flex justify-center items-center gap-10 m-auto w-fit px-16 py-20 rounded-xl bg-img ">
          <img src="/assets/LogoAI.png" className="w-16" alt="" />
          <h2 className="text-4xl font-bold text-blue-800">AI Article</h2>
        </div>

        <section className=" pb-16">
          <h2 className=" text-white text-4xl ml-16 mt-10">AI Article</h2>
          <hr className="mx-10 my-2" />

          <div className=" flex">
            <table className="flex-shrink-0">
              <tr className="text-white text-xl">
                <th className="font-normal px-20 py-5">Categorie</th>
                <th className="font-normal px-20 py-5">Web Dev Design UI UX</th>
              </tr>
              <tr className="text-white text-xl">
                <th className="font-normal px-20 py-5">Année</th>
                <th className="font-normal px-20 py-5">Web Dev Design UI UX</th>
              </tr>
              <tr className="text-white text-xl">
                <th className="font-normal px-20 py-5">Equipe</th>
                <th className="font-normal px-20 py-5">Web Dev Design UI UX</th>
              </tr>
              <tr className="text-white text-xl">
                <th className="font-normal px-20 py-5">Client</th>
                <th className="font-normal px-20 py-5">Web Dev Design UI UX</th>
              </tr>
            </table>
            <div className=" w-1/2 flex flex-col justify-between mt-14">
              <p className=" text-white text-xl flex items-center justify-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam quae voluptas, quod, quibusdam, voluptates quidem
                voluptatibus quos voluptatum quia quas quae. Quisquam, quae.
                Quisquam quae voluptas, quod, quibusdam, voluptates quidem
                voluptatibus quos voluptatum quia quas quae. Quisquam, quae.
                Quisquam quae voluptas, quod, quibusdam,
              </p>
              <span>
                <a
                  href="https://raoufslv.github.io/AI-Article/"
                  target="_blank"
                  className="text-white font-semibold text-xl flex gap-3"
                >
                  <img src="/assets/go-arrow.svg" className=" w-6" alt="" />
                  Go to website
                </a>
              </span>
            </div>
          </div>
        </section>

        <div>
          <section className=" bg-primary py-10">
            <h2 className=" text-white text-4xl text-center py-5">Home Page</h2>
            <img
              src="/assets/AI pics/Home.png"
              className=" py-10 px-60"
              alt=""
            />
          </section>

          <section className=" py-10">
            <h2 className=" text-white text-4xl text-center py-5">
              Articles DropDown menu
            </h2>
            <img
              src="/assets/AI pics/Dropdown.png"
              className=" py-10 px-60"
              alt=""
            />
          </section>

          <section className=" bg-primary py-10">
            <h2 className=" text-white text-4xl text-center py-5">
              Machine learning page
            </h2>
            <img
              src="/assets/AI pics/Machinlearning.png"
              className=" py-10 px-60"
              alt=""
            />
          </section>

          <section className=" py-10">
            <h2 className=" text-white text-4xl text-center py-5">
              Deep learning Page
            </h2>
            <img
              src="/assets/AI pics/deeplearning.png"
              className=" py-10 px-60"
              alt=""
            />
          </section>

          <section className=" bg-primary py-10">
            <h2 className=" text-white text-4xl text-center py-5">
              Computer vision page
            </h2>
            <img
              src="/assets/AI pics/ComputerVision.png"
              className=" py-10 px-60"
              alt=""
            />
          </section>

          <section className=" py-10">
            <h2 className=" text-white text-4xl text-center py-5">NLP Page</h2>
            <img
              src="/assets/AI pics/NLP.png"
              className=" py-10 px-60"
              alt=""
            />
          </section>
        </div>
      </div>
    );
  }
}

export default AIarticle;
