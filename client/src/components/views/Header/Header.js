import { NavLink } from "react-router-dom";
import styles from './Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
        <nav className={styles.header}>
            <div>
                <NavLink to="/" className={styles.name}>toyStore</NavLink>
            </div>
            <div className={styles.nav}>
                <NavLink to="cart"><FontAwesomeIcon icon={faCartShopping} className={styles.basket} />Koszyk</NavLink>
                <NavLink to="order">Zamówienie</NavLink>
                <NavLink to="about">O sklepie</NavLink>
            </div>
        </nav>
    )
};

export default Header;