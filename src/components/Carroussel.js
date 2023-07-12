import React, { useState } from "react";

function Carroussel() {
    const [ slideIndex, setSlideIndex ] = useState(1)
    const length = 2

    function plusDivs(n) {
        let index = slideIndex + n
        if (index > length) { index = 1 }
        if (index < 1) { index = length }
        setSlideIndex(index)
        console.log(slideIndex)
    }

    return (
        <section className="w3-content w3-display-container" style={{maxWidth: "1200"}}>
            <img className="mySlides" src="/res/livro4.4.jpg" style={{width:"100%", display: slideIndex==1 ?"block" :"none"}}  alt=""/>
            <img className="mySlides" src="/res/livro3.3.jpg" style={{width:"100%" , display: slideIndex==2 ?"block" :"none"}} alt=""/>

            <div className="w3-center w3-container w3-section w3-large w3-text-hite w3-display-bottommiddle" style={{width:"100%"}}>
                <div className="w3-left w3-hover-text-khaki" onClick={() => plusDivs(-1)}>&#10094;</div>
                <div className="w3-right w3-hover-text-khaki" onClick={() => plusDivs(1)}>&#10095;</div>
                <span className="w3-badge demo w3-border w3-transparent w3-hover-white" onClick={() => setSlideIndex(1)}></span>
                <span className="w3-badge demo w3-border w3-transparent w3-hover-white" onClick={() => setSlideIndex(2)}></span>
            </div>
        </section>
    )
}

export default Carroussel