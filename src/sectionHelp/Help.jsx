import { Fragment, useState } from "react";
import { FaHandsHelping } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import classes from "./Help.module.css";
import Header from "../components/header/Header";

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

const Help = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <Fragment>
      <Header />
      <motion.section
        initial="hidden"
        variants={textAnimation}
        custom={1}
        whileInView="visible"
      >
        <div>
          <div className={classes.container}>
            <FaHandsHelping className={classes.containerIcon} />
            <h1 className={classes.text}>Help Center</h1>
          </div>
          <p className={classes.containerText}>
            We are glad having you here looking for the answer. As our team
            hardly working on the products, feel free to ask any questions.{" "}
            <br /> We believe only your feedback might move us forward.
          </p>
          <div className={classes.containerSearch}>
            <div className={classes.wrap}>
              <div className={classes.search}>
                <input
                  type="text"
                  className={classes.searchTerm}
                  placeholder="What are you looking for?"
                />
                <button type="submit" className={classes.searchButton}>
                  <FiSearch />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.accordion}>
          <div
            className={`${classes.item} ${
              activeIndex === 0 ? classes.open : ""
            }`}
          >
            <p className={classes.number} onClick={() => toggleAccordion(0)}>
              01
            </p>
            <p className={classes.text} onClick={() => toggleAccordion(0)}>
              Can I Rent a Car at 18?
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={classes.icon}
              fill="none"
              viewBox="0 0 24 24"
              onClick={() => toggleAccordion(0)}
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
            <div className={classes.hiddenBox}>
              <p>
                In some states, you can rent a car at the age of 18; however,
                the legal age to rent a car in most states is 25 years old. You
                may rent a car at some locations between the ages of 21-24 for
                an additional young renter surcharge. Check the policies at the
                car rental location you’re interested in renting from for that
                state’s renter requirements.
              </p>
            </div>
          </div>

          <div
            className={`${classes.item} ${
              activeIndex === 1 ? classes.open : ""
            }`}
          >
            <p className={classes.number} onClick={() => toggleAccordion(1)}>
              02
            </p>
            <p className={classes.text} onClick={() => toggleAccordion(1)}>
              How Do I Rent a Car?
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={classes.icon}
              fill="none"
              viewBox="0 0 24 24"
              onClick={() => toggleAccordion(1)}
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
            <div className={classes.hiddenBox}>
              <p>To rent a car from Enterprise, do the following:</p>
              <ul>
                <li>Visit our reservation page</li>
                <li>
                  Type in the location you want to pick up/return your vehicle
                </li>
                <li>
                  Enter your departure date and return date. Then select “Check
                  Availability.”
                </li>
                <li>
                  Next, choose the type of vehicle you want for your trip.
                </li>
                <li>
                  Add any additional items to your rental, like Sirius XM radio
                  or a child car seat.
                </li>
                <li>
                  Review your reservation, add in your contact information and
                  confirm your reservation by clicking “Confirm Booking.”
                </li>
              </ul>
            </div>
          </div>

          <div
            className={`${classes.item} ${
              activeIndex === 2 ? classes.open : ""
            }`}
          >
            <p className={classes.number} onClick={() => toggleAccordion(2)}>
              03
            </p>
            <p className={classes.text} onClick={() => toggleAccordion(2)}>
              How much is a rental car?
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={classes.icon}
              fill="none"
              viewBox="0 0 24 24"
              onClick={() => toggleAccordion(2)}
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
            <div className={classes.hiddenBox}>
              <p>
                The cost of a rental car depends on many factors and can vary
                greatly. These factors include:
              </p>
              <ul>
                <li>The length of time you are renting the car</li>
                <li>Car class selected</li>
                <li>Rental location</li>
                <li>Added insurance or protection products</li>
                <li>Additional products selected</li>
                <li>If you have to modify your reservation</li>
                <li>If you have to extend your reservation</li>
                <li>If you have to change your rental drop-off location</li>
              </ul>
            </div>
          </div>
        </div>
      </motion.section>
    </Fragment>
  );
};

// const Help = () => {
//   const [activeIndex, setActiveIndex] = useState(null);

//   const toggleAccordion = (index) => {
//     setActiveIndex(activeIndex === index ? null : index);
//   };

//   return (
//     <div className={classes.accordion}>
//       <div
//         className={`${classes.item} ${activeIndex === 0 ? classes.open : ""}`}
//       >
//         <p className={classes.number} onClick={() => toggleAccordion(0)}>
//           01
//         </p>
//         <p className={classes.text} onClick={() => toggleAccordion(0)}>
//           Can I Rent a Car at 18?
//         </p>
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className={classes.icon}
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//           onClick={() => toggleAccordion(0)}
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2"
//             d="M19 9l-7 7-7-7"
//           />
//         </svg>
//         <div className={classes.hiddenBox}>
//           <p>
//             In some states, you can rent a car at the age of 18; however, the
//             legal age to rent a car in most states is 25 years old. You may rent
//             a car at some locations between the ages of 21-24 for an additional
//             young renter surcharge. Check the policies at the car rental
//             location you’re interested in renting from for that state’s renter
//             requirements.
//           </p>
//         </div>
//       </div>

//       <div
//         className={`${classes.item} ${activeIndex === 1 ? classes.open : ""}`}
//       >
//         <p className={classes.number}>02</p>
//         <p className={classes.text}>How Do I Rent a Car?</p>
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className={classes.icon}
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//           onClick={() => toggleAccordion(1)}
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2"
//             d="M19 9l-7 7-7-7"
//           />
//         </svg>
//         <div className={classes.hiddenBox}>
//           <p>To rent a car from Enterprise, do the following:</p>
//           <ul>
//             <li>Visit our reservation page</li>
//             <li>
//               Type in the location you want to pick up/return your vehicle
//             </li>
//             <li>
//               Enter your departure date and return date. Then select “Check
//               Availability.”
//             </li>
//             <li>Next, choose the type of vehicle you want for your trip.</li>
//             <li>
//               Add any additional items to your rental, like Sirius XM radio or a
//               child car seat.
//             </li>
//             <li>
//               Review your reservation, add in your contact information and
//               confirm your reservation by clicking “Confirm Booking.”
//             </li>
//           </ul>
//         </div>
//       </div>

//       <div
//         className={`${classes.item} ${activeIndex === 2 ? classes.open : ""}`}
//       >
//         <p className={classes.number}>03</p>
//         <p className={classes.text}>How much is a rental car?</p>
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className={classes.icon}
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//           onClick={() => toggleAccordion(2)}
//         >
//           <path
//             stroke-linecap="round"
//             stroke-linejoin="round"
//             stroke-width="2"
//             d="M19 9l-7 7-7-7"
//           />
//         </svg>
//         <div className={classes.hiddenBox}>
//           <p>
//             The cost of a rental car depends on many factors and can vary
//             greatly. These factors include:
//           </p>
//           <ul>
//             <li>The length of time you are renting the car</li>
//             <li>Car class selected</li>
//             <li>Rental location</li>
//             <li>Added insurance or protection products</li>
//             <li>Additional products selected</li>
//             <li>If you have to modify your reservation</li>
//             <li>If you have to extend your reservation</li>
//             <li>If you have to change your rental drop-off location</li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

export default Help;
