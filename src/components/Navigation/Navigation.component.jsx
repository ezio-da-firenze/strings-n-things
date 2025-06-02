import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import {
    NavigationContainer,
    LogoContainer,
    NavLinks,
    NavLink,
} from "./Navigation.styles";
import CartIcon from "../CartIcon/CartIcon.component";
import crownLogo from "../../assets/crown.svg";
import CartDropdown from "../CartDropdown/CartDropdown.component";

import { UserContext } from "../../Context/User.context";
import { CartContext } from "../../Context/Cart.context";
import { signOutUser } from "../../utils/Firebase/firebase.utils";

const Navigation = () => {
    // getting the current user value from context
    const { currentUser, setCurrentUser } = useContext(UserContext);
    const { isCartOpen, setIsCartOpen } = useContext(CartContext);

    const signOutHandler = async () => {
        const res = await signOutUser();
        setCurrentUser(null);
    };
    return (
        <Fragment>
            <NavigationContainer className="navigation">
                <LogoContainer className="logo-container" to="/">
                    <img src={crownLogo} alt="Crown Logo" className="logo" />
                </LogoContainer>
                <NavLinks className="nav-links-container">
                    <NavLink className="nav-link" to="/shop">
                        Shop
                    </NavLink>
                    {currentUser ? (
                        <NavLink onClick={signOutHandler}>Sign Out</NavLink>
                    ) : (
                        <NavLink to="/auth">Sign In</NavLink>
                    )}
                    <CartIcon />
                </NavLinks>
                {isCartOpen && <CartDropdown />}
            </NavigationContainer>

            <Outlet />
        </Fragment>
    );
};

export default Navigation;
