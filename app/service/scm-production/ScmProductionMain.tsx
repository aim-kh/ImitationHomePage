import { ServicePageFormat } from "@components/Layouts/ServicePageFormat";
import { perspectiveArticleProps, solutionServiceProps } from "constants/scm-production-props";


export function ScmProductionMain() {


    return(
        <>
            <ServicePageFormat
                servicePageFormatProps={
                    {
                        titleInitial:"S",
                        title:"CM・生産管理・品質管理",
                        subTitleInitial:"製",
                        subTitle:"造業向けのサービスを提供するエキスパートがご支援を行います",
                        description:"製造業で製品開発や生産技術などでエンジニアとして活躍していた者、\
                            業務改善・改革の専門家として活躍していた者、ERPなどシステム導入に携わってきた者など、\
                            多彩な経験・バックグラウンドを持ったプロフェッショナルが、チームを組んでサポートいたします。"
                    }
                }
                perspectiveArticleProps={perspectiveArticleProps}
                solutionServiceProps={solutionServiceProps}
            />
        </>
    )
}