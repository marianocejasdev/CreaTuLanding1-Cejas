import { useState } from "react";

const ItemCount = ({ stock, initial = 1, onAdd }) => {
    const [count, setCount] = useState(initial);

    const handleDecrement = () => {
        if (count > 1) setCount((prev) => prev - 1);
    };

    const handleIncrement = () => {
        if (count < stock) setCount((prev) => prev + 1);
    };

    const handleAdd = () => {
        if (stock > 0) {
            onAdd(count);
        }
    };

    return (
        <div className="item-count">
            <div className="item-count__controls">
                <button onClick={handleDecrement} disabled={count <= 1}>
                    -
                </button>
                <span>{count}</span>
                <button onClick={handleIncrement} disabled={count >= stock}>
                    +
                </button>
            </div>

            <button
                className="btn btn-secondary"
                onClick={handleAdd}
                disabled={stock === 0}
            >
                Agregar al carrito
            </button>
        </div>
    );
};

export default ItemCount;
