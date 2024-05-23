import Button from "../../common/Button/Button"

const AddedToCart = () => {
    return(
        <div>
            <div>Product added to cart!</div>
            <Link to={`/cart`}>
                <Button type="button" content="got to cart" />
            </Link>
            <Link to={`/`}>
                <Button type="button" content="continue shopping" />
            </Link>
        </div>
    )
};

export default AddedToCart;