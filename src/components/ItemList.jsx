import Item from "./Item.jsx";

const ItemList = ({ items }) => {
    if (!items || items.length === 0) {
        return <p>No hay productos para mostrar.</p>;
    }

    return (
        <div className="item-list">
            {items.map((prod) => (
                <Item key={prod.id} {...prod} />
            ))}
        </div>
    );
};

export default ItemList;
