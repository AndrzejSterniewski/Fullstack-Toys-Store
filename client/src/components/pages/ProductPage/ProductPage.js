import { useSelector } from "react-redux";
import { getAllProducts } from "../../../redux/productsRedux";
import ProductCard from "../../common/ProductCard/ProductCard";

const ProductPage = () => {

    const products = useSelector(getAllProducts);

    return (
        <div>
            {products.map(product => <ProductCard key={product.id} {...product} />)}
        </div>
    )
};

export default ProductPage;