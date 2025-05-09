import { ServicePageFormat } from "@components/Layouts/ServicePageFormat";
import { perspectiveArticleProps, solutionServiceProps } from "constants/iot-platform-props";


export function IotPlatformMain () {

    return(
        <>
            <ServicePageFormat
                servicePageFormatProps={
                    {
                        titleInitial:"I",
                        title:"oT企画・開発支援/自治体スマートタウン構築",
                        subTitleInitial:"I",
                        subTitle:<>oTプロジェクト支援、また自治体スマートタウン構築サポート</>,
                        description:<>宮崎県・高鍋町での地域IoTプラットフォームサービス展開を経て、以下のようなIoTに関する様々な<br/>側面からの支援が可能です。
                            <br />
                            <br />
                            ①IoTビジネスコンサルティング<br />
                            ②IoTシステム構築<br />
                            ③IoTプロトタイプ構築<br />
                            ④IoT技術検証、テストマーケティング<br />
                            ⑤自治体スマートタウン構築サービス<br />

                            IoTの技術を活用することで、従来よりも低コストに、様々な環境や設備からデータを収集/管理するこ<br />
                            とが可能です。実現に向けて、企画段階のコンサルティングから、S/W開発、プロトタイプH/W開<br />
                            発、また法的な実務までご支援致します。
                            <br />
                            <br />
                            自治体スマートタウン構築については、弊社提供のスキーム/プラットフォームに参加頂くことによっ<br />
                            て、従来のインフラと比べ非常に低価格にIoTインフラを構築することが可能です。また非常に柔軟<br />
                            で、開発コストを抑えた、アプリケーション開発も可能となります。IoTの活用をご検討中の各地域の<br />
                            自治体様、中小システムインテグレーター事業者様、またH/W開発で協業いただける事業者様のお問<br />
                            い合わせをお待ちしております。
                        </>
                    }
                }
                perspectiveArticleProps={perspectiveArticleProps}
                solutionServiceProps={solutionServiceProps}
            />
        </>
    )
}