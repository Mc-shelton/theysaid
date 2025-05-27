import { ReactProps } from "@theysaid/shared-types";
import { useState } from "react";
export function Badge(props:ReactProps){
    const [hovered, setHovered] = useState(false);
    return(
        <div onMouseOver={()=>{
            setHovered(true);
        }} 
        onMouseLeave={()=>{
            setHovered(false);
        }}
        className={`flex-none w-6 h-6 hover:cursor-pointer rounded-full bg-cover bg-no-repeat bg-center  ${props.className}`} style={{
            backgroundImage: `url(${props.src})`,
        }}>
            {hovered && <p className="absolute mt-[-30px] px-5 py-2 rounded-full bg-gray-200 text-xs">Badge : You created a new task</p>}
            &nbsp;
        </div>
    )
}