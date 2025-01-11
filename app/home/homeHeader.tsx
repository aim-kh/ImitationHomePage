"use server"
import { HomeBackGround } from "./components/backGroundImage";
import { ClientLink } from "./components/clientLink";
import { SequentialDisplay } from "./components/sequentialDisplay";
import { HumbergerMenu } from "./humburgerMenu";

const mainHeader = "relative w-full block min-h-[380px] md:min-h-[760px] bg-center bg-no-repeat bg-cover";

const spMenu ="bg-transparent bg-clip-border bg-opacity-20 bg-none bg-origin-padding bg-left-top bg-repeat \
    bg-auto border-b-0 border-t-0 border-r-0 border-l-0 border-image-stretch border-slice-100 border-image-none \
    border-image-width-1 text-white display-block float-none font-sans text-xs font-normal h-7 leading-5 \
    tracking-wider m-0 p-0 absolute right-3 top-3 text-center"



export async function HomeHeader(){

    return (
        <header className={mainHeader}>
            <HomeBackGround/>
            <HumbergerMenu/>
            <div className={spMenu}>
                <i></i><i></i><i></i>
            </div>
            <SequentialDisplay />
            <div className="top_wrap">
                <nav className="main_nav">
                    <ul>
                        <li> {/*href は後程修正 */}
                            <ClientLink href="./service/index.html">SERVICE</ClientLink> 
                        </li>
                        <li>
                            <ClientLink href="./case/index.html">CASE</ClientLink>
                        </li>
                        <li>
                            <ClientLink href="./company/index.html">COMPANY</ClientLink>
                        </li>
                        <li>
                            <ClientLink href="./recruit/index.html">RECRUIT</ClientLink>
                        </li>
                        <li>
                            <ClientLink href="./contact.html">CONTACT</ClientLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}