import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";

export default function Cart() {
    const { cart, removeItem, clearCart, totalPrice, totalQty } = useCart();

    if (cart.length === 0)
        return (
            <section>
                <h1>Carrito</h1>
                <p>Tu carrito está vacío.</p>
                <Link to="/" className="btn btn-primary">Ir al catálogo</Link>
            </section>
        );

    return (
        <section>
            <h1>Carrito</h1>
            <ul style={{ listStyle: "none", padding: 0, margin: "1rem 0" }}>
                {cart.map((it) => (
                    <li key={it.id} className="item-card" style={{ display: "grid", gridTemplateColumns: "80px 1fr auto", gap: "1rem", alignItems: "center" }}>
                        <img src={it.image} alt={it.title} style={{ width: 80, height: 80, objectFit: "cover", borderRadius: 8 }} />
                        <div>
                            <strong>{it.title}</strong>
                            <div>Cant: {it.qty} · ${it.price} c/u</div>
                            <div>Subtotal: ${it.qty * it.price}</div>
                        </div>
                        <button className="btn btn-secondary" onClick={() => removeItem(it.id)}>Eliminar</button>
                    </li>
                ))}
            </ul>

            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "1rem" }}>
                <div><strong>Unidades:</strong> {totalQty} · <strong>Total:</strong> ${totalPrice}</div>
                <div style={{ display: "flex", gap: ".5rem" }}>
                    <button className="btn btn-secondary" onClick={clearCart}>Vaciar</button>
                    <Link className="btn btn-primary" to="/checkout">Finalizar compra</Link>
                </div>
            </div>
        </section>
    );
}