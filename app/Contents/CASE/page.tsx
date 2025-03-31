import { Footer } from "@Components/Common/Footer/Footer";
import { BreadCrumbs } from "@Components/Contents/BreadCrumbs";
import { CaseMain } from "app/Contents/CASE/Components/CaseMain";
import { ContentsHeader } from "@Components/Contents/ContentsHeader";


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