import Link from "next/link";

const navLink = "w-[161] h-[36] leading-[36px] text-center text-[#fff] text-[14px] block bg-black opacity-70  "

export function HumbergerMenu () {
    return (
        <nav id="nav_sp" className="pt-[60] h-[36]">
            <ul className="flex justify-center gap-4 border border-white">
                <li className={navLink}><Link href="./service/index.html">SERVICE</Link></li>
                <li className={navLink}><Link href="./case/index.html">CASE</Link></li>
                <li className={navLink}><Link href="./company/index.html">COMPANY</Link></li>
                <li className={navLink}><Link href="./recruit/index.html">RECRUIT</Link></li>
                <li className={navLink}><Link href="./contact.html">CONTACT</Link></li>
                <li className=""></li>
            </ul>
        </nav>
    )
}