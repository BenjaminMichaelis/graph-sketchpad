import React, {useEffect, useRef, useState} from "react";
import Edge from "./Edge";
import './Edge.css'

function EdgeContainer(props)
{
    const {edges, onClick} = props
    const [offsetLeft, setOffsetLeft] = useState(null);
    const svg = useRef();

    useEffect(() =>
    {
        setOffsetLeft(svg.current.parentElement.offsetLeft)
    }, []);

    const seenEndpoints = []
    return (
        <svg className='Edge-Container' ref={svg} pointerEvents='visibleStroke'>
            {edges.map((edge, index) =>
            {
                let multiplicity = 0;
                for (let i = 0; i < seenEndpoints.length; i++) 
                {
                    if ((edge.endpoints[0] === seenEndpoints[i].endpoints[0]
                        && edge.endpoints[1] === seenEndpoints[i].endpoints[1])
                        || (edge.endpoints[0] === seenEndpoints[i].endpoints[1]
                            && edge.endpoints[1] === seenEndpoints[i].endpoints[0]))
                    {
                        multiplicity = seenEndpoints[i].multiplicity;
                        seenEndpoints[i].multiplicity++;
                        return (
                            <Edge
                                edge={edge}
                                key={index}
                                onClick={(event) => onClick(event, index)}
                                offsetLeft={offsetLeft}
                                multiplicity={multiplicity}
                            />
                        )
                    }
                }
                seenEndpoints.push({endpoints: edge.endpoints, multiplicity: 1})
                return (
                    <Edge
                        edge={edge}
                        key={index}
                        onClick={(event) => onClick(event, index)}
                        offsetLeft={offsetLeft}
                        multiplicity={multiplicity}
                    />
                )
            })}
        </svg>
    )
}

export default EdgeContainer;