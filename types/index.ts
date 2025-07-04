import { JSX, ReactNode } from "react";


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

type PrivacyPolicyDeclaration = string[];
type ProvisionToAThirdParty = string[];
type SecurityMeasures = {
    title : string;
    description: string;
}[];
type DisclosureRequest = JSX.Element[];
export type UtilizationPurposeList = {
    type:string;
    purpose:ReactNode;
}
export type WebSiteList = {
    title:string;
    description:string;
}

export interface PrivacyPolicyProps {
    privacyPolicyList: PrivacyPolicyDeclaration;
    provisionToAThirdPartyList: ProvisionToAThirdParty;
    securityMeasuresList: SecurityMeasures;
    disclosureRequestList: DisclosureRequest;
    utilizationPurposeList: UtilizationPurposeList[];
    webSiteList: WebSiteList[];
}
