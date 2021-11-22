import React, {useRef, useState} from "react";
import './Vertex.css'


function Vertex(props) {
    const {vertex, startDrag} = props;
    const [x, y] = vertex.position;

    return (
        <div
            className="Vertex"
            style={{top: `${y}px`, left: `${x}px`}}
            onMouseDown={startDrag}
        >

        </div>
    );
}

export default Vertex;