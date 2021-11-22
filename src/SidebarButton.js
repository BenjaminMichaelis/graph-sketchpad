import React from "react"
import Button from "react-bootstrap/Button"
import {connect} from "react-redux"
import {doCustom} from "./clickActionSlice";
import './SidebarButton.css'

function SidebarButton(props) {
    const {icon, name, clickAction, currentClickAction, doCustom} = props
    return (
        <Button
            className="SidebarButton"
            variant="primary"
            onClick={() => doCustom(clickAction)}
            active={clickAction === currentClickAction}
        >
            {icon}
            <div className={'SidebarButton-Name'}>{name}</div>
        </Button>
    )
};

const mapStateToProps = (state) => {
    return {currentClickAction: state.clickAction}
};

const mapDispatchToProps = {doCustom};

export default connect(mapStateToProps, mapDispatchToProps)(SidebarButton);