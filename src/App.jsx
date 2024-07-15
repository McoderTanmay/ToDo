import { useSelector } from "react-redux";
import "./App.css";
import AddTask from "./components/AddTask";
import TaskDetails from "./components/TaskDetails";
import EditTask from "./components/EditTask";
import { useState } from "react";

function App() {
  const [tid, setTid] = useState(null);
  const tasks = useSelector((state) =>{
    return state.task;
  })

  const editBtn = useSelector((state)=>{
    return state.buttonSl;
  })

  const taskId = (id) =>{
    setTid(id);
  }

  return (
    <>
      {editBtn ? <EditTask id = {tid}/>:""}
      <AddTask />
      <div className="w-[50vw] mt-8 pt-2 pb-2 rounded-md bg-gray-800 m-auto">
        {tasks.map((data)=>{
          return <TaskDetails
            key = {data.id}
            id = {data.id}
            task = {data.title}
            date = {data.deadline}
            status= {data.status}
            onEdit= {taskId}
           />
        })}
      </div>
    </>
  );
}

export default App;
