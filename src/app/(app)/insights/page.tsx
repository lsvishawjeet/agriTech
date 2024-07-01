import Main from "@/components/Main";
import Navbar from "@/components/Navbar";
import React from "react";

function page() {
  return (
    <div className="h-[100vh] w-[100vw] bg-weblogo1">
      <div className="h-[100%] w-[100vw] md:p-5 md:flex glass">
        <div className="h-[100%] w-[100%] bg-white md:rounded-2xl overflow-scroll  no-scrollbar">
          <div className="md:pr-2 md:mt-5 sticky top-0">
            <Navbar />
            <div className="flex flex-wrap justify-center align-middle items-center h-auto bg-white">
              <p className="text-xl p-3">
                Explore all the useful insights generated from{" "}
                <a
                  href="https://www.kaggle.com/datasets/aksahaha/crop-recommendation/"
                  target="_blank"
                  className="  md:hover:bg-transparent md:border-0 text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500  dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  crop recommendation
                </a>{" "}
                dataset:
                <span className="text-sm pl-2 font-light">
                  please wait this usually take {"<"} min
                </span>
              </p>
            </div>
          </div>
          <div className="flex flex-wrap justify-center space-y-5 p-3">
            <img
              className="rounded-xl bg-blend-multiply"
              src={`https://agritechbackendflask.onrender.com/insights/cropdistributiongraph`}
              alt={``}
            />
            <img
              className="rounded-xl bg-blend-multiply"
              src={`https://agritechbackendflask.onrender.com/insights/Apple`}
              alt={``}
            />
            <img
              className="rounded-xl bg-blend-multiply"
              src={`https://agritechbackendflask.onrender.com/insights/Banana`}
              alt={``}
            />
            <img
              className="rounded-xl bg-blend-multiply"
              src={`https://agritechbackendflask.onrender.com/insights/Blackgram`}
              alt={``}
            />
            <img
              className="rounded-xl bg-blend-multiply"
              src={`https://agritechbackendflask.onrender.com/insights/ChickPea`}
              alt={``}
            />
            <img
              className="rounded-xl bg-blend-multiply"
              src={`https://agritechbackendflask.onrender.com/insights/Coconut`}
              alt={``}
            />
            <img
              className="rounded-xl bg-blend-multiply"
              src={`https://agritechbackendflask.onrender.com/insights/Coffee`}
              alt={``}
            />
            <img
              className="rounded-xl bg-blend-multiply"
              src={`https://agritechbackendflask.onrender.com/insights/Cotton`}
              alt={``}
            />
            <img
              className="rounded-xl bg-blend-multiply"
              src={`https://agritechbackendflask.onrender.com/insights/Grapes`}
              alt={``}
            />
            <img
              className="rounded-xl bg-blend-multiply"
              src={`https://agritechbackendflask.onrender.com/insights/Jute`}
              alt={``}
            />
            <img
              className="rounded-xl bg-blend-multiply"
              src={`https://agritechbackendflask.onrender.com/insights/KidneyBeans`}
              alt={``}
            />
            <img
              className="rounded-xl bg-blend-multiply"
              src={`https://agritechbackendflask.onrender.com/insights/Lentil`}
              alt={``}
            />
            <img
              className="rounded-xl bg-blend-multiply"
              src={`https://agritechbackendflask.onrender.com/insights/Maize`}
              alt={``}
            />
            <img
              className="rounded-xl bg-blend-multiply"
              src={`https://agritechbackendflask.onrender.com/insights/Mango`}
              alt={``}
            />
            <img
              className="rounded-xl bg-blend-multiply"
              src={`https://agritechbackendflask.onrender.com/insights/MothBeans`}
              alt={``}
            />
            <img
              className="rounded-xl bg-blend-multiply"
              src={`https://agritechbackendflask.onrender.com/insights/MungBeans`}
              alt={``}
            />
            <img
              className="rounded-xl bg-blend-multiply"
              src={`https://agritechbackendflask.onrender.com/insights/Muskmelon`}
              alt={``}
            />
            <img
              className="rounded-xl bg-blend-multiply"
              src={`https://agritechbackendflask.onrender.com/insights/Orange`}
              alt={``}
            />
            <img
              className="rounded-xl bg-blend-multiply"
              src={`https://agritechbackendflask.onrender.com/insights/Papaya`}
              alt={``}
            />
            <img
              className="rounded-xl bg-blend-multiply"
              src={`https://agritechbackendflask.onrender.com/insights/PigeonPeas`}
              alt={``}
            />
            <img
              className="rounded-xl bg-blend-multiply"
              src={`https://agritechbackendflask.onrender.com/insights/Pomegranate`}
              alt={``}
            />
            <img
              className="rounded-xl bg-blend-multiply"
              src={`https://agritechbackendflask.onrender.com/insights/Rice`}
              alt={``}
            />
            <img
              className="rounded-xl bg-blend-multiply"
              src={`https://agritechbackendflask.onrender.com/insights/Watermelon`}
              alt={``}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
