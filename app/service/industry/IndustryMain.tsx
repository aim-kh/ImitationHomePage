import { PerspectiveArticleProps, SolutionServiceProps } from "constants/service-industry-props";
import { ServicePageFormat } from "@components/Contents/Layouts/ServicePageFormat";




export function IndustryMain () {

    return(
        <>
            <ServicePageFormat
                servicePageFormatProps={
                    {
                        titleInitial:"イ",
                        title:"ンダストリー4.0・スマートファクトリー・製造業におけるIoT",
                        subTitleInitial:"製",
                        subTitle:<>造業にまつわる多様なサービスを<br />提供しています</>,
                        description:"“あらゆるモノがインターネットと繋がる”Industry4.0の世界においては、\
                            モノからの情報収集や分析・コントロールをより高度に実現してゆくことが可能です。\
                            この鍵となるコンセプトとして、IoT（Internet of Things）やCPS（Cyber-Physical Sys\
                            更にIoS（Internet of Services）といったものがあります。\
                            これを活用した、新しい工場・製造業への転換をご支援いたします。"
                    }
                }
                perspectiveArticleProps={PerspectiveArticleProps}
                solutionServiceProps={SolutionServiceProps}
            />
        </>
    )
}