import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../firebase/config.js";
import { collection, getDocs, query, where } from "firebase/firestore";
import ItemList from "./ItemList.jsx";

export default function ItemListContainer({ greeting }) {
    const { categoryId } = useParams();
    const [items, setItems] = useState(null);
    const [loading, setLoading] = useState(true);
    const [errorMsg, setErrorMsg] = useState("");

    useEffect(() => {
        setLoading(true);
        setErrorMsg("");

        console.log("🔎 categoryId ->", categoryId);

        const ref = collection(db, "products"); // 👈 nombre EXACTO de la colección
        const q = categoryId ? query(ref, where("category", "==", categoryId)) : ref;

        getDocs(q)
            .then((snap) => {
                const data = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
                console.log("📦 Productos desde Firestore ->", data);
                setItems(data);
            })
            .catch((err) => {
                console.error("🔥 Error Firestore ->", err);
                setErrorMsg(err.message || "Error al cargar productos");
                setItems([]);
            })
            .finally(() => setLoading(false));
    }, [categoryId]);

    if (loading) return <p className="loading">Cargando productos...</p>;

    if (errorMsg) {
        return (
            <section className="item-list-container">
                <h1>{greeting}</h1>
                <p>{errorMsg}</p>
            </section>
        );
    }

    if (!items || items.length === 0) {
        return (
            <section className="item-list-container">
                <h1>{greeting}</h1>
                <p>No hay productos.</p>
            </section>
        );
    }

    return (
        <section className="item-list-container">
            <h1>{greeting}</h1>
            <ItemList items={items} />
        </section>
    );
}
