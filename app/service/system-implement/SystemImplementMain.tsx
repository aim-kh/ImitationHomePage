import { ServicePageFormat } from "@components/Contents/Layouts/ServicePageFormat"
import { perspectiveArticleProps, solutionServiceProps } from "constants/system-implement-props"


export function SystemImplementMain() {

    return (
        <>
            <ServicePageFormat
                servicePageFormatProps={
                    {
                        titleInitial:"I",
                        title:"T統制・ITアウトソーシング・システム開発及び運用",
                        subTitleInitial:"情",
                        subTitle:"報システムにまつわる多様なサービスをご提供いたします",
                        description:"情報システム導入における、要件定義の段階から、構想設計、パッケージ／SIベンダーの選定、\
                            現場部門のタスク管理、さらにはカットオーバーやシステム導入後の定着化までトータルに支援するため、\
                            貴社の一員として、プロジェクトをご支援させていただきます。"
                    }
                }
                perspectiveArticleProps={perspectiveArticleProps}
                solutionServiceProps={solutionServiceProps}
            />
        </>
    )
}