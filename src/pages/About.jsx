
import styles from './About.module.css';
import profileImg from '../assets/profile photo.png';

const About = () => {
    return (
        <section className={styles.aboutSection}>
            <div className={styles.container}>
                <h2 className={`${styles.heading} animate-fadeInUp`}>About <span className={styles.highlight}>Me</span></h2>

                <div className={styles.content}>
                    <div className={`${styles.imageCol} animate-fadeInUp delay-200`}>
                        <div className={styles.wrapper}>
                            <img src={profileImg} alt="Ajith Kumar" className={styles.image} />
                            <div className={styles.overlay}></div>
                        </div>
                    </div>

                    <div className={`${styles.textCol} animate-fadeInUp delay-300`}>
                        <p className={styles.text}>
                            Hello! I'm <span className={styles.highlight}>Ajith Kumar</span>, a passionate Frontend Developer who enjoys building clean, responsive, and user-friendly web experiences. I love turning ideas into real-world applications using HTML, CSS, JavaScript, React.js, Bootstrap, and I use Git and GitHub to manage code versions, track changes, and collaborate efficiently on projects.
                        </p>
                        <p className={styles.text}>
                            In addition to core frontend development, I actively use prompting techniques and AI agents to improve work efficiency, optimize workflows, and enhance problem-solving. I also have experience with Canva, which helps me create visually appealing designs for my projects.
                        </p>
                        <p className={styles.text}>
                            My aim is to get placed in a good company where I can apply my skills, work on real-world projects, and grow as a professional. I am committed to continuously improving my knowledge in the web development field, learning modern technologies, and becoming a better developer every day.
                        </p>
                        <p className={styles.text}>
                           My Hobbies are content creation and listening to book summaries, especially those related to personal growth, psychology, and success. These habits help me stay Motivated and Disciplined. its continuously improve my mindset.
                        </p>


                        <ul className={styles.infoList}>
                            <li><span>Email:</span> ajith28062002@gmail.com</li>
                            <li><span>Phone:</span> +91 8248831196</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
