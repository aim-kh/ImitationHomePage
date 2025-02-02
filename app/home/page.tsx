import { HomeHeader } from "./components/Header/HomeHeader";
import { Carousel } from "./components/Carousel/Carousel";
import "./components/Carousel/Embla/embla.css"
import { WhatIsNew } from "./components/WhatIsNew/WhatIsNew";

export function Home () {
    return (
        <>
            <HomeHeader />
            <Carousel />
            <WhatIsNew/>
        </>
    )
}