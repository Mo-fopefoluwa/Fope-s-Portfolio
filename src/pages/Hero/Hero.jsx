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
          <h3 className="text-[1.6rem] md:text-[2.2rem] lg:text-[2.6rem] text-[#474747] font-bold">
            I'm a <br />
          </h3>
          <motion.h1
            variants={zoomIn(0.2, 1.5)}
            className="uppercase pb-[1rem] text-[2.5rem] leading-[3.2rem] md:text-[3rem] lg:text-[3.5rem] font-bold"
          >
            <span className="text-white ">
              Frontend <br /> Developer
            </span>
            <span className="text-red-600 ">.</span>
          </motion.h1>
          <motion.a
            variants={fadeIn("up", "tween", 0.6, 1.5)}
            className="bg-red-600  px-[2rem] py-[.2rem] text-white"
            href="tel:+2348154980688"
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

        {/* <motion.p
            variants={fadeIn("up", "tween", 0.2, 1.5)}
            className="text-red-600 text-[1.2rem] text-center md:text-left font-semibold md:text-[1.4rem]"
          >
            Hello! I'm Mofopefoluwa
          </motion.p>
          <motion.h2
            variants={fadeIn("up", "tween", 0.4, 1.5)}
            className="text-[2rem] md:text-[2rem] text-center md:text-left lg:text-[2.6rem] font-bold "
          >
            Frontend Developer
          </motion.h2>
          <motion.p
            variants={fadeIn("up", "tween", 0.6, 1.5)}
            className="text-[.9rem] pb-[1rem] text-center md:text-left"
          >
            {" "}
            I build beautiful and responsive websites. HTML, CSS, JavaScript,
            React JS, Tailwind CSS.
          </motion.p>
          <motion.button
            variants={zoomIn(0.8, 1.5)}
            className="bg-red-600 w-[30%] py-2"
          >
            <a href="mailto:fopefaokunla@gmail.com">Mail me</a>
  </motion.button> */}
      </motion.div>
    </div>
  );
};

export default Hero;
