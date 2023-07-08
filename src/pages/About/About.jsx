import React from "react";

const About = () => {
  return (
    <div>
      <div className=" pt-[6rem] lg:pt-[18rem] px-[4rem] lg:px-[6rem]">
        <div>
          <h1 className="text-center font-[500] text-[2rem] pb-[2.5rem] text-blue-800">
            About Mo
          </h1>
          <br />
          <p className="text-[1.2rem] text-center dark:text-gray-600">
            Mofopefoluwa Faokunla is a self-taught Frontend Web Developer with a
            passion for building beautiful and functional websites. <br />
            My journey into the world of web development began 3 years ago when
            I started taking an online course on HTML and CSS. Since then, I've
            spent countless hours learning new skills, practicing my craft, and
            building projects to showcase my abilities. <br />
            {""} My skills include proficiency in HTML, CSS, JavaScript,
            Tailwind and React . I am also experienced in building responsive
            designs.
          </p>
        </div>
        <div className="pt-[3rem] flex flex-col gap-[2rem] justify-center items-center">
          <span className="text-[1.2rem] font-[500] dark:text-white text-center ">
            A link to my{" "}
            <a className="text-blue-800" href="">
              CV
            </a>{" "}
            for more information{" "}
          </span>
          <span className="text-[1.2rem] font-[500]">
            <a className="text-blue-800" href="mailto:fopefaokunla@gmail.com">
              Email me
            </a>
          </span>
          <span className="text-[1.2rem] font-[500]">
            <a className="text-blue-800" href="tel:08154980688">
              Contact me
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default About;
