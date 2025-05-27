import { useState } from 'react';
import { Check, Clock } from 'lucide-react';
import { ReactProps } from '@theysaid/shared-types';
import { useDraggable } from '@dnd-kit/core';
import { useAtom, useAtomValue } from 'jotai';
import { taskAtom } from '../pages/dashboard';

export type task = {
  id: number;
  label: 'High' | 'Medium' | 'Low';
  title: string;
  time: string;
  status:'done' | 'pending'
};
export default function Task(props: ReactProps) {
  const { label, time, status,title , id} = props;
  const [checked, setChecked] = useState(status=='done');
  const [tasks, setTasks] = useAtom(taskAtom)

  return (
    <div
      className={`flex  hover:cursor-pointer border-[1px] border-gray-800 bg-gray-100  py-6 px-6 rounded-xl justify-between ${props.className}`}
      
      onClick={(e) => {
        if(status == 'pending'){
        setChecked(true);
        let task:task = tasks.filter((t:task)=>t.id == id)[0]
        let all = tasks.filter((t:task)=>t.id != id)
        task.status = 'done'
        setTasks([...all,task])
        }
        props.onClick && props.onClick(e);

      }}
      onDoubleClick={(e) => {
        props.onDoubleClick && props.onDoubleClick(e);
      }}
    >
      <div className="">
        <p className={` text-center text-gary-800 rounded-md ${label=='Low' ? 'bg-gray-300' : label=='Medium'?'bg-gray-500 text-white' : 'bg-gray-700 text-white'}  w-fit px-5 py-1.5 text-xs`}>
          {label}
        </p>
        <h4 className="font-bold mt-4">{title}</h4>
        <p className="font-thin text-xs flex items-center ">
          <Clock size={15} />
          <span className="pl-1">{time}</span>
        </p>
      </div>
      <div
        className={`bg-gray-200 h-5 w-5 hover:cursor-pointer flex rounded-full items-center justify-center ${
          checked && 'border-[1px] border-gray-950'
        }`}
      >
        {checked && <Check size={15} className="font-bold" />}
      </div>
    </div>
  );
}
