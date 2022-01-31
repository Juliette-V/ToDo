import React from "react";
import '.././css/Forms.css';

const TaskForm = (props) => {
    const inputTextHandler = (e) => {
        props.setInputTask(e.target.value);
    }
    const inputDateHandler = (e) => {
        props.setInputDate(e.target.value);
    }
    const selectGroupHandler = (e) => {
        props.setSelectedGroup(e.target.value);
    }
    const submitToDoHandler = (e) => {
        if (props.inputTask !== '' && props.inputDate !== '' && props.selectedGroup !== '') {
            e.preventDefault();
            props.setTasks([...props.tasks, { text: props.inputTask, date: props.inputDate, group: props.selectedGroup, status: "new", id: Math.random() * 1000 }]);
            props.setInputTask("");
            props.setInputDate("");
        }
    }
    return (
        <form className="task-form">
            <input required value={props.inputTask} onChange={inputTextHandler} type="text" className="task-desrription-inp" placeholder="Input Task Description" />
            <label className="date-label">Deadline date :<input required value={props.inputDate} onChange={inputDateHandler} type="date" className="task-date-inp" /></label>
            <label className="group-label">Group :<select required value={props.selectedGroup} onChange={selectGroupHandler} className="select-group">
                <option value="" disabled >Select group</option>
                {props.groups.map((group, index) => (
                    <option key={index}>{group.name}</option>
                ))}
            </select></label>
            <button onClick={submitToDoHandler} className="add-task-btn" type="submit">Add Task</button>
        </form>
    )
}
export default TaskForm;