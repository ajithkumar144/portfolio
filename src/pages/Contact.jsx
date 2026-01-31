
import styles from './Contact.module.css';
import Button from '../components/Button';
import whatsappIcon from '../assets/whatsapp.png';
import gmailIcon from '../assets/gmail.png';
import callIcon from '../assets/call.png';

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert('This form is for design purposes only. You can contact me directly using the details below.');
    };

    return (
        <section className={styles.contactSection}>
            <div className={styles.container}>
                <h2 className={`${styles.heading} animate-fadeInUp`}>Get In <span className={styles.highlight}>Touch</span></h2>

                <div className={styles.content}>
                    
                    <div className={`${styles.info} animate-fadeInUp delay-200`}>
                        <h3 className={styles.subHeading}>Let's Talk</h3>
                        <p className={styles.text}>
                            I'm open to frontend developer roles, freelance projects, and learning opportunities.
                        </p>

                        <div className={styles.infoItem}>
                            <img src={callIcon} alt="Phone" />
                            <div>
                                <h4>Phone</h4>
                                <p>+91 8248831196</p>
                            </div>
                        </div>

                        <div className={styles.infoItem}>
                            <img src={gmailIcon} alt="Email" />
                            <div>
                                <h4>Email</h4>
                                <p>ajith28062002@gmail.com</p>
                            </div>
                        </div>

                        <div className={styles.infoItem}>
                            <img src={whatsappIcon} alt="WhatsApp" />
                            <div>
                                <h4>WhatsApp</h4>
                                <p>+91 8248831196</p>
                            </div>
                        </div>
                    </div>

                    
                    <form className={`${styles.form} animate-fadeInUp delay-300`} onSubmit={handleSubmit}>
                        <div className={styles.formGroup}>
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" placeholder="Enter your name" required />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" placeholder="Enter your email address" required />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="message">Message</label>
                            <textarea id="message" rows="5" placeholder="Write your message here" required></textarea>
                        </div>
                        <Button variant="secondary">Send Message</Button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
