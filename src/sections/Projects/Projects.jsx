import styles from './ProjectsStyles.module.css';
import mentalSphere from '../../assets/mentalSphere.png';
import moonScape from '../../assets/moonScape.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return ( 
    <section id="projects" className={styles.container}>
        <h1 className="sectionTitle"> Projects </h1>
        <div className={styles.projectsContainer}>
          <ProjectCard 
            src={mentalSphere} 
            link="https://github.com/minhnguyen1311/MentalSphere" 
            h3="MentalSphere"  
            p="Interactive 3D Globe"
          />

          <ProjectCard 
            src={moonScape} 
            link="https://github.com/asapsui/MoonScape" 
            h3="MoonScape"  
            p="FPS Game"
          />
        </div>
    </section>
  );
}

export default Projects;