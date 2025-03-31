"use client"
import { EmblaOptionsType } from 'embla-carousel'
import EmblaCarousel from "./Carousel/EmblaCarousel"

const span = "text-[#2187A4]"
 

export function Carousel() {
    //カルーセルの動作オプション
    const OPTIONS: EmblaOptionsType = {
        loop: true,
        align: 'center', // カードが左詰めになるように調整
        containScroll: 'trimSnaps', // はみ出しを防ぐ
        slidesToScroll: 1, // 1枚ずつスクロール
      }
      
    //index生成用
    const SLIDE_COUNT = 10
    const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

    return (
        <section className="w-full h-[807px] bg-[url('/image/sq_bg.png')]">
            <h2 className="text-center font-serif text-[36px] pt-[60px]">
                <span className={`${span}`}>O</span>ur <span className={`${span}`}>S</span>ervice
            </h2>
            <div className="text-center font-sans text-[16px] leading-[32px] mt-[25px] mb-[60px] tracking-[0.125rem]">
                グローバル規模でビジネス環境が大きく変わりつつあるこの時代において<br/>
                各社は新しいビジネスモデルの構築を求められつつあります。<br/>
                AIMNEXTでは、実務にも精通した各分野のエキスパートによる<br/>
                独自の視点を取り入れたサービスラインをご用意し<br/>
                お客様の変革をお手伝いさせていただきます。
            </div>

            {/* carousel */}
            <EmblaCarousel slides={SLIDES} options={OPTIONS}/>
                 
        </section>
 
    )

}
