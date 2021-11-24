import React from "react";
import './Edge.css'

function Edge(props) 
{
    const {edge, onClick, offsetLeft} = props
    const [start, end] = edge.endpoints
    const [x1, y1] = start.position
    const [x2, y2] = end.position
    const color = edge.color

    const rem2px = (rem) =>
    {
        return rem * parseFloat(getComputedStyle(document.documentElement).fontSize)
    }

    return (
        <path
            onClick={onClick}
            className='Edge-Path'
            fill='transparent'
            stroke={color}
            strokeWidth='3'

            d=
            {
                `M ${x1 - offsetLeft} ${y1}
                 L ${x2 - offsetLeft} ${y2}`
            }
        />
    )
}

export default Edge;