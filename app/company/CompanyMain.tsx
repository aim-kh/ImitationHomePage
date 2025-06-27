import { AimNote } from "@components/Common/AimNote";
import { ContentsTitle } from "@components/Contents/ContentsTitle";
import { Card } from "@components/Common/Card";
import { ImagePropsArray, LinePropsArray, LinkPropsArray } from "constants/company-main-card-props";


export function CompanyMain() {
    const SLIDE_COUNT = 7
    const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

    return(
        <div>
            <ContentsTitle title="COMPANY"/>

            <section>
                <div className="grid grid-cols-3 gap-4 w-[1180px] mx-auto pb-[40px]">
                    {SLIDES.map((index) => (
                        <div key={index} className="">
                            <Card
                                ImageProps={ImagePropsArray[index]}
                                LineProps={LinePropsArray[index]}
                                LinkProps={LinkPropsArray[index]}
                            />
                        </div>
                    ))}
                </div>
                 <div className="mb-[60px]">
                    <AimNote/>
                </div>
            </section>
        </div>
    )
}