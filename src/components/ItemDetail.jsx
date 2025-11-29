import { useState } from "react";
import ItemCount from "./ItemCount.jsx";
import { useCart } from "../context/CartContext.jsx";
import { Link } from "react-router-dom";

export default function ItemDetail({ item }) {
    const { addItem } = useCart();
    const [added, setAdded] = useState(false);

    const handleAdd = (qty) => {
        addItem(
            { id: item.id, title: item.title, price: item.price, stock: item.stock, image: item.image, category: item.category },
            qty
        );
        setAdded(true); // 👈 oculta el ItemCount
    };

    return (
        <article className="item-detail">
            <img src={item.image} alt={item.title} className="item-detail__image" />
            <div className="item-detail__info">
                <h2>{item.title}</h2>
                <p className="item-detail__category">Categoría: {item.category}</p>
                <p className="item-detail__price">${item.price}</p>
                <p className="item-detail__description">{item.description}</p>

                {!added ? (
                    <ItemCount stock={item.stock} initial={1} onAdd={handleAdd} />
                ) : (
                    <div className="item-count">
                        <Link to="/cart" className="btn btn-primary">Ir al carrito</Link>
                        <Link to="/" className="btn btn-secondary">Seguir comprando</Link>
                    </div>
                )}
            </div>
        </article>
    );
}