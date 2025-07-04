import { ContentsTitle } from "@components/Contents/ContentsTitle";
import { ContentBlock } from "./content-block";

export function SiteMapMain(){

    return(
        <>
            <ContentsTitle title="SITE MAP"/>
            <div className="items-center">
                <ContentBlock title="Home"/> 
            </div>
        </>
    )
}