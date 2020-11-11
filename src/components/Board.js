import React from 'react'
import Card from "./Card"

function Board (props){
    const drop = e => {
        e.preventDefault();
        e.dataTransfer.dropEffect = "copy";
        console.log("drop: dropEffect = " + e.dataTransfer.dropEffect + " ; effectAllowed = " + e.dataTransfer.effectAllowed);
        const card_id = e.dataTransfer.getData('card_id');

        if(card_id === "card-1"){
            <Card id="card7" draggable="true" className="card">
                <p>Card Two</p>
            </Card>
        }else{
            var para1 = document.createElement("p");
            var node1 = document.createTextNode("Card two");
            para1.appendChild(node1); 
            document.getElementById("board-2").appendChild(para1)
        }
        //const card = document.getElementById(card_id);
        //card.style.display = 'block';
        
    }

    const dragOver = e => {
        e.preventDefault();
        e.dataTransfer.dropEffect = "copy"
    }

    return (
        <div
            id={props.id}
            className={props.className}
            onDrop={drop}
            onDragOver={dragOver}    
        >
            
            { props.children }
        </div>
    )
}

export default Board