import { Link } from "react-router-dom";

export default function Item({ id, title = "Producto", price, image, category }) {
    const src = image || "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='600'><rect width='100%' height='100%' fill='%23141414'/><text x='50%' y='50%' font-size='32' text-anchor='middle' fill='%23FFCD01' dy='.3em'>Producto</text></svg>";
    return (
        <article className="item-card">
            <img src={src} alt={title} className="item-card__image" loading="lazy" />
            <h3 className="item-card__title">{title}</h3>
            <p className="item-card__price">${price}</p>
            <p className="item-card__category">Categoría: {category}</p>
            <Link to={`/item/${id}`} className="btn btn-primary">Ver detalle</Link>
        </article>
    );
}