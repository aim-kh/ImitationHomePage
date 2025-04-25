import { ServicePageFormat } from "@components/Layouts/ServicePageFormat";
import { perspectiveArticleProps, solutionServiceProps } from "constants/training-props";


export function TrainingMain() {


    return(
        <>
            <ServicePageFormat
                servicePageFormatProps={
                    {
                        titleInitial:"人",
                        title:"材育成",
                        subTitleInitial:"グ",
                        subTitle:"ローバルで活躍する為の素養・スキル・知識をオーダーメードでご提供いたします",
                        description:"グローバルで活躍できる人材の多寡が、これからの企業の競争力の差を生みだす大きな要因です。\
                            語学力は勿論、業務知識や企業運営のノウハウ、異文化の理解とそれに基づくコミュニケーションなど幅広い能力を身に付ける必要があります。\
                            エイムネクストでは、育成プランの作成や国内での研修に加え、海外での日本人・現地人の支援等も組み合わせたトータルでのご支援を提供いたします。\
                            また、BPRやシステム導入、Jコスト論に基づくキャッシュフロー改善等、コンサルティング経験を元にしたプライベートセミナー形式の研修もご提供しています。"
                    }
                }
                perspectiveArticleProps={perspectiveArticleProps}
                solutionServiceProps={solutionServiceProps}
            />
        </>
    )
}