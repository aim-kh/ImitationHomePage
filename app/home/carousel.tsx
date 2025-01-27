"use client"
import { EmblaOptionsType } from 'embla-carousel'
import EmblaCarousel from "./components/Embla/EmblaCarousel"

const span = "text-[#2187A4]"
 

export function Carousel() {
    //カルーセルの動作オプション
    const OPTIONS: EmblaOptionsType = {loop: true, slidesToScroll: 1, direction: 'rtl'} 
    //index生成用
    const SLIDE_COUNT = 10
    const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

    return (
        <section className="w-full h-[807] bg-[url('/image/sq_bg.png')]">
            <h2 className="text-center font-serif text-[36px] pt-[60]">
                <span className={`${span}`}>O</span>ur <span className={`${span}`}>S</span>ervice
            </h2>
            <div className="text-center font-sans text-[16px] leading-[32px] mt-[25] mb-[60] tracking-[2px]">
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
