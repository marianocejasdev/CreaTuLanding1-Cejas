import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import ItemListContainer from "./components/ItemListContainer.jsx";
import ItemDetailContainer from "./components/ItemDetailContainer.jsx";
import NotFound from "./components/NotFound.jsx";

function App() {
  return (
    <>
      <NavBar />
      <main className="main-container">
        <Routes>
          <Route
            path="/"
            element={<ItemListContainer greeting="Bienvenido a MiTienda" />}
          />

          <Route
            path="/category/:categoryId"
            element={<ItemListContainer greeting="Productos por categoría" />}
          />

          <Route path="/item/:id" element={<ItemDetailContainer />} />

          <Route path="*" element={<NotFound />} />
        </Routes>

      </main>
    </>
  );
}

export default App;
