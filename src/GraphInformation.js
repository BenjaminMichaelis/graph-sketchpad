import React from "react";
import './GraphInformation.css'

function GraphInformation(props) {
    const {numVertices, numEdges, numComponents, graphTypes, nullGraph, simpleGraph, TreeGraph, ForestGraph} = props
    return (
      <div className='GraphInformation'>
          <div>Vertices: <strong>{numVertices}</strong></div>
          <div>Edges: <strong>{numEdges}</strong></div>
          <div>Components: <strong>{numComponents}</strong></div>
          <div>Is Null Graph: <strong>{nullGraph.toString()}</strong></div>
          <div>Is Simple Graph: <strong>{simpleGraph.toString()}</strong></div>
          <div>is Tree Graph: <strong>{TreeGraph.toString()}</strong></div>
          <div>is Forest Graph: <strong>{ForestGraph.toString()}</strong></div>
      </div>
    );
}

export default GraphInformation;