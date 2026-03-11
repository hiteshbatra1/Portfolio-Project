import React from "react";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JAVASCRIPT from "../assets/javascript.png";
import REACTIMAGE from "../assets/react.png";
import NODEIMAGE from "../assets/node.png";
import REDUXIMAGE from "../assets/redux.png";
import TAILWIND from "../assets/tailwind.png";
import GITHUB from "../assets/github.png";
import VSCODE from "../assets/vscode.png";
import NEXTJS from "../assets/nextjs.png";
import REMIXJS from "../assets/remixjs.png";
import DOCKER from "../assets/docker.png";
import MONGODB from "../assets/mongodb.png";
import PYTHON from "../assets/python.png";
import TYPESCRIPT from "../assets/typescript.png";
import POSTGRESQL from "../assets/postgresql.png";

const Skills = () => {
  const techs = [
    {
      id: 1,
      src: HTML,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: CSS,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: JAVASCRIPT,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: TYPESCRIPT,
      title: "TypeScript",
      style: "shadow-yellow-500",
    },
    {
      id: 5,
      src: NODEIMAGE,
      title: "NodeJs",
      style: "shadow-lime-500",
    },
    {
      id: 6,
      src: PYTHON,
      title: "Python",
      style: "shadow-yellow-500",
    },
    {
      id: 7,
      src: REACTIMAGE,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 8,
      src: NEXTJS,
      title: "Next.js",
      style: "shadow-sky-400",
    },
    {
      id: 9,
      src: REMIXJS,
      title: "Remix.js",
      style: "shadow-sky-400",
    },
    {
      id: 10,
      src: MONGODB,
      title: "MongoDB",
      style: "shadow-sky-400",
    },
    {
      id: 11,
      src: POSTGRESQL,
      title: "PostgreSQL",
      style: "shadow-yellow-500",
    },
    {
      id: 12,
      src: DOCKER,
      title: "Docker",
      style: "shadow-sky-400",
    },
    {
      id: 13,
      src: TAILWIND,
      title: "Tailwind",
      style: "shadow-sky-400",
    },

    {
      id: 14,
      src: REDUXIMAGE,
      title: "Redux",
      style: "shadow-purple-600",
    },
    {
      id: 15,
      src: VSCODE,
      title: "VS Code",
      style: "shadow-gray-400",
    },
    {
      id: 16,
      src: GITHUB,
      title: "GitHub",
      style: "shadow-gray-400",
    },
  ];

  return (
    <div
      id="skills"
      className="bg-gradient-to-b from-gray-800 to-black w-full scroll-mt-20 "
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full px-4 pt-28 pb-10 sm:py-28 text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline ">
            Skills
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
