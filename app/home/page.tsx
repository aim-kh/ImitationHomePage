import { HomeHeader } from "../components/Home/Header/HomeHeader";
import { Carousel } from "../components/Home/Carousel/Carousel";
import "../components/Home/Carousel/Embla/embla.css"
import { WhatIsNew } from "../components/Home/WhatIsNew/WhatIsNew";
import { Footer } from "../components/Common/Footer/Footer";

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