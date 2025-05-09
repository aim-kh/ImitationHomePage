import { ServicePageFormat } from "@components/Layouts/ServicePageFormat"
import { perspectiveArticleProps, solutionServiceProps } from "constants/iot-platform-props"


export function ModernizationMain() {

    return (
        <>
            <ServicePageFormat
                servicePageFormatProps={
                    {
                        titleInitial:"I",
                        title:"Tモダナイゼーション・アーキテクチャ最新化",
                        subTitleInitial:"ソ",
                        subTitle:<>フトウェアおよびシステムの<br/>アーキテクチャの最新化、移行のご支援をします。</>,
                        description:<>企業の中には既に数多くのシステムやソフトウェア資産が存在します。ビジネスの環境変化やスピードに対応するため、
                            企業にはそれら既存資産を延命・活用することで事業継続を図りながらも、重点領域への投資・開発を行っていく必要があります。
                            弊社では、ITモダナイゼーションにより、既存のIT資産の活用や延命と、新しい技術や手法の適用のご支援をこれまで数多く行ってきております。
                            <br/><br/>
                            例えば、以下のようなご支援を行っています。
                            <br/>
                            <span className="font-bold">
                                プログラミング言語（コンパイラ）やライブラリ等の開発技術や開発環境の最新化
                                <br/>
                                独自手法で開発されてきたシステムへの汎用的なフレームワークの適用（例：OSS等の適用）
                                <br/>
                                更には、ソースコードそのものに対するリファクタリング、モジュール化、マイクロサービス化
                            </span>
                            <br/>
                            <br />
                            企業のDX（デジタルトランスメーション）の推進を支えるため、コードレベルの改善からシステムレベルのアーキテクチャのモダナイゼーションまで、構想を空論で終わらせないエンジニアリングサービスを提供しています。
                            <br />
                            <br />
                            お悩み・お困りのことがございましたらお問い合わせ下さい。貴社の状況に応じたご提案をします。</>
                    }
                }
                perspectiveArticleProps={perspectiveArticleProps}
                solutionServiceProps={solutionServiceProps}
            />
        </>
    )
}