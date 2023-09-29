import React, { useEffect, useState } from 'react'
import "./Navbar.css"
import Cart from '../Cart/Cart'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {

const [categoria, setCategoria] = useState("")

useEffect (() => {
document.title = `DARK GLASSES -  ${categoria}`
})

const handlerCategoria = (categoria) => {
setCategoria(categoria)
}

  return (
    <>
    <div className='div-color'></div>
    <nav className="navbar navbar-expand-lg bg-light">
    <div className="container-fluid">
      <Link to={"/"}>
      <a className="navbar-brand" href="#">DARK GLASSES</a>
      </Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink to={"/"}>
            <a onClick={()=> handlerCategoria("Home")} className="nav-link active" aria-current="page" href="#">Home</a>
            </NavLink>
          </li>
          <li className="nav-item">
          <NavLink to={"/products"}>
            <a onClick={()=> handlerCategoria("Products")} className="nav-link" href="#">Products</a>
            </NavLink>
          </li>
          <li className="nav-item">
          <NavLink to={"/category/2"}>
            <a onClick={()=> handlerCategoria("New Arrivals")} className="nav-link" href="#">New Arrivals</a>
          </NavLink>
          </li>
          <li className="nav-item">
          <NavLink to={"/aboutus"}>
            <a onClick={()=> handlerCategoria("About Us")} className="nav-link" href="#">About Us</a>
            </NavLink>
          </li>
        </ul>
      </div>
      <Cart/>
    </div>
  </nav>
  </>
  )
}

export default Navbar