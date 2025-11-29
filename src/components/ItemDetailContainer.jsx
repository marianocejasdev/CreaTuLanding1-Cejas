import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { db } from "../firebase/config.js";
import { doc, getDoc } from "firebase/firestore";
import ItemDetail from "./ItemDetail.jsx";

export default function ItemDetailContainer() {
    const { id } = useParams();
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        getDoc(doc(db, "products", id))
            .then((snap) => setItem(snap.exists() ? { id: snap.id, ...snap.data() } : null))
            .finally(() => setLoading(false));
    }, [id]);

    if (loading) return <p className="loading">Cargando producto...</p>;
    if (!item) return <p>Producto no encontrado. <Link to="/">Volver</Link></p>;

    return <ItemDetail item={item} />;
}