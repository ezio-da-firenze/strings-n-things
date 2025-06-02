import Button, { BUTTON_TYPE_CLASSES } from "../Button/Button.component";
import "./ProductCard.styles.scss";
import { useContext } from "react";
import { CartContext } from "../../Context/Cart.context";
const ProductCard = ({ product }) => {
    const { addItemToCart } = useContext(CartContext);
    const { id, name, imageUrl, price } = product;

    const addProductToCart = () => {
        addItemToCart(product);
        console.log("click");
    };
    return (
        <div className="product-card-container">
            <img src={imageUrl} alt={name} />
            <div className="footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <Button
                onClick={addProductToCart}
                buttonType={BUTTON_TYPE_CLASSES.inverted}
            >
                Add to Cart
            </Button>
        </div>
    );
};

export default ProductCard;
