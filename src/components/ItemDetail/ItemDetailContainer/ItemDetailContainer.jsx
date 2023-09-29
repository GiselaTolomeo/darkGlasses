import React, { useEffect, useState } from 'react'
import { getADetail } from '../../../asyncmock'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {

    const [product, setProduct] = useState (null)
    const {idItem} = useParams()

    useEffect(()=> {
        getADetail(idItem)
        .then(response => setProduct(response))
    }, [idItem])

  return (
    <div>
        <ItemDetail {...product}/>
    </div>
  )
}

export default ItemDetailContainer