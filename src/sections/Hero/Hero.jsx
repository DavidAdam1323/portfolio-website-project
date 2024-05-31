import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/hero-img.png";
import themeIcon from "../../assets/sun-icon.png";
import linkedInIcon from "../../assets/linkedin-icon.png";
import gitHubIcon from "../../assets/github-icon.png";
import CV from "../../assets/DavidAdam_CV.pdf";

function Hero() {
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
