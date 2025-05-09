"use client"
import { breadCrumbNameMap } from "constants/bread_crumb_name_map";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { BreadCrumbItem } from "./BreadCrumbItem";


export function BreadCrumbs () {
    //現在のURLのパスを取得
    const pathname = usePathname();
    const rawSegmentsList = decodeURI(pathname).substring(1).split("/"); // 先頭""以外のパス部分を分割
    const pathSegmentsList = [""].concat(rawSegmentsList); // 先頭に""を追加（HOME） 
    const [hoverdPath, setHoverdPath] = React.useState<string | null>(null); // ホバーしたパスを保存するための状態

    return(
        <div>
            <nav className="bg-[#1d1b2c] px-[16px] text-[#fff] h-[66px] flex items-center font-hirakaku tracking-[1.5px] text-[14px]">
                <ul className="w-[1180px] flex gap-2 mx-auto wrap items-center">
                    {pathSegmentsList.map((pathSegment, index) => {
                        const url = "/" + pathSegmentsList.slice(1, index + 1).join("/")
                        console.log(url)
                        const breadCrumbItem = breadCrumbNameMap[url] // URLに対応する表示名を取得
                        const displayName = breadCrumbNameMap[url] || pathSegment // URLに対応する表示名を取得

                        return(
                            <React.Fragment key={url}>
                                {
                                    index !== 0 &&
                                    <span className="my-[12px] block mt-[9px] w-[8px] h-[8px] mx-[10px] border-t border-[#0094af] border-r border-[#0094af] rotate-45"></span>
                                }
                                <li
                                    className={`${index === pathSegmentsList.length - 1 ?  "bg-[#1c637a] border-[#1c637a] ": ""} rounded-[3px] text-[#fff] ml-[10px] px-[7px] py-[6px]`}
                                    onMouseEnter={() => setHoverdPath(url)} // ホバーしたときの処理
                                    onMouseLeave={() => setHoverdPath(null)} // ホバーが外れたときの処理
                                >
                                    <Link href={url} className={`${index === pathSegmentsList.length - 1 ? "": "hover:bg-[#1c637a] hover:opacity-70"} `}>{displayName}</Link>
                                    {hoverdPath === url && index !== pathSegmentsList.length - 1 && (
                                        <div className=" absolute mt-5000 opacity-1000 bg-[#1c637a]">
                                            <BreadCrumbItem/>
                                        </div>
                                       
                                    )}
                                </li>
                            </React.Fragment>
                        );
                })}
                </ul>
            </nav>
        </div>
        
    )
}