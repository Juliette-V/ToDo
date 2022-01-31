import React from "react";

function Group(props) {

    return <li className="group" style={{ color: props.color }}>
        {props.name}
    </li>
}
export default Group;