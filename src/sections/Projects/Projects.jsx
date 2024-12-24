import styles from './ProjectsStyles.module.css';
import mentalSphere from '../../assets/mentalSphere.png';

function Projects() {
  return ( 
    <section id="projects" className={styles.container}>
        <h1 className="sectionTitle"> Projects </h1>
        <div className={styles.projectsContainer}>
            <a 
                href="https://github.com/minhnguyen1311/MentalSphere"
                target="_blank">
                <img className="hover" src={mentalSphere} alt="Sphere logo" />
                <h3>MentalSphere</h3>
                <p>Interactive 3D Globe</p>
            </a>
        </div>
    </section>
  );
}

export default Projects;