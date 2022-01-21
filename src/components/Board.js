import React from 'react'
import Square from './Square'


/* {JSX syntax is a special JS syntax which is an extension of html to render a component} */
export default class Board extends React.Component {
    /* console.log(props) */
    /* super() */
    renderSquare = (i) => {
        return (
            <Square value={this.props.currArr[i]} handleClick={() => this.props.clickAction(i)} />
        )
    }
    render() {
        return (
            <div>
                <div className="border-row">

                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>

                <div className="border-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}

                </div>

                <div className="border-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}

                </div>
            </div>

        );
    }



}