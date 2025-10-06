const ItemListContainer = ({ greeting }) => {
    return (
        <main className="container">
            <section className="hero">
                <h1 className="hero__title">{greeting}</h1>
                <p className="hero__subtitle">
                    Esta es nuestra landing inicial en React. Pronto acá renderizaremos la lista de productos.
                </p>
            </section>
        </main>
    )
}


export default ItemListContainer