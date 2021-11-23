import React, {useRef, useState} from "react";
import './Vertex.css'


function Vertex(props)
{
    const {vertex, onClick, className} = props;
    const [x, y] = vertex.position;

    return (
        <div
            className={`Vertex ${className}`}
            style={{top: `${y}px`, left: `${x}px`}}
            onMouseDown={onClick}
        >

        </div>
    );
}

export default Vertex;