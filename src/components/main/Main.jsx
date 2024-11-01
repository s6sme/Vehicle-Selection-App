import classes from "./Main.module.css";
import mainLogo from "../../img/mainLogo.png";
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

const imgAnimation = {
  hidden: {
    x: 100,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
  },
};

const Main = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      className={classes.sectionHero}
      style={{ overflow: "hidden" }}
    >
      <div className={classes.Hero}>
        <div>
          <motion.h1
            variants={textAnimation}
            custom={1}
            className={classes.headingPrimary}
          >
            Premium <br /> Car Rental <br /> in New York
          </motion.h1>
          <motion.p
            variants={textAnimation}
            custom={2}
            className={classes.heroDescription}
          >
            Don't deny yourself the pleasure of <br /> driving the best premiums
            car from <br /> arround the world here and now
          </motion.p>
        </div>

        <div>
          <motion.img
            src={mainLogo}
            variants={imgAnimation}
            className={classes.heroImg}
            alt="Background foto"
          />
        </div>
      </div>
    </motion.section>
  );
};

export default Main;
