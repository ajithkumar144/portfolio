import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import Button from './Button';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Skills', path: '/skills' },
        { name: 'Projects', path: '/projects' },
        { name: 'About', path: '/about-me' },
        { name: 'Contact', path: '/contact-me' },
    ];

    return (
        <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <Link to="/">Portfolio</Link>
                </div>

                <div className={`${styles.menuIcon} ${isOpen ? styles.active : ''}`} onClick={toggleMenu}>
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                </div>

                <ul className={`${styles.navMenu} ${isOpen ? styles.active : ''}`}>
                    {navLinks.map((link, index) => (
                        <li key={index} className={styles.navItem} style={{ animationDelay: `${index * 0.1}s` }}>
                            <NavLink
                                to={link.path}
                                className={({ isActive }) => isActive ? `${styles.navLink} ${styles.activeLink}` : styles.navLink}
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </NavLink>
                        </li>
                    ))}
                    <li className={styles.navItemButton} style={{ animationDelay: `${navLinks.length * 0.1}s` }}>
                        <Button variant="primary" href="/public/hhhhh.pdf" target="_blank">
                            Download Resume
                        </Button>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
