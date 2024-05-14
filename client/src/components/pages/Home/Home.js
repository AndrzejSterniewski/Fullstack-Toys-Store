import ProductPage from "../ProductsPage/ProductsPage";
import styles from './Home.module.scss';

const Home = () => {
    return (
        <section className={styles.home_page}>
            <ProductPage />
        </section>
    )
};

export default Home;