import React, { useState } from "react";
import "./Header.css";
import useHeaderShadow from "../../hooks/useHeaderShadow";

const Header = () => {
  const [open, setOpen] = useState(false);
  const headerShadow = useHeaderShadow();

  return (
    <div>
      <header
        className="flex justify-between px-[4rem] py-[2rem] fixed w-full bg-[#e4dacd] dark:bg-black text-black dark:text-white z-50"
        style={{ boxShadow: headerShadow }}
      >
        <div className="logo text-[2rem] font-[650]">Mo</div>
        <ul className="flex gap-6 md:hidden text-[1.2rem]">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Portfolio</a>
          </li>
        </ul>
        <div className="menu relative" onClick={() => setOpen(!open)}>
          {!open ? <i class="fa fa-bars"></i> : <Resp />}
        </div>
      </header>
    </div>
  );
};

const Resp = () => {
  return (
    <ul className="md:flex md:flex-col absolute text-[1.2rem] font-[500] text-center gap-[4rem] py-16 bg-[#e4dacd] dark:bg-black right-0 top-[7rem] w-[80%]">
      <li className="hover:text-orange-400 text-black dark:text-white text-[1rem] font-[500] ">
        <a href="/">Home</a>
      </li>
      <li className="hover:text-orange-400 text-black dark:text-white text-[1rem] font-[500]">
        <a href="/">About</a>
      </li>
      <li className="hover:text-orange-400 text-black dark:text-white text-[1rem] font-[500]">
        <a href="/">Portfolio</a>
      </li>
    </ul>
  );
};

export default Header;
