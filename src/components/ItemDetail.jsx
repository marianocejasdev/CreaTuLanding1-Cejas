import ItemCount from "./ItemCount.jsx";

const ItemDetail = ({ name, price, description, image, stock, category }) => {
    const handleAdd = (quantity) => {
        // por ahora solo log, después se conecta al carrito
        console.log(`Agregaste ${quantity} unidad(es) de ${name} al carrito`);
    };

    return (
        <article className="item-detail">
            {image && (
                <img
                    src={image}
                    alt={name}
                    className="item-detail__image"
                    loading="lazy"
                />
            )}

            <div className="item-detail__info">
                <h2>{name}</h2>
                <p className="item-detail__category">Categoría: {category}</p>
                <p className="item-detail__price">${price}</p>
                <p className="item-detail__description">{description}</p>

                <ItemCount stock={stock} initial={1} onAdd={handleAdd} />
            </div>
        </article>
    );
};

export default ItemDetail;
