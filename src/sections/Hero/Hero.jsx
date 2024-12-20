import styles from './HeroStyles.module.css';
import heroImg from '../../assets/hero-img.png';

function Hero() {
  return (
    <section id="hero">
        <div className={styles.colorModeContainer}>
            <img 
                className={styles.hero}
                src={heroImg} 
                alt="Profile picture of Andrew Nguyen" 
            />        
        </div>
    </section>
  );
}
 
export default Hero;