import { Footer } from "../../components/Common/Footer/Footer";
import { BreadCrumbs } from "../../components/Contents/BreadCrumbs";
import { ContentsHeader } from "../../components/Contents/ContentsHeader";
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