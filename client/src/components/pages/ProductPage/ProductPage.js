import { useSelector } from "react-redux";
import { getAllProducts } from "../../../redux/productsRedux";
import ProductCard from "../../common/ProductCard/ProductCard";
import styles from './ProductPage.module.scss';

const ProductPage = () => {

    const products = useSelector(getAllProducts);

    return (
        <section className={styles.home}>
            <div className={styles.home_products}>
                {products.map(product => <ProductCard key={product.id} {...product} />)}
            </div>
        </section>

    )
};

export default ProductPage;