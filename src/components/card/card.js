import React from "react";
import "./card.css";

const Card = props => (
    <div className="gameCards" onClick ={() => props.clickCount(props.id)}>
        <div className="pic-container">
            <img alt={props.name} src={props.image}/>
        </div>
    </div>
);

export default Card;