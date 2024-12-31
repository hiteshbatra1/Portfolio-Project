import React from "react";
const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full ">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 ">
            About
          </p>
        </div>
        <p className="text-xl mt-20 ">
          I am a motivated and enthusiastic front end web developer with a solid
          foundation in ReactJs, JavaScript, HTML, CSS, Tailwind CSS, Redux
          Toolkit and NodeJs. Despite being new to the professional landscape, I
          bring fresh perspectives and a willingness to learn and adapt quickly.
          My proficiency in these technologies enables me to hit the ground
          running and contribute effectively to various projects.
        </p>
        <br />
        <p className="text-xl">
          I have a passion for creating user-friendly and visually appealing web
          applications and am keen on keeping up with the latest industry trends
          and best practice to ensure my work remains modern and efficient.
          Additionally, I enjoy collaborating with cross-functional teams to
          achieve common goals. I am eager to leverage my skills, grow, add
          value, and drive success.
        </p>
      </div>
    </div>
  );
};

export default About;
