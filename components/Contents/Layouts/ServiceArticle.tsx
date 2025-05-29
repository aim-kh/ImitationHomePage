import Link from "next/link";
import { ReactNode } from "react";

interface PerspectiveArticleProps  {
    href:string,
    title:string,
    description:ReactNode
    ClassName?:string
}

export function ServiceArticle (props:PerspectiveArticleProps) {

    return (
        <div className={`${props.ClassName} py-[15px] px-[20px] mb-[30px]`}>
            <div className="flex relative"> 
                <Link href={props.href} className="font-ryumin text-[#2187a4] text-[20px] pb-[10px]">
                <img src="/image/drop_menu_arrow.png" alt="arrow" 
                    className="absolute top-[8px] left-[-10px]"
                />
                    {props.title}
                </Link>
            </div>
            <p>{props.description}</p>
        </div>
    )
}