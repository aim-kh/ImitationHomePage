import { AimNote } from "@components/Common/AimNote"


const spanTitleColor = "text-[#2187A4]"
const spanNewColor = "text-[#0026ff]"
const descriptionTerm = "font-bold text-base pt-[5] text-[14px] h-[25]"
const definitionDescription = " pb-[10] pl-[14] border-b text-[14px]"
export function WhatIsNew () {

    return (
        <>
            <section className="pb-[60]">
                <h2 className="text-center font-serif text-[36px] pt-[60]">
                    <span className={spanTitleColor}>W</span>hat's <span className={spanTitleColor}>N</span>ew
                </h2>
                <dl className="w-[900] h-[250] mt-[50] overflow-hidden overflow-y-scroll m-auto ">
                    <dt className={descriptionTerm}>
                        <span className={spanNewColor}>！新規！</span>IT資産を活用して利益を生み出す【IT資産最適化】セミナーのご案内
                    </dt>
                    <dd className={definitionDescription}>
                        2/21（金）開催<br/>
                        企業が持つIT資産を活用し、売上向上やコスト削減を実現して利益を生みだすIT資産最適化について解説します=&gt; {/* => : =&gt;*/}
                        <a style={{color: "#f00"}} href="./files/it-assets-optimizing-seminar.pdf" target="_blank">詳細はコチラ</a><br/>
                    </dd>
                    <dt className={descriptionTerm}>
                        <span className={spanNewColor}>！新規！</span>熱中症アラートシステム現場視察会のご案内
                    </dt>
                    <dd className={definitionDescription}>
                        8/19（月）開催<br/>
                        大熊町　学び舎ゆめの森にて、熱中症アラートシステムの現場視察会を行います=&gt;
                        <a style={{color: "#f00"}} href="./files/Info_Alert_System_Inspection_On_Okuma.pdf" target="_blank">詳細はコチラ</a>（終了）<br/>
                    </dd> 
                    <dt className={descriptionTerm}>
                        <span className={spanNewColor}>！新規！</span>環境省熱中症予防情報サイトに掲載されました
                    </dt>
                    <dd className={definitionDescription}>
                        環境省熱中症予防情報サイトの民間事業者との取組に弊社熱中症アラートシステムが掲載されました=&gt;
                        <a style={{color: "#f00"}} href=" https://www.wbgt.env.go.jp/private_sector.php" target="_blank">詳細はコチラ</a><br/>
                        サービスの詳細は<a style={{color: "#f00"}} href="https://www.aimnext.co.jp/service/wbgt-iot-service.html" target="_blank">こちら</a>
                    </dd>
                    <dt className={descriptionTerm}>
                        WEBセミナーを追加開催します
                    </dt>
                    <dd className={definitionDescription}>
                        12月8日(金)、12月11日(月)開催<br/>
                        「mcframe導入前に知っておきたい　生産管理・ERP構築を成功に導くRFP作成のポイント」<br/>
                        「mcframe導入前に知っておきたい　事例から学ぶ　失敗しないプロジェクトのはじめかた」<br/>
                        生産管理システムやERP導入の現場において、「プロジェクトが思ったように進まない」「システム導入効果が思うように出ない」といったお悩みの声を多くお聞きします。本セミナーでは弊社のコンサルタントが生産管理・ERP構築プロジェクトを成功に導くポイントを解説します。システム導入をご検討中の方は是非お申込みください。<br/>
                        共催：ビジネスエンジニアリング株式会社様<br/>
                        お申込み・詳細はこちらから=&gt;
                        <a style={{color: "#f00"}} href="https://seminar.mcframe.com/2023_rfp" target="_blank">RFP作成のポイント</a>、
                        <a style={{color: "#f00"}} href="https://seminar.mcframe.com/2023_project" target="_blank">プロジェクトのはじめかた</a>
                    </dd>
                    <dt className={descriptionTerm}>
                        プレスリリース
                    </dt>
                    <dd className={definitionDescription}>
                        熱中症アラートシステムの製造業へのサービス提供を開始しました=&gt;
                        <a style={{color: "#f00"}} href="./files/PR-heat-stroke-alert-system-for-manufacturing.pdf" target="_blank">詳細はコチラ</a><br/>
                        熱中症アラートシステムサービス詳細はこちら＝＞<a style={{color: "#f00"}} href="./service/wbgt-iot-service.html" target="_blank">熱中症アラートシステム</a>
                    </dd> 
                    <dt className={descriptionTerm}>
                        WEBセミナーを追加開催します
                    </dt>
                    <dd className={definitionDescription}>
                        9月12日(火)、9月14日(木)開催<br/>
                        「mcframe導入前に知っておきたい　生産管理・ERP構築を成功に導くRFP作成のポイント」<br/>
                        「mcframe導入前に知っておきたい　事例から学ぶ　失敗しないプロジェクトのはじめかた」<br/>
                        生産管理システムやERP導入の現場において、「プロジェクトが思ったように進まない」「システム導入効果が思うように出ない」といったお悩みの声を多くお聞きします。本セミナーでは弊社のコンサルタントが生産管理・ERP構築プロジェクトを成功に導くポイントを解説します。システム導入をご検討中の方は是非お申込みください。<br/>
                        　共催：ビジネスエンジニアリング株式会社様<br/>
                        　お申込み・詳細はこちらから=&gt;
                        <a style={{color: "#f00"}} href="https://seminar.mcframe.com/2023_rfp" target="_blank">RFP作成のポイント</a>、
                        <a style={{color: "#f00"}} href="https://seminar.mcframe.com/2023_project" target="_blank">プロジェクトのはじめかた</a>
                    </dd>
                </dl>
                <div className="w-[150] h-[35] text-center text-white bg-black m-auto flex items-center justify-center font-ryumin">
                    <a href="">More</a>
                </div>
                {/* <!-- Aimnext Note banner --> */}
                <AimNote />
            </section>
        </>
    )
}