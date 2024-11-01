import { Fragment } from "react";
import classes from "./About.module.css";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import {
  AiOutlineSafetyCertificate,
  AiOutlineClockCircle,
  AiOutlineCalendar,
} from "react-icons/ai";
import { BsKey, BsTelegram } from "react-icons/bs";
import { FaRegHandshake, FaAppStoreIos } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { BiMapPin } from "react-icons/bi";

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

const About = () => {
  return (
    <Fragment>
      <Header />

      <h1 className={classes.headingPrimary}>Welcome to RentCar</h1>
      <motion.section
        initial="hidden"
        whileInView="visible"
        className={classes.features}
        variants={textAnimation}
        custom={1}
      >
        <div className={classes.feature}>
          <BsKey
            className={classes.featureIcon}
            style={{ backgroundColor: "#d3f9d8" }}
          />
          <h4 className={classes.sectionTitle}>
            Providing Exceptional Car Rental Services
          </h4>
          <p className={classes.featureText}>
            At RentCar, we provide exceptional car rental services tailored to
            your needs, with reliable and affordable solutions. With our
            industry expertise, we ensure customer satisfaction.
          </p>
        </div>

        <div className={classes.feature}>
          <AiOutlineClockCircle
            className={classes.featureIcon}
            style={{ backgroundColor: "#f3d9fa" }}
          />
          <h4 className={classes.sectionTitle}>
            Convenient and Hassle-Free Experience
          </h4>
          <p className={classes.featureText}>
            At RentCar, we strive to make your car rental experience convenient,
            enjoyable, and hassle-free. With our diverse fleet of
            well-maintained vehicles, we cater to your unique needs.
          </p>
        </div>

        <div className={classes.feature}>
          <FaRegHandshake
            className={classes.featureIcon}
            style={{ backgroundColor: "#fff3bf" }}
          />
          <h4 className={classes.sectionTitle}>
            Commitment to Customer Satisfaction
          </h4>
          <p className={classes.featureText}>
            Our dedicated team provides personalized assistance, ensuring a
            seamless rental process. We believe in transparent pricing, clear
            terms, and delivering excellent service.
          </p>
        </div>

        <div className={classes.feature}>
          <AiOutlineCalendar
            className={classes.featureIcon}
            style={{ backgroundColor: "#ffe8cc" }}
          />
          <h4 className={classes.sectionTitle}>
            Convenient Services for Your Peace of Mind
          </h4>
          <p className={classes.featureText}>
            We provide more than just great vehicles. Our convenient services
            include flexible rental periods, optional insurance coverage, and
            24/7 roadside assistance.
          </p>
        </div>

        <div className={classes.feature}>
          <AiOutlineSafetyCertificate
            className={classes.featureIcon}
            style={{ backgroundColor: "#dbe4ff" }}
          />
          <h4 className={classes.sectionTitle}>
            Your Safety and Comfort Are Our Priorities
          </h4>
          <p className={classes.featureText}>
            We meticulously maintain our vehicles to meet strict safety
            standards, ensuring you receive a reliable and comfortable rental
            car that exceeds your expectations.
          </p>
        </div>

        <div className={classes.feature}>
          <BiMapPin
            className={classes.featureIcon}
            style={{ backgroundColor: "#c5f6fa" }}
          />
          <h4 className={classes.sectionTitle}>
            Serving Local Residents and Travelers Alike
          </h4>
          <p className={classes.featureText}>
            Whether you're a local resident in need of a temporary replacement
            vehicle or a traveler exploring new destinations, RentCar is here to
            fulfill your car rental needs.
          </p>
        </div>
      </motion.section>
      <h4 className={classes.headingDescription}>
        Contact RentCar today to book your next car rental and discover the
        RentCar difference. Our dedicated team is ready to assist you in finding
        the perfect vehicle for your needs and ensuring a seamless rental
        experience. Trust RentCar for all your car rental requirements.
      </h4>
      <div className={classes.container}>
        <button className={classes.buttonAbout}>
          <BsTelegram />
          <span>Telegram</span>
        </button>
        <button className={classes.buttonAbout}>
          <FiPhoneCall />
          <span>Call Us</span>
        </button>
        <button className={classes.buttonAbout}>
          <FaAppStoreIos />
          <span>Download App</span>
        </button>
      </div>
      <Footer />
    </Fragment>
  );
};

export default About;
