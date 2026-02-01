
import styles from './Projects.module.css';

const projectsData = [
    {
        id: 1,
        title: 'E-Commerce Website (Shopzi)',
        description: 'Developed a responsive E-commerce interface with product listing, filtering, add-to-cart and form validation features',
        tech: ['React.js', 'JavaScript', 'HTML', 'CSS'],
        demoLink: 'https://shopzi144.netlify.app/',
        repoLink: 'https://github.com/ajithkumar144/shopzi.git',
    },
    {
        id: 2,
        title: 'To-Do List',
        description: 'A simple web-based to-do list app that lets users add, view, and manage their daily tasks efficiently..',
        tech: ['React.js', 'JavaScript', 'HTML', 'CSS'],
        demoLink: 'https://todolist144.netlify.app/',
        repoLink: 'https://github.com/ajithkumar144/To-Do-List.git',
    },
    {
        id: 3,
        title: 'Weather App',
        description: 'A clean and responsive weather app that displays real-time weather information based on user input.',
        tech: ['HTML', 'CSS', 'JavaScript', 'React.js'],
        demoLink: 'https://weather144.netlify.app/',
        repoLink: 'https://github.com/ajithkumar144/weather-app.git',
    },
    {
        id: 4,
        title: 'Currency Converter',
        description: 'A user-friendly currency converter web app that lets users quickly convert amounts between different global currencies.',
        tech: ['React.js', 'JavaScript', 'HTML', 'CSS'],
        demoLink: 'https://currencyconverter144.netlify.app/',
        repoLink: 'https://github.com/ajithkumar144/currency-converter.git',
    },
    {
        id: 5,
        title: 'Qr Code Generator',
        description: 'A simple web app that instantly generates QR codes from text or URLs for easy sharing and scanning.',
        tech: ['React.js', 'JavaScript', 'HTML', 'CSS'],
        demoLink: 'https://qrcodegenerator144.netlify.app/',
        repoLink: 'https://github.com/ajithkumar144/qr-code-generator.git',
    },
    {
        id: 6,
        title: 'BMI-Calculator',
        description: 'A user-friendly web app that calculates a persons Body Mass Index (BMI) to assess their health status.',
        tech: ['React.js', 'JavaScript', 'HTML', 'CSS'],
        demoLink: 'https://bmicalculator144.netlify.app/',
        repoLink: 'https://github.com/ajithkumar144/BMI-calculator.git',
    },
    {
        id: 7,
        title: 'Portfolio Website',
        description: 'A personal portfolio website showcasing my skills, projects, and professional profile in a clean, modern layout.',
        tech: ['React.js', 'JavaScript', 'HTML', 'CSS'],
        demoLink: 'https://ajithkumar144.netlify.app/',
        repoLink: 'https://github.com/ajithkumar144/portfolio.git',
    },
];

const Projects = () => {
    return (
        <section className={styles.projectsSection}>
            <div className={styles.container}>
                <h2 className={`${styles.heading} animate-fadeInUp`}>Recent <span className={styles.highlight}>Projects</span></h2>

                <div className={styles.grid}>
                    {projectsData.map((project, index) => (
                        <div
                            key={project.id}
                            className={`${styles.card} animate-fadeInUp`}
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className={styles.cardContent}>
                                <div className={styles.top}>
                                    <div className={styles.folderIcon}>
                                        <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="feather feather-folder"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                                    </div>
                                    <div className={styles.links}>
                                        <a href={project.repoLink} target="_blank" rel="noopener noreferrer" aria-label="GitHub Repo">
                                            <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                                        </a>
                                        <a href={project.demoLink} target="_blank" rel="noopener noreferrer" aria-label="Live Demo">
                                            <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-external-link"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                                        </a>
                                    </div>
                                </div>

                                <a href={project.demoLink} target="_blank" rel="noopener noreferrer" ><h3 className={styles.title}>{project.title}</h3>
                                <p className={styles.description}>{project.description}</p>
                                </a>
                            </div>
                            
                            <ul className={styles.techList}>
                                <li>Technologies Used:</li>
                                {project.tech.map((tech, i) => (
                                    <li key={i}>{tech}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
