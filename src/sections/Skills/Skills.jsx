import styles from './SkillsStyles.module.css';
import checkMarkIcon from '../../assets/checkmark-dark.svg';
import SkillList from '../../common/SkillList';

function Skills() {
  return (
    <section id="skills" className={styles.container}>
        <h1>Skills</h1>
        <div className={styles.skillList}>
            <SkillList src={checkMarkIcon} skill="HTML" />
            <SkillList src={checkMarkIcon} skill="CSS" />
            <SkillList src={checkMarkIcon} skill="JavaScript" />
            <SkillList src={checkMarkIcon} skill="TypeScript" />
            <SkillList src={checkMarkIcon} skill="Node" />
        </div>
        <hr />
        <div className={styles.skillList}>
            <SkillList src={checkMarkIcon} skill="React" />
            <SkillList src={checkMarkIcon} skill="Angular" />
            <SkillList src={checkMarkIcon} skill="Three" />
            <SkillList src={checkMarkIcon} skill="Swift" />
            <SkillList src={checkMarkIcon} skill="Git" />
        </div>
        <hr />
        <div className={styles.skillList}>
            <SkillList src={checkMarkIcon} skill="Python" />
            <SkillList src={checkMarkIcon} skill="Java" />
            <SkillList src={checkMarkIcon} skill="C++" />
            <SkillList src={checkMarkIcon} skill="MATLAB" />
            <SkillList src={checkMarkIcon} skill="Racket" />
        </div>
    </section>
  );
}

export default Skills;