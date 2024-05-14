import styles from './SingleProductPage.module.scss';
import { IMGS_URL } from "../../../config";
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getProductById } from '../../../redux/productsRedux';
import Button from '../../common/Button/Button';
import Counter from '../../common/Counter/Counter';

const SingleProductPage = () => {

    const params = useParams();
    const product = useSelector((state) => getProductById(state, params.id));

    return (
        <section className={styles.product_page}>
            <h1>{product.name}</h1>
            <p>{product.price} zł</p>
            <h3>Kategoria: {product.category}</h3>
            <img className={styles.main_image} src={IMGS_URL + product.main_img} alt="product"></img>
            <p>{product.description}</p>
            <Counter />
            <Button as={Link} to={`/product/${product.id}`} content="dodaj do koszyka" />
            {/* <NavLink to={`/product/${props.id}`}>Szczegóły</NavLink> */}
        </section>
    )
};

export default SingleProductPage;