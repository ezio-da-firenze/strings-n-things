import Home from "./routes/Home/Home.component";
import { Routes, Route, Outlet } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation.component";
import Authentication from "./routes/Authentication/Authentication.component";
import Shop from "./routes/Shop/Shop.component";
import Checkout from "./routes/Checkout/Checkout.component";


const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigation />}>
                <Route index={true} element={<Home />} />
                <Route path="shop/*" element={<Shop />} />
                <Route path="auth" element={<Authentication />} />
                <Route path="checkout" element={<Checkout />} />
            </Route>
        </Routes>
    );
};

export default App;
