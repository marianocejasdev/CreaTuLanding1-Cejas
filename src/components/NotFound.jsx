import { Link } from "react-router-dom";
export default function NotFound() {
    return (
        <section className="not-found">
            <h1>404</h1>
            <p>La página que estás buscando no existe.</p>
            <Link to="/" className="btn btn-primary">Volver al inicio</Link>
        </section>
    );
}