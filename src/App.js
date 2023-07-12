import React from "react"
import './components/Livro.css'
import Menu from "./components/Menu";
import { Routes, Route } from "react-router-dom";
import TelaInputLivro from "./components/TelaInputLivro";
import TelaListLivro from "./components/TelaCardLivro";
// import Carroussel from "./components/Carroussel";


function App() {
  return (
    <>
      <Menu />
      {/* <Carroussel /> */}
      <Routes>
        <Route path="/" element={<TelaListLivro />} />
        <Route path="/add" element={<TelaInputLivro />} />
      </Routes>
    </>
    
  );
}

export default App;
