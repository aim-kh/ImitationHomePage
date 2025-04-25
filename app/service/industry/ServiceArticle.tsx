import Link from "next/link";
import { serviceArticleProps } from "types";

export function ServiceArticle (props:serviceArticleProps) {

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