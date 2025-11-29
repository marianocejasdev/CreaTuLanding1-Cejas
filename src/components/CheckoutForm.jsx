import { useState } from "react";
import { useCart } from "../context/CartContext.jsx";
import { db } from "../firebase/config.js";
import { addDoc, collection, serverTimestamp, doc, getDoc, writeBatch } from "firebase/firestore";
import { Link } from "react-router-dom";

export default function CheckoutForm() {
    const { cart, totalPrice, clearCart } = useCart();
    const [buyer, setBuyer] = useState({ name: "", email: "", phone: "" });
    const [orderId, setOrderId] = useState(null);
    const [loading, setLoading] = useState(false);
    const [msg, setMsg] = useState("");

    const handleChange = (e) => setBuyer({ ...buyer, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!buyer.name || !buyer.email || !buyer.phone) return setMsg("Completá todos los campos.");

        setLoading(true);
        setMsg("");

        try {
            // Validación de stock + batch update
            const batch = writeBatch(db);
            for (const item of cart) {
                const ref = doc(db, "products", item.id);
                const snap = await getDoc(ref);
                const data = snap.data();
                if (!data || data.stock < item.qty) {
                    throw new Error(`Sin stock suficiente de ${item.title}`);
                }
                batch.update(ref, { stock: data.stock - item.qty });
            }

            // Crear orden
            const order = {
                buyer,
                items: cart.map(({ id, title, price, qty }) => ({ id, title, price, qty })),
                total: totalPrice,
                createdAt: serverTimestamp(),
            };

            await batch.commit();
            const docRef = await addDoc(collection(db, "orders"), order);
            setOrderId(docRef.id);
            clearCart();
        } catch (err) {
            setMsg(err.message || "Error al procesar la compra.");
        } finally {
            setLoading(false);
        }
    };

    if (orderId) {
        return (
            <section>
                <h1>¡Gracias por tu compra!</h1>
                <p>Tu número de orden es: <strong>{orderId}</strong></p>
                <Link to="/" className="btn btn-primary">Volver al inicio</Link>
            </section>
        );
    }

    if (cart.length === 0) {
        return (
            <section>
                <h1>Checkout</h1>
                <p>Tu carrito está vacío.</p>
                <Link to="/" className="btn btn-primary">Ir al catálogo</Link>
            </section>
        );
    }

    return (
        <section>
            <h1>Checkout</h1>
            <form onSubmit={handleSubmit} style={{ display: "grid", gap: "0.75rem", maxWidth: 420 }}>
                <input name="name" placeholder="Nombre" value={buyer.name} onChange={handleChange} />
                <input name="email" placeholder="Email" type="email" value={buyer.email} onChange={handleChange} />
                <input name="phone" placeholder="Teléfono" value={buyer.phone} onChange={handleChange} />
                <button className="btn btn-primary" disabled={loading}>{loading ? "Procesando..." : "Confirmar compra"}</button>
                {msg && <p>{msg}</p>}
            </form>
        </section>
    );
}