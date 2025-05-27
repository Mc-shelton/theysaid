import { ReactProps } from "@theysaid/shared-types";
export function Badge(props:ReactProps){
    return(
        <div className="flex-none w-9 h-5 border border-red-600 rounded-full" style={{
            backgroundImage: `url(${props.src})`,
        }}>
            &nbsp;
        </div>

    )
}