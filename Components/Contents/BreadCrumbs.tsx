"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";


export function BreadCrumbs () {
    const pathname = usePathname()
    const pathSegmentsList = decodeURI(pathname).substring(1).split("/"); // 先頭""以外のパス部分を分割
    const displaySegmentsList =  pathSegmentsList.filter(segment => segment !== "contents");

    return(
        <div>
            <nav className="bg-[#1d1b2c] px-[16px] text-[#fff] h-[66px] flex items-center font-hirakaku tracking-[1.5px] text-[14px]">
                <ul className="w-[1180px] flex gap-2 mx-auto wrap items-center">
                    <li className="my-[12px]">
                        <Link href={"/"} className="">
                            {"HOME"}
                        </Link>
                    </li>
                    <span className="my-[12px] block mt-[9px] w-[8px] h-[8px] mx-[10px] border-t border-[#0094af] border-r border-[#0094af] rotate-45"></span>
                    {displaySegmentsList.map((pathSegment, index) => {
                    const url = "/" + pathSegmentsList.slice(0, index + 2).join("/")
                    return(
                        <li key={url} className="text-center bg-[#1c637a] text-[#fff] border-[#1c637a] rounded-[3px] ml-[10px] px-[7px] py-[11px]">
                            <Link href={url}>
                                    {pathSegment}
                            </Link>
                        </li>
                    )
                })}
                </ul>
            </nav>
        </div>
        
    )
}