import React from "react";

import Image from "next/image";

import classes from "./Footer.module.scss";

import linkedin from "../../assets/sections/footer/linkedin.png";
import github from "../../assets/sections/footer/github.png";
import instagram from "../../assets/sections/footer/instagram.png";
import facebook from "../../assets/sections/footer/facebook.png";
import twitter from "../../assets/sections/footer/twitter.png";
import whatsapp from "../../assets/sections/footer/whatsapp.png";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={classes["footer"]}>
      <div className={classes["footer-container"]}>
        <div className={classes["links-container"]}>
          <Link
            target="_blank"
            href="https://www.linkedin.com/in/lukagaganidze/"
          >
            <Image
              classNam={classes["linkedin"]}
              src={linkedin}
              alt="linkedin logo"
            />
          </Link>

          <Link target="_blank" href="https://github.com/LukaGaganidze">
            <Image
              classNam={classes["github"]}
              src={github}
              alt="github logo"
            />
          </Link>

          <Link
            target="_blank"
            href="https://www.instagram.com/luka_gaganidze/"
          >
            <Image
              classNam={classes["instagram"]}
              src={instagram}
              alt="instagram logo"
            />
          </Link>

          <Link target="_blank" href="https://www.facebook.com/luka.gaganidze">
            <Image
              classNam={classes["facebook"]}
              src={facebook}
              alt="facebook logo"
            />
          </Link>

          <Link target="_blank" href="https://twitter.com/LukaGaganidze">
            <Image
              classNam={classes["twitter"]}
              src={twitter}
              alt="twitter logo"
            />
          </Link>

          <Link
            target="_blank"
            href="https://api.whatsapp.com/send?phone=995557738263"
          >
            <Image
              classNam={classes["whatsapp"]}
              src={whatsapp}
              alt="whatsapp logo"
            />
          </Link>
        </div>

        <span>&copy; Luka Gaganidze 2023</span>
      </div>
    </footer>
  );
};

export default Footer;
