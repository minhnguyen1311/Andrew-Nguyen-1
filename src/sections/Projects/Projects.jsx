import styles from './ProjectsStyles.module.css';
import mentalSphere from '../../assets/mentalSphere.png';
import moonScape from '../../assets/moonScape.png';
import brickBuster from '../../assets/brickBuster.png';
import AR_Visualization from '../../assets/AR_Visualization.png';
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

          <ProjectCard 
            src={brickBuster}
            link="https://github.com/minhnguyen1311/CS460student/tree/main/04" 
            h3="BrickBuster"  
            p="Atari Breakout Game"
          />

          <ProjectCard 
            src={AR_Visualization}
            link="https://github.com/minhnguyen1311/CS460student/tree/main/05/AR_visualization" 
            h3="AR Visualization"  
            p="Product Visualization"
          />
        </div>
    </section>
  );
}

export default Projects;