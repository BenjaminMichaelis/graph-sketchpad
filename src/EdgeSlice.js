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

    function AngleBtw2Points()
    {
        const changeInX = x2 - x1
        const changeInY = y2 - y1
        let radians = (Math.atan2(changeInY,changeInX))
        let degrees = (radians * 180) / Math.PI - 90; // rotate
        console.log('angle to degree:',{changeInY,changeInX,radians,degrees})
        return degrees;
    }
    let polygonTriangleforRight=`${x2-7},${y2-3} ${x2-20},${y2-10} ${x2-20},${y2+10}`
    // let polygonTriangle=`${x2},${y2+3} ${x2+20},${y2+3} ${x2+12},${y2-10}`
    let pointss=`${x2},${y2}, ${x2+10},${y2+20}, ${x2},${y2+7}`

    // https://github.com/PimpTrizkit/PJs/wiki/12.-Shade,-Blend-and-Convert-a-Web-Color-(pSBC.js)#stackoverflow-archive-begin
    function shadeHexColor(color, percent)
    {
        var f=parseInt(color.slice(1),16),t=percent<0?0:255,p=percent<0?percent*-1:percent,R=f>>16,G=f>>8&0x00FF,B=f&0x0000FF;
        return "#"+(0x1000000+(Math.round((t-R)*p)+R)*0x10000+(Math.round((t-G)*p)+G)*0x100+(Math.round((t-B)*p)+B)).toString(16).slice(1);
    }
    function shadeRGBColor(color, percent)
    {
        var f=color.split(","),t=percent<0?0:255,p=percent<0?percent*-1:percent,R=parseInt(f[0].slice(4)),G=parseInt(f[1]),B=parseInt(f[2]);
        return "rgb("+(Math.round((t-R)*p)+R)+","+(Math.round((t-G)*p)+G)+","+(Math.round((t-B)*p)+B)+")";
    }
    // var color1 = shade("rbg(63,131,163)", 0.5);
    // var color2 = shade("#3f83a3", 0.5);
    function shade(color, percent)
    {
        if (color.length > 7 ) return shadeRGBColor(color,percent);
        else return shadeHexColor(color,percent);
    }

    return (
        <svg>
            <defs>
                <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="10" refY="2.625" orient="auto">
                    <polygon onClick={onClick} fill={shade(color, -.25)} points='0 0, 7.5 2.625, 0 5.25' />
                </marker>
            </defs>
            <path
                marker-end='url(#arrowhead)'
                onClick={onClick}
                className='Edge-Slice'
                fill='none'
                stroke={color}
                strokeWidth='3'
                d={d}
                />
        </svg>
    )
}

export default EdgeSlice;