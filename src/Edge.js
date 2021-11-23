import React from "react";
import './Edge.css'

function Edge(props) {
    const {edge} = props
    const [start, end] = edge.endpoints
    const [x1, y1] = start.position
    const [x2, y2] = end.position

    const rem2px = (rem) => {
        return rem * parseFloat(getComputedStyle(document.documentElement).fontSize)
    }

    return (
        <svg className='Edge'>
            <path
                className='Edge-Path'
                fill='none'
                stroke='black'
                strokeWidth='3'
                d={
                    `M ${x1 - rem2px(10-1)} ${y1}
                    L ${x2 - rem2px(10-1)} ${y2}`
                }/>
        </svg>
    )
}

export default Edge;