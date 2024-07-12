import {
    TeamInsightsStatbotics,
    EventInsightsTBA,
    TeamInfo,
} from "../constants";

//returns an array of teams with their info
//ex. for 2024hiho it returns 34 elements each with a bunch of keys and values
const getTeamInfo = async function (): Promise<TeamInfo[]> {
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
const getTeamInsightsStatbotics = async function (
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
const getEventInsightsTBA = async function (): Promise<EventInsightsTBA> {
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

//data on table
const displayData = () => {
    getTeamInfo().then((teamMap) => {
        //once data is received put it all on the table
        const dataTable: HTMLTableElement = document.getElementById(
            //access data table from loaded HTML doc
            "dataTable"
        ) as HTMLTableElement;

        teamMap.forEach((team) => {
            const teamRow = dataTable.insertRow(); //make a new row for the team

            //add cells to that row for teams number and name
            const teamNum = teamRow.insertCell();
            const teamName = teamRow.insertCell();
            const teamEPA = teamRow.insertCell(); //Statbotics
            const teamOPR = teamRow.insertCell(); //TBA

            //assign team number and name
            teamNum.textContent = team.key.substring(3);
            teamName.textContent = team.nickname;

            //get insights using the data received above and put the teams EPA on the table
            getTeamInsightsStatbotics(team.key.substring(3)).then(
                (insights) => {
                    teamEPA.textContent =
                        insights.epa.breakdown.total_points.mean.toString();
                }
            );

            getEventInsightsTBA().then((insights) => {
                teamOPR.textContent = insights["totalPoints"][team.key]
                    .toFixed(2)
                    .toString();
            });
        });
    });
};

//DEBUGGING
function logSomething(): void {
    console.log(
        `insights: ${getEventInsightsTBA().then((insights) => {
            console.log(`TBA insights: ${JSON.stringify(insights)}`);
            console.log(
                `something: ${insights["Amplification Rate"]["frc2443"]}`
            );

            for (const key in insights) {
                console.log(`key: ${key}`);
            }
        })}`
    );
}

//when the app starts call this function
const initApp = (): void => {
    displayData();
};

document.addEventListener("DOMContentLoaded", initApp);
