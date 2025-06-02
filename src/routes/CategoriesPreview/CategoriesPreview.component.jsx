import SHOP_DATA from "../../shop-data.json";
import "./CatgegoriesPreview.styles.scss";
import { Fragment, useContext } from "react";
import { CategoriesContext } from "../../Context/Categories.context";
import ProductCard from "../../components/ProductCard/ProductCard.component";
import CategoryPreview from "../../components/CategoryPreview/CategoryPreview.component";

const CategoriesPreview = () => {
    const { categoriesMap } = useContext(CategoriesContext);

    return (
        <Fragment>
            {Object.keys(categoriesMap).map((title) => {
                const products = categoriesMap[title];
                return (
                    <CategoryPreview
                        key={title}
                        title={title}
                        products={products}
                    />
                );
            })}
        </Fragment>
    );
};

export default CategoriesPreview;
