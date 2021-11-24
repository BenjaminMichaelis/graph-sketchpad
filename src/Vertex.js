import React from "react";
import './Vertex.css'


function Vertex(props)
{
    const {vertex, onClick, className} = props;
    const [x, y] = vertex.position;
    const color = vertex.color;

    return (
        <div
            className={`Vertex ${className}`}
            style={{top: `${y}px`, left: `${x}px`, background: color}}
            onMouseDown={onClick}
        >
        </div>
    );
}

export default Vertex;