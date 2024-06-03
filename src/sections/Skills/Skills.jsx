import styles from "./SkillsStyles.module.css";
import checkMarkIcon from "../../assets/checkWhite.png";
import SkillsList from "../../common/SkillsList";

function Skills() {
  return (
    <section id="skills" className={styles.container}>
      <h3>Explore My</h3>
      <h1>Experience</h1>
      <div className={styles.skillsList}>
        <SkillsList src={checkMarkIcon} skill="HTML" />
        <SkillsList src={checkMarkIcon} skill="CSS" />
        <SkillsList src={checkMarkIcon} skill="JavaScript" />
        <SkillsList src={checkMarkIcon} skill="TypeScript" />
        <SkillsList src={checkMarkIcon} skill="UX|UI" />
      </div>
      <div className={styles.skillsList}>
        <SkillsList src={checkMarkIcon} skill="Node JS" />
        <SkillsList src={checkMarkIcon} skill="Express JS" />
        <SkillsList src={checkMarkIcon} skill="PostgreSQL" />
        <SkillsList src={checkMarkIcon} skill="Git" />
        <SkillsList src={checkMarkIcon} skill="GitHub" />
      </div>
    </section>
  );
}

export default Skills;
