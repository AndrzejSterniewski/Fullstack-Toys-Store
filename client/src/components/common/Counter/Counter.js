import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquarePlus } from '@fortawesome/free-solid-svg-icons';
import { faSquareMinus } from '@fortawesome/free-solid-svg-icons';
import styles from './Counter.module.scss';

const Counter = () => {
    return (
        <div className={styles.counter_container}>
            <FontAwesomeIcon icon={faSquareMinus} className={styles.count_button} />
            <input></input>
            <FontAwesomeIcon icon={faSquarePlus} className={styles.count_button} />
        </div>
    )
};

export default Counter;