import React from "react";
//import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
const Nav = (props) => {
    return (
    <>
       <nav id="botonera_nav">
        
        <ul className="holder">
            <li><NavLink to= "/" className={({isActive})=> isActive?"activo" : undefined}>Inicio</NavLink></li>
            <li><NavLink to= "/Servicios" className={({isActive})=> isActive?"activo" : undefined}>Servicios</NavLink></li>
            <li><NavLink to= "/Equipos" className={({isActive})=> isActive?"activo" : undefined}>Equipos</NavLink></li>
            <li><NavLink to= "/Cotizador" className={({isActive})=> isActive?"activo" : undefined}>Cotizador</NavLink></li>
            <li><NavLink to= "/Nosotros" className={({isActive})=> isActive?"activo" : undefined}>Nosotros</NavLink></li>


        </ul>


        </nav>
       
    </>
    );
}   

export default Nav;