import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/hero-img.png";
import sun from "../../assets/sun-icon.png";
import moon from "../../assets/moon-icon.png";
import linkedInLight from "../../assets/linkedin-icon.png";
import linkedInDark from "../../assets/linkedin-icon.png";
import gitHubLight from "../../assets/github-icon.png";
import gitHubDark from "../../assets/github-icon.png";
import CV from "../../assets/DavidAdam_CV.pdf";
import { useTheme } from "../../common/ThemeContex";

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? sun : moon;
  const linkedInIcon = theme === "light" ? linkedInLight : linkedInDark;
  const gitHubIcon = theme === "light" ? gitHubLight : gitHubDark;

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
        <p>
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
