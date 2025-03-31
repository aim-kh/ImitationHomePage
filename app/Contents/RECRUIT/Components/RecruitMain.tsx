import Link from "next/link";
import { ContentsTitle } from "../../../../Components/Contents/ContentsTitle";


export function RecruitMain(){

    return(
        <div className="mb-[40px] tracking-[2px]">
            <ContentsTitle title="RECRUIT"/>
            <section className="py-[60px] text-center flex justify-center">
                <Link href="https://www.aimnext.co.jp/recruit/shinsotsu/index.html" className="flex justify-center items-center w-[280px] h-[70px] bg-[#1d1b29] text-[#fff]">
                    新卒採用
                </Link>
            </section>

            <section className="py-[60px] bg-[#f8f8f8] flex justify-center">
                <Link href="https://www.aimnext.co.jp/recruit/career/index.html" className="flex justify-center items-center w-[280px] h-[70px] bg-[#1d1b29] text-[#fff]">
                    中途採用
                </Link>
            </section>
        </div>
    )
}