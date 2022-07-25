import React from 'react'
import "./NavBar.css"
import Logo from "../../assets/Logo.png"
import CartWidget from '../CartWidget/CartWidget'
import { NavLink } from "react-router-dom"


const NavBar = () => {
  
    return (
        <header>
            <img src= {Logo} alt="" className='logo' />
            <h1>👨‍💻 Mi tienda Jiménez 👨‍💻</h1>
            <nav>
                <NavLink to='/' className='list'>Inicio</NavLink>
                <NavLink to='/categoria/camisas' className='list'>Camisas</NavLink>
                <NavLink to='/categoria/remeras' className='list'>Remeras</NavLink>
                {/* <NavLink to='/detalle' className='list'>Detalle</NavLink> */}
            </nav>
            <NavLink to = '/cart'>
                <CartWidget/>
            </NavLink>
            
        </header>
  )
}

export default NavBar