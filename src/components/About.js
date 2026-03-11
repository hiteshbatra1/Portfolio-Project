import React from "react";

const About = () => {
  return (
    <div
      id="about"
      className="w-full bg-gradient-to-b from-gray-800 to-black text-white scroll-mt-20"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col justify-center w-full px-4 py-16 sm:py-28 ">
        <div className="pb-16 mt-20 sm:mt-0 md:mt-20 ">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 p-2 ">
            About
          </p>
        </div>

        <p className="text-xl leading-relaxed">
          I am a Full-Stack Developer driven by the challenge of building
          scalable, end-to-end web applications. With a strong foundation in the
          modern JavaScript and TypeScript ecosystems, I specialize in bridging
          the gap between seamless user interfaces and robust backend
          architectures. My experience centers on developing dynamic,
          high-performance applications using Next.js and Remix, alongside
          designing efficient RESTful APIs with Node.js and Express.
        </p>

        <br />

        <p className="text-xl leading-relaxed">
          Beyond just writing code, I focus on engineering secure and
          maintainable solutions. I have hands-on experience implementing robust
          authentication flows, architecting data models using both SQL and
          MongoDB, and managing complex application state with Redux and
          Zustand. Whether I am methodically debugging code to optimize
          performance or containerizing environments with Docker for streamlined
          deployments, I take a comprehensive approach to software development.
        </p>

        <br />

        <p className="text-xl leading-relaxed">
          I am passionate about writing clean, reliable code and thrive in
          collaborative environments using modern version control workflows. I
          am eager to leverage my full-stack expertise and problem-solving
          skills to help forward-thinking teams build applications that deliver
          exceptional user experiences and drive business success.
        </p>
      </div>
    </div>
  );
};

export default About;
