import React from 'react';
import SidebarButton from "./SidebarButton";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDotCircle, faLongArrowAltRight, faMousePointer, faProjectDiagram, faTrash} from "@fortawesome/free-solid-svg-icons";
import ClickAction from "./ClickAction";
import './Sidebar.css'

function Sidebar(props)
{
    const {clickAction, setClickAction} = props

    const makeButton = ({icon, name, currentClickAction}) =>
    {
        return (
            <SidebarButton
                icon={icon}
                name={name}
                clickAction={clickAction}
                currentClickAction={currentClickAction}
                setClickAction={setClickAction}
                key={currentClickAction}
            />
        )
    }

    const buttonData =
    [
        {icon: <FontAwesomeIcon icon={faMousePointer}/>, name: 'Select', currentClickAction: ClickAction.SELECT},
        {icon: <FontAwesomeIcon icon={faDotCircle}/>, name: 'New Vertex', currentClickAction: ClickAction.ADD_VERTEX},
        {icon: <FontAwesomeIcon icon={faProjectDiagram}/>, name: 'New Edge', currentClickAction: ClickAction.ADD_EDGE},
        {icon: <FontAwesomeIcon icon={faTrash}/>, name: 'Delete', currentClickAction: ClickAction.DELETE}
    ]

    return (
        <div className="Sidebar">
            {buttonData.map(element => makeButton(element))}
        </div>
    );
}

export default Sidebar;