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
            <HumbergerMenu 
                CustomClassName="bg-black opacity-70 border-white text-[#fff] hover:opacity-40 mt-[60px]"
            />
            <div>
                <nav>
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