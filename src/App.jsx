import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import ItemListContainer from "./components/ItemListContainer.jsx";
import ItemDetailContainer from "./components/ItemDetailContainer.jsx";
import Cart from "./components/Cart.jsx";
import CheckoutForm from "./components/CheckoutForm.jsx";
import NotFound from "./components/NotFound.jsx";

export default function App() {
  return (
    <>
      <NavBar />
      <main className="main-container">
        <Routes>
          <Route path="/" element={<ItemListContainer greeting="Catálogo" />} />
          <Route path="/category/:categoryId" element={<ItemListContainer greeting="Categoría" />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<CheckoutForm />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  );
}
