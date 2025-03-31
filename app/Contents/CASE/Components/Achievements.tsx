import { Line } from "@Components/Common/Line";


interface Achievement {
    title: string;
    description: string;
}

interface AchievementsProps {
    year: string;
    achievements: Achievement[];
}

export function Achievements ({year, achievements}: AchievementsProps) {

    return(
        <div className="mt-[40px]">
            <div className="flex justify-center items-center">
                <Line/>
                <h3 className="text-center text-[24px] font-bold font-ryumin">
                    {year}
                </h3>
                <Line/>
            </div>
            
            <ul className="mx-auto mt-[40px] w-[730px]">
                {achievements.map((achievement, index) => {
                    return(
                        <li key={index} className="mb-[15px] flex">
                            <span className="text-center w-[150px] text-[13px] text-[#333333] border border-[#2187a4] px-[10px] leading-[26px]">
                                {achievement.title}
                            </span>
                            <p className="pl-[27px]">{achievement.description}</p>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}