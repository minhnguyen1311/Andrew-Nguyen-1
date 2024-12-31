import styles from './HeroStyles.module.css';
import heroImg from '../../assets/hero-img.png';
import heroImg2 from '../../assets/profile_pic.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/Resume-for-React.pdf';
import { useTheme } from '../../common/ThemeContext';

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className={styles.container}>
        <div className={styles.colorModeContainer}>
            <img 
                className={styles.hero}
                src={heroImg2} 
                alt="Profile picture of Andrew Nguyen" 
            />
            <img 
                className={styles.colorMode}
                src={themeIcon}
                alt="Color mode icon"
                onClick={toggleTheme}
            />
        </div>
        <div className={styles.info}>
            <h1>
                Andrew
                <br />
                Nguyen
            </h1>
            <h2>
                Software Developer
            </h2>
            <span>
                <a href="https://github.com/minhnguyen1311" target="_blank">
                    <img src={githubIcon} alt="Github icon"></img>
                </a>
                <a href="https://www.linkedin.com/in/andrew-nguyen-an2002/" target="_blank">
                    <img src={linkedinIcon} alt="LinkedIn icon"></img>
                </a>
            </span>
            <p className={styles.description}>
                With a passion for helping people and contributing to this world 
                no matter what I do.
            </p>
            <a href={CV} download>
                <button className="hover"> Resume </button>
            </a>
        </div>
    </section>
  );
}
 
export default Hero;