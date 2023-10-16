import React, { useState } from 'react'
import './TicTacToe.css' 
import circle_img from '../Assets/circle.png'
import cross_img from '../Assets/cross.png'


const TicTacToe = () => {
    let [a, setA] = useState(0);
    const aPlus = () => {
        setA(a++)
    }

    return(
        <div className='container'>
            <h1 className="title">Tic Tac Toe Game in ⚛️ <span>React</span></h1>
            <div className="board">

            </div>
            <button onClick={aPlus} className="reset_game"> Reset {a}</button>
        </div>
    )
}

export default TicTacToe