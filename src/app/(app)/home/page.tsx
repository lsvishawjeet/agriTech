import Main from "@/components/Main";
import Navbar from "@/components/Navbar";
import React from "react";

function page() {
  return (
    <div className="h-[100vh] w-[100vw]">
      <div className="h-[100%] w-[100vw] p-2 md:flex">
        <div className="md:w-1/2 h-[100%]">
          <div className="md:pr-2 md:mt-5">
            <Navbar />
          </div>
          <div className="flex justify-center align-middle items-center h-[90%] bg-white">
            <Main />
          </div>
        </div>
        <div className="md:w-1/2 bg-white h-[100%] p-2">
            <div className=" bg-fields bg-center bg-cover h-[100%] rounded-2xl">

            </div>
        </div>
      </div>
    </div>
  );
}

export default page;
