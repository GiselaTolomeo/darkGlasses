import "./App.css";
import ItemCount from "./components/Counter/ItemCount/ItemCount";
import Form from "./components/Form/Form/Form";
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer/ItemListContainer";
import Mensaje from "./components/Mensaje/Mensaje";
import Navbar from "./components/Navbar/Navbar";
import ProductCard from "./components/ProductCard/ProductCard/ProductCard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Sections/Home/Home";
import Products from "./components/Sections/Products/Products";
import NewArrivals from "./components/Sections/NewArrivals/NewArrivals";
import AboutUs from "./components/Sections/AboutUs/AboutUs";
import { CarritoProvider } from "./CarritoContext/CarritoContext";
import Cart from "./components/Cart2/Cart";


function App() {
  return (
    <>
      <BrowserRouter>
        <CarritoProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/category/:idCategory" element={<NewArrivals />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/item/:idItem" element={<ItemDetailContainer />} />
            <Route path="*" element={<h2>Sitio en Construcción</h2>} />
            <Route path="/cart" element={<Cart/>} />
          </Routes>
        </CarritoProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
