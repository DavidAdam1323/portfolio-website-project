import { useState } from "react";
import styles from "./NavbarStyles.module.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const classes = menuOpen
    ? `${styles.menuIcon} ${styles.active}`
    : styles.menuIcon;

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <h1 className={styles.logo}>David.Dev</h1>
        <div className={classes} onClick={toggleMenu}>
          <div className={styles.icon}></div>
        </div>
        <ul
          className={
            menuOpen ? `${styles.navLinks} ${styles.show}` : styles.navLinks
          }
        >
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
