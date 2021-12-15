import React, {useEffect, useRef, useState} from "react";
import EdgeSlice from "./EdgeSlice";
import './Edge.css'

function Edge(props)
{
    const {edges, onClick} = props
    const [offsetLeft, setOffsetLeft] = useState(null);
    const svg = useRef();
    let overlappingEdges1 = 0

    useEffect(() =>
    {
        setOffsetLeft(svg.current.parentElement.offsetLeft)
    }, []);

    const seenEndpoints = []
    return (
        <svg className='Edge' ref={svg} pointerEvents='visibleStroke'>
            {edges.map((edge, index) =>
            {
                // start the number of edges between two vertices at 0
                let overlappingEdges = 0;
                for (let i = 0; i < seenEndpoints.length; i++) 
                {
                    // If the edge just placed has the same vertices as existing vertices (so it is the same line)
                    if ((edge.endpoints[0] === seenEndpoints[i].endpoints[0]
                        && edge.endpoints[1] === seenEndpoints[i].endpoints[1])
                        || (edge.endpoints[0] === seenEndpoints[i].endpoints[1]
                            && edge.endpoints[1] === seenEndpoints[i].endpoints[0]))
                    {
                        overlappingEdges = seenEndpoints[i].overlappingEdges
                        // increase the number of edges that are now overlapping to know where the next edge needs to be placed
                        seenEndpoints[i].overlappingEdges++;
                        return (
                            <EdgeSlice
                            edge={edge}
                            key={index}
                            onClick={(event) => onClick(event, index)}
                            offsetLeft={offsetLeft}
                            overlappingEdges={overlappingEdges}
                            />
                            )
                        }
                    }
                overlappingEdges1 = seenEndpoints.length
                // If there are no edges that are overlapping (this isn't an edge we've drawn before) then
                // just do what we were already doing, but make sure to save the information that the next edge 
                // is no longer the first edge between these two vertices
                seenEndpoints.push({endpoints: edge.endpoints, overlappingEdges: 1})
                overlappingEdges1 = seenEndpoints.length
                return (
                    <EdgeSlice
                        edge={edge}
                        key={index}
                        onClick={(event) => onClick(event, index)}
                        offsetLeft={offsetLeft}
                        overlappingEdges={overlappingEdges}
                    />
                )
            })}
        </svg>
    )
}

export default Edge;