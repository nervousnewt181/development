import React from "react";

export default function ItemCard(props) {
    return (
        <div className="item-card">
            <h2>{props.name}</h2>

            <div className="item-card--info">
                <p>Primary Type: {props.type}</p>
                <p>Generation: {props.generation}</p>
                <p>Base HP Stat: {props.hp}</p>
                <button>Add to Team</button>
            </div>
            
            
        </div>
    )
}