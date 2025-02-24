import { HomeHeader } from "./components/Header/HomeHeader";
import { Carousel } from "./components/Carousel/Carousel";
import "./components/Carousel/Embla/embla.css"
import { WhatIsNew } from "./components/WhatIsNew/WhatIsNew";
import { Footer } from "./components/Footer/Footer";
import { HumbergerMenu } from "./components/Header/HumburgerMenu";

export function Home () {
    return (
        <>
            {/* <HumbergerMenu/> */}
            <HomeHeader />
            <Carousel />
            <WhatIsNew/>
            <Footer />
        </>
    )
}