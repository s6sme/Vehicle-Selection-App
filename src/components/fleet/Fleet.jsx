import audi from "../../img/car/audi.webp";
import bmw from "../../img/car/bmw.jpeg";
import mercedes from "../../img/car/mercedes.jpeg";
import lamborghini from "../../img/car/lamborghini.jpeg";
import porsche from "../../img/car/porshe.jpeg";
import corvette from "../../img/car/corvette.webp";
import lexus from "../../img/car/lexus.jpeg";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"; // Використовуємо useNavigate для навігації
import classes from "./Fleet.module.css";

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

// const Fleet = () => {
//   return (
//     <motion.section
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ amount: 0.2 }}
//       className={classes.sectionFleet}
//       style={{ overflow: "hidden" }}
//     >
//       <div>
//         <motion.p
//           variants={textAnimation}
//           custom={1}
//           className={classes.subheading}
//         >
//           Only the best cars
//         </motion.p>
//         <motion.h1
//           variants={textAnimation}
//           custom={2}
//           className={classes.headingPrimary}
//         >
//           Our Vehicle Fleet
//         </motion.h1>
//         <motion.h3
//           variants={textAnimation}
//           custom={3}
//           className={classes.headingTertiary}
//         >
//           We provide our customers with the most incredible driving emotions.{" "}
//           <br />
//           That's why we have only world-class cars in fleet.
//         </motion.h3>
//       </div>

//       <div className={classes.gridContainer}>
//         <motion.img
//           variants={textAnimation}
//           custom={5}
//           src={audi}
//           alt=""
//           className={classes.item1}
//         />
//         <motion.img
//           variants={textAnimation}
//           custom={5}
//           src={porsche}
//           alt=""
//           className={classes.item1}
//         />
//         <motion.img
//           variants={textAnimation}
//           custom={5}
//           src={corvette}
//           alt=""
//           className={classes.item1}
//         />
//       </div>
//       <div className={classes.gridContainer1}>
//         <motion.img
//           variants={textAnimation}
//           custom={5}
//           src={lexus}
//           alt=""
//           className={classes.item2}
//         />
//         <motion.img
//           variants={textAnimation}
//           custom={5}
//           src={lamborghini}
//           alt=""
//           className={classes.item2}
//         />
//         <motion.img
//           variants={textAnimation}
//           custom={5}
//           src={mercedes}
//           alt=""
//           className={classes.item2}
//         />
//         <motion.img
//           variants={textAnimation}
//           custom={5}
//           src={bmw}
//           alt=""
//           className={classes.item2}
//         />
//       </div>
//     </motion.section>
//   );
// };

// export default Fleet;

const Fleet = () => {
  const [makes, setMakes] = useState([]);
  const [selectedMake, setSelectedMake] = useState("");
  const [selectedMakeId, setSelectedMakeId] = useState(null);
  const [selectedYear, setSelectedYear] = useState("");
  const navigate = useNavigate(); // Ініціалізація useNavigate для навігації

  // Отримання списку марок автомобілів
  useEffect(() => {
    const fetchMakes = async () => {
      try {
        const response = await fetch(
          "https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json"
        );
        const data = await response.json();
        setMakes(data.Results);
      } catch (error) {
        console.error("Error fetching vehicle makes:", error);
      }
    };
    fetchMakes();
  }, []);

  const currentYear = new Date().getFullYear();
  const years = Array.from(
    { length: currentYear - 2015 + 1 },
    (_, i) => 2015 + i
  );

  const handleMakeChange = (e) => {
    const selectedMakeName = e.target.value;
    const make = makes.find((m) => m.MakeName === selectedMakeName);
    setSelectedMake(selectedMakeName);
    setSelectedMakeId(make ? make.MakeId : null);
  };

  const handleNextClick = () => {
    if (selectedMakeId && selectedYear) {
      navigate(`/result/${selectedMakeId}/${selectedYear}`);
    }
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2 }}
      className={classes.sectionFleet}
      style={{ overflow: "hidden" }}
    >
      <div>
        <motion.p
          variants={textAnimation}
          custom={1}
          className={classes.subheading}
        >
          Only the best cars
        </motion.p>
        <motion.h1
          variants={textAnimation}
          custom={2}
          className={classes.headingPrimary}
        >
          Our Vehicle Fleet
        </motion.h1>
        <motion.h3
          variants={textAnimation}
          custom={3}
          className={classes.headingTertiary}
        >
          We provide our customers with the most incredible driving emotions.{" "}
          <br />
          That's why we have only world-class cars in fleet.
        </motion.h3>
      </div>

      {/* <div>
        <label htmlFor="makeSelect">Select Vehicle Make:</label>
        <select
          id="makeSelect"
          value={selectedMake}
          onChange={handleMakeChange}
        >
          <option value="">-- Choose Make --</option>
          {makes.map((make) => (
            <option key={make.MakeId} value={make.MakeName}>
              {make.MakeName}
            </option>
          ))}
        </select>
      </div> */}

      {/* <div className={classes.vehiclemakeselect}>
        <label htmlFor="makeSelect">Select Vehicle Make:</label>
        <select
          id="makeSelect"
          value={selectedMake}
          onChange={handleMakeChange}
        >
          <option value="">-- Choose Make --</option>
          {makes.map((make) => (
            <option key={make.MakeId} value={make.MakeName}>
              {make.MakeName}
            </option>
          ))}
        </select>
      </div>

      <div className={classes.vehiclemakeselect}>
        <label htmlFor="yearSelect">Select Model Year:</label>
        <select
          id="yearSelect"
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
        >
          <option value="">-- Choose Year --</option>
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>

      <div>
        <button
          onClick={handleNextClick}
          className={`${classes.nextButton} ${
            !(selectedMakeId && selectedYear) ? classes.disabled : ""
          }`}
          disabled={!(selectedMakeId && selectedYear)}
        >
          Next
        </button>
      </div> */}

      <div className={classes.vehicleSelectionContainer}>
        <div className={classes.vehiclemakeselect}>
          <label htmlFor="makeSelect">Select Vehicle:</label>
          <select
            id="makeSelect"
            value={selectedMake}
            onChange={handleMakeChange}
          >
            <option value="">-- Choose Make --</option>
            {makes.map((make) => (
              <option key={make.MakeId} value={make.MakeName}>
                {make.MakeName}
              </option>
            ))}
          </select>
        </div>

        <div className={classes.vehiclemakeselect}>
          <label htmlFor="yearSelect">Select Model Year:</label>
          <select
            id="yearSelect"
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
          >
            <option value="">-- Choose Year --</option>
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>

        <div>
          <button
            onClick={handleNextClick}
            className={`${classes.nextButton} ${
              !(selectedMakeId && selectedYear) ? classes.disabled : ""
            }`}
            disabled={!(selectedMakeId && selectedYear)}
          >
            Next
          </button>
        </div>
      </div>

      <div className={classes.gridContainer}>
        <motion.img
          variants={textAnimation}
          custom={5}
          src={audi}
          alt=""
          className={classes.item1}
        />
        <motion.img
          variants={textAnimation}
          custom={5}
          src={porsche}
          alt=""
          className={classes.item1}
        />
        <motion.img
          variants={textAnimation}
          custom={5}
          src={corvette}
          alt=""
          className={classes.item1}
        />
      </div>
      <div className={classes.gridContainer1}>
        <motion.img
          variants={textAnimation}
          custom={5}
          src={lexus}
          alt=""
          className={classes.item2}
        />
        <motion.img
          variants={textAnimation}
          custom={5}
          src={lamborghini}
          alt=""
          className={classes.item2}
        />
        <motion.img
          variants={textAnimation}
          custom={5}
          src={mercedes}
          alt=""
          className={classes.item2}
        />
        <motion.img
          variants={textAnimation}
          custom={5}
          src={bmw}
          alt=""
          className={classes.item2}
        />
      </div>
    </motion.section>
  );
};

export default Fleet;
