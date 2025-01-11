import { StrengthCard } from "./strengthCard";

const commonCSS ="border-none border-transparent text-black block isolate align-baseline text-center p-0 font-normal"

const mainslid_section1 = "bg-scroll bg-origin-padding bg-clip-border bg-center bg-repeat bg-auto bg-[url('https://www.aimnext.co.jp/img/sq_bg.png')] \
    font-sans text-[16px] font-normal leading-[28px] tracking-[2px] relative w-[1106px] h-[807px] min-w-[1000px] m-0"

const h2 = "font-serif text-[36px]  leading-[42px] h-[42px] w-[1106px] p-t-[60px] p-0 m-0  antialiased"

const os_description = "font-sans text-[14px] leading-[21px] h-[189px] w-[338.391px] m-[10px_18.8125px_20px_18.7969px]  tracking-[2px]"

const rhombus_box = "border-b-0 border-black-500 border-l-0 border-r-0 border-t-0 border-image-outset-0 border-image-repeat-stretch \
    border-image-slice-100% border-image-source-none border-image-width-1 box-border \
    text-black flex flex-wrap items-center justify-center \
    font-[HiraKakuStd W4, Hiragino Kaku Gothic Pro,游ゴシック体, 游ゴシック, Yu Gothic, YuGothic, メイリオ, Verdana, Arial, sans-serif] \
    text-center text-sm leading-5 tracking-[2px] h-[370px] w-[376px]"

const span = "border-b-0 border-l-0 border-r-0 border-t-0 border-[#2187A4] text-[#2187A4] display-inline \
    font-[リュウミン EB-KL, Ryumin ExtraBold KL, 游明朝, YuMincho, ヒラギノ明朝 ProN W3, Hiragino Mincho ProN, HG明朝E, ＭＳ Ｐ明朝, ＭＳ 明朝, serif] \
    font-feature-settings-normal font-kerning-auto font-optical-sizing-auto text-3xl text-center \
    tracking-normal h-auto w-auto select-none"

const z = "z-2"

export function StrengthCardList() {

    return (
        <section className={`${commonCSS} ${mainslid_section1} ${z}`}>
            <h2 className={`${h2}`}><span className={`${span}`}>O</span>ur <span className={`${span}`}>S</span>ervice</h2>
            <div className={os_description}>
                グローバル規模でビジネス環境が大きく変わりつつあるこの時代において<br/>
                各社は新しいビジネスモデルの構築を求められつつあります。<br/>
                AIMNEXTでは、実務にも精通した各分野のエキスパートによる<br/>
                独自の視点を取り入れたサービスラインをご用意し<br/>
                お客様の変革をお手伝いさせていただきます。
            </div>

            <div className={rhombus_box}>
                <StrengthCard
                    ImageProps={{
                        src: "/image/slide_icon03.png",
                        alt: "インダストリー4.0・スマートファクトリー・製造業におけるIoT",
                        children: <>インダストリー4.0・<br/>スマートファクトリー・<br/>製造業におけるIoT</>
                    }}
                    LineProps={{
                        src: "/image/slide_content_line.png",
                        alt: "line",
                        children: <div className="ellispis">製造業におけるIoT(Internet of Things)には、２つの方向性があります。”見える化“を超えた、新しい工場・製造業への転換をご支援いたします。</div>
                    }}
                    LinkProps={{
                        href: "service/industry40-smartfactory-area.html",
                        children: "More"
                    }}
                />
                <StrengthCard
                    ImageProps={{
                        src: "/image/slide_icon11.png",
                        alt: "SCM・生産管理・品質管理",
                        children: <>SCM・生産管理・品質管理</>
                    }}
                    LineProps={{
                        src: "/image/slide_content_line.png",
                        alt: "line",
                        children: <div className="ellipsis">生産管理・販売管理・SCMの本質を理解したメンバーが、これからの製造業のコアプロセスの構築をお手伝いさせていただきます。</div>
                    }}
                    LinkProps={{
                        href: "service/scm-production-area.html" ,
                        children: "More"
                    }}
                />
                <StrengthCard
                    ImageProps={{
                        src: "/image/slide_icon04.png",
                        alt: "PDM・製品開発・コスト削減",
                        children: <>PDM・製品開発・コスト削減</>
                    }}
                    LineProps={{
                        src: "/image/slide_content_line.png",
                        alt: "line",
                        children: <div className="ellipsis">コスト、品質、革新性を兼ね備えた競争力あふれる製品を実現するため、貴社を多面的にご支援いたします。</div>
                    }}
                    LinkProps={{
                        href: "service/product-development-area.html" ,
                        children: "More"
                    }}
                />
                <StrengthCard
                    ImageProps={{
                        src: "/image/slide_icon02.png",
                        alt: "人材育成",
                        children: <>人材育成</>
                    }}
                    LineProps={{
                        src: "/image/slide_content_line.png",
                        alt: "line",
                        children: <div className="ellipsis">グローバルで協働する人材の育成と支援を、日本と海外の現場からご提供いたします（ベトナムで日系400社に提供）</div>
                    }}
                    LinkProps={{
                        href: "service/human-resources-area.html" ,
                        children: "More"
                    }}
                />
                <StrengthCard
                    ImageProps={{
                        src: "/image/slide_icon01.png",
                        alt: "海外進出（東南アジア、中南米）・グローバル化支援",
                        children: <>海外進出（東南アジア、中南米）<br/>・グローバル化支援</>
                    }}
                    LineProps={{
                        src: "/image/slide_content_line.png",
                        alt: "line",
                        children: <div className="ellipsis">東南アジアや中南米の視察やフィージビリティスタディや会社設立準備等を日本語と現地語でご支援いたします。</div>
                    }}
                    LinkProps={{
                        href: "service/overseas-expansion-global-area.html" ,
                        children: "More"
                    }}
                />
                <StrengthCard
                    ImageProps={{
                        src: "/image/slide_icon06.png",
                        alt: "IT統制・ITアウトソーシング・システム開発及び運用",
                        children: <>IT統制・ITアウトソーシング<br/>・システム開発及び運用</>
                    }}
                    LineProps={{
                        src: "/image/slide_content_line.png",
                        alt: "line",
                        children: <div className="ellipsis">情報システム導入における、PMO、設計、開発、テスト、運用において豊富な経験と知識を持ったチームがご支援いたします。</div>
                    }}
                    LinkProps={{
                        href: "service/system-implement-management-area.html" ,
                        children: "More"
                    }}
                />
                <StrengthCard
                    ImageProps={{
                        src: "/image/slide_icon10.png",
                        alt: "ソフトウェア・品質・改善",
                        children: <>ソフトウェア・品質・改善</>
                    }}
                    LineProps={{
                        src: "/image/slide_content_line.png",
                        alt: "line",
                        children: <div className="ellipsis">基幹系システム、エンベデッド、パッケージソフトウェア等、多様な技術的背景を持ったソフトウェア開発のエキスパートが、技術的なコンサルティングから設計、実装、テストに至るまで、多様な手法でお手伝いいたします。</div>
                    }}
                    LinkProps={{
                        href: "service/software-quality-improvement-area.html" ,
                        children: "More"
                    }}
                />
                <StrengthCard
                    ImageProps={{
                        src: "/image/slide_icon08.png",
                        alt: "ITモダナイゼーション・アーキテクチャ最新化",
                        children: <>ITモダナイゼーション・<br/>アーキテクチャ最新化</>
                    }}
                    LineProps={{
                        src: "/image/slide_content_line.png",
                        alt: "line",
                        children: <div className="ellipsis">コードレベルの改善からシステムレベルのアーキテクチャのモダナイゼーションまで、構想を空論で終わらせないエンジニアリングサービスを提供しています。</div>
                    }}
                    LinkProps={{
                        href: "service/modernise-convert-area.html" ,
                        children: "More"
                    }}
                />
                <StrengthCard
                    ImageProps={{
                        src: "/image/slide_icon07.png",
                        alt: "地域IoTプラットフォーム",
                        children: <>IoT企画・開発支援/自治体スマートタウン構築</>
                    }}
                    LineProps={{
                        src: "/image/slide_content_line.png",
                        alt: "line",
                        children: <div className="ellipsis">宮崎県・高鍋町での実証実験を経て、IoTプロジェクトの企画からソフトウェア、プロトタイプハードウェアの開発の支援、また自治体スマートタウン築サポートが可能です。</div>
                    }}
                    LinkProps={{
                        href: "service/regional-IoT-platform.html" ,
                        children: "More"
                    }}
                /> 
                <StrengthCard
                    ImageProps={{
                        src: "/image/slide_icon05.png",
                        alt: "テクノロジー ～探求と挑戦～",
                        children: <>テクノロジー ～探求と挑戦～</>
                    }}
                    LineProps={{
                        src: "/image/slide_content_line.png",
                        alt: "line",
                        children: <div className="ellipsis">新しい技術をトリガーとしたビジネス基盤の構築支援、様々な技術の適用のによるアプリケーションやサービス強化の支援を行います。</div>
                    }}
                    LinkProps={{
                        href: "service/technology-enabled-area.html" ,
                        children: "More"
                    }}
                />
        </div>
        </section>
    )

}
