import { ServicePageFormat } from "@components/Layouts/ServicePageFormat"
import { perspectiveArticleProps, solutionServiceProps } from "constants/software-props"


export function SoftwareMain() {

    return (
        <>
            <ServicePageFormat
                servicePageFormatProps={
                    {
                        titleInitial:"ソ",
                        title:"フトウェア・品質・改善",
                        subTitleInitial:"様",
                        subTitle:<>々なソフトウェアの課題に対してお客様の<br/>ニーズに合ったサービスをご提供いたします</>,
                        description:"客様が抱える様々な技術的な課題や問題に対して、システム設計、ソフトウェア設計、ソースコード、\
                            テスト手法などあらゆる観点から分析・診断をさせていただき、直面している問題を解決するためのご支援をいたします。\
                            ソフトウェアの品質改善については、技術のご提供だけではなく、品質を悪くしている根本原因を突き止め、システムそのものの改善や人材の教育に至るまで、\
                            エンジニアリングの枠を超えたご提案もできます。"
                    }
                }
                perspectiveArticleProps={perspectiveArticleProps}
                solutionServiceProps={solutionServiceProps}
            />
        </>
    )
}