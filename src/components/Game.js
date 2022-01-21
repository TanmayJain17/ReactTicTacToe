import React from 'react'
import Board from './Board'

export default class Game extends React.Component {
    constructor() {
        super();
        console.log(this)
        this.state = {
            xIsNext: true,
            stepNumber: 0,
            history: [
                { squares: Array(9).fill(null) }
            ],

        }
    }
    handleClick = (i) => {
        const history = this.state.history;
        const current = history[history.length - 1];
        const square = current.squares;
        const winner = calWinner(square)
        const tied = gameTied(this.state.stepNumber) 
        if (winner || square[i] || tied) {
            return
        }

        square[i] = this.state.xIsNext ? 'X' : 'O';

        this.setState({
            history: history.concat({
                squares: square
            }),
            xIsNext: !(this.state.xIsNext),
            stepNumber: history.length
        })
    }


    /* mutating the vaalue of the state.changeState..Never change the state  directly */

    render() {
        const history = this.state.history;
        const current = history[history.length - 1];
        const square = current.squares;
        const winner = calWinner(square)
        const tied = gameTied(this.state.stepNumber)
        let status
        if(winner){
            status = `Winner is ${winner}`
        }
        else if(tied){
            status = 'Game TIED'
        }
        else{
            status= this.state.xIsNext ? 'Next is X' : 'Next is O'
        }
        /* status = winner ? `Winner is ${winner}` : (this.state.xIsNext ? 'Next is X' : 'Next is O') */

        return (
            <div className="game">
                
                <div className="game-board">
                    <Board clickAction={(i) => this.handleClick(i)} currArr={square} />


                </div>
                <div className="game-info">
                    <div>{status}</div>
                </div>
            </div>

        );
    }

}
function gameTied(stepNumber) {

    if(stepNumber===9)
        return true
}

function calWinner(square) {
    const possibleOut = [
        [0, 4, 8],
        [2, 4, 6],
        [3, 4, 5],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 1, 2],
        [6, 7, 8]
    ]

    for (let i = 0; i < possibleOut.length; i++) {
        let [a, b, c] = possibleOut[i];
        if (square[a] && square[a] === square[b] && square[b] === square[c]) {
            return square[a]
        }
    }
}
