import React from "react";
import classes from "./Footer.module.css";
import logoImg from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { FaLinkedinIn, FaTwitter, FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes["custom-shape-divider-top-1739131959"]}>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className={classes["shape-fill"]}
          ></path>
        </svg>
      </div>
      <div className={classes.logoContainer}>
        <img
          src={logoImg}
          alt="Приватно здравствено осигурување"
          className={classes.logoImg}
        />
      </div>
      <div className={classes.navContainer}>
        <h2>Брзи линкови</h2>
        <nav className={classes.footerNav}>
          <ul className={classes.footerNavItems}>
            <li>
              <Link to="/" className={classes.footerNavItem}>
                Дома
              </Link>
            </li>
            <li>
              <Link to="/prasanja" className={classes.footerNavItem}>
                Прашања
              </Link>
            </li>
            <li>
              <Link to="/kontakt" className={classes.footerNavItem}>
                Контакт
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className={classes.contact}>
        <h2>Контакт</h2>
        <p>info@zdravstveno.mk</p>
        <p>+ ( 389 ) 123 456 789</p>
      </div>
      <div className={classes.socialContainer}>
        <h2>Следете не:</h2>
        <p>
          <Link
            to="https://linkedin.com"
            target="_blank"
            className={classes.social}
          >
            <FaLinkedinIn />
          </Link>
          <Link to="https://x.com" target="_blank" className={classes.social}>
            <FaTwitter />
          </Link>
          <Link
            to="https://facebook.com"
            target="_blank"
            className={classes.social}
          >
            <FaFacebookF />
          </Link>
        </p>
      </div>
      <p className={classes.copyright}>
        ©2024 zdravstveno.mk. Сите права се задржани.
      </p>
    </footer>
  );
};

export default Footer;
