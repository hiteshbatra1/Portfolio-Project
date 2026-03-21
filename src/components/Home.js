import React from "react";
import HeroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Home = () => {
  return (
    <div
      id="home"
      className="min-h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 scroll-mt-20 overflow-hidden"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center px-4 py-28 sm:py-20 sm:h-full sm:flex-row">
        <div className="flex flex-col justify-center items-center mb-8 sm:items-start h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white sm:mt-28 tracking-tight">
            Full-Stack Software Engineer
          </h2>

          <p className="text-gray-400 py-5 max-w-xl text-center sm:text-left text-lg leading-relaxed">
            I am currently a Software Engineer at Supervity.ai, specializing in
            the design and development of scalable, end-to-end web applications.
            My work focuses on bridging intuitive, high-performance user
            interfaces—built with React, Next.js, and TypeScript—with robust
            backend systems powered by Node.js and Python. I have experience in
            designing efficient RESTful APIs, structuring complex data models,
            and optimizing deployment workflows using Docker. I am committed to
            delivering clean, maintainable, and high-impact engineering
            solutions.
          </p>

          <div>
            <a href="#portfolio" className="group">
              <button className="text-white w-fit px-6 py-3 flex items-center rounded-md bg-gradient-to-r from-blue-500 to-pink-500">
                Portfolio
                <span className="group-hover:rotate-90 duration-300">
                  <MdOutlineKeyboardArrowRight size={25} />
                </span>
              </button>
            </a>
          </div>
        </div>
        <div className="w-2/3 md:w-[30rem] mx-auto">
          <img
            src={HeroImage}
            alt="My Profile"
            className="rounded-2xl w-full sm:mt-24 max-h-[32rem] object-contain"
          />
        </div>
      </div>
    </div>
  );
};
export default Home;
