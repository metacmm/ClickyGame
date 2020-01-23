import React from "react";
import "./style.css";

function Nav(props) {
    return (
        <nav className="navbar navbar-light fixed-top navtop" style={{ backgroundColor: "#e3f2fd" }}>
            <h1>Clicky Game</h1>
            <div className="justify-content-end">
                <p>Score: {props.score/* comment*/} | Top Score: {props.topScore}</p>
                <p className={props.guessed ? "textright" : "textwrong"}>You guessed {props.guessed ? "correctly!" : "incorrectly!"}</p>
            </div>
        </nav>
    );
}

export default Nav;