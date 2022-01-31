import React from "react";
import ColorPicker from "./ColorPicker";
import '.././css/Forms.css'

function GroupForm(props) {

    const inputGroupHandler = (e) => {
        props.setInputGroup(e.target.value);
    }
    const submitGroupHandler = (e) => {
        if (props.inputGroup !== '') {
            e.preventDefault();
            props.setGroups([...props.groups, {
                name: props.inputGroup,
                color: props.color,
                id: Math.random() * 1000
            }]);
            props.setInputGroup("");
        }
    }
    return (
        <form className="group-input-form">
            <input required value={props.inputGroup} onChange={inputGroupHandler} type="text" className="group-name-inp" placeholder="Input Group Name" />
            <div className="color-picker-container">
                <div style={{ color: props.color }} className='colorfull-text' >Pick a color :</div>
                <ColorPicker color={props.color} setColor={props.setColor} className="color-picker" />
            </div>
            <button onClick={submitGroupHandler} className="add-group-btn" type="submit">Add Group</button>
        </form>);
        
}

export default GroupForm;