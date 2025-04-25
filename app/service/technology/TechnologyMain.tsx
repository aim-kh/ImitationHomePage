import { ServicePageFormat } from "@components/Layouts/ServicePageFormat";
import { perspectiveArticleProps, solutionServiceProps } from "constants/iot-platform-props";


export function TechnologyMain() {

    return(
        <>
            <ServicePageFormat
                servicePageFormatProps={
                    {
                        titleInitial:"テ",
                        title:"クノロジー ～探求と挑戦～",
                        subTitleInitial:"T",
                        subTitle:<>echnology-Driven / Technology-Enabled</>,
                        description:<>新しい技術をトリガーとしたビジネス基盤の構築支援、様々な技術の適用によるアプリケーションやサービス強化の支援を行います。</>
                    }
                }
                perspectiveArticleProps={perspectiveArticleProps}
                solutionServiceProps={solutionServiceProps}
            />
        </>
    )
}