import React from "react";
import './Edge.css'

function Edge(props) 
{
    const {edge, onClick, offsetLeft, multiplicity} = props
    const [start, end] = edge.endpoints
    const isLoop = start === end;
    const [x1, y1] = [start.position[0] - offsetLeft, start.position[1]]
    const [x2, y2] = [end.position[0] - offsetLeft, end.position[1]]
    const color = edge.color


    let d;
    // loop is determined if the start vertex is equal to the end vertex
    if (isLoop)
    {
        const radius = 35 + (multiplicity * 10);
        const far = Math.sqrt(2) * radius
        d = `M ${x1} ${y1}
             a ${radius},${radius} 0 0 1 ${-far},${-far}
             a ${radius},${radius} 0 1 1 ${far},${far}`
    }
    else
    {
        const magnitude = Math.sqrt(Math.pow(x1-x2, 2) + Math.pow(y1-y2, 2))
        const [vx, vy] = [(y2-y1) / magnitude, -(x2-x1) / magnitude]
        const distance = 25 * Math.ceil(multiplicity / 2)
        const direction = Math.pow(-1, multiplicity) * (vx >= vy ? (vx === vy ? (x1 > x2 ? 1 : -1) : 1) : -1)
        const [midX, midY] = [(x1 + x2)/2, (y1 + y2)/2]
        const [x3, y3] = [midX + (distance * direction * vx), midY + (distance * direction * vy)]

        d = `M ${x1} ${y1}
             Q ${x3} ${y3} ${x2} ${y2}`
    }

    return (
        <path
            onClick={onClick}
            className='Edge-Path'
            fill='transparent'
            stroke={color}
            strokeWidth='3'
            d={d}
        />
    )
}

export default Edge;