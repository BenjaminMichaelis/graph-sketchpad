import React from 'react';
import SideBarButton from "./SidebarButton";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDotCircle, faLongArrowAltRight, faMousePointer} from "@fortawesome/free-solid-svg-icons";
import ClickAction from "./ClickAction";

function Sidebar() {

    return (
        <div className="SideBar">
            <SideBarButton
                icon={<FontAwesomeIcon icon={faMousePointer}/>}
                name="Select"
                clickAction={ClickAction.SELECT}
            />
            <SideBarButton
                icon={<FontAwesomeIcon icon={faDotCircle}/>}
                name="New Vertex"
                clickAction={ClickAction.ADD_VERTEX}
            />
            <SideBarButton
                icon={<FontAwesomeIcon icon={faLongArrowAltRight} />}
                name="New Directed Edge"
                clickAction={ClickAction.ADD_DIRECTED_EDGE}
            />
            <SideBarButton
                icon='&minus;'
                name="New Undirected Edge"
                clickAction={ClickAction.ADD_UNDIRECTED_EDGE}
            />
        </div>
    );
}

export default Sidebar;