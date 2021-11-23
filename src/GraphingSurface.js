import React, {useRef, useState} from 'react';
import './GraphingSurface.css';

import Vertex from "./Vertex"
import Edge from "./Edge"
import ClickAction from "./ClickAction";

function GraphingSurface(props)
{
    const {clickAction} = props
    const [vertices, setVertices] = useState([]);
    const [startEdge, setStartEdge] =useState(null);
    const [dragging, setDragging] = useState(null);
    const [edges, setEdges] = useState([])
    const root = useRef()

    const addVertex = (newVertex) =>
    {
        const copy = [...vertices];
        copy.push(newVertex)
        setVertices(copy);
    }

    const onClick = (event) =>
    {
        if (clickAction === ClickAction.ADD_VERTEX) 
        {
            const x = event.clientX;
            const y = event.clientY;
            addVertex({position: [x, y]});
        }
    }

    const onVertexClick = (event, index) =>
    {
        event.stopPropagation()
        if (clickAction === ClickAction.SELECT)
        {
            startDrag(index)
        }
        else if (clickAction === ClickAction.ADD_UNDIRECTED_EDGE)
        {
            startAddEdge(index)
        }
    }

    const moveVertex = (index, newPosition) =>
    {
        const copy = [...vertices]
        copy[index].position = newPosition
        setVertices(copy);
    }

    const startDrag = (index) =>
    {
        setDragging(index)
    }

    const stopDrag = (event) =>
    {
        event.preventDefault()
        setDragging(null)
    }

    const addEdge = (newEdge) =>
    {
        const copy = [...edges];
        copy.push(newEdge)
        setEdges(copy);
    }

    const startAddEdge = (index) =>
    {
        if(startEdge === null)
        {
            setStartEdge(index)
        }
        else
        {
            addEdge({endpoints: [vertices[startEdge],vertices[index]]})
            setStartEdge(null)
        }
    }

    const onMouseMove = (event) =>
    {
        if (dragging !== null)
        {
            event.preventDefault()
            moveVertex(dragging, [event.clientX, event.clientY])
        }
    }

    return (
        <div
            className="GraphingSurface"
            onClick={onClick}
            onMouseMove={onMouseMove}
            onMouseUp={stopDrag}
            ref={root}
        >
            {vertices.map((vertex, index) =>
            {
                return (<Vertex
                    className={index === startEdge ? 'Vertex-Selected' : ''}
                    vertex={vertex}
                    key={index}
                    onClick={(event) => onVertexClick(event,index)}
                />)
            })}
            {edges.map((edge, index) =>
            {
                return (
                    <Edge
                        edge={edge}
                        key={index}
                    />
                )
            })}
        </div>
    );
}

export default GraphingSurface;
