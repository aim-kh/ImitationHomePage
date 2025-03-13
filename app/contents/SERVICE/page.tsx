import { Footer } from "../../components/Common/Footer/Footer";
import { BreadCrumbs } from "../../components/Contents/BreadCrumbs";
import { ContentsHeader } from "../../components/Contents/ContentsHeader";
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

