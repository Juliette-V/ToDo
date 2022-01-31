import React from "react";
import Task from "./Task";
import '.././css/Tasks.css';

const ToDoList = (props) => {

    return (
        <table className="todo-list-container">
            <thead className="table-head">
                <tr>
                    <th className="task-description">Description</th>
                    <th className="task-date">Deadline</th>
                    <th className="task-group">Group</th>
                    <th className="task-status">Status</th>
                    <th className="task-delete"></th>
                </tr>
            </thead>
            <tbody className="todo-list">
                {props.tasks.map((task) => (
                    <Task
                        tasks={props.tasks}
                        setTasks={props.setTasks}
                        key={task.id}
                        task={task}
                        groups={props.groups}

                    />
                ))}
            </tbody>
        </table>
    )
}
export default ToDoList;