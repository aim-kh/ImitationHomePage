import React from "react";
import { ClientImage } from "./components/clientImage";
import { ClientLink } from "./components/clientLink";

interface ImageProps {
    src: string;
    alt: string;
    className: string;
    children: React.ReactNode;
}

interface LineProps {
    src: string;
    alt: string;
    className: string;
    children: React.ReactNode;
}

interface LinkProps {
    href: string;
    className: string;
    children: string;
}

interface StrengthCardProps {
    ImageProps: ImageProps;
    LineProps: LineProps;
    LinkProps: LinkProps;
}

export function StrengthCard( {ImageProps, LineProps, LinkProps}: StrengthCardProps ) {

    return (
        <div className="rhombus_box__item">
            <ClientImage
                src={ImageProps.src} 
                alt={ImageProps.alt}
                className={ImageProps.className}
            />
            <span>{ImageProps.children}</span>
            <ClientImage 
                src={LineProps.src}
                alt={LineProps.alt}
                className={LineProps.className}
            />
            <span>{LineProps.children}</span>
                
            <ClientLink
                href={LinkProps.href}
                className={LinkProps.className}
            >
                {LinkProps.children}
            </ClientLink>
        </div>
    )
}