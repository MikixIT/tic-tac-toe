import React, { useState } from 'react'
import './TicTacToe.css' 
import circle_img from '../Assets/circle.png'
import cross_img from '../Assets/cross.png'


const TicTacToe = () => {


    return(
        <div className='container'>
            <h1 className="title">Tic Tac Toe Game in ⚛️ <span>React</span></h1>
            <div className="board">
                <div className="row1">
                    <div className="boxes"></div>
                    <div className="boxes"></div>
                    <div className="boxes"></div>
                </div>
                <div className="row2">
                    <div className="boxes"></div>
                    <div className="boxes"></div>
                    <div className="boxes"></div>
                </div>
                <div className="row3">
                    <div className="boxes"></div>
                    <div className="boxes"></div>
                    <div className="boxes"></div>
                </div>

            </div>
            <button className="reset_game"> Reset </button>
        </div>
    )
}

export default TicTacToe