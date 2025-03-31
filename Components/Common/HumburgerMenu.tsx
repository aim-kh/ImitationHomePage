import clsx from "clsx";
import Link from "next/link";

interface classNameProps {
    CustomClassName?: string;
    ServiceClassName?: string;
    CaseClassName?: string;
    CompanyClassName?: string;
    RecruitClassName?: string;
    ContactClassName?: string;
}

export function HumbergerMenu (props: classNameProps) {

    const baseClassName = clsx(
        "w-[161px] h-[36px] leading-[36px] text-center  text-[14px]",
        "transition duration-400 border block"
    )
    return (
        <nav>
            <ul className="flex justify-center gap-4 m-auto">
                <li><Link className={`${baseClassName} ${props.CustomClassName} ${props.ServiceClassName}`} href="/Contents/SERVICE">SERVICE</Link></li>
                <li><Link className={`${baseClassName} ${props.CustomClassName} ${props.CaseClassName}`} href="/Contents/CASE">CASE</Link></li>
                <li><Link className={`${baseClassName} ${props.CustomClassName} ${props.CompanyClassName}`} href="/Contents/COMPANY">COMPANY</Link></li>
                <li><Link className={`${baseClassName} ${props.CustomClassName} ${props.RecruitClassName}`} href="/Contents/RECRUIT">RECRUIT</Link></li>
                <li><Link className={`${baseClassName} ${props.CustomClassName} ${props.ContactClassName}`} href="/Contents/CONTACT">CONTACT</Link></li>
                <li></li>
            </ul>
        </nav>
    )
}