import { useState } from "react";
import styles from "./NavbarStyles.module.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuButtonClasses = isMenuOpen
    ? `${styles.menuButton} ${styles.menuButtonActive}`
    : styles.menuButton;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <h1 className={styles.navbarLogo}>David.Dev</h1>
        <div className={menuButtonClasses} onClick={toggleMenu}>
          <div className={styles.menuIcon}></div>
        </div>
        <ul
          className={
            isMenuOpen
              ? `${styles.navLinks} ${styles.navLinksShow}`
              : styles.navLinks
          }
        >
          <li>
            <a href="#about" onClick={handleLinkClick}>
              About
            </a>
          </li>
          <li>
            <a href="#experience" onClick={handleLinkClick}>
              Experience
            </a>
          </li>
          <li>
            <a href="#projects" onClick={handleLinkClick}>
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" onClick={handleLinkClick}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
