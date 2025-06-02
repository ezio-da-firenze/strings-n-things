import { Routes, Route, useParams } from "react-router-dom";
import CategoriesPreview from "../CategoriesPreview/CategoriesPreview.component";
import Category from "../Category/Category.component";

import "./Shops.styles.scss";
import CategoryPreview from "../../components/CategoryPreview/CategoryPreview.component";

const Shop = () => {
    return (
        <Routes>
            <Route index element={<CategoriesPreview />} />
            <Route path=":category" element={<Category />} />
        </Routes>
    );
};

export default Shop;
