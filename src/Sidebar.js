import React from 'react';
import SidebarButton from "./SidebarButton";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDotCircle, faLongArrowAltRight, faMousePointer} from "@fortawesome/free-solid-svg-icons";
import ClickAction from "./ClickAction";
import './Sidebar.css'

function Sidebar() {

    return (
        <div className="Sidebar">
            <SidebarButton
                icon={<FontAwesomeIcon icon={faMousePointer}/>}
                name="Select"
                clickAction={ClickAction.SELECT}
            />
            <SidebarButton
                icon={<FontAwesomeIcon icon={faDotCircle}/>}
                name="New Vertex"
                clickAction={ClickAction.ADD_VERTEX}
            />
            <SidebarButton
                icon={<FontAwesomeIcon icon={faLongArrowAltRight} />}
                name="New Directed Edge"
                clickAction={ClickAction.ADD_DIRECTED_EDGE}
            />
            <SidebarButton
                icon='&minus;'
                name="New Undirected Edge"
                clickAction={ClickAction.ADD_UNDIRECTED_EDGE}
            />
        </div>
    );
}

export default Sidebar;