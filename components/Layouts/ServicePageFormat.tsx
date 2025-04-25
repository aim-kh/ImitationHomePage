import { Line } from "@components/Common/Line";
import { ScrollButton } from "@components/Common/ScrollButton";
import { ContentsTitle } from "@components/Contents/ContentsTitle";
import { ServiceArticle } from "./ServiceArticle";
import { servicePageFormatProps, serviceArticleProps } from "types";

interface props {
    servicePageFormatProps:servicePageFormatProps;
    perspectiveArticleProps:serviceArticleProps[];
    solutionServiceProps: serviceArticleProps[]
}

export function ServicePageFormat ({
    servicePageFormatProps,
    perspectiveArticleProps,
    solutionServiceProps
}:props) {

    
    const PERSPECTIVEARTICLESLIDES = [...Array(perspectiveArticleProps.length).keys()]
    const SOLUTIONSERVICESLIDES = [...Array(solutionServiceProps.length).keys()]

    return(
        <div className="mb-[100px]">
            <ContentsTitle title="SERVICE"/>
            <section className="mb-[40px]">
                <h2 className="text-[36px] font-[1000] text-center mt-[55px] font-ryumin leading-[1] my-[55px]">
                    <span className="text-[#1c637a]">{servicePageFormatProps.titleInitial}</span>{servicePageFormatProps.title}
                </h2>
                <h2 className="text-[36px] font-[1000] text-center mt-[55px] font-ryumin leading-[1] my-[55px]">
                    <span className="text-[#1c637a]">{servicePageFormatProps.subTitleInitial}</span>{servicePageFormatProps.subTitle}
                </h2>
                <div className="w-[830px] mx-auto mb-[50px]">
                    {servicePageFormatProps.description}
                </div>
                <div className="flex justify-center mx-auto mt-[60px]">
                    <ScrollButton page="p1" title="Perspective / Article"/>
                    <ScrollButton page="p2" title="Solution / Service"/>
                </div>
            </section>
            <section className="pt-[40px] bg-[#f8f8f8] pb-[40px]">
                <div className="flex justify-center items-center">
                    <Line/>
                    <h3 id="p1" className="text-center text-[24px] font-ryumin">Perspective / Article</h3>
                    <Line/>
                </div>
                <ul className="w-[730px] mx-auto pt-[40px]">
                    {PERSPECTIVEARTICLESLIDES.map((index) => (
                        <li key={index}>
                            <ServiceArticle
                                title={perspectiveArticleProps[index].title}
                                href={perspectiveArticleProps[index].href}
                                description={perspectiveArticleProps[index].description}
                                ClassName="bg-[#fff]"
                            />
                        </li>
                    ))}
                </ul>
            </section> 
            <section className="pt-[60px]">
                <div className="flex justify-center items-center">
                    <Line/>
                    <h3 id="p2" className="text-center text-[24px] font-ryumin">Solution / Service</h3>
                    <Line/>
                </div>
                <ul className="w-[730px] mx-auto pt-[40px]">
                    {SOLUTIONSERVICESLIDES.map((index) => (
                        <li key={index}>
                            <ServiceArticle
                                title={solutionServiceProps[index].title}
                                href={solutionServiceProps[index].href}
                                description={solutionServiceProps[index].description}
                                ClassName="bg-[#f8f8f8]"
                            />
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    )
}