import styles from "./AboutStyles.module.css";
import experienceIconWhite from "../../assets/exp-iconWhite.png";
import experienceIconDark from "../../assets/exp-iconDark.png";
import educationIconWhite from "../../assets/education-iconWhite.png";
import educationIconDark from "../../assets/education-iconDark.png";
import { useTheme } from "../../common/ThemeContext.jsx";

function About() {
  const { theme } = useTheme();

  const experienceIcon =
    theme === "light" ? experienceIconDark : experienceIconWhite;
  const educationIcon =
    theme === "light" ? educationIconDark : educationIconWhite;

  return (
    <section id="about" className={styles.container}>
      <h3 className={styles.subTitle}>Get To Know More</h3>
      <h1>About Me</h1>
      <div className={styles.aboutDetails}>
        <p>Hi there, I’m David Adam!</p>
        <p>
          My journey started as a passionate guitarist, spending 21 years
          performing, tutoring, and collaborating with bands and solo artists.
          Like many, the pandemic pushed me to explore new horizons, and that's
          when I discovered my love for software engineering.
        </p>
        <p>
          Shifting from the stage to the screen, I’ve found immense joy in
          coding and problem-solving. My musical background has given me a
          unique take on creativity and collaboration, which I now apply to my
          work as a software engineer. I’m dedicated to building a strong career
          in this dynamic field and continuously improving my skills to deliver
          impactful and innovative solutions.
        </p>
        <p>Let’s connect and create something amazing together!</p>
      </div>
      <div className={styles.cardSection}>
        <div className={styles.cardAbout}>
          <div className={styles.cardTitleCERT}>
            <img src={experienceIcon} alt="Experience Icon" />
            <h3 className={styles.aboutTitle}>Experience</h3>
          </div>
          <article className={styles.text}>
            16+ Weeks Full-Stack Web Development
          </article>
        </div>
        <div className={styles.cardAbout}>
          <div className={styles.cardTitleCERT}>
            <img src={educationIcon} alt="Education Icon" />
            <h3 className={styles.aboutTitle}>Education</h3>
          </div>
          <article className={styles.text}>
            Secondary Education - Brazil <br />
            General Certificate - (GCSE) Equivalent
          </article>
        </div>
      </div>
    </section>
  );
}

export default About;
