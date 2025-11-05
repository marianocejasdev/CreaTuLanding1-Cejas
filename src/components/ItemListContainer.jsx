import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts, getProductsByCategory } from "../data/products.js";
import ItemList from "./ItemList.jsx";

const ItemListContainer = ({ greeting }) => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const { categoryId } = useParams();

    useEffect(() => {
        setLoading(true);
        console.log("ItemListContainer categoryId ->", categoryId);

        const request = categoryId
            ? getProductsByCategory(categoryId)
            : getProducts();

        request
            .then((res) => {
                console.log("ItemListContainer setItems ->", res);
                setItems(res);
            })
            .catch((err) => console.error(err))
            .finally(() => setLoading(false));
    }, [categoryId]);

    if (loading) return <p className="loading">Cargando productos...</p>;

    return (
        <section className="item-list-container">
            <h1>{greeting}</h1>
            <ItemList items={items} />
        </section>
    );
};

export default ItemListContainer;
