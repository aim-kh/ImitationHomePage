import { ClientLink } from "./clientLink";

const navBox = "bg-scroll bg-clip-border bg-[#1d1b2c] bg-none bg-origin-padding bg-left-top bg-repeat bg-auto \
    border-0 text-black block font-sans text-sm font-normal h-full tracking-wider leading-normal list-none \
    m-0 mx-auto p-0 pt-12 relative text-center w-auto";

const navLink = "bg-scroll bg-clip-border bg-[#1d1b2c] bg-none bg-origin-padding bg-left-top bg-repeat bg-auto\
    border-0 box-border text-black list-item float-left font-sans text-sm font-normal h-10 tracking-wider \
    leading-normal list-none m-0 p-0 text-center w-full transition-all duration-500 ease-linear";

const navMask = "bg-[rgb(29,27,44)] bg-no-repeat bg-auto border-t-10 border-t-solid border-t-[rgb(29,27,44)] \
    box-border text-black display-list-item float-left font-sans font-normal text-base leading-5 tracking-wide \
    list-none h-[2000px] m-0 p-0 text-center transition-all ease duration-500 select-none";


const sp = "border-b border-b-white border-l border-l-white border-r border-r-white \
    border-t border-t-transparent box-border hidden text-black font-sans text-sm font-normal h-auto \
    left-0 tracking-wider leading-5 m-0 mx-auto p-0 fixed text-center top-0 w-full z-[100]"

export function HumbergerMenu () {
    return (
        <nav id="nav_sp" className={sp}>
            <ul className={navBox}>
                <li className={navLink}><ClientLink href="./service/index.html">SERVICE</ClientLink></li>
                <li className={navLink}><ClientLink href="./case/index.html">CASE</ClientLink></li>
                <li className={navLink}><ClientLink href="./company/index.html">COMPANY</ClientLink></li>
                <li className={navLink}><ClientLink href="./recruit/index.html">RECRUIT</ClientLink></li>
                <li className={navLink}><ClientLink href="./contact.html">CONTACT</ClientLink></li>
                <li className={navMask}></li>
            </ul>
        </nav>
    )
}