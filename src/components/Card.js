import React from 'react'

function Card(props) {

    const dragStart = e => {
        const target = e.target;
        
        e.dataTransfer.effectAllowed = "copy";
        e.dataTransfer.setData('card_id', target.id);

        
    }

    const dragOver = e => {
        e.preventDefault();
        e.dataTransfer.dropEffect = "copy"
        
    }

    return (
        <div
            id={props.id}
            className={props.className}
            draggable={props.draggable}
            onDragStart={dragStart}
            onDragOver={dragOver}
        >
            {props.children}
        </div>
    )
}

export default Card
