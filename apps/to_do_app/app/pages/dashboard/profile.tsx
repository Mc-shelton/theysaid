import { useAtomValue, useSetAtom } from "jotai";
import { Plus } from "lucide-react";
import { showCreateTask, taskAtom } from ".";


export default function ProfileStrip(){
    const setCreateTask = useSetAtom(showCreateTask)
    const tasks = useAtomValue(taskAtom)
    return(
        <div className="bg-white flex px-4 py-4 rounded-xl mt-4  text-nowrap">
            <div className="flex flex-1 gap-4 ">
                <div className="flex items-center hover:cursor-pointer justify-center w-12 h-12 bg-gray-800 text-white rounded-xl"
                onClick={() => {
                    console.log("Add task clicked");
                    setCreateTask(t=>true)
                }}
                >
                <Plus size={30}/>
                </div>
                <div className="pt-1">
                    <h3 className="text-lg">Add task</h3>
                    <p className="text-xs">Create new task</p>
                </div>
            </div>
            <div className="flex-1 flex gap-4 items-center justify-evenly">
                <div className="">
                <p className="text-xs text-gray-500 pl-2">Tasks</p>
                <p className="text-xl font-bold border-l-2 pl-3 border-gray-900">{tasks.length}</p>
                </div>
                <div className="">
                <p className="text-xs text-gray-500 pl-2">Pending</p>
                <p className="text-xl font-bold border-l-2 pl-3 border-gray-900">{tasks.filter(t=>t.status == 'pending').length}</p>
                </div>
            </div>

        </div>
    )
}