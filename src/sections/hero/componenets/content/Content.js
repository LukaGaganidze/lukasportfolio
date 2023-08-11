import classes from "./Content.module.scss";

import { Quicksand } from "next/font/google";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

import Link from "next/link";

const headingFont = Quicksand({ subsets: ["latin"] });

const Content = () => {
  return (
    <div className={classes["content"]}>
      <h1 className={headingFont.className}>
        <span>HI, I'M LUKA</span>
        <span>front-end web developer</span>
      </h1>

      <Link className={classes["icon-link"]} href="#">
        <FontAwesomeIcon className={classes["icon"]} icon={faChevronDown} />
      </Link>
    </div>
  );
};
export default Content;
