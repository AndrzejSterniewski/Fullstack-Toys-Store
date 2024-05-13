import { IMGS_URL } from "../../../config";
import Button from "../Button/Button";
import styles from './ProductCard.module.scss';

const ProductCard = (props) => {
    return(
        <div className={styles.card}>
            <h1>{props.name}</h1>
            <h3>Kategoria: {props.category}</h3>
            <img className={styles.main_image} src={IMGS_URL + props.main_img}></img>
            <Button content="Szczegóły"/>
        </div>
    )
};

export default ProductCard;