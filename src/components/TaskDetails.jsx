import React, { useState } from "react";
import Date from "./TaskDate";
import { useDispatch } from "react-redux";
import { deleteTask } from "../store/slices/taskSlice";
import { editTaskBtn } from "../store/slices/btnSlice";

function TaskDetails({task, date, status, id, onEdit}) {
  const dispatch = useDispatch()

  const deleteHandeler = () =>{
    dispatch(deleteTask(id))
  }

  const editHandeler = () =>{
    dispatch(editTaskBtn());
    onEdit(id);
  }

  return (
    <>
      <div className="flex md:w-[46vw] h-[90px] mb-1 m-auto shadow-md p-2 justify-between items-center bg-gray-500 rounded-md text-white">
        <div className="flex h-full">
          <Date taskDate = {date}/>
          <div className="ms-2 h-full flex flex-col justify-center text-xl font-medium">{task}</div>
        </div>
        <div>
          <button className="bg-gray-700 p-2 font-medium me-2 rounded-md" onClick={editHandeler}>Edit</button>
          <button className="bg-gray-700 p-2 font-medium me-2 rounded-md">{status}</button>
          <button className="bg-gray-700 p-2 font-medium rounded-md" onClick={deleteHandeler}>Delete</button>
        </div>
      </div>
    </>
  );
}

export default TaskDetails;
