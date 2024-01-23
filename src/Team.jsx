import { useState } from "react"

export default function Team(){
    const teamStyle ={
        padding: '20px',
        border: '2px solid yellow',
        borderRadius: '20px'
    }

    const [player, setPlayer] = useState(11);
    const addPlayer =()=>{
        const currentPlayer = player + 1;
        setPlayer(currentPlayer);
    }
    const injuryPlayer = () =>{
        const currentPlayer = player - 1;
        setPlayer(currentPlayer);
    }
    return(
        <div style={teamStyle}>
            <h2>Player: {player}</h2>
            <button onClick={addPlayer}>Add</button>
            <button onClick={injuryPlayer}>Injury Player</button>
        </div>
    )
}