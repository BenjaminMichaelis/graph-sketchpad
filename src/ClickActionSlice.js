import {createSlice} from "@reduxjs/toolkit";
import ClickAction from "./ClickAction";


const clickActionSlice = createSlice({
    name: 'clickAction',
    initialState: ClickAction.SELECT,
    reducers: {
        doSelect: state => ClickAction.SELECT,
        doAddVertex: state => ClickAction.ADD_VERTEX,
        doAddUndirectedEdge: state => ClickAction.ADD_UNDIRECTED_EDGE,
        doAddDirectedEdge: state => ClickAction.ADD_DIRECTED_EDGE,
        doDelete: state => ClickAction.DELETE,
        doCustom: (state, action) => action.payload
    }
})

export default clickActionSlice.reducer;
export const {
    doSelect,
    doAddVertex,
    doAddDirectedEdge,
    doAddUndirectedEdge,
    doDelete,
    doCustom
} = clickActionSlice.actions;