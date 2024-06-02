import styles from "./ProjectsStyles.module.css";
import pokeCard from "../../assets/pokeCard.png";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <a href="https://github.com/DavidAdam1323/pokemon-cardGenerator-project">
          <img className="hover" src={pokeCard} alt="Pokemon Card" />
        </a>
      </div>
    </section>
  );
}

export default Projects;
