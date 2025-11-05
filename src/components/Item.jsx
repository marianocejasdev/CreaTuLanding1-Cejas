// src/components/Item.jsx
import { Link } from "react-router-dom";

const Item = ({ id, name, price, image, category }) => {
    return (
        <article className="item-card">
            <img
                src={image}
                alt={name}
                className="item-card__image"
                loading="lazy"
            />

            <h3 className="item-card__title">{name}</h3>
            <p className="item-card__price">${price}</p>
            <p className="item-card__category">Categoría: {category}</p>

            <Link to={`/item/${id}`} className="btn btn-primary">
                Ver detalle
            </Link>
        </article>
    );
};

export default Item;
