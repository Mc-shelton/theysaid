import { atom, useAtom, useAtomValue } from 'jotai';
import Task, { task } from '../../components/task';
import CreateTask from './create';
import HeaderStrip from './header';
import ProfileStrip from './profile';
import { Plus, Sparkles, Trash } from 'lucide-react';
import { useState } from 'react';
import { assistant } from '../../components/assistant';


export const showCreateTask = atom(false);
export const taskAtom = atom<task[]>([
  {
    id: 1,
    title: 'Team Meeting',
    label: 'High',
    time: '09:00 AM - 10:00 AM',
    status:'done'
  },
  {
    id: 2,
    title: 'Design Review',
    label: 'Medium',
    time: '11:30 AM - 12:15 PM',
    status:'pending'
  },
  {
    id: 3,
    title: 'Lunch with Client',
    label: 'Low',
    time: '01:00 PM - 02:00 PM',
    status:'done'
  },
])
export default function Dashboard() {
  const [showCreate, setCreateTask] = useAtom(showCreateTask);
  const [multiSelect, setMultiSelect] = useState(false);
  const [showAssistant, setShowAssistant] = useAtom(assistant);
  const [dummyTasks, setDummyTasks] = useAtom(taskAtom)
  
  const [activeTask, setActiveTask] = useState<number>()
  return (
    <div className="h-screen font-sans text-sm">
      {showCreate && <CreateTask />}
      <HeaderStrip />
      <ProfileStrip />
      <div className="h-[75%] bg-white mt-4 rounded-xl py-8 px-8 overflow-y-scroll">
        <h3 className="text-[min(5vw,1.3rem)] flex-nowrap font-bold mb-4 flex justify-between items-center">
          My To-Do List{' '}
          <span
            onClick={() => {
              setShowAssistant(!showAssistant);
            }}
            className="text-sm flex justify-center items-center hover:cursor-pointer lg:hidden text-[5w]"
          >
            <Sparkles className="mr-2" /> AI Assistant
          </span>
        </h3>
        <div>
          <label className="">Sort Tasks</label>
          <select className="bg-gray-200 rounded-lg px-2 py-2 ml-2 mb-2 outline-none hover:cursor-pointer">
            <option value="all">All</option>
            <option value="date">Date</option>
            <option value="label">Label</option>
          </select>
        </div>
        <div className="flex flex-col gap-4 h-[60%] overflow-y-scroll">
          {dummyTasks.sort((a,b)=>b.id-a.id).map((l:task) => {
            return (
              <div key={l.id} className="flex items-center"
      draggable
      onDragStart={()=>{
        setActiveTask(l.id)

      }}

      onDragEnd={()=>{
        setActiveTask(undefined)

      }}
              >
                {multiSelect && (
                  <input
                    type="checkbox"
                    className="m-4 h-5 rounded-lg w-5 outline-none hover:cursor-pointer accent-slate-800"
                  />
                )}
                <Task
                  className="flex-1"
                  label={l.label}
                  time={l.time}
                  title={l.title}
                  status = {l.status}
                  onDoubleClick={(e: any) => {
                    setMultiSelect(!multiSelect);
                    e.stopPropagation();
                  }}
                />
              </div>
            );
          })}
        </div>
        {multiSelect && (
          <div className="flex gap-2 mt-4 flex-nowrap overflow-scroll">
            <div className="py-2 text-xs bg-gray-300 hover:cursor-pointer w-fit text-nowrap px-5 rounded-md flex items-center justify-center">
              <input type="checkbox" className=" accent-slate-800 mr-2" />{' '}
              <span>Select All</span>
            </div>
            <div className="py-2 text-xs bg-gray-300 hover:cursor-pointer px-5 text-nowrap rounded-md">
              Mark as done
            </div>
            <div className="py-2 text-xs bg-gray-300 hover:cursor-pointer px-5 text-nowrap rounded-md">
              Delete Selected
            </div>
          </div>
        )}
        <div className="flex items-center justify-start gap-3 mt-4">
          <div onDragEnter={()=>{
            setDummyTasks((prev)=>{
              return prev.filter((task:task)=>task.id != activeTask)
            })
          }} className={`flex items-center hover:cursor-pointer justify-between  bg-gray-800  text-white py-6 px-6 rounded-lg`}>
            <Trash />
          </div>
          <div
            className="flex items-center hover:cursor-pointer justify-between bg-gray-800 text-white py-6 px-6 rounded-lg"
            onClick={() => {
              console.log('Add task clicked');
              setCreateTask(true);
            }}
          >
            <Plus />
          </div>
        </div>
      </div>
    </div>
  );
}
