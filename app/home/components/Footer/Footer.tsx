import { imageConfigDefault } from "next/dist/shared/lib/image-config";
import Image from "next/image";
import Link from "next/link";


export function Footer () {


    return (
        <footer className="relative bg-[#677892]">
            <ul className="flex py-[40px] text-[#fff] text-[12px] justify-center">
                <li className="w-[300] text-[13px] leading-[24px] align-middle">
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
                   <span className="text-[30px]">03-3453-3900<br/></span>
                   <span className="text-[10px]">受付：9:00〜18:00(土日祝除く)</span>
                </li>
                <li className="w-[330px] flex justify-end">
                    <a href="" className="w-[280px] h-[70px]  text-[#fff] bg-[#1d1b29] flex justify-center items-center">
                        <img className="w-[41px] h-[35px] pt-[5px] pr-[8px] pb-[5px]" src="/image/mail_icon2.png" alt="mail_icon" />
                        <span className="text-[22px]">お問い合わせ</span>
                    </a>
                </li>
            </ul>
            <div className="bg-[#3d4b60]">
                <p className="text-center pt-[36px] mb-[24px] text-[#fff] text-[28px]">Group Link</p>
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
            <div className="relative bg-[#1d1b29] pt-[12px] text-center text-white">
                <div className="w-[328px] text-left inline-block">
                    <img className="w-[123px]" src="/image/top_logo.png" alt="logo" />
                    <span className="pt-[18px] text-[12px] block">〒105-0014</span>
                    <span className="pt-[10px] block">東京都港区芝1-10-13 芝日景有楽ビル７F</span>
                    <a className="" href="">
                        <img src="/image/mail_icon.png" alt="mail_icon" />
                    </a>
                    <span className="block text-[18px] pt-[15px] tracking-[0.1rem]">03-3453-3900</span>
                    <span className="block text-[10px] mt-[-8px]">受付：9:00〜18:00(土日祝除く)</span>
                </div>

                <div className="w-[660px] inline-block text-left">
                    <p><a href="">新着情報</a></p>
                    <p><a href="">サービスを探す</a></p>
                    <p><a href="">インダストリー4.0・スマートファクトリー・製造業におけるIoT</a></p>
                    <p><a href="">　/　 SCM・生産管理・品質管理</a></p>
                </div>
                <p className="mt-[12px] py-[10px] text-[10px] w-[1000px] mt-[12px] m-auto font-lighter border-t border-[#fff]">
                    Copyright AIMNEXT Inc. All Rights Reserved.
                </p>
                <img src="" alt="aa" />
                <span className="">〒105-0014</span>
                <span className="">東京都港区芝1-10-13 芝日景有楽ビル７F </span>
                <a href="https://www.aimnext.co.jp/contact.html">
                    <img src="https://www.aimnext.co.jp/img/mail_icon.png" alt="mail_icon" className=""/>
                </a>
                <span className="tel">03-3453-3900</span>
                <span className="opentime">受付：9:00〜18:00(土日祝除く)</span>
                <a href="#top" className="goto_top">
                    <img src="../../img/goto_page_top.png"/>
                    Page Top
                    aaaaaaaaaaaa
                </a>
                
            </div>
        </footer>
    )
}
