import { CartContext } from "../../Context/Cart.context";
import { useContext } from "react";
import "./Checkout.styles.scss";
import CheckoutItem from "../../components/CheckoutItem/CheckoutItem.component";

const Checkout = () => {
    const { cartItems, cartTotal } = useContext(CartContext);
    return (
        <div className="checkout-container">
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>
            {cartItems.map((cartItem) => {
                return <CheckoutItem key={cartItem.id} cartItem={cartItem} />;
            })}
            <span className="total">Total : ₹{cartTotal}</span>
        </div>
    );
};

export default Checkout;
