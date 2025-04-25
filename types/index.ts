import { ReactNode } from "react";


export interface servicePageFormatProps {
    titleInitial:string,
    title:string,
    subTitleInitial:string,
    subTitle:ReactNode,
    description:ReactNode
}

export interface serviceArticleProps  {
    href:string,
    title:string,
    description:ReactNode
  
}

export interface breadCrumbItem  {
    url:string,
    name:string,
    children?:Record<string, string>
}