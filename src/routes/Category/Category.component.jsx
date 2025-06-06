import { useParams } from "react-router-dom";
import "./Category.styles.scss";
import { Fragment, useContext, useEffect, useState } from "react";
import { CategoriesContext } from "../../Context/Categories.context";
import ProductCard from "../../components/ProductCard/ProductCard.component";
//

const Category = () => {
    const { category } = useParams();
    const { categoriesMap } = useContext(CategoriesContext);
    const [products, setProducts] = useState(categoriesMap[category]);

    useEffect(() => {
        if (categoriesMap) {
            setProducts(categoriesMap[category]);
        }
    }, [category, categoriesMap]);
    return (
        <Fragment>
            <h2 className="category-title">{category.toUpperCase()}</h2>
            <div className="category-container">
                {products &&
                    products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
            </div>
        </Fragment>
    );
};

export default Category;
