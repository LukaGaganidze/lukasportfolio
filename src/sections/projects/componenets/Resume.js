import React from "react";

import Link from "next/link";

import classes from "./Resume.module.scss";

import { Quicksand } from "next/font/google";

const headingFont = Quicksand({ subsets: ["latin"] });

const Resume = () => {
  return (
    <div className={classes["resume"]}>
      <Link href="#" className={classes["resume__text"]}>
        <h3 className={headingFont.className}>CHECK OUT MY RÉSUMÉ</h3>
      </Link>
      <div className={classes["resume__img"]}></div>
    </div>
  );
};
export default Resume;
