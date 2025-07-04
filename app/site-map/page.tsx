import { Footer } from "@components/Common/Footer/Footer";
import { BreadCrumbs } from "@components/Contents/BreadCrumbs";
import { ContentsHeader } from "@components/Contents/ContentsHeader";
import { SiteMapMain } from "./components/SiteMapMain";

export default function page () {
    return(
        <div>
            <ContentsHeader 
                CustomClassName="border border-[#1d1b2c]"    
            />
            <BreadCrumbs/>
            <SiteMapMain/>
            <Footer/>
        </div>
        
    )
}