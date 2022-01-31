import React from "react";
import Group from "./Group.js";

function GroupList(props){
    return <>
        {props.groups.map((group) => (
        <Group 
        name={group.name}
        key={group.id}
        color={group.color}
        />
        ))}
    </>
}
export default GroupList;