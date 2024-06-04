import styles from "./AboutStyles.module.css";

function About() {
  return (
    <section id="about" className={styles.container}>
      <h3 className={styles.subTitle}>Get To Know More</h3>
      <h1>About Me</h1>
      <div className={styles.cardSection}>
        <div className={styles.cardAbout}>
          <h3 className={styles.aboutTitle}>Experience</h3>
          <p className={styles.text}>16+ Weeks Full-Stack Web Development</p>
        </div>
        <div className={styles.cardAbout}>
          <h3 className={styles.aboutTitle}>Education</h3>
          <p className={styles.text}>
            Secondary Education - Brazil <br />
            General Certificate - (GCSE) Equivalent
          </p>
        </div>
      </div>
      <div className={styles.aboutDetails}>
        <p>
          I'm David Adam Silva, originally from Brazil and now based in the UK.
          After two decades as a guitarist, I've transitioned to full-stack
          JavaScript web development. As a School of Code graduate, I'm skilled
          in JavaScript, Node.js, and React.
        </p>{" "}
        <p>
          I thrive on creativity and problem-solving, and enjoy playing guitar,
          reading self-development books, riding motorcycles, and creating art.
          Inspired by Stoicism, I'm always striving for personal growth. Let's
          connect and build something amazing together!
        </p>
      </div>
    </section>
  );
}

export default About;
