import { BreadCrumbs } from "@components/Contents/BreadCrumbs";
import { ContentsHeader } from "@components/Contents/ContentsHeader";
import { PrivacyPolicyMain } from "./PrivacyPolicyMain";
import { disclosureRequestList, privacyPolicyList, provisionToAThirdPartyList, securityMeasuresList, utilizationPurposeList, webSiteList } from "constants/privacy-policy-props";
import { Footer } from "@components/Common/Footer/Footer";


export default function Page() {
    return(
        <>
            <ContentsHeader />
            <BreadCrumbs />
            <PrivacyPolicyMain 
                privacyPolicyList={privacyPolicyList}
                provisionToAThirdPartyList={provisionToAThirdPartyList}
                securityMeasuresList={securityMeasuresList}
                disclosureRequestList={disclosureRequestList}
                utilizationPurposeList={utilizationPurposeList}
                webSiteList={webSiteList}
            />
            <Footer/>
        </>

    )
}