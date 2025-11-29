import Item from "./Item.jsx";

export default function ItemList({ items }) {
    return (
        <div className="item-list">
            {items.map((prod) => <Item key={prod.id} {...prod} />)}
        </div>
    );
}