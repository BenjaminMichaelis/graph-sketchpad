import {createSlice} from "@reduxjs/toolkit";

export const graphSlice = createSlice({
    name: 'graph',
    initialState: {
        vertices: [],
        edges: []
    },
    reducers: {
        addVertex: (state, action) => {
            return {...state, vertices: [...state.vertices, action.payload]}
        },
        addEdge: (state, action) => {
            return {...state, edges: [...state.edges, action.payload]}
        }
    }
})

export const {addVertex, addEdge} = graphSlice.actions;
export default graphSlice.reducer;