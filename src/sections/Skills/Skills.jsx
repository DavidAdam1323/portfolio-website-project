import styles from "./SkillsStyles.module.css";
import checkMarkIcon from "../../assets/checkWhite.png";
import SkillsList from "../../common/SkillsList";

function Skills() {
  return (
    <section id="skills" className={styles.container}>
      <h3>Explore My</h3>
      <h1 className="sectionTitle">Experience</h1>
      <div className={styles.frontEndList}>
        <div className={styles.skillsList}>
          <h3>Frontend Development</h3>
          <SkillsList src={checkMarkIcon} skill="HTML" />
          <SkillsList src={checkMarkIcon} skill="CSS" />
          <SkillsList src={checkMarkIcon} skill="JavaScript" />
          <SkillsList src={checkMarkIcon} skill="TypeScript" />
          <SkillsList src={checkMarkIcon} skill="React" />
          <SkillsList src={checkMarkIcon} skill="Figma" />
          <SkillsList src={checkMarkIcon} skill="UX|UI" />
          <SkillsList src={checkMarkIcon} skill="Tailwind CSS" />
          <SkillsList src={checkMarkIcon} skill="Git & GitHub" />
        </div>
      </div>

      <div className={styles.backEndList}>
        <div className={styles.skillsList}>
          <h3>Backend Development</h3>
          <SkillsList src={checkMarkIcon} skill="Node JS" />
          <SkillsList src={checkMarkIcon} skill="Express JS" />
          <SkillsList src={checkMarkIcon} skill="SQL" />
          <SkillsList src={checkMarkIcon} skill="Postgres" />
          <SkillsList src={checkMarkIcon} skill="Python" />
          <SkillsList src={checkMarkIcon} skill="TensorFlow" />
          <SkillsList src={checkMarkIcon} skill="Playwright" />
          <SkillsList src={checkMarkIcon} skill="Docker" />
          <SkillsList src={checkMarkIcon} skill="GitHub Actions" />
        </div>
      </div>
    </section>
  );
}

export default Skills;
