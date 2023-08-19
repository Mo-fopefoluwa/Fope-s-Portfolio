import React from "react";

const portfolio = () => {
  return (
    <div>
      <a className="anchor scroll-smooth" id="portfolio"></a>
      <div className="pt-[6rem]">
        <h1 className="text-blue-800 text-[1.6rem] lg:text-[2rem] font-[600] text-center">
          My Latest Works
        </h1>
        <div>
          <ul className="cards px-[4rem] py-[8vw] lg:px-[8rem] lg:py-[8vw]">
            <li>
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
                      <h3 className="card__title">Online Store</h3>
                      <span className="card__status">
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
            </li>
            <li>
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
                      <h3 className="card__title">Help Center Page</h3>
                      <span className="card__status">JSX, CSS, React</span>
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
            </li>
            <li>
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
            </li>

            <li>
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
                      <h3 className="card__title">Weather App</h3>
                      <span className="card__status">
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
            </li>
            <li>
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
                      <h3 className="card__title">To-Do App</h3>
                      <span className="card__status">
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
            </li>
            {/* <li>
              <a href="" className="card">
                <img
                  src="https://i.imgur.com/2DhmtJ4.jpg"
                  className="card__image"
                  alt=""
                />
                <div className="card__overlay">
                  <div className="card__header">
                    <svg
                      className="card__arc"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path />
                    </svg>

                    <div className="card__header-text">
                      <h3 className="card__title">kim Cattrall</h3>
                      <span className="card__status">3 hours ago</span>
                    </div>
                  </div>
                  <p className="card__description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Asperiores, blanditiis?
                  </p>
                </div>
              </a>
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default portfolio;
