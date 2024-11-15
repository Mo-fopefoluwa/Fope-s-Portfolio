import React from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerChildren, zoomIn } from "../../utils/motion";

const Hero = () => {
  return (
    <div>
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={staggerChildren}
        viewport={{ once: false, amount: 0.25 }}
        className="relative pt-[8rem] flex flex-col md:flex-row gap-[4rem] md:gap-[6rem] justify-center items-center px-[2rem] md:px-[4rem] lg:px-[6rem] "
      >
        <img
          className="stars absolute left-[6rem] top-[10rem] "
          src="stargraysmall.png"
          alt=""
        />
        <img
          className="stars absolute right-[6rem] top-[20rem] "
          src="stargraysmall.png"
          alt=""
        />
        <img
          className="stars absolute bottom-[1rem] left-[4rem] "
          src="stargraysmall.png"
          alt=""
        />

        <div className="text-white flex flex-col justify-center items-start">
          <h3 className="text-[1.6rem] md:text-[2.2rem] lg:text-[2.6rem] text-[#5e5e5e] font-bold">
            I'm a <br />
          </h3>
          <motion.h1
            variants={zoomIn(0.2, 1.5)}
            className="uppercase pb-[1rem] text-[2.5rem] leading-[2.4rem] md:leading-[3.2rem] md:text-[3rem] lg:text-[3.5rem] font-bold"
          >
            <span className="text-[#e5e5e5] ">
              Frontend <br /> Developer
            </span>
            <span className="tested text-[#ff7597]  text-[3rem] ">.</span>
          </motion.h1>
          <motion.a
            variants={fadeIn("up", "tween", 0.6, 1.5)}
            className="bg-[#ff0266] rounded-[18px] hover:scale-95 duration-150 ease-in-out px-[2rem] py-[.2rem] text-white"
            href="tel:+2348123600539"
          >
            Contact Me
          </motion.a>
        </div>

        <motion.img
          variants={zoomIn(0.2, 1.5)}
          className="w-[50%] md:w-[30%]"
          src="me.png"
          alt=""
        />
      </motion.div>
    </div>
  );
};

export default Hero;
