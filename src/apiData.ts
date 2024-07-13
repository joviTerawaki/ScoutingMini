import {
    TeamInfo,
    TeamInsightsStatbotics,
    EventInsightsTBA,
} from "../constants";

//returns an array of teams with their info
//ex. for 2024hiho it returns 34 elements each with a bunch of keys and values
export const getTeamInfo = async function (): Promise<TeamInfo[]> {
    const teamInfo = await fetch(
        "https://www.thebluealliance.com/api/v3/event/2024hiho/teams/simple",
        {
            headers: {
                accept: "application/json",
                "X-TBA-Auth-Key":
                    "5MlTtCKI1kU8v8VGcAqJTt34YjypCWu8qVeihIaD1YWdqHO5Sm8Q5ix0gkNeEwuo",
            },
        }
    );

    return teamInfo.json();
};

//get a single team's insight data from Statbotics
export const getTeamInsightsStatbotics = async function (
    team: string
): Promise<TeamInsightsStatbotics> {
    const teamInsights = await fetch(
        `https://api.statbotics.io/v3/team_event/${team}/2024hiho`,
        {
            headers: {
                accept: "application/json",
            },
        }
    );

    //if there is trouble fetching the data throw error
    if (!teamInsights.ok) {
        throw new Error(`Error fetching data: ${teamInsights.statusText}`);
    }

    return await teamInsights.json();
};

//get 2024hiho's even insights from TBA
export const getEventInsightsTBA =
    async function (): Promise<EventInsightsTBA> {
        const eventInsights = await fetch(
            "https://www.thebluealliance.com/api/v3/event/2024hiho/coprs",
            {
                headers: {
                    accept: "application/json",
                    "X-TBA-Auth-Key":
                        "5MlTtCKI1kU8v8VGcAqJTt34YjypCWu8qVeihIaD1YWdqHO5Sm8Q5ix0gkNeEwuo",
                },
            }
        );

        //if there is trouble fetching the data throw error
        if (!eventInsights.ok) {
            throw new Error(`Error fetching data: ${eventInsights.statusText}`);
        }

        return await eventInsights.json();
    };
