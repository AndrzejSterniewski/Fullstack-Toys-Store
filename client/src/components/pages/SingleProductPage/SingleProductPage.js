import styles from './SingleProductPage.module.scss';
import { IMGS_URL } from "../../../config";
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getProductById } from '../../../redux/productsRedux';
import Button from '../../common/Button/Button';
import Counter from '../../common/Counter/Counter';
import { useState } from 'react';

const SingleProductPage = () => {

    const params = useParams();
    const product = useSelector((state) => getProductById(state, params.id));

    const [cartItems, setCartItems] = useState([]);
    // const { products } = data;
    const addToCart = (product) => {
        // console.log('product added', product.price, productAmount)
        ;
    };
    const { id } = useParams();

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
                <Counter />
                <Button as={Link} to={`/product/${product.id}`} content="add to cart" onClick={() => addToCart(product)} />
                {/* <NavLink to={`/product/${props.id}`}>Szczegóły</NavLink> */}
            </div>
        </section>
    )
};

export default SingleProductPage;