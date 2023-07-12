import React, { useEffect, useState } from "react"
import './Livro.css'
// import './Books.css'
import API from "../service/API"

function ListBooks() {
    const [ livros, setLivros ] = useState([])

    const deleteLivro = async id => {
        try {
            await API.delete(`/livros/${id}`)
            setLivros(livros.filter(livros => livros.livro_id !== id))
        } catch (err) {
            console.error(err.message)
        }
    }

    useEffect(() => {
        API.get("/livros")
            .then((response) => setLivros(response.data))
            .catch((err) => alert(err))
    })

    return (
        <>
                {livros.map(livro => (
                
                    <div className="w3-col l4 m6 s12 w3-container w3-padding-16" key={livro.livro_id}>
                        <div className="card">
                            <h3>{livro.nome}</h3>
                            <p>
                                <strong>ISBN:</strong> {livro.isbn}
                            </p>
                            <p>
                                <strong>Editora:</strong> {livro.editora}
                            </p>
                            <p>
                                <strong>Ano de Publicação:</strong> {livro.ano_publi}
                            </p>
                            <p>
                                <strong>Status:</strong> {livro.status}
                            </p>
                            <button className="btn btn-danger" onClick={() => deleteLivro(livro.livro_id) }>
                                Deletar
                            </button>
                        </div>
                    </div>

                ))}
        </>
    )
}

export default ListBooks