import React from "react";
import HeroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center  px-4 py-28 sm:py-20 sm:h-full sm:flex-row">
        <div className="flex flex-col justify-center items-center mb-8 sm:items-start h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white sm:mt-28 ">
            I'm a Front End Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            I'm a motivated front-end web developer with a strong foundation in
            ReactJs, JavaScript, CSS, HTML, Tailwind CSS and Redux Toolkit. I
            bring fresh perspectives and a willingness to learn and adapt
            quickly.
          </p>
          <div>
            <button className="group text-white w-fit px-6 py-3  flex items-center rounded-md bg-gradient-to-r from-blue-500  to-pink-500">
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} />
              </span>
            </button>
          </div>
        </div>
        <div className="w-2/3 md:w-[30rem] mx-auto">
          <img
            src={HeroImage}
            alt="My Profile"
            className="rounded-2xl w-full  sm:mt-24"
          />
        </div>
      </div>
    </div>
  );
};
export default Home;
