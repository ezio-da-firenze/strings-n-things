import { useContext } from "react";
import Button from "../Button/Button.component";
import "./CartDropdown.styles.jsx";
import CartItem from "../CartItem/CartItem.component";
import { CartContext } from "../../Context/Cart.context";
import { useNavigate } from "react-router-dom";

import {
    CartDropdownContainer,
    EmptyMessage,
    CartItems,
} from "./CartDropdown.styles.jsx";

const CartDropdown = () => {
    const { cartItems } = useContext(CartContext);
    const navigate = useNavigate();

    const goToCheckoutHandler = () => {
        navigate("/checkout");
    };

    return (
        <CartDropdownContainer>
            <CartItems>
                {cartItems.length ? (
                    cartItems.map((item) => (
                        <CartItem key={item.id} cartItem={item} />
                    ))
                ) : (
                    <EmptyMessage>Your cart is empty</EmptyMessage>
                )}
            </CartItems>
            <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
        </CartDropdownContainer>
    );
};

export default CartDropdown;
