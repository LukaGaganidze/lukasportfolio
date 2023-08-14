import React from "react";

import classes from "./Contact.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

import { Quicksand } from "next/font/google";
const headingFont = Quicksand({ subsets: ["latin"] });

const Contact = () => {
  return (
    <section id="contact" className={classes["contact"]}>
      <div className={classes["contact-container"]}>
        {/* SVG */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          className={classes["contact__svg"]}
        >
          <path d="M16.1 260.2c-22.6 12.9-20.5 47.3 3.6 57.3L160 376V479.3c0 18.1 14.6 32.7 32.7 32.7c9.7 0 18.9-4.3 25.1-11.8l62-74.3 123.9 51.6c18.9 7.9 40.8-4.5 43.9-24.7l64-416c1.9-12.1-3.4-24.3-13.5-31.2s-23.3-7.5-34-1.4l-448 256zm52.1 25.5L409.7 90.6 190.1 336l1.2 1L68.2 285.7zM403.3 425.4L236.7 355.9 450.8 116.6 403.3 425.4z" />
        </svg>

        {/* HEADING */}
        <h3 className={headingFont.className}>Get in Touch</h3>

        {/* TEXT */}
        <p>
          If you're interested, feel free to reach out to me. I'm always open to
          new opportunities and collaborations.
        </p>

        {/* BUTTON */}

        <Link
          className={`${headingFont.className} ${classes["envelope-container"]}`}
          href="mailto: lukagaganidzedev@gmail.com"
        >
          <span>EMAIL ME</span>
          <FontAwesomeIcon
            className={classes["icon-envelope"]}
            icon={faEnvelope}
          />
        </Link>
      </div>
    </section>
  );
};

export default Contact;
