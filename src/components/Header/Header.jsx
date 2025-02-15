import React, { useState } from "react";
import classes from "./Header.module.css";
import logoImg from "../../assets/logo.png";
import Button from "../Button/Button";
import { GiHamburgerMenu } from "react-icons/gi";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { IoClose } from "react-icons/io5";

const Header = () => {
  const [mobileNav, setMobileNav] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const logoNavigate = (e) => {
    e.preventDefault();
    navigate("/");
  };

  const handleCloseNav = () => {
    setMobileNav(false);
  };

  const handleMobileNav = () => {
    setMobileNav((prevNav) => !prevNav);
  };
  const buttonNavigate = (e) => {
    e.preventDefault();
    navigate("/prijavi-steta");
  };
  return (
    <>
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
                  location.pathname === "/"
                    ? classes.activeItem
                    : classes.navItem
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
              <Link
                to="/blog"
                className={
                  location.pathname.startsWith("/blog")
                    ? classes.activeItem
                    : classes.navItem
                }
              >
                Блог
              </Link>
            </li>
            <li>
              <Button onClick={buttonNavigate}>Пријави штета</Button>
            </li>
          </ul>
        </nav>
        <div className={classes.mobileNavButton}>
          <GiHamburgerMenu
            className={classes.menuIcon}
            onClick={handleMobileNav}
          />
        </div>
      </header>
      {mobileNav && (
        <nav className={classes.mobileNav}>
          <IoClose className={classes.closeIcon} onClick={handleCloseNav} />
          <ul className={classes.mobileNavItems}>
            <li>
              <Link
                to="/"
                className={
                  location.pathname === "/"
                    ? classes.activeItem
                    : classes.navItem
                }
                onClick={handleCloseNav}
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
                onClick={handleCloseNav}
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
                onClick={handleCloseNav}
              >
                Контакт
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                className={
                  location.pathname.startsWith("/blog")
                    ? classes.activeItem
                    : classes.navItem
                }
              >
                Блог
              </Link>
            </li>
            <li>
              <Button onClick={(buttonNavigate, handleCloseNav)}>
                Пријави штета
              </Button>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
};

export default Header;
