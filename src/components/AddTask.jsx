import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../store/slices/taskSlice";

function AddTask() {
  const dispatch = useDispatch();
  const [details, setDetails] = useState({
    title: "",
    deadline:"",
    status:"Incomplete"
  })

  let id = 0;
  const addTaskHandeler = () =>{
    const task = {...details, id: Math.random()};
    dispatch(addTask(task));
    setDetails({title:"",deadline:"", status:"Incomplete"});
  }

  return (
    <div className="md:w-[50vw] flex flex-col items-center bg-purple-400 pb-3 pt-3 m-auto rounded-md  ">
      <div className="w-full flex justify-center mb-4">
        <input
          type="text"
          name="title"
          className="w-[75%] h-8 rounded ps-2"
          placeholder="Enter Task"
          value={details.title}
          onChange={(e)=>{
            setDetails({...details, title: e.target.value})
          }}
        />
      </div>
      <div className="w-full flex justify-center mb-4">
        <input
          type="date"
          name="deadline"
          className="w-[75%] h-8 rounded ps-2"
          placeholder="Due Date"
          value={details.deadline}
          onChange={(e)=>{
            setDetails({...details, deadline:e.target.value})
          }}
        />
      </div>
      <button onClick={addTaskHandeler} className="h-8 ps-2 pe-2 rounded bg-purple-700 text-white">
        Add Task
      </button>
    </div>
  );
}

export default AddTask;
