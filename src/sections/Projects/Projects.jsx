import styles from "./ProjectsStyles.module.css";
import DPP from "../../assets/DPP.png";
import pokeCard from "../../assets/pokeCard.png";
import toDoList from "../../assets/toDoList.png";
import calculator from "../../assets/calculator.png";
import ProjectCard from "../../common/ProjectCard.jsx";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h3 className={styles.subTitle}>Browse My Recent</h3>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectCard}>
        <div className={styles.projectsContainer}>
          <ProjectCard src={DPP} />
        </div>
        <h3>Relable DPPs</h3>
        <div className={styles.btnCardSection}>
          <a
            href="https://github.com/DavidAdam1323/eslando-SoCfinal-project"
            target="_blank"
          >
            <button className={styles.cardBtn}>GitHub</button>
          </a>
          <a href="https://eslando.vercel.app/?product=3" target="_blank">
            <button className={styles.cardBtn}>Live Demo</button>
          </a>
        </div>
      </div>
      <div className={styles.projectCard}>
        <div className={styles.projectsContainer}>
          <ProjectCard src={toDoList} />
        </div>
        <h3>Task Tracker</h3>
        <div className={styles.btnCardSection}>
          <a
            href="https://github.com/DavidAdam1323/toDoList-project"
            target="_blank"
          >
            <button className={styles.cardBtn}>GitHub</button>
          </a>
          <a
            href="https://davidadam1323.github.io/toDoList-project/"
            target="_blank"
          >
            <button className={styles.cardBtn}>Live Demo</button>
          </a>
        </div>
      </div>
      <div className={styles.projectCard}>
        <div className={styles.projectsContainer}>
          <ProjectCard src={pokeCard} />
        </div>
        <h3>Pokecard Generator</h3>
        <div className={styles.btnCardSection}>
          <a
            href="https://github.com/DavidAdam1323/pokemon-cardGenerator-project"
            target="_blank"
          >
            <button className={styles.cardBtn}>GitHub</button>
          </a>
          <a
            href="https://davidadam1323.github.io/pokemon-cardGenerator-project/"
            target="_blank"
          >
            <button className={styles.cardBtn}>Live Demo</button>
          </a>
        </div>
      </div>
      <div className={styles.projectCard}>
        <div className={styles.projectsContainer}>
          <ProjectCard src={calculator} />
        </div>
        <h3>Clone Calculator</h3>
        <div className={styles.btnCardSection}>
          <a
            href="https://github.com/DavidAdam1323/calculator-project"
            target="_blank"
          >
            <button className={styles.cardBtn}>GitHub</button>
          </a>
          <a
            href="https://davidadam1323.github.io/calculator-project/"
            target="_blank"
          >
            <button className={styles.cardBtn}>Live Demo</button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
