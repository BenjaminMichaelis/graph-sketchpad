import React from "react";
import './Edge.css'

function EdgeSlice(props) 
{
    const {edge, onClick, offsetLeft, overlappingEdges} = props
    const [start, end] = edge.endpoints
    const isLoop = start === end;
    const [x1, y1] = [start.position[0] - offsetLeft, start.position[1]]
    const [x2, y2] = [end.position[0] - offsetLeft, end.position[1]]
    const color = edge.color

    let d;
    // loop is determined if the start vertex is equal to the end vertex
    if (isLoop)
    {
        const radii = 25 + (overlappingEdges * 10);

        // https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d
        // M is (x, y)+
        // a is (rx ry angle large-arc-flag sweep-flag dx dy)+
        d = `M ${x1} ${y1}
             A ${radii},${radii - 1} 1000 1 0 ${x1-1} ${y1-1}`
    }
    else
    {
        const magnitude = Math.sqrt(Math.pow(x1-x2, 2) + Math.pow(y1-y2, 2))
        const [vx, vy] = [(y2-y1) / magnitude, -(x2-x1) / magnitude]
        // -1 to keep alternating directions every time (left of central edge, then right, etc etc.)
        const direction = Math.pow(-1, overlappingEdges) * (vx >= vy ? (vx === vy ? (x1 > x2 ? 1 : -1) : 1) : -1)
        const distance = 25 * Math.ceil(overlappingEdges / 2)
        const [midX, midY] = [(x1 + x2)/2, (y1 + y2)/2]
        const [x3, y3] = [midX + (distance * direction * vx), midY + (distance * direction * vy)]

        // https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d
        // M is (x, y)+
        // Q is (x1,y1, x,y)+
        d = `M ${x1} ${y1}
             Q ${x3} ${y3} ${x2} ${y2}`
    }

    return (
        <path
            onClick={onClick}
            className='Edge-Slice'
            fill='transparent'
            stroke={color}
            strokeWidth='3'
            d={d}
        />
    )
}

export default EdgeSlice;