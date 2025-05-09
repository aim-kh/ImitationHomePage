import { Footer } from "@components/Common/Footer/Footer";
import { BreadCrumbs } from "@components/Contents/BreadCrumbs";
import { ContentsHeader } from "@components/Contents/ContentsHeader";
import { CaseMain } from "./CaseMain";


export default function Case () {

    return(
        <>
            <ContentsHeader
                CaseClassName="bg-[#1d1b2c] text-[#ffffff] hover:opacity-80"
                CustomClassName="border border-[#1d1b2c]" 
            />
            <BreadCrumbs/>
            <CaseMain/>
            <Footer/>
        </>
    )
}