import './NavBar.css'

import CartWidget from '../CartWidget';
import React from 'react';

export const NavBar = () => {
    return (
        <>
           <h1>Este es el titulo del e-commerce!!</h1> 
           <h3>Categorias</h3>
           <ul>
                <li>Ropa</li>
                <li>Juguetes</li>
                <li>Ofertas</li>      
            </ul>
            <CartWidget />
        </>
    )
}


