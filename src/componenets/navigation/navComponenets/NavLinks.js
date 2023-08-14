"use client";

import React from "react";
import Link from "next/link";

import classes from "./NavLinks.module.scss";

const NavLinks = ({ sticky }) => {
  return (
    <div className={classes["link-box-container"]}>
      <ul className={classes["link-box"]}>
        <li className={classes["link-list"]}>
          <Link
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
            className={`${classes["link"]} ${
              classes[!sticky ? "dark-text" : ""]
            }`}
            href="#contact"
          >
            CONTACT
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavLinks;
