import React from "react";

const Hero = () => {
  return (
    <div>
      <div className="pt-[10rem] flex flex-col lg:flex-row lg:justify-between gap-[2rem] px-[5rem]">
        <span className="text-[2.2rem] font-[600] text-blue-800">
          {" "}
          Hey There, <br /> I'm Mofopefoluwa.
        </span>
        <span className="text-[1.5rem] font-[450] dark:text-gray-400 ">
          I build beautiful and responsive websites.
        </span>
      </div>
      <div className="w-[100%] flex items-center justify-center relative">
        <img
          className="w-[15rem] absolute top-[0rem] lg:top-[-8rem] "
          src="me.png"
          alt=""
        />
        <div className="absolute top-[25rem] lg:top-[20rem] flex flex-col justify-center">
          <div className="flex justify-center">
            <img className="w-[2.5rem]" src="certificate.png" alt="" />
          </div>
          <span className="text-[1.2rem] font-[550] text-blue-800">
            Frontend Web Developer
          </span>
        </div>
      </div>

      <div className="flex flex-col justify-center text-center items-center pb-[4rem]  px-[4rem] pt-[32rem] lg:flex-row lg:justify-between lg:items-start lg:pt-[10rem] gap-10 lg:px-[4.5rem] ">
        <span className="text-[1.5rem] font-[500] dark:text-gray-400 ">
          Let's talk about your project or just say{" "}
          <a
            className="text-orange-400 text-[2rem]"
            href="mailto:fopefaokunla@gmail.com"
          >
            hi!
          </a>
        </span>
        {/* <span className="text-[1.2rem] font-[500]">
          {" "}
          Email me at :{" "}
          <a className="text-orange-400" href="">
            fopefaokunla@gmail.com
          </a>
        </span> */}
      </div>
    </div>
  );
};

export default Hero;
