import React from "react";
import GroupForm from "./GroupForm";
import GroupList from "./GroupList";

function Groups(props) {
  return <>
    <GroupForm
      groups={props.groups}
      setGroups={props.setGroups}
      inputGroup={props.inputGroup}
      setInputGroup={props.setInputGroup}
      color={props.color}
      setColor={props.setColor}
    />
    <h2>Groups</h2>
    <ul className="group-table">
      <GroupList
        groups={props.groups}
      />
    </ul>
  </>

}
export default Groups;