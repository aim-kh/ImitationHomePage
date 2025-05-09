"use client";
import { breadCrumbNameMap } from "constants/bread_crumb_name_map";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export function BreadCrumbs() {
  const pathname = usePathname();
  const rawSegments = decodeURI(pathname).split("/").filter(Boolean); // ""を除く
  const pathSegmentsList = [""].concat(rawSegments); // 先頭に""を追加（HOME）

  return (
    <div>
      <nav className="bg-[#1d1b2c] px-[16px] text-[#fff] h-[66px] flex items-center font-hirakaku tracking-[1.5px] text-[14px]">
        <ul className="w-[1180px] flex gap-2 mx-auto wrap items-center">
          {pathSegmentsList.map((_, index) => {
            const url = "/" + pathSegmentsList.slice(1, index + 1).join("/");
            const displayName = breadCrumbNameMap[url] || (index === 0 ? "HOME" : pathSegmentsList[index]);

            return (
              <React.Fragment key={url || "home"}>
                {index !== 0 && (
                  <span className="my-[12px] block mt-[9px] w-[8px] h-[8px] mx-[10px] border-t border-[#0094af] border-r border-[#0094af] rotate-45" />
                )}
                <li
                  className={`${
                    index === pathSegmentsList.length - 1
                      ? "bg-[#1c637a] border-[#1c637a]"
                      : "hover:bg-[#1c637a] hover:opacity-70"
                  } rounded-[3px] text-center text-[#fff] ml-[10px] px-[7px] py-[6px]`}
                >
                  {index === pathSegmentsList.length - 1 ? (
                    <span>{displayName}</span>
                  ) : (
                    <Link href={url || "/"}>{displayName}</Link>
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
