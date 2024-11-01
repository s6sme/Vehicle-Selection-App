import { Fragment } from "react";
import classes from "./Cars.module.css";

import { RiNumber1, RiNumber2, RiNumber3 } from "react-icons/ri";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

import Range from "../img/carSection/Range.jpeg";
import Audi from "../img/carSection/audi.jpeg";
import Porshe from "../img/carSection/porshe.jpeg";
import BMW from "../img/carSection/bmw.jpeg";
import Lamba from "../img/carSection/lamba.webp";
import Ferrari from "../img/carSection/ferrari.jpeg";
import Cadillac from "../img/carSection/cadillac.jpeg";
import GTR from "../img/carSection/gtr.jpeg";
import Alpha from "../img/carSection/alpha.webp";
import srt from "../img/carSection/srt.jpeg";
import aston from "../img/carSection/aston.jpeg";
import Tesla from "../img/carSection/tesla.jpeg";
import BMW2 from "../img/carSection/BMW2.jpeg";
import Buggati from "../img/carSection/buggati.jpeg";

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

const Cars = () => {
  return (
    <Fragment>
      <Header />
      <motion.section
        initial="hidden"
        variants={textAnimation}
        custom={1}
        whileInView="visible"
        className={classes.cars}
      >
        <h1 className={classes.headingPrimary}>Our Vehicle Fleet</h1>
        <div className={classes.car}>
          <h4 className={classes.carTitle}>
            Discover Our Impressive Car Selection for Your Rental Needs
          </h4>
          <p className={classes.carText}>
            <RiNumber1
              className={classes.featuresIcon}
              style={{ backgroundColor: "#d3f9d8" }}
            />
            On our website, you will find a wide selection of high-quality cars
            available for your rental needs. We offer various models and car
            classes to cater to the diverse needs of our customers.
          </p>
          <p className={classes.carText}>
            <RiNumber2
              className={classes.featuresIcon}
              style={{ backgroundColor: "#f3d9fa" }}
            />
            Every car in our fleet is regularly serviced and thoroughly checked
            for safety and reliability. We pay great attention to detail to
            ensure that you receive a car in excellent condition that meets your
            requirements.
          </p>
          <p className={classes.carText}>
            <RiNumber3
              className={classes.featuresIcon}
              style={{ backgroundColor: "#dbe4ff" }}
            />
            With us, you will experience a top-notch car and receive a high
            level of service. Feel the freedom and comfort during your next
            journey with a rental car from RentCar. Book your perfect car today
            and enjoy an unforgettable trip!
          </p>
        </div>
      </motion.section>
      <motion.section
        initial="hidden"
        variants={textAnimation}
        custom={1}
        whileInView="visible"
        viewport={{ amount: 0.2 }}
        className={classes.gallery}
      >
        <figure className={classes.gallery1}>
          <img
            src={Range}
            alt="Gallery image 1"
            className={classes.galleryImg}
          />
        </figure>
        <figure className={classes.gallery1}>
          <img
            src={Audi}
            alt="Gallery image 1"
            className={classes.galleryImg}
          />
        </figure>
        <figure className={classes.gallery2}>
          <img
            src={Porshe}
            alt="Gallery image 1"
            className={classes.galleryImg}
          />
        </figure>
        <figure className={classes.gallery3}>
          <img src={BMW} alt="Gallery image 1" className={classes.galleryImg} />
        </figure>
        <figure className={classes.gallery4}>
          <img
            src={Range}
            alt="Gallery image 1"
            className={classes.galleryImg}
          />
        </figure>
        <figure className={classes.gallery5}>
          <img
            src={Lamba}
            alt="Gallery image 1"
            className={classes.galleryImg}
          />
        </figure>
        <figure className={classes.gallery6}>
          <img
            src={Ferrari}
            alt="Gallery image 1"
            className={classes.galleryImg}
          />
        </figure>
        <figure className={classes.gallery7}>
          <img
            src={Cadillac}
            alt="Gallery image 1"
            className={classes.galleryImg}
          />
        </figure>
        <figure className={classes.gallery8}>
          <img src={GTR} alt="Gallery image 1" className={classes.galleryImg} />
        </figure>
        <figure className={classes.gallery9}>
          <img
            src={Alpha}
            alt="Gallery image 1"
            className={classes.galleryImg}
          />
        </figure>
        <figure className={classes.gallery10}>
          <img src={srt} alt="Gallery image 1" className={classes.galleryImg} />
        </figure>
        <figure className={classes.gallery11}>
          <img
            src={Tesla}
            alt="Gallery image 1"
            className={classes.galleryImg}
          />
        </figure>
        <figure className={classes.gallery12}>
          <img
            src={aston}
            alt="Gallery image 1"
            className={classes.galleryImg}
          />
        </figure>
        <figure className={classes.gallery13}>
          <img
            src={BMW2}
            alt="Gallery image 1"
            className={classes.galleryImg}
          />
        </figure>
        <figure className={classes.gallery14}>
          <img
            src={Buggati}
            alt="Gallery image 1"
            className={classes.galleryImg}
          />
        </figure>
      </motion.section>
      <Footer />
    </Fragment>
  );
};

export default Cars;
