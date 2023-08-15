"use client";

import classes from "./hero.module.scss";

import { Parallax, Background } from "react-parallax";

import Image from "next/image";

import Content from "./componenets/content/Content";

import heroImage from "../../assets/sections/hero/main-background.jpg";
import heroImageMob from "../../assets/sections/hero/main-background-mobile.jpg";

const Hero = () => {
  return (
    <section className={classes["hero"]}>
      {/* DESKTOP */}
      <Parallax className={classes["paralalax-desc"]} strength={300}>
        <Content />
        <Background className={classes["paralalax-background"]}>
          <Image
            className={classes["image"]}
            src={heroImage}
            alt="background image of blue night sky"
            placeholder="blur"
            quality={100}
          />
        </Background>
      </Parallax>

      {/* MOBILE */}
      <Parallax className={classes["paralalax-mob"]} strength={400}>
        <Content />
        <Background className={classes["paralalax-background"]}>
          <Image
            className={classes["image"]}
            src={heroImageMob}
            alt="background image of blue night sky"
            placeholder="blur"
            quality={100}
          />
        </Background>
      </Parallax>
    </section>
  );
};

export default Hero;
