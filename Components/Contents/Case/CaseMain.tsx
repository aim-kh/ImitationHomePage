import { Achievements } from "./Achievements";
import { BusinessConsultingProps, SoftwareEngineeringProps, SystemIntegrationProps } from "../../../../constants/AchivementsProps";
import { ScrollButton } from "../../../../Components/Common/ScrollButton";
import { ContentsTitle } from "../../../../Components/Contents/ContentsTitle";


export function CaseMain () {

    return(
        <div>
            <ContentsTitle title="CASE"/>
                <div className="flex justify-center mx-auto mt-[60px]">
                    <ScrollButton page="p1" title="業務コンサルティング" />
                    <ScrollButton page="p2" title={<>ソフトウェア<br/>エンジニアリング</>} />
                    <ScrollButton page="p3" title={<>システム<br/>インテグレーション</>} />
                </div>
            <section className="">
                <h2 id="p1" className="pt-[60px] text-[36px] font-[1000] text-center font-ryumin leading-[1]">
                    <span className="text-[#1c637a]">業</span>務コンサルティング
                </h2>
                {BusinessConsultingProps.map((AchievementProps, index) => {
                    return(
                        <Achievements 
                            key={index} 
                            year={AchievementProps.year} 
                            achievements={AchievementProps.achievements || []}
                        />
                    )
                })}
            </section>
            <section className="bg-[#f8f8f8]">
                <h2 id="p2" className="pt-[60px] text-[36px] font-[1000] text-center font-ryumin leading-[1]">
                    <span className="text-[#1c637a]">シ</span>ステムインテグレーション
                </h2>
                {SystemIntegrationProps.map((AchievementProps, index) => {
                    return(
                        <Achievements 
                            key={index} 
                            year={AchievementProps.year} 
                            achievements={AchievementProps.achievements || []}
                        />
                    )
                })}
            </section>
            <section className="pb-[80px]">
            <h2 id="p3" className="pt-[60px] text-[36px] font-[1000] text-center font-ryumin leading-[1]">
                    <span className="text-[#1c637a]">ソ</span>フトウェアエンジニアリング
                </h2>
                {SoftwareEngineeringProps.map((AchievementProps, index) => {
                    return(
                        <Achievements 
                            key={index} 
                            year={AchievementProps.year} 
                            achievements={AchievementProps.achievements || []}
                        />
                    )
                })}
            </section>
        </div>
    )
}