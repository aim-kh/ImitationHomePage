import Image from "next/image";

const bgConf = "absolute inset-0 w-full h-full bg-no-repeat bg-center";

export function HomeBackGround() {
    return (
        <Image
            src="/image/top_image.jpg"
            alt="Background Image"
            layout="intrinsic"  // または layout="responsive"
            width={1400}
            height={777}
            objectFit="cover"
            className={bgConf}
        />
    );
}
