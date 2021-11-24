import React, {useRef, useState} from 'react';
import './GraphingSurface.css';

import Vertex from "./Vertex"
import Edge from "./Edge"
import ClickAction from "./ClickAction";
import EdgeContainer from './EdgeContainer';

function GraphingSurface(props)
{
    const {clickAction, color} = props
    const [vertices, setVertices] = useState([]);
    const [startEdge, setStartEdge] = useState(null);
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
            addVertex({position: [x, y], color: color});
        }
    }

    const onVertexClick = (event, index) =>
    {
        event.stopPropagation()
        if (clickAction === ClickAction.SELECT)
        {
            startDrag(index)
        }
        else if (clickAction === ClickAction.ADD_EDGE)
        {
            startAddEdge(index)
        }
        else if (clickAction === ClickAction.DELETE) 
        {
            removeVertex(index)
        }
        else if (clickAction === ClickAction.COLOR)
        {
            colorVertex(index, color)
        }
    }
    
    const moveVertex = (index, newPosition) =>
    {
        const copy = [...vertices]
        copy[index].position = newPosition
        setVertices(copy);
    }

    const removeVertex = (index) =>
    {
        const vertex = vertices[index];
        const edgesToRemove = edgesWithEndpoint(vertex);
        const edgeCopy = [...edges].filter((edge) => !edgesToRemove.includes(edge))
        setEdges(edgeCopy)
        const vertexCopy = [...vertices];
        vertexCopy.splice(index, 1);
        setVertices(vertexCopy);
    }

    const colorVertex = (index, color) =>
    {
        const copy = [...vertices];
        copy[index].color = color;
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
            addEdge({endpoints: [vertices[startEdge], vertices[index]], color: color})
            setStartEdge(null)
        }
    }

    const edgesWithEndpoint = (vertex) => 
    {
        return edges.filter((edge) => edge.endpoints.includes(vertex))
    }

    const removeEdge = (index) => 
    {
        const copy = [...edges];
        copy.splice(index, 1)
        setEdges(copy);
    }
    const colorEdge = (index, color) =>
    {
        const copy = [...edges];
        copy[index].color = color;
        setEdges(copy);
    }

    const onEdgeClick = (event, index) => 
    {
        if (clickAction === ClickAction.DELETE)
        {
            event.stopPropagation()
            removeEdge(index)
        }
        else if (clickAction === ClickAction.COLOR)
        {
            colorEdge(index, color)
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
            {vertices.map((vertex, index) => {
                return (
                    <Vertex
                        className={index === startEdge ? 'Vertex-Selected' : ''}
                        vertex={vertex}
                        key={index}
                        onClick={(event) => onVertexClick(event, index)}
                    />
                )
            })}
            <EdgeContainer
                edges={edges}
                onClick={onEdgeClick}
            />
        </div>
    );
}

export default GraphingSurface;
