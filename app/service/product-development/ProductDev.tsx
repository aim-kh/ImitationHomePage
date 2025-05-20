import { ServicePageFormat } from "@components/Contents/Layouts/ServicePageFormat";
import { perspectiveArticleProps, solutionServiceProps } from "constants/product-development-props";


export function ProductDevMain() {

    return(
        <>
            <ServicePageFormat
                servicePageFormatProps={
                    {
                        titleInitial:"P",
                        title:"DM・製品開発・コスト削減",
                        subTitleInitial:"競",
                        subTitle:"争力あふれる製品を実現するための実践的なご支援を行います",
                        description:"貴社のエンジニアの能力を底上げするとともに製品開発の環境を整えることで、\
                            製品の魅力を底上げするご支援を行います。エンジニアの能力が底上げさえることで\
                            トップレベルのエンジニアに余力を与えることが可能となり、次世代のエンジニアの成長も促進されます。"
                    }
                }
                perspectiveArticleProps={perspectiveArticleProps}
                solutionServiceProps={solutionServiceProps}
            />
        </>
    )
}