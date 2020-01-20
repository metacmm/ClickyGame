import React from "react";
import "./style.css";

function Nav(props){
    return(
        <nav>
            <h1>Clicky Game</h1>
            <p>Score: {props.score} | Top Score: {props.topScore}</p>
            <p >You guessed correctly!</p>
        </nav>
    );
}

export default Nav;