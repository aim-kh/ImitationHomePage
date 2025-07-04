import { Line } from "@components/Common/Line";
import { ContentsTitle } from "@components/Contents/ContentsTitle";
import { ClaimNote, disclosureRequestList, webSiteList } from "constants/privacy-policy-props";
import { PrivacyPolicyProps } from "types";

export function PrivacyPolicyMain({ privacyPolicyList, provisionToAThirdPartyList, securityMeasuresList, utilizationPurposeList }: PrivacyPolicyProps) {

    return(
        <div className="mb-[40px] tracking-[2px]">
            <ContentsTitle title="プライバシーポリシー"/>
            <section className="mt-[40px] mb-[80px]">
                <h2 id="p1" className="h-[250px] mb-[40px] pt-[60px] pb-[80px] text-[36px] font-[1000] text-center font-ryumin leading-[1]">
                    <span className="text-[#1c637a]">個</span>人情報保護方針
                </h2>
                <div className="relative items-center w-full max-w-[940px] my-[40px] mx-auto px-4 md:px-[50px]">
                    <p className="text-right mb-[40px]">
                        2022年4月1日作成<br />
                        エイムネクスト株式会社<br />
                        代表取締役　清　威人
                    </p>
                    <p>
                        エイムネクスト株式会社（以下、「当社」という。）は、プロフェッショナルファームとして事業を行っております。事業の性格上、個人情報の取り扱いを適切に進めることは、お客様の信任を得、社会的な責任を果たしながら事業を成長させていくうえで必要となる基本事項の一つであると考えています。よってここに個人情報保護基本方針を定め推進します。
                    </p>

                    <ul className="px-[20px] mt-[50px] w-[800px] leading-[2.5] tracking-[0.3px] text-[14.5px] text-[rgb(51,51,51)]">
                        {privacyPolicyList.map((text, index) => (
                            <li key={index}>
                                ({index + 1}) {text}
                            </li>    
                        ))}
                    </ul>

                </div>
            </section>

            <section className="mt-[40px] mb-[80px]">
                <div className="relative items-center w-full max-w-[940px] my-[40px] mx-auto px-4 md:px-[50px]">
                    <h2 id="p1" className="h-[250px] mb-[40px] pt-[60px] pb-[80px] text-[36px] font-[1000] text-center font-ryumin leading-[1]">
                        <span className="text-[#1c637a]">個</span>人情報の取り扱いについて
                    </h2>

                    <div>
                        <p>
                            当社は、個人情報保護方針に基づき、以下の事項について公表します。
                        </p>
                        <p className="text-right my-[40px] mx-[50px]">
                            2022年7月1日作成<br />
                            エイムネクスト株式会社<br />
                            代表取締役　清　威人<br />
                            取締役 松本 重光（個人情報保護管理者）
                        </p>
                        <Line text="個人情報の利用目的について" />
                        <div className="text-left my-[40px] mx-[50px]">
                            <table>
                                <tbody>
                                <tr className="bg-[#ededed]">
                                    <th className="border border-black p-[10px] text-[14.5px]"></th>
                                    <th className="font-normal border border-black p-[10px] text-[14.5px]">個人情報の種類</th>
                                    <th className="font-normal border border-black p-[10px] text-[14.5px]">利用目的</th>
                                </tr>
                                {utilizationPurposeList.map((props, index) => {
                                    return(
                                        <tr key={index}>
                                            <td className="border border-black p-[10px] text-[14.5px]">{index + 1}</td>
                                            <td className="border border-black p-[10px] text-[14.5px]">{props.type}</td>
                                            <td className="border border-black p-[10px] text-[14.5px]">{props.purpose}</td>
                                        </tr>
                                    )
                                })}
                                </tbody>
                            </table>
                        </div>

                        <div>
                            <Line text="委託について" />
                            <div className="w-full max-w-[940px] my-[40px] mx-auto px-4 md:px-[50px]">
                                取引先より業務を委託されている場合、
                                個人情報の取扱いに関する業務の全部または一部を再委託する場合には、
                                当該業務の委託元に必要な情報を提供し、ご相談した上で実施します。
                                法令および当社で定めた基準に則って適切な管理を行います。
                                <br />
                                <br />
                                その他の業務において、個人情報の取扱いに関する業務の全部または一部を委託する場合があります。<br />
                                この場合は、法令および当社で定めた基準に則って適切な管理を行います。
                            </div>
                        </div>

                        <div>
                            <Line text="第三者提供について" />
                            <div className="">
                                当社は、以下の場合を除き、個人情報を第三者へ開示または提供いたしません。
                            </div>
                            <ul className="my-[40px] mx-auto py-[20px]">
                                {provisionToAThirdPartyList.map((text, index) => (
                                    <li key={index} className="pb-[10px] px-[10px] text-[14px]">
                                        <span className="inline-block bg-[#2187a4] w-[5px] h-[5px] mb-[3px] mx-[3px]"></span>
                                        {text}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <Line text="共同利用について" />
                        <div className="w-full my-[40px] mx-auto">
                            共同利用を行う場合には、個々のサービスごとに、個人情報の項目、範囲、目的、管理をする責任者を示した、
                            予め同意の取得、または本人が容易に知り得る状態に置く等の方法で本人への通知を実施します。
                        </div>
                    <div>
                        <Line text="安全管理措置" />
                        <div className="w-full max-w-[940px] my-[40px] mx-auto">
                            当社は、個人情報を保護するため、以下の安全管理措置を講じています。
                        </div>
                        <ul className="my-[40px] mx-auto py-[20px] px-[20px] tracking-[0.9]">
                            {securityMeasuresList.map((props, index) => (
                                <li key={index} className="pb-[10px] px-[10px] text-[14px] text-[rgb(51, 51, 51)]">
                                    ({index + 1}) {props.title}<br/>
                                    {props.description}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <Line text="開示等の請求" />
                        <div className="w-full max-w-[940px] my-[40px] mx-auto">
                            当社は、「保有個人データ」に適合するものについては、
                            利用目的の通知・開示・訂正・追加・削除、利用の停止及び消去、
                            第三者への提供の停止（以下、『開示等』）の請求を行うことができます。
                            開示等のご請求があった場合、ご請求いただいた方がご本人であることを確認し、
                            所定の手続きを行った上で合理的な範囲で適切に対応いたします。
                            なお、法令に基づき開示等のご請求に応じられない場合がございますが、その場合はその旨をご連絡いたします。
                        </div>
                        <ul className="my-[40px] px-[20px]">
                            {disclosureRequestList.map((text, index) => {
                                return(
                                    <li key={index} className="px-[10px] pb-[10px] text-[14px]">
                                        {text}
                                    </li>
                                )
                            })}
                        </ul>
                    </div>

                    <div className="my-[40px] ">
                        <h4>ご請求にあたっての注意</h4>                        
                    </div>
                        <ul className="mt-[40px] mx-auto px-[15px]">
                            {ClaimNote.map((prop, index) => {
                                return(
                                    <li key={index} className="px-[10px] pb-[10px] text-[15px]">
                                        <span className="inline-block bg-[#2187a4] w-[5px] h-[5px] mb-[3px] mx-[3px]"></span>
                                        {prop}
                                    </li>
                                )
                            })}
                        </ul>
                    </div>

                    <div className="my-[40px] mx-auto tracking-[0.7px]">
                        <Line text="個人情報の取扱いに関するお問い合わせ窓口" />
                        <p className="mt-[40px]">エイムネクスト株式会社</p>
                        <p>リソースマネジメント 個人情報お問い合わせ窓口</p>
                        <p>住所: 〒105-0014 東京都港区芝1-10-13 芝日景有楽ビル７F</p>
                        <p>電話: 03-3453-3900</p>
                        <p>受付時間：　9:00～18:00（土・日・祝日・年末年始を除く）</p>
                        <p>Eメールアドレス: privacy-contact-jp@aimnext.com</p>
                    </div>

                    <div className="my-[40px]">
                        お問い合わせに時に頂く個人情報は、お問い合わせに関する回答のためにのみ利用し、
                        予め本人の同意なく他の目的で利用することはありません。
                    </div>
                </div>
            </section>
            <section className="mb-[120px]">
                <h2 id="p1" className="h-[250px] mb-[40px] pt-[60px] pb-[80px] text-[36px] font-black text-center font-ryumin tracking-[0.5]">
                    <span className="text-[#1c637a]">当</span>WEBサイトについて
                </h2>

                <div className="relative items-center w-full max-w-[940px] my-[40px] mx-auto px-4 md:px-[50px]">
                    エイムネクスト株式会社（以下、「当社」と記す。）は、
                    当ウェブサイトにおいてお客様から提供していただいた個人情報の保護に努めております。
                </div>
                <div className="relative items-center w-full max-w-[940px] my-[40px] mx-auto px-4 md:px-[50px] pt-[50px]">
                    {webSiteList.map((props, index) => {
                        return(
                            <div key={index}>
                                <div className="my-[40px]">
                                    <Line text={`${index + 1}.${props.title}`} />
                                </div>
                                <p>{props.description}</p>
                            </div>
                        )
                    })}
                </div>
            </section> 
        </div>
    )
}