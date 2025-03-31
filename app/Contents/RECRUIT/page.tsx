import { Footer } from "../../../Components/Common/Footer/Footer";
import { BreadCrumbs } from "../../../Components/Contents/BreadCrumbs";
import { ContentsHeader } from "../../../Components/Contents/ContentsHeader";
import { RecruitMain } from "../../../Components/Contents/Recuit/RecruitMain";


export default function ServiceHome () {
    return(
        <div>
            <ContentsHeader 
                RecruitClassName="bg-[#1d1b2c] text-[#ffffff] hover:opacity-80"
                CustomClassName="border border-[#1d1b2c]"    
            />
            <BreadCrumbs/>
            <RecruitMain/>
            <Footer/>
        </div>
        
    )
}