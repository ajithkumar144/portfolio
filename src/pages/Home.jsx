import { Link } from 'react-router-dom';
import styles from './Home.module.css';
import Button from '../components/Button';
import profileImg from '../assets/profile photo.png';

const Home = () => {
    return (
        <section className={styles.home}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <h3 className={`${styles.subtitle} animate-fadeInUp delay-100`}>Hello, I'm</h3>
                    <h1 className={`${styles.title} animate-fadeInUp delay-200`}>Ajith Kumar</h1>
                    <h2 className={`${styles.description} animate-fadeInUp delay-300`}>And I'm a <span className={styles.highlight}>Frontend Web Developer</span></h2>

                    <p className={`${styles.text} animate-fadeInUp delay-400`}>
                        I build modern, responsive, and scalable web applications using React,
                        focused on performance, clean UI, and smooth user experiences.

                    </p>

                    <div className={`${styles.buttons} animate-fadeInUp delay-500`}>
                        <Button variant="secondary" onClick={() => window.open('https://github.com/ajithkumar144', '_blank')}>View GitHub Profile</Button>
                        <Link to="/contact-me">
                            <Button variant="outline">Contact Me</Button>
                        </Link>
                    </div>
                </div>

                <div className={`${styles.imageContainer} animate-fadeIn delay-300`}>
                    <div className={`${styles.blob} animate-float`}></div>
                    <div className={styles.imageWrapper}>
                        <img src={profileImg} alt="Ajith Kumar" className={styles.profileImage} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;
