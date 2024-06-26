import Main from "@/components/Main";
import Navbar from "@/components/Navbar";
import React from "react";

function page() {
  return (
    <div className="h-[100vh] w-[100vw] bg-fields">
      <div className="h-[100%] w-[100vw] md:p-5 md:flex glass">
        <div className="md:w-1/2 h-[100%] bg-white md:rounded-l-2xl overflow-scroll  no-scrollbar">
          <div className="md:pr-2 md:mt-5 sticky top-0">
            <Navbar />
          </div>
          <div className="flex justify-center align-middle items-center h-auto bg-white">
            <Main />
          </div>
        </div>
        <div className="md:w-1/2 bg-white h-[100%] p-2 md:rounded-r-2xl">
            <div className=" bg-fields bg-center bg-cover h-[100%] rounded-2xl">

            </div>
        </div>
      </div>
    </div>
  );
}

export default page;
