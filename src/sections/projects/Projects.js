"use client";

import Resume from "./componenets/Resume";

import classes from "./Projects.module.scss";

import Image from "next/image";

import { Parallax, Background } from "react-parallax";

import parallaxResume from "../../assets/sections/resume/resume.jpg";
import parallaxResumemobile from "../../assets/sections/resume/mobile-res.jpg";

import paragliding from "../../assets/sections/projects/paragliding.jpg";
import marvel from "../../assets/sections/projects/marvel.jpg";
import fencing from "../../assets/sections/projects/fencing.jpg";

import { Quicksand } from "next/font/google";
import Link from "next/link";

const headingFont = Quicksand({ subsets: ["latin"] });

const Projects = () => {
  return (
    <section>
      {/* RESUME PARALLAX EFFECT */}
      <Parallax className={classes["paralax-desktop"]} strength={400}>
        <Resume />
        <Background className={classes["parallax-background"]}>
          <Image
            className={classes["paralax-image"]}
            src={parallaxResume}
            alt="background image of blue night sky"
            placeholder="blur"
            quality={100}
          />
        </Background>
      </Parallax>

      <Parallax className={classes["paralax-mobile"]} strength={400}>
        <Resume />
        <Background>
          <Image
            className={classes["paralax-image-mobile"]}
            src={parallaxResumemobile}
            alt="background image of blue night sky"
            placeholder="blur"
            quality={100}
          />
        </Background>
      </Parallax>

      {/* PROJECTS */}
      <div id="projects" className={classes["projects-sec"]}>
        <h2
          className={`${classes["projects__heading"]} ${headingFont.className}`}
        >
          MY PROJECTS
        </h2>

        {/* PROJECT 1 */}
        <div className={classes["projects"]}>
          {/* IMAGE */}
          <Image
            src={paragliding}
            alt="Paraglidingg project on laptop screen"
          />

          {/* TEXT */}
          <div className={classes["projects__text"]}>
            <h3 className={headingFont.className}>Paragliding Booking</h3>
            <p>
              I have designed and developed the project using NextJS. Leveraging
              NextJS, I've tried to achive responsive, seamless user experience
              through dynamic routing and server-side rendering.
            </p>

            <div
              className={`${classes["projects__links"]} ${headingFont.className}`}
            >
              <Link
                target="_blank"
                href="https://paragliding-initial-luch.vercel.app/"
              >
                Visit Website
              </Link>
              <Link
                target="_blank"
                href="https://github.com/LukaGaganidze/paragliding-v1"
              >
                Github
              </Link>
            </div>
          </div>
        </div>

        {/* PROJECT 2 */}
        <div className={classes["projects"]}>
          {/* IMAGE */}
          <Image src={marvel} alt="Paraglidingg project on laptop screen" />

          {/* TEXT */}
          <div className={classes["projects__text"]}>
            <h3 className={headingFont.className}>Marvelpedia</h3>
            <p className={classes["marvel-desc"]}>
              Provides information about Marvel characters, their creators,
              series, and much more. The platform has been designed and coded by
              me, harnessing the capabilities of ReactJS. To deliver the latest
              backend information for the website, I've integrated the Marvel
              API.
            </p>
            <p className={classes["marvel-mob"]}>
              Provides information about Marvel characters, series, and much
              more. The platform has been designed and coded by me, with
              ReactJS. Fot data I've integrated the Marvel API.
            </p>

            <div
              className={`${classes["projects__links"]} ${headingFont.className}`}
            >
              <Link target="_blank" href="https://marvelpedia-v1.netlify.app/">
                Visit Website
              </Link>
              <Link
                target="_blank"
                href="https://github.com/LukaGaganidze/marvel"
              >
                Github
              </Link>
            </div>
          </div>
        </div>
        {/* PROJECT 3 */}
        {/* <div className={classes["projects"]}>
          <Image src={fencing} alt="Paraglidingg project on laptop screen" />

          <div className={classes["projects__text"]}>
            <h3 className={headingFont.className}>Feincing Shop</h3>
            <p>
              The website is conceptual online shop dedicated to fencing
              sportswear and gear. Drawing inspiration directly from the grace
              and minimalism inherent to fencing. I'm proud to share that this
              platform was entirely conceived, designed, and coded by me using
              ReactJS
            </p>

            <div
              className={`${classes["projects__links"]} ${headingFont.className}`}
            >
              <Link
                target="_blank"
                href="https://github.com/LukaGaganidze/manifestFNCG"
              >
                Visit Website
              </Link>
              <Link
                target="_blank"
                href="https://github.com/LukaGaganidze/manifestFNCG"
              >
                Github
              </Link>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Projects;
