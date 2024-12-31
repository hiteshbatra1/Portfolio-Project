import React from "react";
import flavourflyApp from "../assets/portfolio/flavourflyapp.png";
import recipeApp from "../assets/portfolio/recipeapp.png";
import todoApp from "../assets/portfolio/todoapp.png";
import tictactoeApp from "../assets/portfolio/tictactoeapp.png";
import currencyConverterApp from "../assets/portfolio/currencyconverterapp.png";
import calculatorApp from "../assets/portfolio/calculatorapp.png";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      src: flavourflyApp,
      code: "https://github.com/hiteshbatra1/Flavour-fly",
      live: "https://hitesh-flavourfly.netlify.app/",
      title: "Flavour Fly",
    },
    {
      id: 2,
      src: recipeApp,
      code: "https://github.com/hiteshbatra1/Recipe-App",
      live: "https://hitesh-recipeapp.netlify.app/",
      title: "Recipe App",
    },
    {
      id: 3,
      src: todoApp,
      code: "https://github.com/hiteshbatra1/To-Do-List-Project",
      live: "https://hitesh-todo-list.netlify.app/",
      title: "To-Do List",
    },
    {
      id: 4,
      src: tictactoeApp,
      code: "https://github.com/hiteshbatra1/Tic-Tac-Toe",
      live: "https://hitesh-tic-tac-toe.netlify.app/",
      title: "Tic-Tac-Toe",
    },
    {
      id: 5,
      src: currencyConverterApp,
      code: "https://github.com/hiteshbatra1/Currency-Converter",
      live: "https://hitesh-currency-converter.netlify.app/",
      title: "Currency Converter",
    },
    {
      id: 6,
      src: calculatorApp,
      code: "https://github.com/hiteshbatra1/Calculator",
      live: "https://hitesh-calculator.netlify.app/",
      title: "Calculator",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg flex flex-col justify-center p-4 mx-auto w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my projects</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {projects.map(({ id, src, code, live, title }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex justify-center items-center ">
                <a href={live} target="_blank" rel="noreferrer">
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Live
                  </button>
                </a>
                <a href={code} target="_blank" rel="noreferrer">
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Code
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
