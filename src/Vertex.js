import React from "react";
import './Vertex.css'

function callme(){
    return 'success';
    }

function Vertex(props)
{
    const {vertex, onClick, className} = props;
    const [x, y] = vertex.position;
    const color = vertex.color;
    const number = vertex.number;
    var showNumber = vertex.showNumber;

    if ((localStorage.getItem('showNumber')) == 'true')
    {
        return (
            <div
                className={`Vertex ${className}`}
                style={{top: `${y}px`, left: `${x}px`, background: color}}
                onMouseDown={onClick}
            >
                <div id="number" class="noselect">
                    {number}
                </div>
            </div>
        );
    }
    else
    {
        return (
            <div
                className={`Vertex ${className}`}
                style={{top: `${y}px`, left: `${x}px`, background: color}}
                onMouseDown={onClick}
            >
                <div id="number" class="noselect">
                </div>
            </div>
        );
    }
}

export default Vertex;