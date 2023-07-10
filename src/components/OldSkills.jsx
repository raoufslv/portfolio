import React from "react";

export default function OldSkills() {
  return (
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
            Frontend (HTML, CSS, Bootstrap, Tailwind, <br /> JavaScript, JQuery,
            Ajax, React)
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
  );
}
