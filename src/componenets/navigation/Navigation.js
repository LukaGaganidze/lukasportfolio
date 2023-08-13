"use client";

import { useEffect, useRef, useState } from "react";
import { Quicksand } from "next/font/google";

import classes from "./navigation.module.scss";

import NavLinks from "./navComponenets/NavLinks";

const headingFont = Quicksand({ subsets: ["latin"] });

const Navigation = () => {
  // STICKY NAVBAR
  const navbar = useRef();
  const [isVisible, setIsVisible] = useState(true);
  // INTERSECTION OBSERVER
  useEffect(() => {
    // INTERSECTIONOBSERVER FUNCTION
    const stickyNav = (entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
      if (!entry.isIntersecting) {
        setIsVisible(false);
      }
    };

    // INTERSECTION OBSERVER OPTIONS
    const options = {
      root: null,
      threshold: 0.4,
      rootMargin: "",
    };

    // INTERSECTION OBSERVER
    const navbarObserver = new IntersectionObserver(stickyNav, options);

    // OBSERVE
    if (navbar.current) {
      navbarObserver.observe(navbar.current);
    }

    //CLEANUP FUNCTION
    return () => {
      if (navbar.current) {
        navbarObserver.unobserve(navbar.current);
      }
    };
  }, []);

  return (
    <div
      ref={navbar}
      className={`${classes["navbar-container"]} ${headingFont.className}`}
    >
      <nav
        className={`${classes["navigation"]} ${
          classes[!isVisible ? "sticky" : ""]
        }`}
      >
        <div className={`${classes["navigation--burger-n-links-box"]}`}>
          {/* NAV LINKS */}
          <NavLinks sticky={isVisible} />
        </div>

        {/* LANGUAGE */}
        {/* <Languages sticky={isVisible} /> */}
      </nav>
    </div>
  );
};

export default Navigation;
