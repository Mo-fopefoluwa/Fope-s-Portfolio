import React, { useState } from "react";
import "./Header.css";
import useHeaderShadow from "../../hooks/useHeaderShadow";
import { useOnOutsideClick } from "../../hooks/useOnClickOutside";
import useHeaderColor from "../../hooks/useHeaderColor";

const Header = () => {
  const [open, setOpen] = useState(false);
  const headerShadow = useHeaderShadow();
  const headerColor = useHeaderColor();
  const { innerBorderRef } = useOnOutsideClick(() => setOpen(false));

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  const scrollToAbout = () => {
    document.getElementById("about").scrollIntoView({ behavior: "smooth" });
  };
  const scrollToProjects = () => {
    document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <header
        className="flex justify-between px-[4rem] py-[2rem] fixed w-full text-[#e5e5e5] z-50"
        style={{ boxShadow: headerShadow, backgroundColor: headerColor }}
      >
        <div className="logo text-[2rem] font-[650] ">Mo</div>
        <ul className="md:flex gap-10 hidden text-[1.2rem] font-[650] ">
          <li onClick={scrollToTop}>
            <a className="hover:text-[#ff0266] cursor-pointer ">Home</a>
          </li>
          <li onClick={scrollToAbout}>
            <a className="hover:text-[#ff0266]  cursor-pointer">About</a>
          </li>
          <li onClick={scrollToProjects}>
            <a className="hover:text-[#ff0266]  cursor-pointer">Portfolio</a>
          </li>
        </ul>
        <div className="menu block md:hidden " ref={innerBorderRef}>
          <button
            className="text-[2.5rem] hover:text-[#ff0266]  text-[#e5e5e5]"
            onClick={() => setOpen(!open)}
          >
            {open ? <i class="bx bx-x"></i> : <i class="bx bx-menu"></i>}
          </button>
          {open && <Resp />}
        </div>
      </header>
    </div>
  );
};

const Resp = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  const scrollToAbout = () => {
    document.getElementById("about").scrollIntoView({ behavior: "smooth" });
  };
  const scrollToProjects = () => {
    document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <ul className="flex flex-col absolute text-[1.2rem] z-30 font-[500] text-center gap-[4rem] py-16 bg-black right-0 top-[7rem] w-[100%]">
      <li
        onClick={scrollToTop}
        className="hover:text-[#ff0266]  cursor-pointer text-[#e5e5e5] text-[1.1rem] font-[550] scroll-smooth"
      >
        <a>Home</a>
      </li>
      <li
        onClick={scrollToAbout}
        className="hover:text-[#ff0266]  cursor-pointer text-[#e5e5e5] text-[1.1rem] font-[550] scroll-smooth"
      >
        <a>About</a>
      </li>
      <li
        onClick={scrollToProjects}
        className="hover:text-[#ff0266]  cursor-pointer text-[#e5e5e5] text-[1,1rem] font-[550] scroll-smooth"
      >
        <a>Portfolio</a>
      </li>
    </ul>
  );
};

export default Header;
