import React from "react";
import { formatDistanceToNow, differenceInDays } from 'date-fns'
import { tr } from "date-fns/locale";


const Task = ({ taskObj, onComplete }) => {
  const distance = formatDistanceToNow(
    new Date(taskObj.deadline), {
    addSuffix: true,
    locale: tr,
  }
  );
  const isDeadLineClose = differenceInDays(
    new Date(taskObj.deadline),
    new Date()
  ) <= 3;


  return (
    <div className="bg-[#fff] shadow-md p-6 leading-normal mt-4">
      <h3>{taskObj.title}</h3>
      <div className="text-xs pt-1">son teslim: <span>className={isDeadLineClose ? " bg-[#ffd9d4]" : " bg-[#d4d7ff] "} {distance}</span></div>
      <p className="text-xs pt-2 ">{taskObj.description}</p>
      <div>
        {taskObj.people.map((p) => (
          <span className="inline-block py-1 px-3 text-sm mr-1 mb-2 rounded-[30px] border border-solid border-gray300" key={p}>{p}</span>
        ))}
      </div>
      {onComplete && <button onClick={() => onComplete(taskObj.id)}>Tamamlandı</button>}
    </div>
  );
};

export default Task;
