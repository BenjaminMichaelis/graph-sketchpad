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


    return (
        <svg className='Edge-Container' ref={svg}>
            {edges.map((edge, index) => {
                return (
                    <Edge
                        edge={edge}
                        key={index}
                        onClick={(event) => onClick(event, index)}
                        offsetLeft={offsetLeft}
                    />
                )
            })}
        </svg>
    )
}

export default EdgeContainer;