import { HomeHeader } from "../Components/Home/Header/HomeHeader";
import { Carousel } from "../Components/Home/Carousel/Carousel";
import "../Components/Home/Carousel/Embla/embla.css"
import { WhatIsNew } from "../Components/Home/WhatIsNew/WhatIsNew";
import { Footer } from "../Components/Common/Footer/Footer";
import { HumbergerMenu } from "../Components/Home/Header/HumburgerMenu";

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