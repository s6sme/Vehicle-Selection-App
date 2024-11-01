import classes from "./Features.module.css";
import { TbMessages } from "react-icons/tb";
import { Tb24Hours } from "react-icons/tb";
import { BsFillLightningChargeFill } from "react-icons/bs";
import { AiOutlineSafety } from "react-icons/ai";

import { motion } from "framer-motion";

const textAnimation = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  visible: (custom) => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 0.2 },
  }),
};

const Features = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.3 }}
      style={{ overflow: "hidden" }}
      className={classes.sectionFeatures}
    >
      <div className={classes.Features}>
        <motion.p
          variants={textAnimation}
          custom={1}
          className={classes.subheading}
        >
          Taking Care of every Client
        </motion.p>
        <motion.h1
          variants={textAnimation}
          custom={2}
          className={classes.headingPrimary}
        >
          Key Features
        </motion.h1>
        <motion.h3
          variants={textAnimation}
          custom={3}
          className={classes.headingTertiary}
        >
          We all about our client's comfort and safety. <br /> That's why we
          provide the best service you can imagine.
        </motion.h3>
      </div>
      <div className={classes.featuresBox}>
        <motion.div
          variants={textAnimation}
          custom={4}
          className={classes.featuresContainer}
        >
          <Tb24Hours
            className={classes.featuresIcon}
            style={{ backgroundColor: "#d3f9d8" }}
          />
          <p className={classes.featuresTitle}>
            24-hour car <br /> delivery
          </p>
        </motion.div>

        <motion.div
          variants={textAnimation}
          custom={4}
          className={classes.featuresContainer}
        >
          <TbMessages
            className={classes.featuresIcon}
            style={{ backgroundColor: "#f3d9fa" }}
          />
          <p className={classes.featuresTitle}>
            24/7 technical <br /> support
          </p>
        </motion.div>

        <motion.div
          variants={textAnimation}
          custom={4}
          className={classes.featuresContainer}
        >
          <BsFillLightningChargeFill
            className={classes.featuresIcon}
            style={{ backgroundColor: "#dbe4ff" }}
          />
          <p className={classes.featuresTitle}>
            All models have a premium package
          </p>
        </motion.div>

        <motion.div
          variants={textAnimation}
          custom={4}
          className={classes.featuresContainer}
        >
          <AiOutlineSafety
            className={classes.featuresIcon}
            style={{ backgroundColor: "#ffe8cc" }}
          />
          <p className={classes.featuresTitle}>
            Absolute <br /> confidentiality
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Features;
