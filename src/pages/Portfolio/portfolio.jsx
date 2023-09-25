import React from "react";
import { motion } from "framer-motion";
import { zoomIn, staggerChildren, fadeIn } from "../../utils/motion";

const portfolio = () => {
  return (
    <div>
      <a className="anchor scroll-smooth" id="portfolio"></a>
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={staggerChildren}
        viewport={{ once: false, amount: 0.25 }}
        className="pt-[6rem]"
      >
        <motion.h1
          variants={zoomIn(0.2, 1.5)}
          className="text-white text-[1.6rem] lg:text-[2rem] font-[600] text-center"
        >
          My Latest <span className="text-red-600"> Works</span>
        </motion.h1>
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={staggerChildren}
          viewport={{ once: false, amount: 0.25 }}
        >
          <ul className="cards px-[2rem] py-[8vw] md:px-[8rem] md:py-[8rem]">
            <motion.li variants={fadeIn("up", "tween", 0.2, 1.5)}>
              <a
                href="https://yes-app.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="card"
              >
                <img src="yesapp.jpeg" className="card__image" alt="" />
                <div className="card__overlay">
                  <div className="card__header">
                    <svg
                      className="card__arc"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path />
                    </svg>

                    <div className="card__header-text">
                      <h3 className="card__title text-red-600">Yes App </h3>
                      <span className="card__status text-red-400">
                        JSX, React JS and Tailwind CSS
                      </span>
                    </div>
                  </div>
                  <p className="card__description">
                    This is a fully functional and responsive sign up and sign
                    in page . It was built with react js, firebase and styled
                    with Tailwind css.
                  </p>
                  <span className="flex justify-center text-[1.6rem] pb-[1rem]">
                    <a
                      href="https://yes-app.vercel.app/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i class="bx bx-link-external"></i>
                    </a>
                  </span>
                </div>
              </a>
            </motion.li>
            <motion.li variants={fadeIn("up", "tween", 0.4, 1.5)}>
              <a
                href="https://help-center-site.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="card"
              >
                <img src="help.jpeg" className="card__image" alt="" />
                <div className="card__overlay">
                  <div className="card__header">
                    <svg
                      className="card__arc"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path />
                    </svg>

                    <div className="card__header-text">
                      <h3 className="card__title text-red-600">
                        Help Center Page
                      </h3>
                      <span className="card__status text-red-400">
                        JSX, CSS, React
                      </span>
                    </div>
                  </div>
                  <p className="card__description">
                    A beautiful functional responsive and user-friendly help
                    center page built with jsx, css and react app.
                  </p>
                  <span className="flex justify-center text-[1.6rem] pb-[1rem]">
                    <a
                      href="https://help-center-site.vercel.app/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i class="bx bx-link-external"></i>
                    </a>
                  </span>
                </div>
              </a>
            </motion.li>
            {/* <li>
              <a
                href="https://sign-up-two.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="card"
              >
                <img src="sigup.jpeg" className="card__image" alt="" />
                <div className="card__overlay">
                  <div className="card__header">
                    <svg
                      className="card__arc"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path />
                    </svg>

                    <div className="card__header-text">
                      <h3 className="card__title">Sign Up Page</h3>
                      <span className="card__status">
                        JSX, React JS and Tailwind CSS
                      </span>
                    </div>
                  </div>
                  <p className="card__description">
                    This is a fully functional and responsive sign up page. It
                    was built with react js and styled with Tailwind css.
                  </p>
                  <span className="flex justify-center text-[1.6rem] pb-[1rem]">
                    <a
                      href="https://signup-page-two.vercel.app/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i class="bx bx-link-external"></i>
                    </a>
                  </span>
                </div>
              </a>
            </li> */}
            <motion.li variants={fadeIn("up", "tween", 0.6, 1.5)}>
              <a
                href="https://practices-store.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="card"
              >
                <img src="store.jpeg" className="card__image" alt="store" />
                <div className="card__overlay">
                  <div className="card__header">
                    <svg
                      className="card__arc"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path />
                    </svg>

                    <div className="card__header-text">
                      <h3 className="card__title text-red-600">Online Store</h3>
                      <span className="card__status text-red-400">
                        JSX, Tailwind CSS, React JS, FreeStoreAPI
                      </span>
                    </div>
                  </div>
                  <p className="card__description">
                    A simple weather app built with Jsx, Tailwind CSS, React JS
                    and FreeStoreAPI
                  </p>
                  <span className="flex justify-center text-[1.6rem] pb-[1rem]">
                    <a
                      href="https://practices-store.vercel.app/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i class="bx bx-link-external"></i>
                    </a>
                  </span>
                </div>
              </a>
            </motion.li>

            <motion.li variants={fadeIn("up", "tween", 0.8, 1.5)}>
              <a
                href="https://fops-weather-app.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="card"
              >
                <img src="weather.png" className="card__image" alt="" />
                <div className="card__overlay">
                  <div className="card__header">
                    <svg
                      className="card__arc"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path />
                    </svg>

                    <div className="card__header-text">
                      <h3 className="card__title text-red-600">Weather App</h3>
                      <span className="card__status text-red-400">
                        Jsx, Tailwind CSS and React JS{" "}
                      </span>
                    </div>
                  </div>
                  <p className="card__description">
                    A simple weather app built with Jsx, Tailwind CSS, React JS
                    and OpenWeatherApp API
                  </p>
                  <span className="flex justify-center text-[1.6rem] pb-[1rem]">
                    <a
                      href="https://fops-weather-app.vercel.app/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i class="bx bx-link-external"></i>
                    </a>
                  </span>
                </div>
              </a>
            </motion.li>
            <motion.li variants={fadeIn("up", "tween", 1.0, 1.5)}>
              <a
                href="https://fops-to-do.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="card"
              >
                <img src="todo.png" className="card__image" alt="" />
                <div className="card__overlay">
                  <div className="card__header">
                    <svg
                      className="card__arc"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path />
                    </svg>

                    <div className="card__header-text">
                      <h3 className="card__title text-red-600">To-Do App</h3>
                      <span className="card__status text-red-400">
                        React js, Tailwind css and Jsx
                      </span>
                    </div>
                  </div>
                  <p className="card__description">
                    This project was built using React js, Tailwind css and Jsx.
                    This is a To- do app to help with day-to-day activities and
                    organizations.
                  </p>
                  <span className="flex justify-center text-[1.6rem] pb-[1rem]">
                    <a
                      href="https://fops-to-do.vercel.app/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i class="bx bx-link-external"></i>
                    </a>
                  </span>
                </div>
              </a>
            </motion.li>

            <motion.li variants={fadeIn("up", "tween", 1.2, 1.5)}>
              <a
                href="https://wordscour.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="card"
              >
                <img src="wordscour.jpeg" className="card__image" alt="" />
                <div className="card__overlay">
                  <div className="card__header">
                    <svg
                      className="card__arc"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path />
                    </svg>

                    <div className="card__header-text">
                      <h3 className="card__title text-red-600">Word Scour</h3>
                      <span className="card__status text-red-400">
                        React js, Tailwind css and Jsx
                      </span>
                    </div>
                  </div>
                  <p className="card__description">
                    This project was built using React js, Tailwind css, Jsx and
                    free dictionary api.
                  </p>
                  <span className="flex justify-center text-[1.6rem] pb-[1rem]">
                    <a
                      href="https://wordscour.vercel.app/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i class="bx bx-link-external"></i>
                    </a>
                  </span>
                </div>
              </a>
            </motion.li>
          </ul>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default portfolio;
