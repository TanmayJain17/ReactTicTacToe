import React from 'react'
import Square from './Square'


/* {JSX syntax is a special JS syntax which is an extension of html to render a component} */
export default function Board() {
    return (
        <div>
            <div className="border-row">
                <Square />
                <Square />
                <Square />
            </div>

            <div className="border-row">
                <Square />
                <Square />
                <Square />
            </div>

            <div className="border-row">
                <Square />
                <Square />
                <Square />
            </div>
        </div>
        
    );
}