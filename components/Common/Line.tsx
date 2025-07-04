import { ReactNode } from "react";


export function Line({text, id}:{text:ReactNode, id?: string}) {


    return(
        <>
    
            <div className="flex justify-center items-center">
                <span className="bg-[#2187a4] h-[1px] w-[40px] mx-[10px]">
                </span>
                <h3 id={id} className="text-center text-[24px] font-ryumin">
                 {text}
                </h3>
                <span className="bg-[#2187a4] h-[1px] w-[40px] mx-[10px]">
                </span>
            </div>
        </>
    )
}