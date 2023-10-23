import React from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerChildren, zoomIn } from "../utils/motion";

const Projects = () => {
  return (
    <div>
      <a className="anchor" id="projects"></a>

      <motion.div
        initial="hidden"
        whileInView="show"
        variants={staggerChildren}
        viewport={{ once: false, amount: 0.25 }}
        className=" py-[6rem] px-[4rem] md:px-[6rem] lg:px-[8rem]"
      >
        <motion.h2
          variants={zoomIn(0.2, 1.5)}
          className="pb-[4rem] font-bold text-[2rem] md:text-[3.5rem] lg:text-[5rem] text-[#474747]"
        >
          Projects
        </motion.h2>

        <div className="grid gap-[4rem] sm:grid-cols-2 lg:grid-cols-4">
          <motion.div variants={fadeIn("up", "tween", 0.4, 1.5)}>
            <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
              <img
                className="object-cover w-full h-56 md:h-64 xl:h-80"
                src="supermarket.png"
                alt=""
              />
              <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                <p className="mb-1 text-lg font-bold text-red-600">
                  GMarket website
                </p>
                <p className="mb-4 text-xs text-gray-100">
                  {" "}
                  Firebase, Firestore, React JS and Tailwind CSS
                </p>
                <p className="mb-4 text-xs tracking-wide text-gray-400">
                  A grocery store/ supermarket website with admin page for
                  adding new items. It was built with react js, firebase and
                  styled with Tailwind css.
                </p>
                <div className="flex items-center justify-center space-x-3">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://supermarket-template.vercel.app/"
                    className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                  >
                    <i class="bx bx-link-external"></i>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeIn("up", "tween", 0.6, 1.5)}>
            <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
              <img
                className="object-cover w-full h-56 md:h-64 xl:h-80"
                src="restaurant.jpeg"
                alt=""
              />
              <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                <p className="mb-1 text-lg font-bold text-red-600">
                  Restaurant website
                </p>
                <p className="mb-4 text-xs text-gray-100">
                  {" "}
                  Tailwind CSS, React JS.
                </p>
                <p className="mb-4 text-xs tracking-wide text-gray-400">
                  A simple restaurant website built with Jsx, Tailwind CSS,
                  React JS
                </p>
                <div className="text-white flex items-center justify-center space-x-3">
                  <a
                    href="https://restaurantwebsite-template-one.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i class="bx bx-link-external"></i>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div variants={fadeIn("up", "tween", 0.8, 1.5)}>
            <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
              <img
                className="object-cover w-full h-56 md:h-64 xl:h-80"
                src="help.jpeg"
                alt=""
              />
              <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                <p className="mb-1 text-lg font-bold text-red-600">
                  Help Center Page
                </p>
                <p className="mb-4 text-xs text-gray-100">
                  Jsx, CSS and React.js
                </p>
                <p className="mb-4 text-xs tracking-wide text-gray-400">
                  A beautiful functional responsive and user-friendly help
                  center page built with jsx, css and react app.
                </p>
                <div className="text-white flex items-center justify-center space-x-3">
                  <a
                    href="https://help-center-site.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i class="bx bx-link-external"></i>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
          {/* <motion.div variants={fadeIn("up", "tween", 1.0, 1.5)}>
            <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
              <img
                className="object-cover w-full h-56 md:h-64 xl:h-80"
                src="weather.png"
                alt=""
              />
              <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                <p className="mb-1 text-lg font-bold text-red-600">
                  Weather app
                </p>
                <p className="mb-4 text-xs text-gray-100">
                  {" "}
                  Jsx, Tailwind CSS and React JS{" "}
                </p>
                <p className="mb-4 text-xs tracking-wide text-gray-400">
                  A simple weather app built with Jsx, Tailwind CSS, React JS
                  and OpenWeatherApp API
                </p>
                <div className="text-white flex items-center justify-center space-x-3">
                  <a
                    href="https://fops-weather-app.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i class="bx bx-link-external"></i>
                  </a>
                </div>
              </div>
            </div>
          </motion.div> */}
          {/* <motion.div variants={fadeIn("up", "tween", 1.2, 1.5)}>
            <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
              <img
                className="object-cover w-full h-56 md:h-64 xl:h-80"
                src="wordscour.jpeg"
                alt=""
              />
              <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                <p className="mb-1 text-lg font-bold text-red-600">
                  Dictionary app
                </p>
                <p className="mb-4 text-xs text-gray-100">
                  {" "}
                  React js, Tailwind css and Jsx
                </p>
                <p className="mb-4 text-xs tracking-wide text-gray-400">
                  This project was built using React js, Tailwind css, Jsx and
                  free dictionary api.
                </p>
                <div className="text-white flex items-center justify-center space-x-3">
                  <a
                    href="https://wordscour.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i class="bx bx-link-external"></i>
                  </a>
                </div>
              </div>
            </div>
          </motion.div> */}
          {/* <motion.div variants={fadeIn("up", "tween", 1.4, 1.5)}>
            <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
              <img
                className="object-cover w-full h-56 md:h-64 xl:h-80"
                src="todo.png"
                alt=""
              />
              <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                <p className="mb-1 text-lg font-bold text-red-600">Todo app</p>
                <p className="mb-4 text-xs text-gray-100">
                  {" "}
                  React js, Tailwind css and Jsx
                </p>
                <p className="mb-4 text-xs tracking-wide text-gray-400">
                  This project was built using React js, Tailwind css and Jsx.
                  This is a To- do app to help with day-to-day activities and
                  organizations.
                </p>
                <div className="text-white flex items-center justify-center space-x-3">
                  <a
                    href="https://fops-to-do.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i class="bx bx-link-external"></i>
                  </a>
                </div>
              </div>
            </div>
          </motion.div> */}
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;
