import { Line } from "Components/Common/Line";
import { ScrollButton } from "Components/Common/ScrollButton";
import { ContentsTitle } from "Components/Contents/ContentsTitle";
import { ServiceArticle } from "Components/Contents/ServiceArticle";
import { PerspectiveArticleProps, SolutionServiceProps } from "constants/ServiceIndustryProps";



export function IndustryMain () {

    const PERSPECTIVEARTICLESLIDES=[...Array(PerspectiveArticleProps.length).keys()]
    const SOLUTIONSERVICESLIDES = [...Array(PerspectiveArticleProps.length).keys()]

    return(
        <div className="mb-[100px]">
            <ContentsTitle title="SERVICE"/>
            <section className="mb-[40px]">
                <h2 className="text-[36px] font-[1000] text-center mt-[55px] font-ryumin leading-[1] my-[55px]">
                    <span className="text-[#1c637a]">イ</span>ンダストリー4.0・スマートファクトリー・製造業におけるIoT
                </h2>
                <h2 className="text-[36px] font-[1000] text-center mt-[55px] font-ryumin leading-[1] my-[55px]">
                    <span className="text-[#1c637a]">製</span>造業にまつわる多様なサービスを
                    <br />
                    提供しています
                </h2>
                <div className="w-[830px] mx-auto mb-[50px]">
                “あらゆるモノがインターネットと繋がる”Industry4.0の世界においては、
                モノからの情報収集や分析・コントロールをより高度に実現してゆくことが可能です。
                この鍵となるコンセプトとして、IoT（Internet of Things）やCPS（Cyber-Physical System）、
                更にIoS（Internet of Services）といったものがあります。
                これを活用した、新しい工場・製造業への転換をご支援いたします。
                </div>
                <div className="flex justify-center mx-auto mt-[60px]">
                    <ScrollButton page="" title="Perspective / Article"/>
                    <ScrollButton page="" title="Solution / Service"/>
                </div>
            </section>
            <section className="pt-[40px] bg-[#f8f8f8] pb-[40px]">
                <div className="flex justify-center items-center">
                    <Line/>
                    <h3 className="text-center text-[24px] font-ryumin">Perspective / Article</h3>
                    <Line/>
                </div>
                <ul className="w-[730px] mx-auto pt-[40px]">
                    {PERSPECTIVEARTICLESLIDES.map((index) => (
                        <li>
                            <ServiceArticle
                                title={PerspectiveArticleProps[index].title}
                                href={PerspectiveArticleProps[index].href}
                                description={PerspectiveArticleProps[index].description}
                                ClassName="bg-[#fff]"
                            />
                        </li>
                    ))}
                </ul>
            </section> 
            <section className="pt-[60px]">
                <div className="flex justify-center items-center">
                    <Line/>
                    <h3 className="text-center text-[24px] font-ryumin">Solution / Service</h3>
                    <Line/>
                </div>
                <ul className="w-[730px] mx-auto pt-[40px]">
                    {SOLUTIONSERVICESLIDES.map((index) => (
                        <li>
                            <ServiceArticle
                                title={SolutionServiceProps[index].title}
                                href={SolutionServiceProps[index].href}
                                description={SolutionServiceProps[index].description}
                                ClassName="bg-[#f8f8f8]"
                            />
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    )
}