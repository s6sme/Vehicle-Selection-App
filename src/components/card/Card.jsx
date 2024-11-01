import { AiFillApple } from "react-icons/ai";
import classes from "./Card.module.css";
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

const Card = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.3 }}
      // style={{ overflow: "hidden" }}
      className={classes.sectionCta}
    >
      <motion.div
        variants={textAnimation}
        custom={1}
        className={classes.container}
      >
        <div className={classes.cta}>
          <div className={classes.ctaTextBox}>
            <h2 className={classes.headingSecondary}>
              Drive with RentCar Today
            </h2>
            <p className={classes.ctaText}>
              Get the app to explore the world of premium <br /> cars - that's
              exciting!
            </p>
            <div className={classes.container}>
              <MyButton />
            </div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Card;

export function MyButton() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <a
        href="https://apps.apple.com/"
        target="_blank"
        rel="noopener noreferrer"
        className={classes.navCta}
        style={{ display: "flex", alignItems: "center" }}
      >
        <AiFillApple style={{ marginRight: "0.5rem" }} />
        <span>Download App</span>
      </a>
    </div>
  );
}
