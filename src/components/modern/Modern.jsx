import Btn from "../../btn/Btn";
import ModernFoto from "../../img/modern.png";
import classes from "./Modern.module.css";
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

const Modern = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2 }}
      className={classes.sectionModern}
      style={{ overflow: "hidden" }}
    >
      <div className={classes.Modern}>
        <div>
          <motion.img
            variants={textAnimation}
            custom={1}
            src={ModernFoto}
            alt=""
            className={classes.ModernFoto}
          />
        </div>
        <div className={classes.container}>
          <motion.p
            variants={textAnimation}
            custom={1}
            className={classes.subheading}
          >
            Convenient interaction
          </motion.p>
          <motion.h1
            variants={textAnimation}
            custom={2}
            className={classes.headingPrimary}
          >
            Modern App
          </motion.h1>
          <motion.h3
            variants={textAnimation}
            custom={3}
            className={classes.headingTertiary}
          >
            We developed a simple and functional app. It is built in such a way
            to simplify the problem of the car selection and rental process.
            View the location, statement, and other information about each of
            the vehicles in one click
          </motion.h3>
          <Btn />
        </div>
      </div>
    </motion.section>
  );
};

export default Modern;
