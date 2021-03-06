import React from "react"
import Button from "react-bootstrap/Button"
import './SidebarButton.css'

function SidebarButton(props)
{
    const {icon, name, clickAction, currentClickAction, setClickAction} = props
    return (
        <Button
            className="SidebarButton"
            variant="outline-primary"
            onClick={() => setClickAction(currentClickAction)}
            active={clickAction === currentClickAction}
        >
            {icon}
            <div className={'SidebarButton-Name'}>{name}</div>
        </Button>
    )
};

export default SidebarButton