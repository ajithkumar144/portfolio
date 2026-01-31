
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
               
                <div className={styles.copyright}>
                    <p>&copy; {new Date().getFullYear()} Ajith Kumar. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
