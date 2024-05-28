import styles from './SingleProductPage.module.scss';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { IMGS_URL } from "../../../config";
import { getProductById } from '../../../redux/productsRedux';
import { addProduct, getAllCartProducts } from '../../../redux/cartRedux';
import Button from '../../common/Button/Button';
import Counter from '../../common/Counter/Counter';
import Modal from '../../common/Modal/Modal';

const SingleProductPage = () => {

    const { id } = useParams();
    const product = useSelector((state) => getProductById(state, id));

    const dispatch = useDispatch();

    const [cartItems, setCartItems] = useState([]);
    // const { products } = data;
    const [quantity, setQuantity] = useState(1);
    const [openModal, setOpenModal] = useState(false);

    {
        (openModal && <Modal
            // open={openModal}
            onClose={() => {
                setOpenModal(false);
            }}
        />)
    }


    // const handleAddToCart = (e) => {
    //     e.preventDefault();
    //     const { id, name, price, category, main_img, desription, productQuantity } = product
    //     // addProduct(id, name, price, category, main_img, desription, productQuantity, dispatch);
    //     dispatch(addProduct({ ...product, productQuantity}))
    //     console.log('product added', product, quantity, 'total price:', product.price * quantity);
    //     setOpenModal(true);
    // };


    const handleAddToCart = (e) => {
        e.preventDefault();
        // const { id, name, main_img, price } = product;
        dispatch(addProduct({ ...product, quantity }));
        console.log('product added', product, quantity, 'total price:', product.price * quantity);
        setOpenModal(true);
    };


    // const handleAddToCart = (e) => {

    //     // const { id, name, main_img, price } = product;
    //     // addToCartFunction(id, name, price, category, main_img, desription, productQuantity, products, dispatch);
    //     // setSideCartSummary(true);
    //     setTimeout(() => {
    //         setSideCartSummary(false);
    //     }, 2500);
    // };

    // const handleAddToCart = (e) => {
    //     e.preventDefault();
    //     const { id, name, main_img, price } = product;
    //     addToCartFunction(id, name, main_img, price, amount, products, dispatch);
    //     setSideCartSummary(true);
    //     setTimeout(() => {
    //       setSideCartSummary(false);
    //     }, 2500);
    //   };

    // const { productAmount } = props;

    return (
        <section className={styles.product_page}>
            <div className={styles.productCard}>
                <h1>{product.name}</h1>
                <div><span className={styles.price}>{product.price}</span> zł</div>
                <h3>Kategoria: {product.category}</h3>
                <img className={styles.main_image} src={IMGS_URL + product.main_img} alt="product"></img>
                <div>{product.description}</div>
            </div>
            <div className={styles.productCounter}>
                <Counter countProduct={setQuantity} />
                <Button content="add to cart" onClick={handleAddToCart} />
                {/* <NavLink to={`/product/${props.id}`}>Szczegóły</NavLink> */}
            </div>
            {(openModal && <Modal
                // open={openModal}
                onClose={() => {
                    setOpenModal(false);
                }}
            />)}
        </section>
    )
};

export default SingleProductPage;