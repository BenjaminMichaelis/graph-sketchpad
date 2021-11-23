import React from "react";
import Edge from "./Edge";
import './Edge.css'

function EdgeContainer(props)
{
    const {edges, onMouseDown} = props

    return (
        <svg className='Edge-Container'>
            {edges.map((edge, index) =>
            {
                return (
                    <Edge
                        edge={edge}
                        key={index}
                        onMouseDown={(event) => onMouseDown(event, index)}
                    />
                )
            })}
        </svg>
    )
}

export default EdgeContainer;