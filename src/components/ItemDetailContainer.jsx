import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../data/products.js";
import ItemDetail from "./ItemDetail.jsx";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        setLoading(true);

        getProductById(id)
            .then((res) => setProduct(res))
            .catch((err) => {
                console.error(err);
                setProduct(null);
            })
            .finally(() => setLoading(false));
    }, [id]); //

    if (loading) return <p className="loading">Cargando producto...</p>;
    if (!product) return <p>No se encontró el producto.</p>;

    return (
        <section className="item-detail-container">
            <ItemDetail {...product} />
        </section>
    );
};

export default ItemDetailContainer;
