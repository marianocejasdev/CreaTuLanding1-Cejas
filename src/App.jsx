import NavBar from './components/NavBar.jsx'
import ItemListContainer from './components/ItemListContainer.jsx'


function App() {
  return (
    <>
      <NavBar />
      {/* Prop string obligatoria para la consigna */}
      <ItemListContainer greeting="¡Bienvenido a Mi Tienda! Pronto vas a ver el catálogo acá." />
    </>
  )
}


export default App