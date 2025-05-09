"use client"
import { breadCrumbNameMap } from "constants/bread_crumb_name_map";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export function BreadCrumbs () {
    const pathname = usePathname();
    const rawSegmentsList = decodeURI(pathname).substring(1).split("/");
    const pathSegmentsList = [""].concat(rawSegmentsList);

    return (
        <div>
            <nav className="bg-[#1d1b2c] px-[16px] text-[#fff] h-[66px] flex items-center font-hirakaku tracking-[1.5px] text-[14px]">
                <ul className="w-[1180px] flex gap-2 mx-auto wrap items-center">
                    {pathSegmentsList.map((pathSegment, index) => {
                        const url = "/" + pathSegmentsList.slice(1, index + 1).join("/");
                        const item = breadCrumbNameMap[url];
                        const displayName = typeof item === "string" ? item : item?.name ?? pathSegment;

                        const children = typeof item === "object" && item.children;

                        return (
                            <React.Fragment key={url}>
                                {index !== 0 && (
                                    <span className="my-[12px] block mt-[9px] w-[8px] h-[8px] mx-[10px] border-t border-[#0094af] border-r border-[#0094af] rotate-45"></span>
                                )}
                                <li className={`group relative ${index === pathSegmentsList.length - 1 ? "bg-[#1c637a]" : "hover:bg-[#1c637a] hover:opacity-70"} rounded-[3px] text-center text-[#fff] ml-[10px] px-[7px] py-[6px]`}>
                                    <Link href={url}>
                                        {displayName}
                                    </Link>
                                    
                                    {children && (
                                        <ul className="absolute top-full left-0 mt-2 w-max bg-white text-black text-left rounded shadow-md z-10 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity duration-200">
                                            {children.map(child => (
                                                <li key={child.href}>
                                                    <Link href={child.href} className="block px-4 py-2 hover:bg-gray-100">
                                                        {child.name}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </li>
                            </React.Fragment>
                        );
                    })}
                </ul>
            </nav>
        </div>
    );
}
