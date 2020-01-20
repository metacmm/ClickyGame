import React from "react";
import "./style.css";

export function CardList({ children }) {
    return (
        <div className="container">{children}</div>
    );
}

export function CardItem(props) {
    return (
        <img
            onClick={props.handleClickImage}
            className={props.guessed? "img-thumbnail card-image" : "img-thumbnail card-image shake"} 
            src={props.image}
        />
    );
}