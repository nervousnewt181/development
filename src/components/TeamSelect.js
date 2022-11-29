import React from "react";
import ItemCard from "./ItemCard";


export default function TeamSelect(props) {
    const itemCards = props.data.map(item => {
    	return (
        	<ItemCard 
                id={item.id} 
                name={item.name}
                type={item.type1}
                generation={item.generation}
                hp={item.hp}
                addFunc={props.addFunc}
            />
   		)
  	});

    return (
        <div className="item-cards-container">
            {itemCards}
        </div>
    )
      
}