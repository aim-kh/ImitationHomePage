import { ContentsTitle } from "@components/Contents/ContentsTitle";


export function ContactMain() {
    return (
        <div className="mb-[40px]">
            <ContentsTitle title="CONTACT"/>
            <section className="py-[60px] text-center">
                <h3 className="font-bold font-ryumin text-[24px]">サービス及び会社に関するお問い合わせ</h3>
                <div className="mt-[20px] tracking-[2px]">
                    <div className="flex justify-center items-center">
                        E-Mail :&nbsp;
                        <img src="/image/mail1.svg" alt="mail address"  className="w-[255px]"/>
                    </div>
                    <div>
                        電話 : 03-3453-3900
                        <br />
                        FAX : 03-3453-3900
                    </div>
                </div>
                </section>
            
                <section className="py-[60px] text-center bg-[#f8f8f8]">
                <h3 className="font-bold font-ryumin text-[24px]">採用に関するお問い合わせ</h3>
                <div className="mt-[20px] tracking-[2px]">
                    <div className="flex justify-center items-center">
                        新卒採用専用E-Mail :&nbsp;
                        <img src="/image/mail2.svg" alt="mail address"  className="w-[255px]"/>
                    </div>
                    <div className="flex justify-center items-center">
                        キャリア採用専用E-Mail :&nbsp;
                        <img src="/image/mail3.svg" alt="mail address"  className="w-[255px]"/>
                    </div>
                    <div>
                        電話 : 03-3453-3900
                        <br />
                        FAX : 03-3453-3900
                    </div>
                </div>
                </section>
        </div>
    )
}