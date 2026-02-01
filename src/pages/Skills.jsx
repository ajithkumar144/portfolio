
import styles from './Skills.module.css';

// Import images
import htmlIcon from '../assets/html.png';
import cssIcon from '../assets/css.png';
import jsIcon from '../assets/javascript.png';
import reactIcon from '../assets/react.png';
import bootstrapIcon from '../assets/bootstrap.png';
import gitIcon from '../assets/git.png';
import promptIcon from '../assets/Prompt engineering.png';
import canvaIcon from '../assets/canva.png';


const skillsData = [
    {
        category: 'Coding Skills',
        items: [
            { name: 'HTML', icon: htmlIcon },
            { name: 'CSS', icon: cssIcon },
            { name: 'JavaScript', icon: jsIcon },
            { name: 'React JS', icon: reactIcon },
            { name: 'Bootstrap', icon: bootstrapIcon },
        ]
    },
    {
        category: 'Version Control & Group Projects',
        items: [
            { name: 'Git & GitHub', icon: gitIcon }
        ]
    },
    {
        category: 'AI & Productivity',
        items: [
            { name: 'Prompt Engineering (Basic)',purpose:"For better AI responses", icon: promptIcon },
            
        ]
    },
    {
        category: 'Design Tools',
        items: [
            { name: 'Canva',purpose:"For creating designs", icon: canvaIcon }
        ]
    }
];


const Skills = () => {
    return (
        <section className={styles.skillsSection}>
            <div className={styles.container}>
                <h2 className={`${styles.heading} animate-fadeInUp`}>
                    My <span className={styles.highlight}>Skills</span>
                </h2>

                {skillsData.map((group, groupIndex) => (
                    <div key={groupIndex}>
                        
                        
                        <h3 className={`${styles.categoryTitle} animate-fadeInUp`}>
                            {group.category}
                        </h3>

                        <div className={styles.grid}>
                            {group.items.map((skill, index) => (
                                <div
                                    key={index}
                                    className={`${styles.card} animate-fadeInUp`}
                                    style={{ animationDelay: `${index * 0.1}s` }}
                                >
                                    <div className={styles.iconWrapper}>
                                        <img
                                            src={skill.icon}
                                            alt={skill.name}
                                            className={styles.icon}
                                        />
                                    </div>
                                    <h3 className={styles.skillName}>
                                        {skill.name}
                                    </h3>
                                    <p className={styles.purpose}>{skill.purpose}</p>
                                </div>
                            ))}
                        </div>

                    </div>
                ))}
            </div>
        </section>
    );
};


export default Skills;
