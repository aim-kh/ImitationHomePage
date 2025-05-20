import { ServicePageFormat } from "@components/Contents/Layouts/ServicePageFormat";
import { perspectiveArticleProps, solutionServiceProps } from "constants/overseas-props";




export function OverseasMain () {

    return(
        <>
            <ServicePageFormat
                servicePageFormatProps={
                    {
                        titleInitial:"海",
                        title:"海外進出（東南アジア、中南米）・グローバル化支援",
                        subTitleInitial:"東",
                        subTitle:<>南アジアおよび中南米進出に向け、日本語を話す現地人と経験豊富なコンサルタントがチームでご支援いたします</>,
                        description:"メキシコ、コロンビア、キューバ、中国、インドネシア、シンガポール、ベトナム、マレーシア等への進出に向け、現地の視察、市場調査等が必要になります。\
                            これに向け、弊社日本オフィスで勤務経験を持つ現地スタッフと日本側メンバーが協力し、各種アレンジ等をご提供いたします。\
                            また、現地への生産移管等、製造業の実務についての見識が求められる業務については、日本企業でのコンサルティング経験豊富なコンサルタントが、\
                            設備や人件費・光熱費等に加え、物流や税についても考慮した上でのご支援を提供いたします。"
                    }
                }
                perspectiveArticleProps={perspectiveArticleProps}
                solutionServiceProps={solutionServiceProps}
            />
        </>
    )
}