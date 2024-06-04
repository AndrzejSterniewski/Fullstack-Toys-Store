import styles from './Modal.module.scss';
import Button from '../Button/Button';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getProductById } from '../../../redux/productsRedux';
import { IMGS_URL } from '../../../config';

const Modal = ({ onClose }) => {

    const navigate = useNavigate();

    const { id } = useParams();
    const product = useSelector((state) => getProductById(state, id));

    const handleClose = () => {
        // navigate('/');
        onClose();
    };

    const handleSubmit = () => {
        navigate('/cart');
        onClose();
    }

    return (
        <div className={styles.modalBackground} onClick={onClose}>
            <div className={styles.modalContainer}
                onClick={e => {
                    e.stopPropagation();
                }}
            >
                <h1>Product added to cart</h1>
                <div className={styles.miniCart_product}>
                    <div className={styles.miniCart_product_imgWrapper}>
                        <img
                            className={styles.miniCart_product_imgWrapper_img}
                            src={IMGS_URL + product.main_img}
                            alt={product.name}
                        />
                    </div>
                    <div>{product.name}</div>
                    <div>{product.quantity}</div>
                </div>

                <div className={styles.modalButtons}>
                    {/* <Button as={Link} to={`/product/${product.id}`} content="dodaj do koszyka" onClick={() => addToCart(product)} /> */}
                    <Button onClick={handleClose} content="continue shopping" />
                    {/* <button className={styles.modalActionBtn} onClick={handleClose}>złóż zamówienie</button> */}
                    {/* <Button as={Link} to={"order"} content="order summary" onClick={handleSubmit}/> */}
                    <Button onClick={handleSubmit} content="go to cart" />
                </div>

            </div>
        </div>
    )
};

export default Modal;