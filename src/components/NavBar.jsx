import { NavLink, Link } from "react-router-dom";
import CartWidget from "./CartWidget.jsx";

export default function NavBar() {
    return (
        <header className="navbar">
            <div className="navbar__brand"><Link to="/">MiTienda</Link></div>
            <nav className="navbar__nav">
                <NavLink to="/" end>Inicio</NavLink>
                <NavLink to="/category/remeras">Remeras</NavLink>
                <NavLink to="/category/buzos">Buzos</NavLink>
                <NavLink to="/category/accesorios">Accesorios</NavLink>
            </nav>
            <CartWidget />
        </header>
    );
}