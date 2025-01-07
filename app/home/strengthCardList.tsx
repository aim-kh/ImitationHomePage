import { StrengthCard } from "./strengthCard";

export function StrengthCardList() {

    return (
        <section className="mainslid setion1">
            <h2 className="head head--letter param--index"><span>O</span>ur <span>S</span>ervice</h2>
            <div className="os_description">
                グローバル規模でビジネス環境が大きく変わりつつあるこの時代において<br/>
                各社は新しいビジネスモデルの構築を求められつつあります。<br/>
                AIMNEXTでは、実務にも精通した各分野のエキスパートによる<br/>
                独自の視点を取り入れたサービスラインをご用意し<br/>
                お客様の変革をお手伝いさせていただきます。
            </div>

            <div className="rhombus_box rhombus_box--index param--index">
                <StrengthCard
                    ImageProps={{
                        src: "./img/slide_icon03.png",
                        alt: "インダストリー4.0・スマートファクトリー・製造業におけるIoT",
                        className: "head",
                        children: <>インダストリー4.0・<br/>スマートファクトリー・<br/>製造業におけるIoT</>
                    }}
                    LineProps={{
                        src: "./img/slide_content_line.png",
                        alt: "line",
                        className: "line",
                        children: <div className="ellispis">製造業におけるIoT(Internet of Things)には、２つの方向性があります。”見える化“を超えた、新しい工場・製造業への転換をご支援いたします。</div>
                    }}
                    LinkProps={{
                        href: "service/industry40-smartfactory-area.html",
                        className: "more_btn",
                        children: "More"
                    }}
                />
                <StrengthCard
                    ImageProps={{
                        src: "./img/slide_icon11.png",
                        alt: "SCM・生産管理・品質管理",
                        className: "head",
                        children: <>SCM・生産管理・品質管理</>
                    }}
                    LineProps={{
                        src: "./img/slide_content_line.png",
                        alt: "line",
                        className: "line",
                        children: <div className="ellipsis">生産管理・販売管理・SCMの本質を理解したメンバーが、これからの製造業のコアプロセスの構築をお手伝いさせていただきます。</div>
                    }}
                    LinkProps={{
                        href: "service/scm-production-area.html" ,
                        className: "more_btn",
                        children: "More"
                    }}
                />
                <StrengthCard
                    ImageProps={{
                        src: "./img/slide_icon04.png",
                        alt: "PDM・製品開発・コスト削減",
                        className: "head",
                        children: <>PDM・製品開発・コスト削減</>
                    }}
                    LineProps={{
                        src: "./img/slide_content_line.png",
                        alt: "line",
                        className: "line",
                        children: <div className="ellipsis">コスト、品質、革新性を兼ね備えた競争力あふれる製品を実現するため、貴社を多面的にご支援いたします。</div>
                    }}
                    LinkProps={{
                        href: "service/product-development-area.html" ,
                        className: "more_btn",
                        children: "More"
                    }}
                />
                <StrengthCard
                    ImageProps={{
                        src: "./img/slide_icon02.png",
                        alt: "人材育成",
                        className: "head",
                        children: <>人材育成</>
                    }}
                    LineProps={{
                        src: "./img/slide_content_line.png",
                        alt: "line",
                        className: "line",
                        children: <div className="ellipsis">グローバルで協働する人材の育成と支援を、日本と海外の現場からご提供いたします（ベトナムで日系400社に提供）</div>
                    }}
                    LinkProps={{
                        href: "service/human-resources-area.html" ,
                        className: "more_btn",
                        children: "More"
                    }}
                />
                <StrengthCard
                    ImageProps={{
                        src: "./img/slide_icon01.png",
                        alt: "海外進出（東南アジア、中南米）・グローバル化支援",
                        className: "head",
                        children: <>海外進出（東南アジア、中南米）<br/>・グローバル化支援</>
                    }}
                    LineProps={{
                        src: "./img/slide_content_line.png",
                        alt: "line",
                        className: "line",
                        children: <div className="ellipsis">東南アジアや中南米の視察やフィージビリティスタディや会社設立準備等を日本語と現地語でご支援いたします。</div>
                    }}
                    LinkProps={{
                        href: "service/overseas-expansion-global-area.html" ,
                        className: "more_btn",
                        children: "More"
                    }}
                />
                <StrengthCard
                    ImageProps={{
                        src: "./img/slide_icon06.png",
                        alt: "IT統制・ITアウトソーシング・システム開発及び運用",
                        className: "head",
                        children: <>IT統制・ITアウトソーシング<br/>・システム開発及び運用</>
                    }}
                    LineProps={{
                        src: "./img/slide_content_line.png",
                        alt: "line",
                        className: "line",
                        children: <div className="ellipsis">情報システム導入における、PMO、設計、開発、テスト、運用において豊富な経験と知識を持ったチームがご支援いたします。</div>
                    }}
                    LinkProps={{
                        href: "service/system-implement-management-area.html" ,
                        className: "more_btn",
                        children: "More"
                    }}
                />
                <StrengthCard
                    ImageProps={{
                        src: "./img/slide_icon10.png",
                        alt: "ソフトウェア・品質・改善",
                        className: "head",
                        children: <>ソフトウェア・品質・改善</>
                    }}
                    LineProps={{
                        src: "./img/slide_content_line.png",
                        alt: "line",
                        className: "line",
                        children: <div className="ellipsis">基幹系システム、エンベデッド、パッケージソフトウェア等、多様な技術的背景を持ったソフトウェア開発のエキスパートが、技術的なコンサルティングから設計、実装、テストに至るまで、多様な手法でお手伝いいたします。</div>
                    }}
                    LinkProps={{
                        href: "service/software-quality-improvement-area.html" ,
                        className: "more_btn",
                        children: "More"
                    }}
                />
                <StrengthCard
                    ImageProps={{
                        src: "./img/slide_icon08.png",
                        alt: "ITモダナイゼーション・アーキテクチャ最新化",
                        className: "head",
                        children: <>ITモダナイゼーション・<br/>アーキテクチャ最新化</>
                    }}
                    LineProps={{
                        src: "./img/slide_content_line.png",
                        alt: "line",
                        className: "line",
                        children: <div className="ellipsis">コードレベルの改善からシステムレベルのアーキテクチャのモダナイゼーションまで、構想を空論で終わらせないエンジニアリングサービスを提供しています。</div>
                    }}
                    LinkProps={{
                        href: "service/modernise-convert-area.html" ,
                        className: "more_btn",
                        children: "More"
                    }}
                />
                <StrengthCard
                    ImageProps={{
                        src: "./img/slide_icon07.png",
                        alt: "地域IoTプラットフォーム",
                        className: "head",
                        children: <>IoT企画・開発支援/自治体スマートタウン構築</>
                    }}
                    LineProps={{
                        src: "./img/slide_content_line.png",
                        alt: "line",
                        className: "line",
                        children: <div className="ellipsis">宮崎県・高鍋町での実証実験を経て、IoTプロジェクトの企画からソフトウェア、プロトタイプハードウェアの開発の支援、また自治体スマートタウン築サポートが可能です。</div>
                    }}
                    LinkProps={{
                        href: "service/regional-IoT-platform.html" ,
                        className: "more_btn",
                        children: "More"
                    }}
                /> 
                <StrengthCard
                    ImageProps={{
                        src: "./img/slide_icon05.png",
                        alt: "テクノロジー ～探求と挑戦～",
                        className: "head",
                        children: <>テクノロジー ～探求と挑戦～</>
                    }}
                    LineProps={{
                        src: "./img/slide_content_line.png",
                        alt: "line",
                        className: "line",
                        children: <div className="ellipsis">新しい技術をトリガーとしたビジネス基盤の構築支援、様々な技術の適用のによるアプリケーションやサービス強化の支援を行います。</div>
                    }}
                    LinkProps={{
                        href: "service/technology-enabled-area.html" ,
                        className: "more_btn",
                        children: "More"
                    }}
                />
        </div>
        </section>
    )

}
