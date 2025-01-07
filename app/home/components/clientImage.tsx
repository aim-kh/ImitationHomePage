import Image from "next/image";

export function ClientImage({src, alt, className}: {src: string, alt: string, className?: string}) {
    return (
        <Image
            src={src}
            alt={alt}
            className={className}
        />
    )
}