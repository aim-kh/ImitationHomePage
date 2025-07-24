"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { EffectFade } from "swiper/modules"
import Image from "next/image"
import "swiper/css"
import "swiper/css/effect-fade"
import clsx from "clsx"


type Properties = {src: string, alt: string}
const properties: Properties[] = [
    {
        src:"/image/mv_01.png", 
        alt:"IoTが製造業の未来を変える　ハードウェアだけではなく、顧客が求める結果を出すサービスを提供することで顧客のビジネスにどう貢献するか、次世代の製造業には求められています。AIMNEXTはスマートファクトリーの導入からIoT時代を勝ち抜くビジネスモデル変革までをお手伝いさせていただきます。" 
    },
    {
        src:"/image/mv_02.png",
        alt:"ソフトウェアマネジメントの優劣が企業の競争力を決める　日々の進化に加え、巨大化、複雑化するソフトウェアをどうマネージしていくか。製品開発における様々なソフトウェアの課題に対して、ソフトウェアエンジニアリングのエキスパートがコンサルティング、設計、実装、テスト、リファクタリングまで多様な手法でお手伝いいたします。"
    },
    {
        src:"/image/mv_03.png",
        alt:"製造業の基本を確固たるものに　技術情報管理から生産管理、販売管理、SCMといった製造業のコアプロセスを最新の情報技術を駆使しながら確固たるものに変革していくこと製造業のエキスパートがお手伝いさせていただきます。"
    },
    {
        src:"/image/mv_04.png",
        alt:"システム構築を確実にスピーディーに　情報システム導入における、PMO、設計、開発、テストにおいて豊富な経験と知識を持ったTEAMがお手伝いさせていただきます。新規アプリケーションだけでなく、既存システムのモダナイゼーションまで安心してお任せください"
    },
    {
        src:"/image/mv_05.png",
        alt:"コンサルティングの枠を超えて　コンサルタント、エンジニア、研究開発者、事業経験者と様々なバックグランドを持ったプロフェッショナルが従来のコンサルティングの枠を超えTEAMとなり国境を越えてお客様の課題解決をサポートいたします。"
    }
]

export function SequentialDisplay() {
  return (
    <div
      className={clsx(
        "absolute w-[548px] h-[580px] right-0 top-0 z-0",
        "bg-top-right bg-no-repeat bg-cover bg-[url('/image/bg_mvtxt.png')]"
      )}
    >
      <Swiper
        modules={[EffectFade]}
        effect="fade"
        fadeEffect={{crossFade: true}}
        loop
        speed={1500}
        threshold={80}
        className="h-full"
      >
        {properties.map(({ src, alt }, idx) => (
          <SwiperSlide key={idx}>
            <div  className="flex justify-end">
              <Image
                src={src}
                alt={alt}
                width={410}
                height={366}
                className="mt-[90px] mr-[20px]"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
