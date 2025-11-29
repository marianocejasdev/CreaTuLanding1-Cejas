import { createContext, useContext, useMemo, useState } from "react";

const CartContext = createContext(null);
export const useCart = () => useContext(CartContext);

export default function CartProvider({ children }) {
    const [cart, setCart] = useState([]); // [{id,title,price,qty,stock,image}]

    const addItem = (item, qty) => {
        setCart((prev) => {
            const exists = prev.find((p) => p.id === item.id);
            if (exists) {
                const next = prev.map((p) =>
                    p.id === item.id ? { ...p, qty: Math.min(p.qty + qty, p.stock) } : p
                );
                return next;
            }
            return [...prev, { ...item, qty }];
        });
    };

    const removeItem = (id) => setCart((prev) => prev.filter((p) => p.id !== id));
    const clearCart = () => setCart([]);

    const totalQty = useMemo(
        () => cart.reduce((acc, it) => acc + it.qty, 0),
        [cart]
    );
    const totalPrice = useMemo(
        () => cart.reduce((acc, it) => acc + it.qty * it.price, 0),
        [cart]
    );

    const value = { cart, addItem, removeItem, clearCart, totalQty, totalPrice };
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
