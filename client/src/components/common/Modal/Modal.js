import styles from './Modal.module.scss';
import Button from '../Button/Button';
import { Link, useNavigate } from 'react-router-dom';
import Cart from '../../pages/Cart/Cart';

const Modal = ({ onClose }) => {

    const navigate = useNavigate();

    const handleClose = () => {
        // navigate('/');
        onClose();
    };

    const handleSubmit = () => {
        navigate('/order');
        onClose();
    }

    return (
        <div className={styles.modalBackground} onClick={onClose}>
            <div className={styles.modalContainer}
                onClick={e => {
                    e.stopPropagation();
                }}
            >
                <Cart />

                <div className={styles.modalButtons}>

                    {/* <Button as={Link} to={`/product/${product.id}`} content="dodaj do koszyka" onClick={() => addToCart(product)} /> */}
                    <Button onClick={handleClose} content="continue shopping" />
                    {/* <button className={styles.modalActionBtn} onClick={handleClose}>złóż zamówienie</button> */}
                    {/* <Button as={Link} to={"order"} content="order summary" onClick={handleSubmit}/> */}
                    <Button onClick={handleSubmit} content="order summary" />
                </div>

            </div>
        </div>
    )
};

export default Modal;