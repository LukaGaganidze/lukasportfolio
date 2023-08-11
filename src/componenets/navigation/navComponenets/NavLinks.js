"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

import classes from "./NavLinks.module.scss";

const NavLinks = ({ sticky }) => {
  // MENU GLOBAL CONTEXT,

  return (
    <ul className={classes["link-box"]}>
      <li className={classes["link-list"]}>
        <Link
          // onClick={homeWasClicked}
          className={`${classes["link"]} ${
            classes[!sticky ? "dark-text" : ""]
          }`}
          href="#about"
        >
          ABOUT
        </Link>
      </li>
      <li className={classes["link-list"]}>
        <Link
          // onClick={bookWasClicked}
          className={`${classes["link"]} ${
            classes[!sticky ? "dark-text" : ""]
          }`}
          href="#skills"
        >
          SKILLS
        </Link>
      </li>
      <li className={classes["link-box"]}>
        <Link
          // onClick={infoWasClicked}
          className={`${classes["link"]} ${
            classes[!sticky ? "dark-text" : ""]
          }`}
          href="#projects"
        >
          PROJECTS
        </Link>
      </li>

      <li className={classes["link-box"]}>
        <Link
          // onClick={contactWasClicked}
          className={`${classes["link"]} ${
            classes[!sticky ? "dark-text" : ""]
          }`}
          href="#contact"
        >
          CONTACT
        </Link>
      </li>
    </ul>
  );
};

export default NavLinks;
