import CartWidget from './CartWidget.jsx'


const NavBar = () => {
    return (
        <header className="navbar">
            <div className="navbar__inner container">
                <a href="#" className="navbar__brand" aria-label="Inicio">
                    <img src="/logo.svg" alt="Logo tienda" className="navbar__logo" />
                    <span className="navbar__title">MiTienda</span>
                </a>


                <nav className="navbar__nav" aria-label="Principal">
                    <a href="#catalogo" className="navbar__link">Catálogo</a>
                    <a href="#ofertas" className="navbar__link">Ofertas</a>
                    <a href="#contacto" className="navbar__link">Contacto</a>
                </nav>


                {/* CartWidget debe renderizarse dentro de NavBar (requisito) */}
                <CartWidget count={2} />
            </div>
        </header>
    )
}


export default NavBar