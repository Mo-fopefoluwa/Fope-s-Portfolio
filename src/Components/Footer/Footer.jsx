import React from "react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <div>
      <footer className="bg-black text-white flex justify-between px-[3rem] lg:px-[5rem] py-[2rem] lg:py-[3rem]">
        <p className="w-[60%] lg:w-full text-[1.2rem] lg:text-[1.6rem] font-[600]">
          Let's talk about your project or just say{" "}
          <a
            className="mails text-red-600 text-[2.1rem] lg:text-[2.8rem]"
            href="mailto:fopefaokunla@gmail.com"
          >
            hi!
          </a>
        </p>

        <ul className="flex gap-4 text-red-600 text-[1.6rem] lg:text-[2.4rem] lg:gap-8">
          <li>
            <a href="htpps://www.linked-in.com/in/mofopefoluwa-faokunla">
              <i class="bx bxl-linkedin"></i>
            </a>
          </li>
          <li>
            <a href="https://www.github.com/mo-fopefoluwa">
              <i class="bx bxl-github"></i>
            </a>
          </li>
          <li>
            <button className="" onClick={() => scrollToTop()}>
              <i class="bx bx-caret-up-circle"></i>
            </button>
          </li>
          {/* <li>
              <a href=""></a>
            </li> */}
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
