import "./CartIcon.styles.scss";
import { useContext } from "react";
import { CartContext } from "../../Context/Cart.context";
import cartSVG from "../../assets/shopping-bag.svg";

const CartIcon = () => {
    const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

    const toggleIsCartOpen = () => {
        setIsCartOpen(!isCartOpen);
    };
    return (
        <div className="cart-icon-container" onClick={toggleIsCartOpen}>
            <img className="shopping-icon" src={cartSVG} alt="Crown Logo" />
            <span className="item-count">
                {cartCount > 99 ? "99+" : cartCount}
            </span>
        </div>
    );
};

export default CartIcon;
