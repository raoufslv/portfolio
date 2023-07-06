import React, { Component } from "react";
import DropdownBtn from "../components/DropdownBtn";

class Tomobiltek extends Component {
  render() {
    return (
      <div className=" bg-secondary ">
        <nav className=" p-7 flex justify-between">
          <button className="" onClick={() => (window.location.href = "/")}>
            <img src="src/assets/Logowhite.png" alt="" />
          </button>
          <DropdownBtn />
        </nav>

        <div className="bg-purple-600 flex  justify-center items-center gap-10 m-auto w-fit px-16 py-20 rounded-xl">
          <img src="src/assets/logoTomobiltek.svg" className=" w-20" alt="" />
          <h2 className="text-4xl font-semibold text-white">Tomobiltek</h2>
        </div>

        <section className=" pb-16">
          <h2 className=" text-white text-4xl ml-16 mt-10">Tomobiltek</h2>
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
            <p className=" text-white text-xl flex items-center justify-center w-1/2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              quae voluptas, quod, quibusdam, voluptates quidem voluptatibus
              quos voluptatum quia quas quae. Quisquam, quae. Quisquam quae
              voluptas, quod, quibusdam, voluptates quidem voluptatibus quos
              voluptatum quia quas quae. Quisquam, quae. Quisquam quae voluptas,
              quod, quibusdam,
            </p>
          </div>
        </section>

        <div>
          <section className=" bg-primary py-10">
            <h2 className=" text-white text-4xl text-center py-5">Home Page</h2>
            <img
              src="src/assets/Tomobiltek pics/Home.png"
              className=" py-10 px-60"
              alt=""
            />
          </section>

          <section className=" py-10">
            <h2 className=" text-white text-4xl text-center py-5">
              Log in Page
            </h2>
            <img
              src="src/assets/Tomobiltek pics/LogIn.png"
              className=" py-10 px-60"
              alt=""
            />
          </section>

          <section className=" bg-primary py-10">
            <h2 className=" text-white text-4xl text-center py-5">
              Sign in Page
            </h2>
            <img
              src="src/assets/Tomobiltek pics/Signup.png"
              className=" py-10 px-60"
              alt=""
            />
          </section>

          <section className=" py-10">
            <h2 className=" text-white text-4xl text-center py-5">
              Articles page
            </h2>
            <img
              src="src/assets/Tomobiltek pics/Annonces.png"
              className=" py-10 px-60"
              alt=""
            />
          </section>

          <section className=" bg-primary py-10">
            <h2 className=" text-white text-4xl text-center py-5">
              Article page
            </h2>
            <img
              src="src/assets/Tomobiltek pics/Annonce.png"
              className=" py-10 px-60"
              alt=""
            />
          </section>

          <section className=" py-10">
            <h2 className=" text-white text-4xl text-center py-5">
              Post Article Page
            </h2>
            <img
              src="src/assets/Tomobiltek pics/Creer Annonce.png"
              className=" py-10 px-60"
              alt=""
            />
          </section>

          <section className=" bg-primary py-10">
            <h2 className=" text-white text-4xl text-center py-5">
              Information page
            </h2>
            <img
              src="src/assets/Tomobiltek pics/Mes info.png"
              className=" py-10 px-60"
              alt=""
            />
          </section>
        </div>
      </div>
    );
  }
}

export default Tomobiltek;
