import React from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerChildren, zoomIn } from "../../utils/motion";

const About = () => {
  return (
    <div>
      <a className="anchor scroll-smooth" id="about"></a>
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={staggerChildren}
        viewport={{ once: false, amount: 0.25 }}
        className=" pt-[10rem] lg:pt-[25rem] px-[4rem] lg:px-[6rem]"
      >
        <div>
          <motion.h1
            variants={fadeIn("up", "tween", 0.2, 1.5)}
            className="text-center font-[600] text-[1.6rem] pb-[2.5rem] text-red-600"
          >
            About <span className="text-white text-[1.8]">Mofopefoluwa</span>
          </motion.h1>
          <br />
          <motion.p
            variants={zoomIn(0.4, 1.5)}
            className="text-[1rem] md:text-[1.2rem] text-center text-white"
          >
            Mofopefoluwa Faokunla is a self-taught Frontend Web Developer with a
            passion for building beautiful and functional websites. <br />
            My journey into the world of web development began 2021 when I
            started taking an online course on HTML and CSS. Since then, I've
            spent countless hours learning, practicing, and building projects to
            showcase my abilities. <br />
            {""} My skills include proficiency in HTML, CSS, JavaScript,
            Tailwind and React .
          </motion.p>
        </div>

        <div className="pt-[3rem] pb-[6rem]">
          <ul className="text-[2rem] flex gap-[4rem] items-center justify-center">
            <li>
              <a className="text-red-600" href="mailto:fopefaokunla@gmail.com">
                <i class="bx bx-envelope"></i>
              </a>
            </li>
            <li>
              <a href="tel:08154980688" className="text-red-600">
                <i class="bx bxs-contact"></i>
              </a>
            </li>
            <li>
              <a className="text-red-600" href="https://git-hub/mo-fopefoluwa">
                <i class="bx bxl-github"></i>
              </a>
            </li>
            {/* <li></li> */}
          </ul>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
