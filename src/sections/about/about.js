import classes from "./about.module.scss";
import Image from "next/image";

import luka from "../../assets/sections/about/luka.jpg";

import { Quicksand } from "next/font/google";
const headingFont = Quicksand({ subsets: ["latin"] });

const About = () => {
  return (
    <section id="about" className={classes["about"]}>
      {/* HEADING */}
      <h2 className={`${headingFont.className} ${classes["about__heading"]}`}>
        {" "}
        A BIT ABOUT ME
      </h2>

      {/* IMG */}
      <div className={classes["about__img-container"]}>
        <Image src={luka} alt="luka's image" placeholder="blur" />
      </div>

      {/* TEXT */}
      <p className={classes["about__text"]}>
        <span>
          I'm{" "}
          <span className={classes["about__text__highlight"]}>
            Luka Gaganidze
          </span>
          , a 27-year-old,{" "}
          <span className={classes["about__text__highlight"]}>
            self-taught front-end web developer
          </span>{" "}
          with two years of hands-on experience in personal projects and
          freelancing.
        </span>

        <span>
          <span className={classes["about__text__highlight"]}>
            Currently I am working at Digital Governance Agency as Junior
            Angular Developer.
          </span>{" "}
          Dedication fuels my journey as I relentlessly hone my coding skills
          daily, investing over 8 hours crafting projects and acquiring new
          skills.
        </span>

        <span>
          I enjoy crafting UX/UI-friendly, responsive websites that seamlessly
          merge aesthetics and functionality. I feel most confident working with
          <span className={classes["about__text__highlight"]}> Angular.</span>
          {/* <span className={classes["about__text__highlight"]}> NextJS</span>, */}
        </span>

        <span>
          When I'm not on the computer, I am proffesional sport athlete,
          Georgian foil fencing national team captain.
        </span>
      </p>
    </section>
  );
};

export default About;
