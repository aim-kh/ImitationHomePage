import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

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

const emblaSlide = clsx(
    "w-[320px] h-[350px] mx-[10px] mt-[50px] flex justify-center",
    "bg-white border-solid border-8 border-gray-300",
    "translate-x-0 translate-y-0 translate-z-0"
)

export function StrengthCard({ ImageProps, LineProps, LinkProps }: StrengthCardProps) {

    return (
        <div className={emblaSlide}>
            <Image
                src={ImageProps.src}
                alt={ImageProps.alt}
                className="absolute top-[-60px]"
                width={110}
                height={110}
            />
            <span className={clsx(
                "flex items-center justify-center text-center", 
                "pt-[50px] text-[20px] h-[150px] block leading-[30px]",
                "font-[450] font-ryumin"
            )}>
                {ImageProps.children}
            </span>
            <Image
                src={LineProps.src}
                alt={LineProps.alt}
                className="absolute top-[150]"
                width={80}
                height={8}
            />
            <span className={clsx("absolute top-[180px] w-[285px] h-[84px] leading-[30px] overflow-hidden line-clamp-3",
                "font-hirakaku text-[16px] text-center tracking-[2px]"
            )}>
                {LineProps.children}
            </span>

            <Link
                href={LinkProps.href}
                className={clsx(
                    "absolute bottom-[20px] md:w-[150px] md:h-[35px] xs:w-[100px] xs:h-[25px]",
                    "text-center bg-black text-white flex items-center justify-center",
                )}
            >
                {LinkProps.children}
            </Link>
        </div>
    )
}
