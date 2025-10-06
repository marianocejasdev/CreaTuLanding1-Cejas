const CartWidget = ({ count = 0 }) => {
    return (
        <button className="cart" aria-label={`Carrito con ${count} items`}>
            {/* Ícono simple */}
            <svg className="cart__icon" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
                <path d="M7 4h-2l-1 2v2h2l3 9h8l3-9h2v-2h-15z" fill="currentColor" />
            </svg>
            <span className="cart__badge" aria-hidden="true">{count}</span>
        </button>
    )
}


export default CartWidget