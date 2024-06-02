import styles from "./ProjectsStyles.module.css";
import pokeCard from "../../assets/pokeCard.png";
import ProjectCard from "../../common/ProjectCard.jsx";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h3 className={styles.subTitle}>Browse My Recent</h3>
      <h1 className="sectionTitle">Projects</h1>
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
    </section>
  );
}

export default Projects;
