import classes from "./hero.module.scss";

import Content from "./componenets/content/Content";

const Hero = () => {
  return (
    <section className={classes["hero"]}>
      <Content />
    </section>
  );
};

export default Hero;
