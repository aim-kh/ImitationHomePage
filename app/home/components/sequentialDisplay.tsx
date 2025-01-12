"use client"
import { useEffect, useState } from "react";
import Image from "next/image";

const wrapMv = "border-b-0 border-l-0 border-r-0 border-t-0 text-black display-none font-sans text-base \
    font-normal h-auto leading-5 tracking-wide m-0 p-0"

const slider = " box-border display-block list-none relative touch-pan-y select-none"

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

export function SequentialDisplay () {
    const [currentIndex, setCurrentIndex] = useState<number>(0)
    const maxIndex = properties.length - 1

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex( (prevIndex) => (prevIndex === maxIndex ? 0 : prevIndex + 1))
        }, 5000)
        return () => clearInterval(interval)
    }, [])
    
    return (
        <div className={wrapMv}>
            <Image
                src={properties[currentIndex].src}
                alt={properties[currentIndex].alt}
                width={64}
                height={64}
                className={slider}
            />  
        </div>

    )
}