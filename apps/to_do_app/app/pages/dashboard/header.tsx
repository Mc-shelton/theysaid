// import {Badge} from "@theysaid/shared-ui/badge";

import { Badge } from "../../components/badge";
import CreateTask from "./create";

export default function HeaderStrip(){
    return(
        <div className="flex justify-between px-5 py-6 rounded-xl bg-white mt-3"  >
            <div >
            <h3 className="font-bold-md text-xl ">Good Morning, Kiage!</h3>
            <p className="font-thin text-xs">What do you plan to today?</p>
            </div>
            <div className="flex bg-gray-100 px-6 rounded-full justify-center items-center">
                <Badge className="mx-[-4px]" src="https://picsum.photos/200"/>
                <Badge className="mx-[-4px]"  src="https://picsum.photos/200"/>
                <Badge className="mx-[-4px]"  src="https://picsum.photos/200"/>
                <Badge className="mx-[-4px]"  src="https://picsum.photos/200"/>
            </div>
        </div>
    )
}