import { Footer } from "@components/Common/Footer/Footer";
import { BreadCrumbs } from "@components/Contents/BreadCrumbs";
import { ContentsHeader } from "@components/Contents/ContentsHeader";
import { ContactMain } from "./ContactMain";


export default function ServiceHome () {
    return(
        <div>
            <ContentsHeader 
                ContactClassName="bg-[#1d1b2c] text-[#ffffff] hover:opacity-80"
                CustomClassName="border border-[#1d1b2c]" 
            />
            <BreadCrumbs/>
            <ContactMain/>
            <Footer/>
        </div>
        
    )
}