
import styles from './Projects.module.css';

const projectsData = [
    {
        id: 1,
        title: 'E-Commerce Dashboard',
        description: 'A comprehensive dashboard for managing products, orders, and analytics with real-time data visualization.',
        tech: ['React', 'Redux', 'Chart.js', 'Firebase'],
        demoLink: 'https://youtube.com',
        repoLink: 'https://github.com/ajithkumar144',
    },
    {
        id: 2,
        title: 'Social Media App',
        description: 'A fully functional social media platform allowing users to post, like, and comment on updates in real-time.',
        tech: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
        demoLink: '#',
        repoLink: 'https://github.com/ajithkumar144',
    },
    {
        id: 3,
        title: 'Portfolio V1',
        description: 'My previous personal portfolio website showcasing my early work and development journey.',
        tech: ['HTML', 'CSS', 'JavaScript'],
        demoLink: '#',
        repoLink: 'https://github.com/ajithkumar144',
    },
    {
        id: 4,
        title: 'Task Management Tool',
        description: 'A productivity application for tracking tasks, setting deadlines, and collaborating with team members.',
        tech: ['React', 'TypeScript', 'Tailwind'],
        demoLink: '#',
        repoLink: 'https://github.com/ajithkumar144',
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
