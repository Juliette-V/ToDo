import React from "react";

const Task = (props) => {

    const deleteTaskHandler = () => {
        props.setTasks(props.tasks.filter((task) => task.id !== props.task.id))
    }
    const statusHandler = (e) => {
        props.setTasks(props.tasks.map((task) => {
            if (task.id === props.task.id)
                return {
                    ...task, status: e.target.value
                }
            return task;
        }))
    }
    const taskColor = () => {
        const groupIndex = props.groups.findIndex(group => (
            group.name === props.task.group
        ));
        return props.groups[groupIndex].color;
    }

    return (
        <tr className="task" style={{color:taskColor()}}>
            <td>{props.task.text} </td>
            <td>{props.task.date}</td>
            <td>{props.task.group}</td>
            <td>
                <select value={props.task.status} onChange={statusHandler} className="status-select">
                    <option value={"new"}>new</option>
                    <option value={"inProgress"}>in progress</option>
                    <option value={"done"}>done</option>
                </select>
            </td>
            <td>
                <button onClick={deleteTaskHandler} className="delete-btn"><i className="fas fa-trash-alt"></i></button>
            </td>
        </tr>
    );
}
export default Task;