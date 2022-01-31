import React from "react";
import TaskForm from "./TaskForm";
import ToDoList from "./ToDoList";

function Tasks(props){
    return <div>
        <TaskForm
        inputTask={props.inputTask}
        setInputTask={props.setInputTask}
        tasks={props.tasks}
        setTasks={props.setTasks}
        inputDate={props.inputDate}
        setInputDate={props.setInputDate}
        selectedGroup={props.selectedGroup}
        setSelectedGroup={props.setSelectedGroup}
        groups={props.groups}
      />
      <h2>Tasks</h2>
      <ToDoList
        tasks={props.tasks}
        setTasks={props.setTasks}
        groups={props.groups}
      />
    </div>
}
export default Tasks;