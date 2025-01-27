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

const emblaSlide = "w-[320] h-[350] mx-[10] mt-[50]\
                    flex justify-center\
                    translate-x-0 translate-y-0 translate-z-0 \
                    bg-white border-solid border-8 border-gray-300" //back-ground

const moreBtn = "absolute bottom-[20] md:w-[150] md:h-[35] xs:w-[100] xs:h-[25] text-center bg-black text-white";

export function StrengthCard({ ImageProps, LineProps, LinkProps }: StrengthCardProps) {

    return (
        <div className={emblaSlide}>
            <Image
                src={ImageProps.src}
                alt={ImageProps.alt}
                className="absolute top-[-60]"
                width={110}
                height={110}
            />
            <span className="absolute text-center top-[35] align-middle">{ImageProps.children}</span>
            <Image
                src={LineProps.src}
                alt={LineProps.alt}
                className="absolute top-[120]"
                width={64}
                height={64}
            />
            <span className="absolute top-[130] align-middle w-[285] h-[84]">{LineProps.children}</span>

            <Link
                href={LinkProps.href}
                className={moreBtn}
            >
                {LinkProps.children}
            </Link>
        </div>
    )
}
