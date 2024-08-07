import { useState } from "react";
import styles from "./NavbarStyles.module.css";
// import logo from "../../assets/DAS.Dev-logo1.svg";

import Logo from "../../assets/DAS.Dev-logo1.svg"; // Notice the capital L in Logo

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
    <>
      <nav className={styles.desktopNavBar}>
        {/* <Logo className={styles.logo} /> */}
        <div>
          <img className={styles.logo} src={Logo} alt="DAS.Dev" />
        </div>
        <ul className={styles.navLinks}>
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
      </nav>
      <nav className={styles.mobileNavBar}>
        <h1 className={styles.logo}>D.Dev</h1>
        <div className={styles.hamburgerMenu}>
          <div className={menuButtonClasses} onClick={toggleMenu}>
            <div className={styles.menuIcon}></div>
          </div>
        </div>
        {isMenuOpen && (
          <ul className={`${styles.navLinks} ${styles.navLinksShow}`}>
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
        )}
      </nav>
    </>
  );
};

export default Navbar;
