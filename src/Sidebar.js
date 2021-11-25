import React from 'react';
import SidebarButton from "./SidebarButton";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDotCircle, faMousePointer, faProjectDiagram, faTrash, faPaintBrush, faArrowRight} from "@fortawesome/free-solid-svg-icons";
import ClickAction from "./ClickAction";
import './Sidebar.css'
import './SidebarButton.css';
import { CirclePicker } from 'react-color'

function Sidebar(props)
{
    const {clickAction, setClickAction, color, setColor} = props

    // Handle keypress to change menu selection
    window.addEventListener('keydown', keyPress, true);

    function keyPress(event)
    {
        console.log(event.keyCode);
        if(event.key === 's' || event.key === 'S')
        {
            setClickAction(ClickAction.SELECT)
        }
        else if(event.key === 'v' || event.key === 'V')
        {
            setClickAction(ClickAction.ADD_VERTEX)
        }
        else if(event.key === 'e' || event.key === 'E')
        {
            setClickAction(ClickAction.ADD_EDGE)
        }
        else if(event.key === 'd' || event.key === 'D')
        {
            setClickAction(ClickAction.DELETE)
        }
        else if(event.key === 'c' || event.key === 'C')
        {
            setClickAction(ClickAction.COLOR)
        }
        else if(event.key === 't' || event.key === 'T')
        {
            setClickAction(ClickAction.ADD_DIRECTED_EDGE)
        }
    }

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
        {icon: <FontAwesomeIcon icon={faMousePointer}/>, name: 'Select (s)', currentClickAction: ClickAction.SELECT},
        {icon: <FontAwesomeIcon icon={faDotCircle}/>, name: 'New Vertex (v)', currentClickAction: ClickAction.ADD_VERTEX},
        {icon: <FontAwesomeIcon icon={faProjectDiagram}/>, name: 'New Edge (e)', currentClickAction: ClickAction.ADD_EDGE},
        {icon: <FontAwesomeIcon icon={faArrowRight}/>, name: 'New Directed Edge (t)', currentClickAction: ClickAction.ADD_DIRECTED_EDGE},
        {icon: <FontAwesomeIcon icon={faTrash}/>, name: 'Delete (d)', currentClickAction: ClickAction.DELETE},
        {icon: <FontAwesomeIcon icon={faPaintBrush}/>, name: 'Color (c)', currentClickAction: ClickAction.COLOR}
    ]

    return (
        <div className="Sidebar">
            {buttonData.map(element => makeButton(element))}
            {/* https://casesandberg.github.io/react-color/ */}
            <CirclePicker
                colors={["#000000", "#f44336", "#e91e63", "#9c27b0", "#673ab7", "#3f51b5", "#2196f3", "#03a9f4", "#00bcd4", "#009688", "#4caf50", "#8bc34a", "#cddc39", "#ffeb3b", "#ffc107", "#ff9800", "#ff5722", "#795548", "#607d8b"]}
                color={color}
                circleSpacing={9}
                onChange={(color, event) => setColor(color.hex)}
                width="auto"
                margin-top="15px"
                padding-top="15px"
                margin-left="auto"
                margin-right="auto"
                height="auto"
                background-color="lightgray"
            />
        </div>
    );
}

export default Sidebar;