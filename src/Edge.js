import React from "react";
import './Edge.css'

function Edge(props) 
{
    const {edge, onClick} = props
    const [start, end] = edge.endpoints
    const [x1, y1] = start.position
    const [x2, y2] = end.position
    const color = edge.color

    const rem2px = (rem) => 
    {
        return rem * parseFloat(getComputedStyle(document.documentElement).fontSize)
    }

    return (
        <svg className='Edge'>
            <path
                onClick={onClick}
                className='Edge-Path'
                fill='none'
                stroke={color}
                strokeWidth='3'
                d={
                    `M ${x1 - rem2px(10-1)} ${y1}
                    L ${x2 - rem2px(10-1)} ${y2}`
                }/>
        </svg>
    )
}

export default Edge;