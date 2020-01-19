import React from "react";
import "./style.css";

function Nav(props){
    return(
        <nav>
            <h1>Clicky Game</h1>
            <p>Score: 0 | Top Score: 1</p>
            <p >You guessed correctly!</p>
        </nav>
    );
}

export default Nav;