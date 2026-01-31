
import PropTypes from 'prop-types';
import styles from './Button.module.css';

const Button = ({ children, onClick, variant = 'primary', href, target }) => {
    const className = `${styles.button} ${styles[variant]}`;

    if (href) {
        return (
            <a href={href} className={className} target={target} rel="noopener noreferrer">
                {children}
            </a>
        );
    }

    return (
        <button onClick={onClick} className={className}>
            {children}
        </button>
    );
};

Button.propTypes = {
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
    variant: PropTypes.oneOf(['primary', 'secondary', 'outline']),
    href: PropTypes.string,
    target: PropTypes.string,
};

export default Button;
