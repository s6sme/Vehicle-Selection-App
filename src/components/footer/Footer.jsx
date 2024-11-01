import classes from "./Footer.module.css";
import logo from "../../img//logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.gridFooter}>
        <div className={classes.logoCol}>
          <img className={classes.logo} alt="logo" src={logo} />
        </div>

        <div className={classes.addressCol}>
          <p className={classes.footerHeading}>Contact us</p>
          <address className={classes.contacts}>
            <p className={classes.address}>
              204-170 Plainview Rd, Woodbury, New York, NY 11797
            </p>
            <p>
              <a className={classes.footerLink} href="tel:415-201-6370">
                430-501-7890
              </a>
            </p>
          </address>
        </div>

        <nav className={classes.navCol}>
          <ul className={classes.footerNav}>
            <li>
              <Link className={classes.footerLink} to="/about">
                About us
              </Link>
            </li>
            <li>
              <Link className={classes.footerLink} to="/cars">
                Cars
              </Link>
            </li>
            <li>
              <Link className={classes.footerLink} to="/home">
                Home
              </Link>
            </li>
            <li>
              <Link className={classes.footerLink} to="/help">
                Help
              </Link>
            </li>
          </ul>
        </nav>

        <nav className={classes.navCol}>
          <ul className={classes.footerNav}>
            <li>
              <a className={classes.footerLink} href="#">
                Terms
              </a>
            </li>
            <li>
              <a className={classes.footerLink} href="#">
                Privacy
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
