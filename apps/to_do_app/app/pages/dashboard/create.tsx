import { useAtom, useSetAtom } from "jotai"
import { showCreateTask, taskAtom } from "."
import { useEffect, useState } from "react"
import { task } from "../../components/task"
import { X } from "lucide-react"

export default function CreateTask() {
    const [createTask, setCreateTask] = useAtom(showCreateTask)
    const [dummyTasks, setDummyTasks] = useAtom(taskAtom)
    const [label, setLabel] = useState<'Low' | 'High' | 'Medium'>("Medium")
    const [alert, setAlert] = useState(false)
    const [title, setTitle] = useState()
    const [date, setDate] = useState()
    const [time, setTime] = useState()
    useEffect(()=>{
        const handleEscape = (event: KeyboardEvent) => {
            console.log('key', event.key)
            if (event.key == 'Escape') {
                setCreateTask((prev) => !prev);
            }
        };
        window.addEventListener('keydown', handleEscape);
        return () => {
            window.removeEventListener('keydown', handleEscape);
        };
    }, []);
        
    return(
        <div onClick={(e:any)=>{
            // alert("e.target.closest('#main').id")
            if(e.target.closest('#c-main')?.id != 'c-main'){
                setCreateTask((prev) => !prev)
            }
        }} className="absolute bg-[#6565652e] h-screen w-screen top-0 left-0 z-10 flex items-center justify-center">
            <div id="c-main" className="bg-white rounded-xl shadow-lg p-10 flex flex-col gap-4">
               <h4 className="flex justify-between">Create Task <span className="hover:cursor-pointer" onClick={()=>{
                setCreateTask((prev) => !prev)
               }}><X/></span></h4>
               <h4 className="mb-[-10px] font-bold">Task</h4>
               <input type="text" value={title} onChange={(e:any)=>setTitle(e.target.value)} className="outline-none rounded-lg bg-gray-100 h-10 w-60 px-4" placeholder="Task title"/>
               <h4 className="mb-[-10px] font-bold">Task Label</h4>
               <div className="flex gap-2">
               <div onClick={()=>{setLabel("High")}} className={`px-6 text-sm bg-gray-100 text-center py-2 rounded-lg h-fit hover:cursor-pointer ${label == 'High' && 'border-[1px] border-gray-800'}`}>High</div>
               <div onClick={()=>{setLabel('Medium')}} className={`px-6 text-sm bg-gray-100 text-center py-2 rounded-lg h-fit hover:cursor-pointer ${label == 'Medium' && 'border-[1px] border-gray-800'}`}>Medium</div>
               <div onClick={()=>{setLabel("Low")}} className={`px-6 text-sm bg-gray-100 text-center py-2 rounded-lg h-fit hover:cursor-pointer ${label == 'Low' && 'border-[1px] border-gray-800'}`}>Low</div>
               </div>

               <h4 className="mb-[-10px] font-bold">Choose Date & Time</h4>
               <div className="flex gap-2">
                <input type="date" value={date} onChange={(e:any)=>setDate(e.target.value)} className="outline-none rounded-lg bg-gray-100 h-10 w-50 px-4" placeholder="pick a date"/>
                <input type="time" value={time} onChange={(e:any)=>setTime(e.target.value)} className="outline-none rounded-lg bg-gray-100 h-10 w-50 px-4"/>
               </div>
               <h4 className="mb-[-10px] font-bold hover:cursor-pointer" onClick={()=>{setAlert(!alert)}}>Get alert for this task? <span className="bg-gray-800 px-4 py-2 text-white rounded-lg text-xs ml-4"> {!alert && <span className="mr-4">|</span>} {alert ? 'Yes' : 'No'} {alert && <span className="ml-4">|</span>}</span></h4>
               <div onClick={()=>{
                console.log(title, label)
                console.log(date, time)
                if(!title || !label || !date || !time)return
                let tm = (date as Date).toString() + (time as any).toString()
                const t:task = {
                    id: dummyTasks.length + 1,
                    title,
                    label,
                    time:tm,
                    status:'pending'
                }
                setDummyTasks(prev=>{
                    return [...prev, t]
                })
                setCreateTask((prev) => !prev)
               }} className={`flex itemes-center gap-2 justify-center px-5 py-3 hover:cursor-pointer bg-gray-800 text-white rounded-xl mt-10 font-bold`}>
                Creat Task
               </div>
            </div>
        </div>
    )
}