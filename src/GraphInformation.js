import React from "react";
import './GraphInformation.css'

function GraphInformation(props) {
    const {numVertices, numEdges, numComponents} = props
    return (
      <div className='GraphInformation'>
          <div>Vertices: <strong>{numVertices}</strong></div>
          <div>Edges: <strong>{numEdges}</strong></div>
          <div>Components: <strong>{numComponents}</strong></div>
      </div>
    );
}

export default GraphInformation;