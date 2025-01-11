import React from "react";
import { ClientImage } from "./components/clientImage";
import { ClientLink } from "./components/clientLink";

interface ImageProps {
    src: string;
    alt: string;
    children: React.ReactNode;
}

interface LineProps {
    src: string;
    alt: string;
    children: React.ReactNode;
}

interface LinkProps {
    href: string;
    children: string;
}

interface StrengthCardProps {
    ImageProps: ImageProps;
    LineProps: LineProps;
    LinkProps: LinkProps;
}

const rhombus_box__item = "\
    bg-white bg-auto bg-repeat bg-scroll border-solid border-gray-300 b\
    order-b-4 border-l-4 border-r-4 border-t-4 box-border text-black flex justify-start items-center \
    font-[HiraKakuStd W4, Hiragino Kaku Gothic Pro, 游ゴシック体, 游ゴシック, Yu Gothic, YuGothic, メイリオ, Verdana, Arial, sans-serif] \
    text-center text-sm leading-5 tracking-[2px] h-64 min-h-1 w-52 relative mt-12 mb-0 ml-2 mr-2"

const head = "border-b-0 border-black-500 border-l-0 border-r-0 border-t-0 border-image-outset-0 border-image-repeat-stretch \
    border-image-slice-100% border-image-source-none border-image-width-1 text-black block \
    font-[HiraKakuStd W4, Hiragino Kaku Gothic Pro, 游ゴシック体, 游ゴシック, Yu Gothic, YuGothic, メイリオ, Verdana, Arial, sans-serif] \
    text-center text-sm leading-5 tracking-[2px] h-16 w-16 absolute left-16 top-[-8.5rem] opacity-100 select-none"

const line = "border-b-0 border-black-500 border-l-0 border-r-0 border-t-0 border-image-outset-0 border-image-repeat-stretch \
    border-image-slice-100% border-image-source-none border-image-width-1 text-black block \
    font-[HiraKakuStd W4, Hiragino Kaku Gothic Pro, 游ゴシック体, 游ゴシック, Yu Gothic, YuGothic, メイリオ, Verdana, Arial, sans-serif] \
    text-center text-sm leading-5 tracking-[2px] h-[1.59375rem] w-[64px] mx-16 opacity-100 select-none"

const moreBtn = "bg-scroll bg-clip-border bg-color-[#1d1b29] bg-image-none bg-origin-padding bg-position-x-0 \
    bg-position-y-0 bg-repeat-repeat bg-size-auto border-b-0 border-l-0 border-r-0 border-t-0 \
    border-black-500 border-image-outset-0 border-image-repeat-stretch border-image-slice-100% \
    border-image-source-none border-image-width-1 bottom-5 text-white cursor-pointer block \
    font-[リュウミン R-KL, Ryumin Regular KL, 游明朝, YuMincho, ヒラギノ明朝 ProN W3, Hiragino Mincho ProN, HG明朝E, ＭＳ Ｐ明朝, ＭＳ 明朝, serif] \
    font-feature-settings-normal font-kerning-auto font-optical-sizing-auto text-sm \
    text-center tracking-[0.5px] leading-[25px] h-[25px] w-[100px] select-none"

export function StrengthCard( {ImageProps, LineProps, LinkProps}: StrengthCardProps ) {

    return (
        <div className={rhombus_box__item}>
            <ClientImage
                src={ImageProps.src} 
                alt={ImageProps.alt}
                className={head}
                width={64}
                height={64}
            />
            <span>{ImageProps.children}</span>
            <ClientImage 
                src={LineProps.src}
                alt={LineProps.alt}
                className={line}
                width={64}
                height={64}
            />
            <span>{LineProps.children}</span>
                
            <ClientLink
                href={LinkProps.href}
                className={moreBtn}
            >
                {LinkProps.children}
            </ClientLink>
        </div>
    )
}