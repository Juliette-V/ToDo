import React, { useState, useEffect } from "react";
import './css/App.css';
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Groups from "./components/Groups";
import Tasks from "./components/Tasks";

function App() {

  const [inputGroup, setInputGroup] = useState("");
  const [groups, setGroups] = useState([]);
  const [inputTask, setInputTask] = useState("");
  const [inputDate, setInputDate] = useState("");
  const [selectedGroup, setSelectedGroup] = useState("");
  const [color, setColor] = useState("");
  const [tasks, setTasks] = useState([]);

  const saveInLocalStarage = () => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
    localStorage.setItem('groups', JSON.stringify(groups));
  }
  const getFromLocalStorage = () => {
    if (localStorage.getItem('tasks') === null && localStorage.getItem('groups') === null) {
      localStorage.setItem('tasks', JSON.stringify([]));
      localStorage.setItem('groups', JSON.stringify([]));
    } else {
      let tasksInStorage = JSON.parse(localStorage.getItem('tasks'));
      let groupsInStorage = JSON.parse(localStorage.getItem('groups'));
      setTasks(tasksInStorage);
      setGroups(groupsInStorage);
    }
  }

  useEffect(() => {
    getFromLocalStorage();
  }, []);

  useEffect(() => {
    saveInLocalStarage();
  }, [tasks, groups]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Tasks
            inputTask={inputTask}
            setInputTask={setInputTask}
            tasks={tasks}
            setTasks={setTasks}
            inputDate={inputDate}
            setInputDate={setInputDate}
            selectedGroup={selectedGroup}
            setSelectedGroup={setSelectedGroup}
            groups={groups}
          />} />
          <Route path="Tasks" element={<Tasks
            inputTask={inputTask}
            setInputTask={setInputTask}
            tasks={tasks}
            setTasks={setTasks}
            inputDate={inputDate}
            setInputDate={setInputDate}
            selectedGroup={selectedGroup}
            setSelectedGroup={setSelectedGroup}
            groups={groups}
          />} />
          <Route path="Groups" element={<Groups
            groups={groups}
            setGroups={setGroups}
            inputGroup={inputGroup}
            setInputGroup={setInputGroup}
            color={color}
            setColor={setColor}
          />} />
        </Route>
      </Routes>

    </div>
  );
}

export default App;
