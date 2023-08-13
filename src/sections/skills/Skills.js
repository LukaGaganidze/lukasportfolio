import React from "react";

import Image from "next/image";

import classes from "./Skills.module.scss";

import { Quicksand } from "next/font/google";

const headingFont = Quicksand({ subsets: ["latin"] });

// tools and skills
import css from "../../assets/sections/skills/tecnologies/css-3.png";
import github from "../../assets/sections/skills/tecnologies/github.png";
import html from "../../assets/sections/skills/tecnologies/html-5.png";
import js from "../../assets/sections/skills/tecnologies/js.png";
import next from "../../assets/sections/skills/tecnologies/nextjs.png";
import react from "../../assets/sections/skills/tecnologies/React-icon.svg.png";
import router from "../../assets/sections/skills/tecnologies/reactrouter.png";
import redux from "../../assets/sections/skills/tecnologies/redux.png";
import responsive from "../../assets/sections/skills/tecnologies/responsive.png";
import sass from "../../assets/sections/skills/tecnologies/sass.png";
import vercel from "../../assets/sections/skills/tecnologies/vercel.png";

// what i do
import coding from "../../assets/sections/skills/whatIDo/coding.png";
import design from "../../assets/sections/skills/whatIDo/illustration.png";

const Skills = () => {
  return (
    <section className={classes["skills-sec"]}>
      <div className={classes["skills"]}>
        {/* TOOLS AND SKILLS */}
        <div>
          <h2
            className={`${headingFont.className} ${classes["skills__heading"]}`}
          >
            MY TOOLS AND SKILLS
          </h2>
          <div className={classes["my-skills"]}>
            <Image
              className={classes["my-skills__img"]}
              src={html}
              alt="html logo"
              placeholder="blur"
              quality={100}
            />
            <Image
              className={classes["my-skills__img"]}
              src={css}
              alt="css logo"
            />
            <Image
              className={classes["my-skills__img"]}
              src={sass}
              alt="sass logo"
              placeholder="blur"
              quality={100}
            />
            <Image
              className={classes["my-skills__img"]}
              src={js}
              alt="JavaScript logo"
              placeholder="blur"
              quality={100}
            />
            <Image
              className={classes["my-skills__img"]}
              src={react}
              alt="react logo"
              placeholder="blur"
              quality={100}
            />
            <Image
              className={classes["my-skills__img"]}
              src={redux}
              alt="redux logo"
              placeholder="blur"
              quality={100}
            />
            <Image
              className={classes["my-skills__img"]}
              src={next}
              alt="NextJS logo"
              placeholder="blur"
              quality={100}
            />
            <Image
              className={classes["my-skills__img"]}
              src={router}
              alt="react router logo"
              placeholder="blur"
              quality={100}
            />
            <Image
              className={classes["my-skills__img"]}
              src={responsive}
              alt="responsive design logo"
              placeholder="blur"
              quality={100}
            />
            <Image
              className={classes["my-skills__img"]}
              src={vercel}
              alt="vercel logo"
              placeholder="blur"
              quality={100}
            />
            <Image
              className={classes["my-skills__img"]}
              src={github}
              alt="github logo"
              placeholder="blur"
              quality={100}
            />
          </div>
        </div>

        {/* WHAT IS DO */}
        <div>
          <h2
            className={`${headingFont.className} ${classes["skills__heading"]}`}
          >
            I AM PASSIONATE ABOUT
          </h2>
          <div className={classes["what-i-do"]}>
            {/* DEVELOPEMENT */}
            <div className={classes["what-i-do__part"]}>
              <Image
                className={classes["what-i-do__img"]}
                src={coding}
                alt="leptop small logo"
              />

              <p>
                I'm passionate about <strong>web development</strong> and am
                dedicated to crafting <strong>clean, readable code.</strong>
              </p>
            </div>

            {/* DESIGN */}
            <div className={classes["what-i-do__part"]}>
              <Image
                className={classes["what-i-do__img"]}
                src={design}
                alt="leptop small logo"
              />
              <p>
                I <strong>design</strong> most of my projects, enabling me to
                engage deeply with every facet of the creative process.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
