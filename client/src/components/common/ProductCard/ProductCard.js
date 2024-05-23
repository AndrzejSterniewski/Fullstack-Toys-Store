import { IMGS_URL } from "../../../config";
import Button from "../Button/Button";
import styles from './ProductCard.module.scss';
import { Link } from 'react-router-dom';

const ProductCard = (props) => {
    return(
        <div className={styles.card}>
            <h1>{props.name}</h1>
            <h3>Kategoria: {props.category}</h3>
            <img className={styles.main_image} src={IMGS_URL + props.main_img} alt="product"></img>
            <Link to={`/product/${props.id}`} className={styles.link}>
                <Button type="button" content="details" />
            </Link>
        </div>
    )
};

export default ProductCard;