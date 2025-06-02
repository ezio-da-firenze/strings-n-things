import { createContext, useState, useEffect } from "react";

import SHOP_DATA from "../assets/shop-data";
import {
    getCategoriesAndDocuments,
    addCollectionAndDocuments,
} from "../utils/firebase/firebase.utils";

export const CategoriesContext = createContext({
    categoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
    const [categoriesMap, setCategoriesMap] = useState({});

    // Adding data to firebase
    // useEffect(() => {
    //     addCollectionAndDocuments("categories", SHOP_DATA);
    // }, []);

    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAndDocuments("categories");
            setCategoriesMap(categoryMap);
        };

        getCategoriesMap();
    }, []);

    const value = { categoriesMap };
    return (
        <CategoriesContext.Provider value={value}>
            {children}
        </CategoriesContext.Provider>
    );
};
