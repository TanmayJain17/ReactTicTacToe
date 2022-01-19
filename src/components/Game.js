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
            value: 5
        }
    }

    someFunction = () => {
        return 5;
    }
    /* mutating the vaalue of the state.changeState..Never change the state  directly */
    changeState = () => {
        console.log(this)
        this.setState ({
            value:6
        })
    }
    render() {
        console.log(this.state)
        const result = this.someFunction();
        return (
            <div className="game">
                <div className="game-board">
                    <Board /* props */ value={result} />
                    <button onClick={() => this.changeState()}>Click Me</button>

                </div>
            </div>

        );
    }

}
