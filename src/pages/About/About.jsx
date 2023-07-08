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
          <p className="text-[1.2rem] text-center dark:text-gray-400">
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
          <span className="text-[1.2rem] font-[500] dark:text-gray-400">
            A link to my CV for more information{" "}
            <a className="text-orange-400" href=""></a>
          </span>
          <span className="text-[1.2rem] font-[500] dark:text-gray-400">
            Email me @{" "}
            <a className="text-orange-400" href="mailto:fopefaokunla@gmail.com">
              fopefaokunla@gmail.com
            </a>
          </span>
          <span className="text-[1.2rem] font-[500] dark:text-gray-400">
            Contact me :{" "}
            <a className="text-orange-400" href="tel:08154980688">
              08154980688
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default About;
