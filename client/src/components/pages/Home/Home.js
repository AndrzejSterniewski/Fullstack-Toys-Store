import ProductPage from "../ProductPage/ProductPage";
import styles from './Home.module.scss';

const Home = () => {
    return (
        <section className={styles.home_page}>
            <h1>Home component</h1>
            <ProductPage />
        </section>
    )
};

export default Home;