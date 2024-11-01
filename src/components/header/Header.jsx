import carLogo from "../../img/logo.png";
import classes from "./Header.module.css";
import Btn from "../../btn/Btn";

import { useState, useEffect } from "react";

import { Link } from "react-router-dom";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className={classes.header}>
      <img alt="Car logo" src={carLogo} className={classes.logo} />

      {window.innerWidth <= 450 && (
        <button className={classes.menuButton} onClick={toggleNav}>
          Menu
        </button>
      )}

      <nav className={isNavOpen ? classes.navOpen : classes.navClosed}>
        <ul className={classes.navList}>
          <li>
            <Link to="/home" className={classes.navLink} end>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className={classes.navLink}>
              About Us
            </Link>
          </li>
          <li>
            <Link to="/cars" className={classes.navLink}>
              Cars
            </Link>
          </li>
          <li>
            <Link to="/help" className={classes.navLink}>
              Help
            </Link>
          </li>
          <li>
            <Btn />
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
