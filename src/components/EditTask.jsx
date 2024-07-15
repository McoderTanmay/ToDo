import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editTask } from "../store/slices/taskSlice";
import { editTaskBtn } from "../store/slices/btnSlice";

function EditTask({id}) {
  const [details, setDetails] = useState({
    title: "",
    deadline: "",
    status: "",
  });
  console.log(id);
  const dispatch = useDispatch();

  const editHandeler = ()=>{
    const data = {...details, id:id}
    dispatch(editTask(data));
    dispatch(editTaskBtn());
  }

  return (
    <div className="z-[1] flex w-full h-full bg-slate-800/50 absolute">
      <div className="md:w-[50vw] flex flex-col items-center z-[2] bg-purple-400 pb-3 pt-5 m-auto rounded-md  ">
        <div className="w-full flex justify-center mb-4">
          <input
            type="text"
            name="title"
            className="w-[75%] h-8 rounded ps-2"
            placeholder="Enter Task"
            value={details.title}
            onChange={(e) => {
              setDetails({ ...details, title: e.target.value });
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
            onChange={(e) => {
              setDetails({ ...details, deadline: e.target.value });
            }}
          />
        </div>
        <div className="w-full flex justify-center mb-4">
          <input
            type="text"
            name="status"
            className="w-[75%] h-8 rounded ps-2"
            placeholder="Status"
            value={details.status}
            onChange={(e) => {
              setDetails({ ...details, status: e.target.value });
            }}
          />
        </div>
        <button className="h-8 ps-2 pe-2 rounded bg-purple-700 text-white" onClick={editHandeler}>
          Edit Task
        </button>
      </div>
    </div>
  );
}

export default EditTask;
