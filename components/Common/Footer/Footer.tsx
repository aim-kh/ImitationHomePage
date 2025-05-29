import Image from "next/image";
import Link from "next/link";


export function Footer () {


    return (
        <footer className="relative bg-[#677892]">
            <ul className="flex py-[40px] text-[#fff] text-[12px] justify-center">
                <li className="w-[300] text-[13px] leading-[24px] align-middle tracking-[1.5px] font-hirakaku">
                    SERVICEについてのお問い合わせ、<br/>
                    ご要望などがありましたら、<br/>
                    こちらから お問い合わせ下さい。
                </li>
                <li className="w-[370] h-[65px] px-[50px] my-[5px] border-x border-[#455266]">
                    <Image
                        src="/image/phone_icon.png" 
                        alt="phone_icon" 
                        className="float-left pt-[5px]"
                        width={48}
                        height={52}
                    />
                   <span className="text-[30px] font-ryumin">03-3453-3900<br/></span>
                   <span className="text-[10px] tracking-[1.5px] font-hirakaku">受付：9:00〜18:00(土日祝除く)</span>
                </li>
                <li className="w-[330px] flex justify-end">
                    <a href="" className="w-[280px] h-[70px]  text-[#fff] bg-[#1d1b29] flex justify-center items-center">
                        <img className="w-[41px] h-[35px] pt-[5px] pr-[8px] pb-[5px]" src="/image/mail_icon2.png" alt="mail_icon" />
                        <span className="text-[22px] font-hirakaku">お問い合わせ</span>
                    </a>
                </li>
            </ul>
            <div className="bg-[#3d4b60]">
                <p className="text-center pt-[36px] mb-[24px] text-[#fff] text-[28px] font-ryumin">Group Link</p>
                <ul className="flex pb-[40px] w-[840px] m-auto">
                    <li className="w-[calc(25%-20px)] mx-[10px]">
                        <Link href="">
                            <img src="/image/group1.png" alt="Vietnam" />
                        </Link>
                    </li>
                    <li className="w-[calc(25%-20px)] mx-[10px]">
                        <Link href="">
                            <img src="/image/group2.png" alt="China" />
                        </Link>
                    </li>
                    <li className="w-[calc(25%-20px)] mx-[10px]">
                        <Link href="">
                            <img src="/image/group5.png" alt="PLUS+P" />
                        </Link>
                    </li>
                    <li className="w-[calc(25%-20px)] mx-[10px]">
                        <Link href="">
                            <img src="/image/group6.png" alt="PlantsNote" />
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="bg-[#1d1b29] pt-[10px] text-center text-white text-[12px]">
                <div className="align-top w-[328px] text-left inline-block">
                    <img className="w-[123px]" src="/image/top_logo.png" alt="logo" />
                    <span className="pt-[18px] block">〒105-0014</span>
                    <span className="pt-[10px] block">東京都港区芝1-10-13 芝日景有楽ビル７F</span>
                        <div className="flex items-center">
                            <Link className="inline-block mt-[10px]" href="">
                                <img src="/image/mail_icon.png" alt="mail_icon" />
                            </Link>
                            <div className="ml-[15px]">
                                <span className="block text-[18px] tracking-[0.5px]">03-3453-3900</span>
                                <span className="block text-[10px] mt-[-8px]">受付：9:00〜18:00(土日祝除く)</span>
                            </div>
                        </div>
                </div>

                <div className="w-[660px] inline-block text-left text-[12px] tracking-[0.5px] leading-[24px]">
                    <p><Link href="">新着情報</Link></p>
                    <p><Link href="/service">サービスを探す</Link></p>
                    <p className="ml-[30px]">
                        <Link href="/service/industry">インダストリー4.0・スマートファクトリー・製造業におけるIoT</Link>
                        　/　 
                        <Link href="/service/scm-production">SCM・生産管理・品質管理</Link>
                        <br />
                        <Link href="/service/product-development">PDM・製品開発・コスト削減</Link>
                        　/　 
                        <Link href="/service/training">人材育成</Link> 
                        　/　 
                        <Link href="/service/overseas">海外進出(東南アジア、中南米)・グローバル化支援</Link>
                        <br />
                        <Link href="/service/system-implement">IT統制・ITアウトソーシング・システム開発及び運用</Link>
                        　/　 
                        <Link href="/service/software-quality-improvement">ソフトウェア・品質・改善</Link>
                        <br />
                        <Link href="/service/modernise">ITモダナイゼーション・アーキテクチャ最新化</Link>
                        　/　 
                        <Link href="/service/regional-iot-platform">IoT企画・開発支援/自治体スマートタウン構築</Link>
                        <br />
                        <Link href="/service/technology">テクノロジー～探求と挑戦～</Link>
                    </p>
                    <p><Link href="/case">実績</Link></p>
                    <p><Link href="/company">会社情報</Link></p>
                    <p><Link href="/recruit">採用情報</Link></p>
                    <p><Link href="/site-map">サイトマップ</Link></p>
                    <p><Link href="/privacy-policy">プライバシーポリシー</Link></p>
                </div>
                <p className="font-hirakaku mt-[12px] py-[10px] text-[10px] w-[1000px] mt-[12px] m-auto font-lighter border-t border-[#fff]">
                    Copyright AIMNEXT Inc. All Rights Reserved.
                </p>
                <a href="#top" className="absolute bottom-[20px] right-[20px]">
                    <img src="/image/goto_page_top.png" alt="page top"/>
                    Page Top
                </a>
                
            </div>
        </footer>
    )
}
