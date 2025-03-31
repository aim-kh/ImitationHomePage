import { Footer } from "../../../Components/Common/Footer/Footer";
import { BreadCrumbs } from "../../../Components/Contents/BreadCrumbs";
import { ContentsHeader } from "../../../Components/Contents/ContentsHeader";
import { CompanyMain } from "./Components/CompanyMain";



export default function ServiceHome () {
    return(
        <div>
            <ContentsHeader 
                ContactClassName="bg-[#1d1b2c] text-[#ffffff] hover:opacity-80"
                CustomClassName="border border-[#1d1b2c]"    
            />
            <BreadCrumbs/>
            <CompanyMain/>
            <Footer/>
        </div>
        
    )
}