import audi from "../../img/logo/audi-logo.png";
import bmw from "../../img/logo/bmw-logo.png";
import mercedes from "../../img/logo/mercedes-logo.png";
import volkswagen from "../../img/logo/volkswagen-logo.png";
import lamborghini from "../../img/logo/lamborghini-logo.png";
import porsche from "../../img/logo/porsche-logo.png";
import ferrari from "../../img/logo/ferrari-logo.png";
import tesla from "../../img/logo/tesla-logo.png";

import classes from "./Featured.module.css";
import { motion } from "framer-motion";

const imgAnimation = {
  hidden: {
    y: -100,
    // opacity: 0,
  },
  visible: {
    y: 0,
    // opacity: 1,
  },
};

const Featured = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      className={classes.sectionFeatured}
      style={{ overflow: "hidden" }}
    >
      <div>
        <div className={classes.logos}>
          <motion.img
            variants={imgAnimation}
            src={lamborghini}
            alt="lamborghini logo"
          />

          <motion.img variants={imgAnimation} src={bmw} alt="bmw logo" />

          <motion.img variants={imgAnimation} src={tesla} alt="tesla logo" />

          <motion.img
            variants={imgAnimation}
            src={volkswagen}
            alt="volkswagen logo"
          />

          <motion.img
            variants={imgAnimation}
            src={porsche}
            alt="porsche logo"
          />

          <motion.img
            variants={imgAnimation}
            src={mercedes}
            alt="mercedes logo"
          />

          <motion.img variants={imgAnimation} src={audi} alt="audi logo" />

          <motion.img
            variants={imgAnimation}
            src={ferrari}
            alt="ferrari logo"
          />
        </div>
      </div>
    </motion.section>
  );
};

export default Featured;
