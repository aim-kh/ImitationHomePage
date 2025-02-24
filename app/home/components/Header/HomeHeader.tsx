"use server"
import { SequentialDisplay } from "./SequentialDisplay";
import { HumbergerMenu } from "./HumburgerMenu";
import Link from "next/link";
import clsx from "clsx";


export async function HomeHeader(){

    return (
        <header 
            className={clsx(
                "relative w-full block min-h-[380px] md:min-h-[760px]",
                "bg-center bg-no-repeat bg-cover"
            )}
            style={{ backgroundImage: "url('/image/top_image.jpg')" }}    
        >
            <div className="">
                <i></i><i></i><i></i>
            </div>
            <SequentialDisplay />
            <HumbergerMenu />
            <div className="top_wrap">
                <nav className="main_nav">
                    <ul>
                        <li> {/*href は後程修正 */}
                            <Link href="./service/index.html">SERVICE</Link> 
                        </li>
                        <li>
                            <Link href="./case/index.html">CASE</Link>
                        </li>
                        <li>
                            <Link href="./company/index.html">COMPANY</Link>
                        </li>
                        <li>
                            <Link href="./recruit/index.html">RECRUIT</Link>
                        </li>
                        <li>
                            <Link href="./contact.html">CONTACT</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}