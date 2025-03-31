import { Card } from "../../Common/Card";
import { ContentsTitle } from "../ContentsTitle";
import { ImagePropsArray, LinePropsArray, LinkPropsArray } from "../../../constants/CompanyMainCardProps";


export function CompanyMain() {
    const SLIDE_COUNT = ImagePropsArray.length
    const SLIDES = [...Array(SLIDE_COUNT).keys()]

    return(
        <div>
            <ContentsTitle title="COMPANY"/>
            <section className="my-[40px]">
                 <div className="grid grid-cols-3 gap-y-4 w-[1030px] mx-auto pb-[40px]">
                    {SLIDES.map((index) => (
                        <div key={index}>
                            <Card
                                ImageProps={ImagePropsArray[index]}
                                LineProps={LinePropsArray[index]}
                                LinkProps={LinkPropsArray[index]}
                            />
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}