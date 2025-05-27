import { atom, useAtom } from "jotai";
import { ArrowUp, Cross, Sparkles, X } from "lucide-react";

export const assistant = atom(false)
export default function Assistant(){
    const [showAssistant, setShowAssistant] = useAtom(assistant)
    return(
        <div className="p-5 rounded-lg bg-white h-[100%] w-[100%] md:w-[100%] float-right">
            <h1 className="text-xl font-semibold  mb-2 flex justify-between items-center">AI Assistant <span className="lg:hidden" onClick={()=>{
                setShowAssistant(!showAssistant)
            }}><X/></span></h1>
            <p className="text-gray-700 text-sm">Knowledge, answers, ideas. Once click away</p>
            <div className="mt-4 overflow-hidden bg-gray-100 h-[90%] border-[1px]  border-gray-800 rounded-xl">
                <div className="h-[90%] overflow-y-scroll">
                    <div className="flex items-center justify-center flex-col h-[20%] mt-20">
                        <p className="font-light">Hi, Kiage</p>
                        <p className="font-bold text-lg">How can i help you today?</p>
                    </div>
                    <div className="flex text-center flex-col mt-20 items-center justify-centergap-4 gap-4 p-4">
                        <div className=""><Sparkles/></div>
                        <p className="text-xs px-5 hover:cursor-pointer py-2 bg-white rounded-full">"Can you please help me with my first task?"</p>
                        <p className="text-xs px-5 hover:cursor-pointer py-2 bg-white rounded-full">"Create a template for a product design doc?"</p>
                        <p className="text-xs px-5 hover:cursor-pointer py-2 bg-white rounded-full">"Give me an SQL query to sort by data by date?"</p>
                    </div>
                </div>
                <div className="flex items-center justify-center h-[10%]">
                    <input className="h-10 rounded-md border-[1px] border-gray-400 w-[80%] px-2  outline-none" placeholder="Your prompt"/>
                    <div className="rounded-md text-white bg-gray-800 px-3 py-3 ml-2 hover:bg-gray-700 hover:cursor-pointer">
                    <ArrowUp size={15}/>
                    </div>
                </div>
            </div>
        </div>
    )
}