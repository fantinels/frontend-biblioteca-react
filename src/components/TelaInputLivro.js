import React from "react";
import './Livro.css'
// import './Books.css'
import Menu from "./Menu";
import InputBook from "./InputBook";

function TelaInputLivro() {
    return (
        <>
            <Menu></Menu>
            <main>
                <InputBook></InputBook>
            </main>
            
        </>
    )
}

export default TelaInputLivro