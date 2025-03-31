import { Footer } from "../../../../../Components/Common/Footer/Footer";
import { BreadCrumbs } from "../../../../../Components/Contents/BreadCrumbs";
import { ContentsHeader } from "../../../../../Components/Contents/ContentsHeader";
import { IndustryMain } from "./Components/IndustryMain";


export default function page () {

    return(
        <>
            <ContentsHeader 
                ServiceClassName="bg-[#1d1b2c] text-[#ffffff] hover:opacity-80"
                CustomClassName="border border-[#1d1b2c]" 
            />
            <BreadCrumbs/>
            <IndustryMain/>
            <Footer/>
        </>
    )
}