
import { AimNote } from "@components/Common/AimNote/AimNote";
import { ContentsTitle } from "../ContentsTitle";
import { Card } from '@components/Common/Card';
import { ImagePropsArray, LinePropsArray, LinkPropsArray } from "Constants/CarouselProps";

export function ServiceMain() {
    const SLIDE_COUNT = 10
    const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

    return(
        <div>
            <ContentsTitle title="SERVICE"/>

            <section>
                <h2 className="text-[36px] font-[1000] text-center mt-[55px] font-ryumin leading-[1]">
                    <span className="text-[#1c637a]">製</span>造業・サービス業にまつわる多様な<br/>サービスを提供しています
                </h2>
                <div className="w-[830px] my-[40px] mx-auto font-hirakaku tracking-[2px] leading-[1.8]">
                    エイムネクストは「戦略」、「業務」、「情報」、「人・組織」など従来のコンサルティング会社が提供する『仕組み』に対するサービスと、
                    「製品化技術」といった『中味』に対するサービスの両面、またはその融合によって顧客企業にとっての真の価値の提供を行っています。
                </div>
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