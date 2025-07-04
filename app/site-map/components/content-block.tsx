import Image from "next/image";
import Link from "next/link";


export function ContentBlock({title, href}: {title: string, href: string}) {

    return (
        <div className="py-[10px] px-[20px] mb-[10px] text-align-left leading-[26px]">
          <Link href={href} className="relative">
            <Image
              src="/image/arrow_icon.png"
              alt="arrow_icon"
              width={16}
              height={16}
              className="inline-block mr-[10px]"
            />
            {title}  
          </Link>
        </div>
    );
}