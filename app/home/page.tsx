import { HomeHeader } from "../../Components/Home/Header/HomeHeader";
import { Carousel } from "../../Components/Home/Carousel/Carousel";
import "../../Components/Home/Carousel/Embla/embla.css"
import { WhatIsNew } from "../../Components/Home/WhatIsNew/WhatIsNew";
import { Footer } from "../../Components/Common/Footer/Footer";

export function Home () {
    return (
        <>
            <HomeHeader />
            <Carousel />
            <WhatIsNew/>
            <Footer />
        </>
    )
}