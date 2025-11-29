import { useState } from "react";

export default function ItemCount({ stock, initial = 1, onAdd }) {
    const [count, setCount] = useState(initial);
    const dec = () => setCount((c) => Math.max(1, c - 1));
    const inc = () => setCount((c) => Math.min(stock, c + 1));

    return (
        <div className="item-count">
            <div className="item-count__controls">
                <button onClick={dec} disabled={count <= 1}>-</button>
                <span>{count}</span>
                <button onClick={inc} disabled={count >= stock}>+</button>
            </div>
            <button className="btn btn-secondary" onClick={() => onAdd(count)} disabled={stock === 0}>
                Agregar al carrito
            </button>
            {stock === 0 && <p>Producto sin stock</p>}
        </div>
    );
}