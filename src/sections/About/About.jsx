import styles from "./AboutStyles.module.css";

function About() {
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
          <h3 className={styles.aboutTitle}>Experience</h3>
          <article className={styles.text}>
            16+ Weeks Full-Stack Web Development
          </article>
        </div>
        <div className={styles.cardAbout}>
          <h3 className={styles.aboutTitle}>Education</h3>
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
