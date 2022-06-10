import { createContext, useState, useEffect } from "react";

// import SHOP_DATA from '../shop-data.js';
// import { addCollectionDocuments } from "../utils/firebase/firebase.utils.js";

import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils.js";

export const CategoriesContext = createContext({
    categoriesMap: {}
});

export const CategoriesProvider = ({children}) => {
    const [categoriesMap, setCategoriesMap] = useState({});

    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAndDocuments();
            console.log(categoryMap);
            setCategoriesMap(categoryMap);
        }
        getCategoriesMap();
    }, []);

    // useEffect(() => {
    //     addCollectionDocuments('categories',SHOP_DATA);           This will set new values in the DB everytime it runs
    // }, []);

    const value = { categoriesMap };
    return (
        <CategoriesContext.Provider value={value}> {children}</CategoriesContext.Provider>
    );
};