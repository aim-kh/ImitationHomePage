
import { Carousel } from "app/home/components/HomeMain";
import "./components/Carousel/embla.css";
import { Footer } from "@components/Common/Footer/Footer";
import { HomeHeader } from "./components/HomeHeader";
import { WhatIsNew } from "./components/WhatIsNew";


export default function Home () {
    return (
        <>
            <HomeHeader />
            <Carousel />
            <WhatIsNew/>
            <Footer />
        </>
    )
}