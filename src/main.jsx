import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.scss";
import App from "./App.jsx";
import { UserProvider } from "./Context/User.context.jsx";
import { CartProvider } from "./Context/Cart.context.jsx";
import { CategoriesProvider } from "./Context/Categories.context.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <BrowserRouter>
            <UserProvider>
                <CategoriesProvider>
                    <CartProvider>
                        <App />
                    </CartProvider>
                </CategoriesProvider>
            </UserProvider>
        </BrowserRouter>
    </StrictMode>
);
