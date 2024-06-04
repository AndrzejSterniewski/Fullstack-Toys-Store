import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import { useSelector } from 'react-redux';
import styles from './Header.module.scss';
import { FaShoppingCart } from "react-icons/fa";
import Modal from "../../common/Modal/Modal";
import { getTotalQuantity } from '../../../redux/cartRedux';

const Header = () => {

    const totalQuantity = useSelector(getTotalQuantity);
    const [openModal, setOpenModal] = useState(false);

    return (
        <nav className={styles.header}>
            <div>
                <NavLink to="/" className={styles.name}>toyStore</NavLink>
            </div>
            <div className={styles.nav}>
                {/* <NavLink to="cart" className={styles.basket}><FaShoppingCart className={styles.basket}/>Koszyk</NavLink> */}
                {/* <NavLink onClick={() => {
                    setOpenModal(true);
                }} className={styles.cart}><FaShoppingCart className={styles.cartIcon} /><span className={styles.cartCounter}>{totalQuantity}</span>Cart</NavLink>
                
                {(openModal && <Modal
                    // open={openModal}
                    onClose={() => {
                        setOpenModal(false);
                    }}
                />)} */}

                <NavLink to="/cart" className={styles.cart}><FaShoppingCart className={styles.cartIcon} /><span className={styles.cartCounter}>{totalQuantity}</span>Cart</NavLink>
                <NavLink to="/order">Order</NavLink>
                <NavLink to="/about">About</NavLink>
            </div>
        </nav>
    )
};

export default Header;


// <a href='#'
//                       onClick={() => {
//                         setOpenModal(true);
//                       }}
//                     >
//                       <FontAwesomeIcon className={styles.icon} icon={faUser} />{' '}
//                       <span className={styles.topBarIconName}>Login</span>
//                     </a>