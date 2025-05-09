'use client'

import clsx from "clsx"
import { ReactNode } from "react"
import { Link as ScrollLink } from "react-scroll"


export function ScrollButton({page, title}: {page:string, title: ReactNode}) {


    return(
        <div className={clsx(
            "w-[260px] mx-[12px] pt-[15px] pb-[30px] px-[30px]",
            "bg-[#3c92ac] text-[#fff] text-[14px]",
            "leading-[17px] text-center whitespace-pre-line",
            "relative"

        )}>
            {/* ページ遷移でないのでnext/link不要 */}
            <ScrollLink to={page} smooth={true} duration={500} className="tracking-[0px]">
                {title}
            </ScrollLink>
            <img src="/image/under_arrow_s.png" alt="arrow" 
                className="absolute bottom-[10px] left-[50%] ml-[-5px]"
            />
        </div>
    )
}