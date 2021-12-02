import React, {useRef, useState} from 'react';
import './GraphingSurface.css';

import Vertex from "./Vertex"
// import Edge from "./Edge"
import ClickAction from "./ClickAction";
import Edge from './Edge';
import GraphInformation from './GraphInformation';

let vertnumber = 0
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
            addVertex({position: [x, y], color: color, number: vertnumber});
            vertnumber = vertnumber + 1;
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
        else if (clickAction === ClickAction.ADD_DIRECTED_EDGE)
        {
            startAddDirectedEdge(index)
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
            addEdge({endpoints: [vertices[startEdge], vertices[index]], color: color, directedBool: false})
            setStartEdge(null)
        }
    }

    const startAddDirectedEdge = (index) =>
    {
        if(startEdge === null)
        {
            setStartEdge(index)
        }
        else
        {
            addDirectedEdge({endpoints: [vertices[startEdge], vertices[index]], color: color, directedBool: true})
            setStartEdge(null)
        }
    }

    const addDirectedEdge = (newEdge) =>
    {
        const copy = [...edges];
        copy.push(newEdge)
        setEdges(copy);
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

    const numVertices = () =>
    {
        return vertices.length
    }

    const numEdges = () =>
    {
        return edges.length
    }

    const adjacentVertices = (vertex) => 
    {
        return edgesWithEndpoint(vertex).map((edge) =>
        {
            return edge.endpoints
        }).flat().filter((otherVertex) => otherVertex !== vertex)
    }

    const numComponents = () => 
    {
        let components = 0;
        const verticesSeen = new Array(vertices.length).fill(false);
        const dfs = (index) => 
        {
            verticesSeen[index] = true
            for (const vertex of adjacentVertices(vertices[index]))
            {
                const newIndex = vertices.indexOf(vertex)
                if (!verticesSeen[newIndex])
                {
                    dfs(newIndex)
                }
            }
        }
        for (let i = 0; i < vertices.length; i++)
        {
            if (verticesSeen[i])
            {
                continue
            }
            dfs(i)
            components++
        }
        return components
    }

    const isSimpleGraph = () =>
    {
        const endpointsSeen = []
        for (const edge of edges)
        {
            if (edge.endpoints in endpointsSeen)
            {
                return false
            }
            else if (edge.endpoints[0] === edge.endpoints[1])
            {
                return false
            }
            endpointsSeen.push(edge)
        }
        return true
    }

    const isNullGraph = () =>
    {
        return vertices.length === 0
    }

    const isTreeGraph = () =>
    {
        return isForestGraph() && numComponents() === 1
    }

    const isForestGraph = () =>
    {
        return numVertices() - numEdges() === numComponents() && isSimpleGraph()
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
                return (
                    <Vertex
                    className={index === startEdge ? 'Vertex-Selected' : ''}
                    vertex={vertex}
                    key={index}
                    onClick={(event) => onVertexClick(event, index)}
                    />
                    )
                })}
            <Edge
                edges={edges}
                onClick={onEdgeClick}
            />
            <GraphInformation
                numVertices={numVertices()}
                numEdges={numEdges()}
                numComponents={numComponents()}
            />
        </div>
    );
}

export default GraphingSurface;
