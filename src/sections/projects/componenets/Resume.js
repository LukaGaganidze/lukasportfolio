import React from "react";

import Link from "next/link";

import classes from "./Resume.module.scss";

import { Quicksand } from "next/font/google";

const headingFont = Quicksand({ subsets: ["latin"] });

const Resume = () => {
  return (
    <div className={classes["resume"]}>
      <Link
        target="_blank"
        href="https://drive.google.com/file/d/18jSh2SBFimuNvgArvEp2KH9bulVEI0Vj/view"
        className={classes["resume__text"]}
      >
        <h3 className={headingFont.className}>CHECK OUT MY RÉSUMÉ</h3>
      </Link>
    </div>
  );
};
export default Resume;
