import React, { useEffect, useState } from 'react'
import { getCategory, getProducts } from '../../../asyncmock'
import ItemList from '../ItemList/ItemList'
import "./ItemListContainer.css"
import { useParams } from 'react-router-dom'

const ItemListContainer = () => {

    const [products, setProducts] = useState ([]);
    const {idCategory} = useParams();

    useEffect (() => {

      const functionProducts = idCategory ? getCategory : getProducts

        functionProducts(idCategory)
        .then(response => setProducts(response))
        .catch (error => console.error(error))
    }, [idCategory])

  return (
    <div>
       
       <h2 className='product-title'>SUN GLASSES</h2>
        <ItemList products={products}/>

    </div>
  )
}

export default ItemListContainer