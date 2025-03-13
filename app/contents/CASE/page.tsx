import { Footer } from "../../Components/Common/Footer/Footer";
import { BreadCrumbs } from "../../Components/Contents/BreadCrumbs";
import { ContentsHeader } from "../../Components/Contents/ContentsHeader";
import { CaseMain } from "./components/CaseMain";


export default function ServiceHome () {
    return(
        <div>
            <ContentsHeader CaseClassName="bg-[#1d1b2c] text-[#ffffff] hover:opacity-80"/>
            <BreadCrumbs/>
            <CaseMain/>
            <Footer/>
        </div>
        
    )
}