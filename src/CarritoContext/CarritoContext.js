import { createContext, useState } from "react";

//Creo el contexto con un objeto con una propiedad carrito con un valor de array vacio:
//Este carrito va a quedar disponible para todos los componentes

export const CarritoContext = createContext({ carrito: [] });

//Creo un proveedor de contexto, con un estado para vigilar los cambios de estado del carrito y metodos para agregar, eliminar:

export const CarritoProvider = ({ children }) => {
  
  const [carrito, setCarrito] = useState([]);

  //Funcion para agregar productos
  const agregarProducto = (item, cantidad) => {
    if (!verificaSiEstaEnCarrito(item.id)) {
      setCarrito(articPrevios => [...articPrevios, { item, cantidad }]);
      console.log(carrito)
    } else {
      alert("Producto ya agregado!");
    }
  };

  //Funcion auxiliar para verificar si ya tengo ese item para no repetir
  const verificaSiEstaEnCarrito = (id) => {
    return carrito.some(prod => prod.id === id);
  };

  //Funcion para eliminar algun producto del carrito

  const eliminarProducto = (id) => {
    const carritoActualizado = carrito.filter(prod => prod.id !== id);
    setCarrito(carritoActualizado);
  };

  //Funcion para vaciar carrito:

  const vaciarCarrito = () => {
    setCarrito([]);
  };

  //Hago disponible el carrito y todas las funciones a todos los componentes
  return (
    <CarritoContext.Provider value={{ carrito, agregarProducto, eliminarProducto, vaciarCarrito }}
    >
      {children}
    </CarritoContext.Provider>
  );
};

