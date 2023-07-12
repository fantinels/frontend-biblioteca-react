import React from "react";
import './Livro.css'
// import './Books.css'
import Menu from "./Menu";
import ListBooks from "./ListBooks";

function TelaListLivro() {
    return (
        <>
            <Menu></Menu>
            <main>
                <ListBooks></ListBooks>
            </main>
        </>
    )
}

export default TelaListLivro