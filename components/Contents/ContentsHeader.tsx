import Image from "next/image";
import Link from "next/link";
import { ContentsMenu } from "../Common/ContentsMenu";


interface classNameProps {
    CustomClassName?: string;
    ServiceClassName?: string;
    CaseClassName?: string;
    CompanyClassName?: string;
    RecruitClassName?: string;
    ContactClassName?: string;
}


export function ContentsHeader(props: classNameProps) {
    return(
        <div className="my-[5px] m-auto">
            <div className="flex justify-center items-center h-[90px]">
                <Link
                    href="/"
                    className="mr-[108px]"
                >
                    <Image
                        src="/image/top_logo_se.png"
                        alt="top_logo_se.png"
                        width={118}
                        height={51}
                    />
                </Link>
                <ContentsMenu
                    CustomClassName={`${props.CustomClassName} text-[14px] border-[#1d1b2c]] text-[#1d1b2c] hover:opacity-80 hover:bg-[#1d1b2c] hover:text-[#ffffff]`}
                    ServiceClassName={props.ServiceClassName || ""}
                    CaseClassName={props.CaseClassName || ""}
                    CompanyClassName={props.CompanyClassName || ""}
                    RecruitClassName={props.RecruitClassName || ""}
                    ContactClassName={props.ContactClassName || ""}
                />
            </div>
            

        </div>
    )
}