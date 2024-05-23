import ProductsPage from "../ProductsPage/ProductsPage";
import styles from './Home.module.scss';

const Home = () => {
    return (
        <section className={styles.home_page}>
            <ProductsPage />
        </section>
    )
};

export default Home;