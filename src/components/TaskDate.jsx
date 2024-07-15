import React from "react";

function TaskDate({taskDate}) {
  const compDate = new Date(taskDate);
  const month = compDate.toLocaleString("en-US", {month: "long"})
  const day = compDate.toLocaleString("en-US", {day: "2-digit"})
  const year = compDate.toLocaleString("en-US", {year: "numeric"});
  
  return <div className="w-[75px] flex flex-col m-auto items-center bg-gray-700 rounded-md text-white">
    <div className="text-base">{month}</div>
    <div className="text-sm">{year}</div>
    <div className="text-lg font-semibold">{day}</div>
  </div>;
}

export default TaskDate;
