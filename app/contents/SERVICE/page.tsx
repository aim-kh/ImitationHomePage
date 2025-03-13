import { Footer } from "../../Components/Common/Footer/Footer";
import { BreadCrumbs } from "../../Components/Contents/BreadCrumbs";
import { ContentsHeader } from "../../Components/Contents/ContentsHeader";
import { ServiceMain } from "./components/ServiceMain";


export default function ServiceHome () {
    return(
        <div>
            <ContentsHeader ServiceClassName="bg-[#1d1b2c] text-[#ffffff] hover:opacity-80"/>
            <BreadCrumbs/>
            <ServiceMain/>
            <Footer/>
        </div>
        
    )
}

