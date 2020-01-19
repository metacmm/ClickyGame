import React from "react";
import "./style.css";

export function CardList({ children }) {
    return (
        <ul>{children}</ul>
    );
}

export function CardItem(props) {
    return (
        <div>
            <img
                className="img-thumbnail card-image"
                src={props.image}
                istarget={props.istarget}
            ></img>
        </div>
    );
}