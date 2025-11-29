import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";

export default function CartWidget() {
    const { totalQty } = useCart();
    return (
        <Link to="/cart" className="cart-widget" aria-label="Carrito">
            <span className="cart-widget__icon">🛒</span>
            {totalQty > 0 && <span className="cart-widget__badge">{totalQty}</span>}
        </Link>
    );
}