import React, { useState } from "react";
import './Livro.css'
// import './Books.css'
import API from "../service/API";

function InputBook() {
    const [livro, setLivro] = useState({})

    function handleInputChange(e) {
        const { name, value } = e.target
        setLivro((prevLivro) => ({
            ...prevLivro,
            [name]: value
        }))
    }

    function cadastrarLivros(e) {
        e.preventDefault()

        console.log(livro)

        API.post("/livros", livro)
            .then((response) => {
                setLivro(response.data)
                console.log(livro)
                window.location = "/";
            })
            .catch((err) => {
                console.error("Ocorreu um erro! Livro não registrado" + err)
            })
    }

    return (
        <>
            <div className="w3-container">
                <form className="w3-container" onSubmit={cadastrarLivros}>
                    <h2>Cadastrar Livros</h2>
                    <div>
                        {/* <label>ISBN: 978-8501116437</label> */} 
                        <input type="text" name="isbn" value={livro.isbn} required onChange={handleInputChange} 
                            placeholder="ISBN"
                        />
                    </div>
                    <div>
                        {/* <label>Nome: A Paciente Silenciosa</label> */}
                        <input type="text" name="nome" value={livro.nome} required onChange={handleInputChange}
                            placeholder="Nome do Livro"
                        />
                    </div>
                    <div>
                        {/* <label>Editora: Record</label> */}
                        <input type="text" name="editora" value={livro.editora} required onChange={handleInputChange} 
                            placeholder="Editora"
                        />
                    </div>
                    <div>
                        {/* <label>Ano de Publicação: 2019</label> */}
                        <input type="text" name="ano_publi" value={livro.ano_publi} required onChange={handleInputChange} 
                            placeholder="Ano de Publicação"
                        />
                    </div>
                    <div>
                        {/* <label>Status: Disponível</label> */}
                        <input type="text" name="status" value={livro.status} required onChange={handleInputChange} 
                            placeholder="Status"
                        />
                    </div>
                    <div className="button-container">
                        <button className="btn btn-success">Adicionar Livro</button>
                    </div>
                </form>
            </div>

        </>
    )
}

export default InputBook