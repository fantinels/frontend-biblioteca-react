import React, { useState } from "react";
import { Link } from "react-router-dom"
import  './Livro.css'
// import './Books.css'

function Menu () {
    const [ menuAtivo, setMenuAtivo ] = useState(false)

    function dispararMenu() {
        setMenuAtivo(!menuAtivo)
    }

    return (
        <>
            <header className="w3-top w3-margin-botton">
                <nav className="w3-bar w3-large">
                    <a href="#" className="w3-bar-item w3-button w3-hide-large w3-hide-medium" onClick={() => dispararMenu()}>&#9776;</a>
                    <Link to="/" className="w3-bar-item w3-button w3-hide-small">Livros</Link>
                    <Link to="/add" className="w3-bar-item w3-button w3-hide-small">Cadastro de Livros</Link>
                </nav>

                <nav id="menu-mobile" className={"w3-bar-block w3-large w3-hide w3-hide-large w3-hide-medium"+ (menuAtivo ?" w3-show" :"")}>
                <Link to="/" className="w3-bar-item w3-button">Livros</Link>
                <Link to="/add" className="w3-bar-item w3-button">Cadastro de Livros</Link>
                </nav>
            </header>
        
        </>
    )
}

export default Menu