import clsx from "clsx"
import Link from "next/link"


export function MoreButton ({href}:{href:string}) {

    return(
        <>
            <Link
                href={href}
                className={clsx(
                    "absolute bottom-[20px] md:w-[150px] md:h-[35px] xs:w-[100px] xs:h-[25px]",
                    "text-center bg-black text-white flex items-center justify-center font-ryumin",
                )}
            >
                More
            </Link>
        </>
    )
}