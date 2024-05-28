import styles from './Cart.module.scss';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { IMGS_URL } from "../../../config";
import { getAllCartProducts, getAllProductsPrice, getTotalQuantity, changeQuantity, removeProduct } from '../../../redux/cartRedux';
import Button from '../../common/Button/Button';
import Counter from '../../common/Counter/Counter';
import { IoTrashBin } from "react-icons/io5";


const Cart = () => {

    const cartProducts = useSelector(getAllCartProducts);
    const totalPrice = useSelector(getAllProductsPrice);
    const totalQuantity = useSelector(getTotalQuantity);
    const [quantity, setQuantity] = useState(
        cartProducts.map((product) => product.quantity),
    );
    const [comments, setComments] = useState({});

    const dispatch = useDispatch();

    const handleQuantityChange = (productId, index, quantity) => {
        setQuantity((oldQuantity) => {
            const newQuantity = [...oldQuantity];
            newQuantity[index] = quantity;
            return newQuantity;
        });
        dispatch(changeQuantity({ id: productId, quantity }));
    };

    const handleDelete = (id) => {
        dispatch(removeProduct(id));
    };

    return (
        <section className={styles.cart}>
            <h1 className={styles.cart_title}>Your cart:</h1>
            <div>
                {cartProducts.map((product, index) => (
                    <div key={index} className={styles.cart_product}>
                        <div className={styles.cart_product_imgWrapper}>
                            <img
                                className={styles.cart_product_imgWrapper_img}
                                src={IMGS_URL + product.main_img}
                                alt={product.name}
                            />
                        </div>
                        <div>{product.name}</div>
                        <Counter
                            number={product.quantity}
                            countProduct={(quantity) =>
                                handleQuantityChange(product.id, index, quantity)
                            }
                        />
                        <div className={styles.cart_product_property}>
                            {product.price * quantity[index]} zł
                        </div>

                        <Button
                            type="button"
                            content={<IoTrashBin />}
                            onClick={() => handleDelete(product.id)}
                        />
                    </div>

                ))}
            </div>
            <div>You have {totalQuantity} products in your cart.</div>
            <div>Total price: {totalPrice}</div>
        </section>


    )






};

export default Cart;