
// MIS PRODUCTOS:
const products = [
    {nombre: "Sun Glasses", precio: 12.999, stock: 2, idCat: "1", id: "1", imagen: "../images/lentes1.webp"},
    {nombre: "Sun Glasses", precio: 15.399, stock: 10, idCat: "1", id: "2", imagen: "../images/lentes2.webp"},
    {nombre: "Sun Glasses", precio: 12.999, stock: 6, idCat: "1", id: "3", imagen: "../images/lentes3.webp"},
    {nombre: "Sun Glasses", precio: 18.699, stock: 10, idCat: "2", id: "4", imagen: "../images/lentes4.webp"},
    {nombre: "Sun Glasses", precio: 12.999, stock: 8, idCat: "1", id: "5", imagen: "../images/lentes5.webp"},
    {nombre: "Sun Glasses", precio: 30.999, stock: 10, idCat: "2", id: "6", imagen: "../images/lentes6.webp"},
    {nombre: "Sun Glasses", precio: 12.999, stock: 10, idCat: "1", id: "7", imagen: "../images/lentes7.webp"},
    {nombre: "Sun Glasses", precio: 11.999, stock: 8, idCat: "1", id: "8", imagen: "../images/lentes8.webp"},
    {nombre: "Sun Glasses", precio: 40.299, stock: 8, idCat: "2", id: "9", imagen: "../images/lentes9.webp"},
    {nombre: "Sun Glasses", precio: 12.699, stock: 8, idCat: "1", id: "10", imagen: "../images/lentes10.webp"},
    {nombre: "Sun Glasses", precio: 10.999, stock: 10, idCat: "1", id: "11", imagen: "../images/lentes11.webp"},
    {nombre: "Sun Glasses", precio: 19.399, stock: 10, idCat: "2", id: "12", imagen: "../images/lentes12.webp"},
    {nombre: "Sun Glasses", precio: 12.499, stock: 8, idCat: "1", id: "13", imagen: "../images/lentes13.webp"},
    {nombre: "Sun Glasses", precio: 12.899, stock: 10, idCat: "1", id: "14", imagen: "../images/lentes14.webp"},
    {nombre: "Sun Glasses", precio: 45.999, stock: 10, idCat: "2", id: "15", imagen: "../images/lentes15.webp"},
    {nombre: "Sun Glasses", precio: 36.999, stock: 10, idCat: "2", id: "16", imagen: "../images/lentes16.webp"},
    {nombre: "Sun Glasses", precio: 12.199, stock: 10, idCat: "1", id: "17", imagen: "../images/lentes17.webp"},
    {nombre: "Sun Glasses", precio: 18.699, stock: 10, idCat: "2", id: "18", imagen: "../images/lentes4.webp"},
    {nombre: "Sun Glasses", precio: 12.999, stock: 10, idCat: "1", id: "19", imagen: "../images/lentes5.webp"},
    {nombre: "Sun Glasses", precio: 30.999, stock: 8, idCat: "2", id: "20", imagen: "../images/lentes6.webp"},
]

// FUNCION PAR RENDERIZAR PRODUCTOS CON 2´DE DEMORA:
export const getProducts = () => {
    return new Promise ((resolve, reject) => {
            resolve(products)
            reject((console.error("error")))
    })
}

// FUNCION PARA MOSTRAR EL DETALLE DE UN DETERMINADO PRODUCTO:

export const getADetail = (id) => {
    return new Promise(resolve => {
        setTimeout (()=> {
            const product = products.find (product => product.id === id)
            resolve(product)
        }, 100)
    }
    )
}

// FUNCION PARA MOSTRAR UNA CATEGORIA:
export const getCategory = (idCategory) => {
    return new Promise(resolve => {
        setTimeout (()=> {
            const productsCategory = products.filter (product => product.idCat === idCategory)
            resolve(productsCategory)
        }, 100)
    }
    )
}