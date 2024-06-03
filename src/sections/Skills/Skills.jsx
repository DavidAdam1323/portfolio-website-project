import styles from "./SkillsStyles.module.css";
import checkMarkLight from "../../assets/checkWhite.png";
import checkMarkDark from "../../assets/checkDark.png";
import SkillsList from "../../common/SkillsList";
import { useTheme } from "../../common/ThemeContext.jsx";

function Skills() {
  const { theme } = useTheme();

  const checkMarkIcon = theme === "dark" ? checkMarkLight : checkMarkDark;

  return (
    <section id="skills" className={styles.container}>
      <h3>Explore My</h3>
      <h1 className="sectionTitle">Experience</h1>
      <div className={styles.containerList}>
        <div className={styles.skillsList}>
          <h3>
            Frontend <br />
            Development
          </h3>
          <div className={styles.techList}>
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
      </div>

      <div className={styles.containerList}>
        <div className={styles.skillsList}>
          <h3>
            Backend <br />
            Development
          </h3>
          <div className={styles.techList}>
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
      </div>
    </section>
  );
}

export default Skills;
