import {createSlice} from "@reduxjs/toolkit";
import ClickAction from "./ClickAction";


const clickActionSlice = createSlice({
    name: 'clickAction',
    initialState: ClickAction.SELECT,
    reducers: {
        doSelect: state => ClickAction.SELECT,
        doAddVertex: state => ClickAction.ADD_VERTEX,
        doAddEdge: state => ClickAction.ADD_EDGE,
        doAddDirectedEdge: state=> ClickAction.ADD_DIRECTED_EDGE,
        doDelete: state => ClickAction.DELETE,
        doColor: state => ClickAction.Color,
        doCustom: (state, action) => action.payload
    }
})

export default clickActionSlice.reducer;
export const {
    doSelect,
    doAddVertex,
    doAddEdge,
    doAddDirectedEdge,
    doDelete,
    doColor,
    VertexInfo,
    doCustom
} = clickActionSlice.actions;