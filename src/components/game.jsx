import { useState } from "react";

const Game = function({cardArray}) {
    console.log(cardArray)
    let cardDisplay = cardArray.map((card) => {
        return <div className='card' key={card.ID}>{card.number}</div>
    })
    console.log(cardDisplay)
    return (
        <div className="game">
        {cardDisplay}
        </div>
    )
}

export default Game;

