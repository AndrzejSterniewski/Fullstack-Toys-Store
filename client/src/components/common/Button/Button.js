import styles from './Button.module.scss';

const Button = ({ content, onClick }) => {
    return(
        <button className={styles.button} onClick={onClick}>
            {content}
        </button>
    )
};

export default Button;