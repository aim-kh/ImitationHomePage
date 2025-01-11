"use client"

import Image from "next/image";

export function ClientImage({src, alt, className, width, height}: {src: string, alt: string, className?: string, width: number, height: number}) {
    return (
        <Image
            src={src}
            alt={alt}
            className={className}
            width={width}
            height={height}
            sizes="(max-width: 800px) 100vw, 800px"
        />
    )
}