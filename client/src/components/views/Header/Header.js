import { NavLink } from "react-router-dom";
import styles from './Header.module.scss';

const Header = () => {
    return (
        <nav className={styles.header}>
            <div className={styles.icon}>
                <NavLink to="/">Home</NavLink>
            </div>
            <div className={styles.nav}>
                <NavLink to="cart">Cart</NavLink>
                <NavLink to="order">Order</NavLink>
                <NavLink to="about">About</NavLink>
            </div>
        </nav>
    )
};

export default Header;