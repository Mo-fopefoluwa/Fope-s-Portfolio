import React, { useCallback, useEffect, useRef, useState } from "react";
import "./Header.css";
import useHeaderShadow from "../../hooks/useHeaderShadow";
//import useOutsideAlerter from "../../hooks/useOutsideAlerter";

const Header = () => {
  const [open, setOpen] = useState(false);
  const headerShadow = useHeaderShadow();

  return (
    <div>
      <header
        className="flex justify-between px-[4rem] py-[2rem] fixed w-full bg-[#dddd] dark:bg-gray-900 text-black dark:text-white z-50"
        style={{ boxShadow: headerShadow }}
      >
        <div className="logo text-[2rem] font-[650] ">Mo</div>
        <ul className="flex gap-10 md:hidden text-[1.2rem] font-[650] ">
          <li>
            <a className="hover:text-blue-800 scroll-smooth " href="#hero">
              Home
            </a>
          </li>
          <li>
            <a className="hover:text-blue-800 scroll-smooth" href="#about">
              About
            </a>
          </li>
          <li>
            <a className="hover:text-blue-800 scroll-smooth" href="#portfolio">
              Portfolio
            </a>
          </li>
        </ul>
        <div className="menu lg:hidden ">
          <button
            className="text-[2.5rem] text-black dark:text-white"
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
  return (
    <ul
      //onClick={() => useOutsideAlerter()}
      className="flex flex-col absolute text-[1.2rem] z-30 font-[500] text-center gap-[4rem] py-16 bg-[#dddd] dark:bg-black right-0 top-[7rem] w-[100%]"
    >
      <li className="hover:text-blue-800 text-black dark:text-white text-[1.1rem] font-[550] scroll-smooth">
        <a href="#hero">Home</a>
      </li>
      <li className="hover:text-blue-800 text-black dark:text-white text-[1.1rem] font-[550] scroll-smooth">
        <a href="#about">About</a>
      </li>
      <li className="hover:text-blue-800 text-black dark:text-white text-[1,1rem] font-[550] scroll-smooth">
        <a href="#portfolio">Portfolio</a>
      </li>
    </ul>
  );
};

export default Header;
