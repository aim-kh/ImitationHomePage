import { HomeHeader } from "./homeHeader";
import { Carousel } from "./carousel";
import "./components/Embla/embla.css"

export function Home () {
    return (
        <div>
            <HomeHeader />
            <Carousel />
        </div>
    )
}