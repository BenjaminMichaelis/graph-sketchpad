# <a href="https://graphsketchpad.michaelis.net/" target="_blank" rel="noreferrer noopener">Graph Sketchpad</a>

[![Build and Test Node.js](https://github.com/BenjaminMichaelis/GraphSketchpad/actions/workflows/node.js.yml/badge.svg)](https://github.com/BenjaminMichaelis/GraphSketchpad/actions/workflows/node.js.yml)
[![CodeQL](https://github.com/BenjaminMichaelis/GraphSketchpad/actions/workflows/codeql-analysis.yml/badge.svg)](https://github.com/BenjaminMichaelis/GraphSketchpad/actions/workflows/codeql-analysis.yml)
[![Netlify Status](https://api.netlify.com/api/v1/badges/7d27862a-fb2e-44b0-978c-6f9813871be1/deploy-status)](https://app.netlify.com/sites/graphsketchpad/deploys)

A simple graph theory application (also known as a graph theorists sketchpad) that allows for the graphical display of vertices and edges.

## Features

* Graphical display of vertices and edges
* Input of vertices and edges
* Able to reposition vertices while maintaining adjacencies
* Deletion of vertices and edges
* Ability to color or label vertices
* Information about numbers of vertices, edges, and components
* Parallel edges and loops
* Display of directed arcs (for directed graphs)

## To run locally

Clone to your local machine, and use the command `npm start` from the GraphSketchpad project directory to run the app in development mode.

As long as you don't have another application running this will be ready to view at [http://localhost:3000](http://localhost:3000) and will reload if you make edits.

To build for production run `npm run build` and it will build the app for production to the `build` folder.

Using <a href="https://www.netlify.com/" target="_blank" rel="noreferrer noopener">netlify</a> to deploy the app live.
