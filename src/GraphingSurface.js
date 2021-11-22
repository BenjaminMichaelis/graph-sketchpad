import React, {useRef, useState} from 'react';
import './GraphingSurface.css';

import VertexComponent from "./Vertex"

function GraphingSurface(props) {
    const [dragging, setDragging] = useState(null);
    const [vertices, setVertices] = useState([]);
    const [edges, setEdges] = useState([])
    const root = useRef()

    const addVertex = (newVertex) => {
        const copy = [...vertices];
        copy.push(newVertex)
        setVertices(copy);
    }

    const graphingClick = (event) => {
        const x = event.clientX;
        const y = event.clientY;
        addVertex({position: [x, y]});
    }

    const moveVertex = (index, newPosition) => {
        const copy = [...vertices]
        copy[index].position = newPosition
        setVertices(copy);
    }

    const startDrag = (event, index) => {
        event.stopPropagation()
        setDragging(index)
    }

    const stopDrag = (event) => {
        event.preventDefault()
        setDragging(null)
    }

    const onMouseMove = (event) => {
        if (dragging !== null) {
            event.preventDefault()
            const copy = [...vertices]
            copy[dragging].position = [event.clientX, event.clientY]
            setVertices(copy)
        }
    }

    return (
        <div
            className="GraphingSurface"
            onMouseDown={graphingClick}
            onMouseMove={onMouseMove}
            onMouseUp={stopDrag}
            ref={root}
        >
            {vertices.map((vertex, index) => {
                return (<VertexComponent
                    vertex={vertex}
                    key={index}
                    startDrag={(event) => startDrag(event, index)}
                />)
            })}
        </div>
    );
}

export default GraphingSurface;
