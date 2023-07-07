import React from "react";
import DropdownBtn from "../components/DropdownBtn";

const EkriEchri = () => {
  return (
    <div className=" bg-secondary ">
      <nav className=" p-7 flex justify-between">
        <button className="" onClick={() => (window.location.href = "/")}>
          <img src="public/assets/Logowhite.png" alt="" />
        </button>
        <DropdownBtn />
      </nav>

      <div className="bg-white flex  justify-center items-center gap-10 m-auto w-fit px-16 py-20 rounded-xl">
        <img src="public/assets/LogoIcon.svg" className=" w-14" alt="" />
        <h2 className="text-4xl font-semibold text-blue-900">EKRI & ECHRI</h2>
      </div>

      <section className=" pb-16">
        <h2 className=" text-white text-4xl ml-16 mt-10">EKRI & ECHRI</h2>
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
            quae voluptas, quod, quibusdam, voluptates quidem voluptatibus quos
            voluptatum quia quas quae. Quisquam, quae. Quisquam quae voluptas,
            quod, quibusdam, voluptates quidem voluptatibus quos voluptatum quia
            quas quae. Quisquam, quae. Quisquam quae voluptas, quod, quibusdam,
          </p>
        </div>
      </section>

      <div>
        <section className=" bg-primary py-10">
          <h2 className=" text-white text-4xl text-center py-5">Home Page</h2>
          <img
            src="public/assets/EKRI&ECHRI pics/Home.png"
            className=" py-10 px-60"
            alt=""
          />
        </section>

        <section className=" py-10">
          <h2 className=" text-white text-4xl text-center py-5">Log in Page</h2>
          <img
            src="public/assets/EKRI&ECHRI pics/LogIn.png"
            className=" py-10 px-60"
            alt=""
          />
        </section>

        <section className=" bg-primary py-10">
          <h2 className=" text-white text-4xl text-center py-5">
            Sign in Page
          </h2>
          <img
            src="public/assets/EKRI&ECHRI pics/SignIn.png"
            className=" py-10 px-60"
            alt=""
          />
        </section>

        <section className=" py-10">
          <h2 className=" text-white text-4xl text-center py-5">
            Notification Page
          </h2>
          <img
            src="public/assets/EKRI&ECHRI pics/Notification.png"
            className=" py-10 px-60"
            alt=""
          />
        </section>

        <section className=" bg-primary py-10">
          <h2 className=" text-white text-4xl text-center py-5">
            Messages Page
          </h2>
          <img
            src="public/assets/EKRI&ECHRI pics/Messages.png"
            className=" py-10 px-60"
            alt=""
          />
        </section>

        <section className=" py-10">
          <h2 className=" text-white text-4xl text-center py-5">
            Articles page
          </h2>
          <img
            src="public/assets/EKRI&ECHRI pics/Annonces.png"
            className=" py-10 px-60"
            alt=""
          />
        </section>

        <section className=" bg-primary py-10">
          <h2 className=" text-white text-4xl text-center py-5">
            Article page
          </h2>
          <img
            src="public/assets/EKRI&ECHRI pics/Annonce.png"
            className=" py-10 px-60"
            alt=""
          />
        </section>

        <section className=" py-10">
          <h2 className=" text-white text-4xl text-center py-5">
            Post Article Page
          </h2>
          <img
            src="public/assets/EKRI&ECHRI pics/deposer Annonce.png"
            className=" py-10 px-60"
            alt=""
          />
        </section>

        <section className=" bg-primary py-10">
          <h2 className=" text-white text-4xl text-center py-5">
            Modify Article page
          </h2>
          <img
            src="public/assets/EKRI&ECHRI pics/Modifier Annonce.png"
            className=" py-10 px-60"
            alt=""
          />
        </section>

        <section className=" py-10">
          <h2 className=" text-white text-4xl text-center py-5">Admine Page</h2>
          <img
            src="public/assets/EKRI&ECHRI pics/Admin.png"
            className=" py-10 px-60 blur-sm"
            alt=""
          />
        </section>
      </div>
    </div>
  );
};

export default EkriEchri;
