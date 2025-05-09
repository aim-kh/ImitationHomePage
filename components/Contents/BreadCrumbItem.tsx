import { breadCrumbNameMap , breadCrumbTree} from "constants/bread_crumb_name_map";
import Link from "next/link";


export function BreadCrumbItem () {
    const breadCrumbItemList = Object.keys(breadCrumbNameMap);

    return(
        <>
            <ul>
                {breadCrumbItemList.map((url) => {
                    return (
                        <li key={url}>
                            <Link href={url}>
                                {breadCrumbNameMap[url]}
                            </Link>
                        </li>
                    )
                })} 
            </ul>
        </>
    )
}