import React from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerChildren, zoomIn } from "../../utils/motion";

const skills = [
  {
    name: "Programming Languages",
    skill: "HTML5, CSS, JavaScript",
    icon: <i class="bx bx-code-alt"></i>,
  },
  {
    name: "Web Frameworks",
    skill: "React.js, Tailwind CSS",
    icon: <i class="bx bx-world"></i>,
  },

  {
    name: "Tools",
    skill: "VScode, GIT/GitHub, Microsoft Office, Canva",
    icon: <i class="bx bxs-wrench"></i>,
  },
];

const About = () => {
  return (
    <div>
      <a className="anchor" id="about"></a>
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={staggerChildren}
        viewport={{ once: false, amount: 0.25 }}
        className=" pt-[10rem] lg:pt-[25rem] px-[4rem] lg:px-[6rem] flex flex-col md:flex-row gap-[6rem] justify-center items-top"
      >
        <motion.div
          variants={zoomIn(0.2, 1.5)}
          className="flex flex-col gap-[1.5rem] w-[100%] md:w-[40%]"
        >
          {skills.map((skills) => {
            return (
              <span className=" skilll transition-all ease-in-out bg-[#474747] px-[2rem] py-[1rem]">
                <span className="skillls flex flex-row justify-between items-center  font-semibold lg:text-[1.4rem]">
                  <h4> {skills.name}</h4> <p> {skills.icon} </p>
                </span>
                <p className="pt-[1rem] text-gray-300"> {skills.skill} </p>
              </span>
            );
          })}
        </motion.div>
        <div className="w-[100%] md:w-[40%]">
          <motion.p
            variants={fadeIn("up", "tween", 0.6, 1.5)}
            className="text-[1.2rem] pb-[2rem] text-[#474747] font-bold"
          >
            About Me
          </motion.p>
          <h2 className="text-white text-[1.4rem] font-semibold">
            Hello! I'm{" "}
            <motion.span
              variants={zoomIn(0.6, 1.5)}
              className="logo text-red-600 text-[1.8rem]"
            >
              Mofopefoluwa
            </motion.span>
          </h2>
          <p className="text-[#696666] pt-[1.2rem] leading-8">
            Mofopefoluwa Faokunla is a self-taught Frontend Web Developer with a
            passion for building beautiful and functional websites. <br />
            My journey into the world of web development began 2021 when I
            started taking an online course on HTML and CSS. Since then, I've
            spent countless hours learning, practicing, and building projects to
            showcase my abilities. <br />
            {""} My skills include proficiency in HTML, CSS, JavaScript,
            Tailwind and React .
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
