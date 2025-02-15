import React from "react";
import classes from "./Header.module.css";
import logoImg from "../../assets/logo.png";
import Button from "../Button/Button";
import { GiHamburgerMenu } from "react-icons/gi";
import { useLocation, useNavigate, Link } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const logoNavigate = (e) => {
    e.preventDefault();
    navigate("/");
  };

  const buttonNavigate = (e) => {
    e.preventDefault();
    navigate("/prijavi-steta");
  };
  return (
    <header className={classes.header}>
      <img
        src={logoImg}
        alt="Приватно здравствено осигурување"
        className={classes.mainLogo}
        onClick={logoNavigate}
      />
      <nav className={classes.mainNav}>
        <ul className={classes.navItems}>
          <li>
            <Link
              to="/"
              className={
                location.pathname === "/" ? classes.activeItem : classes.navItem
              }
            >
              Дома
            </Link>
          </li>
          <li>
            <Link
              to="/prasanja"
              className={
                location.pathname.startsWith("/prasanja")
                  ? classes.activeItem
                  : classes.navItem
              }
            >
              Прашања
            </Link>
          </li>
          <li>
            <Link
              to="/kontakt"
              className={
                location.pathname.startsWith("/kontakt")
                  ? classes.activeItem
                  : classes.navItem
              }
            >
              Контакт
            </Link>
          </li>
          <li>
            <Button onClick={buttonNavigate}>Пријави штета</Button>
          </li>
        </ul>
      </nav>
      <nav className={classes.mobileNav}>
        <GiHamburgerMenu />
      </nav>
    </header>
  );
};

export default Header;
