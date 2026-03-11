import React from "react";

const Contact = () => {
  return (
    <div
      id="contact"
      className="w-full bg-gradient-to-b from-black to-gray-800 p-4 text-white scroll-mt-20 min-h-screen flex flex-col justify-center"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full w-full">
        <div className="pb-8 text-center md:text-left">
          <p className="text-4xl font-bold inline border-b-4 border-cyan-500">
            Contact Me
          </p>
          <p className="py-6 text-gray-400">
            Submit the form below to get in touch with me. I'll get back to you
            as soon as possible.
          </p>
        </div>

        <div className="flex justify-center items-center">
          <form
            action=""
            method="POST"
            className="flex flex-col w-full md:w-1/2 gap-4"
          >
            <div className="flex flex-col gap-1">
              <label htmlFor="name" className="text-sm text-gray-400 ml-1">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                className="p-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all duration-300"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="email" className="text-sm text-gray-400 ml-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                className="p-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all duration-300"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="message" className="text-sm text-gray-400 ml-1">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                required
                placeholder="How can I help you?"
                rows="6"
                className="p-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all duration-300 resize-none"
              ></textarea>
            </div>

            <button className="px-6 py-3 mt-4 text-white font-medium bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg hover:scale-[1.02] hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 w-full sm:w-auto sm:mx-auto">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
