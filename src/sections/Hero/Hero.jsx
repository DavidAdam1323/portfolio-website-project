import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/hero-img.png";
import sun from "../../assets/sun-icon.png";
import moon from "../../assets/moon-icon.png";
import linkedinLight from "../../assets/linkedin-iconWhite.png";
import linkedinDark from "../../assets/linkedin-iconDark.png";
import githubLight from "../../assets/github-iconWhite.png";
import githubDark from "../../assets/github-iconDark.png";
import CV from "../../assets/DavidAdam_CV.pdf";
import { useTheme } from "../../common/ThemeContext.jsx";

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "dark" ? moon : sun;
  const linkedInIcon = theme === "dark" ? linkedinLight : linkedinDark;
  const gitHubIcon = theme === "dark" ? githubLight : githubDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          className={styles.hero}
          src={heroImg}
          alt="Profile Picture of David Adam Silva"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color Mode Icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          David <br /> Adam <br /> Silva
        </h1>
        <h2>Front-End Developer</h2>
        <span>
          <a href="https://www.linkedin.com/in/davidadamsilva/">
            <img src={linkedInIcon} alt="LinkedIn Icon" />
          </a>
          <a href="https://github.com/DavidAdam1323">
            <img src={gitHubIcon} alt="GitHub Icon" />
          </a>
        </span>
        <p className={styles.description}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe libero
          dolore natus deserunt voluptatibus. Similique odio deleniti,
          perspiciatis modi, earum sint consequuntur dignissimos error, impedit
          qui nam labore dolorem suscipit.
        </p>
        <a href={CV} download>
          <button className="hover">Resumé</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
