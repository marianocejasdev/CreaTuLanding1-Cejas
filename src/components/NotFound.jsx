import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <section className="not-found">
            <h1>404</h1>
            <p>La página que estás buscando no existe.</p>
            <Link to="/" className="btn btn-primary">
                Volver al inicio
            </Link>
        </section>
    );
};

export default NotFound;
