

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
            <h3>{year}</h3>
            <ul>
                {achievements.map((achievement, index) => {
                    return(
                        <li key={index}>
                            <span>{achievement.title}</span>
                            <p>{achievement.description}</p>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}