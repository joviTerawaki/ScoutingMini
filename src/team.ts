// import { Constants } from "../constants"

//object of each element in the array from getTeamInfo (the teams from TBA)
interface TeamInfo {
    key: "string";
    team_number: 0;
    nickname: "string";
    name: "string";
    city: "string";
    state_prov: "string";
    country: "string";
}

//copied and pasted from the example on Statbotics 
interface TeamInsightsStatbotics {
    team: string;
    year: number;
    event: string;
    time: number;
    offseason: boolean;
    team_name: string;
    event_name: string;
    country: string;
    state: string;
    district: null | string;
    type: string;
    week: number;
    status: string;
    first_event: boolean;
    epa: {
        total_points: {
            mean: number;
            sd: number;
        };
        unitless: number;
        norm: number;
        conf: [number, number];
        breakdown: {
            total_points: {
                mean: number;
                sd: number;
            };
            auto_points: {
                mean: number;
                sd: number;
            };
            teleop_points: {
                mean: number;
                sd: number;
            };
            endgame_points: {
                mean: number;
                sd: number;
            };
            melody_rp: {
                mean: number;
                sd: number;
            };
            harmony_rp: {
                mean: number;
                sd: number;
            };
            tiebreaker_points: {
                mean: number;
                sd: number;
            };
            auto_leave_points: {
                mean: number;
                sd: number;
            };
            auto_notes: {
                mean: number;
                sd: number;
            };
            auto_note_points: {
                mean: number;
                sd: number;
            };
            teleop_notes: {
                mean: number;
                sd: number;
            };
            teleop_note_points: {
                mean: number;
                sd: number;
            };
            amp_notes: {
                mean: number;
                sd: number;
            };
            amp_points: {
                mean: number;
                sd: number;
            };
            speaker_notes: {
                mean: number;
                sd: number;
            };
            speaker_points: {
                mean: number;
                sd: number;
            };
            amplified_notes: {
                mean: number;
                sd: number;
            };
            total_notes: {
                mean: number;
                sd: number;
            };
            total_note_points: {
                mean: number;
                sd: number;
            };
            endgame_park_points: {
                mean: number;
                sd: number;
            };
            endgame_on_stage_points: {
                mean: number;
                sd: number;
            };
            endgame_harmony_points: {
                mean: number;
                sd: number;
            };
            endgame_trap_points: {
                mean: number;
                sd: number;
            };
            endgame_spotlight_points: {
                mean: number;
                sd: number;
            };
            rp_1: {
                mean: number;
                sd: number;
            };
            rp_2: {
                mean: number;
                sd: number;
            };
        };
        stats: {
            start: number;
            pre_elim: number;
            mean: number;
            max: number;
        };
    };
    record: {
        qual: {
            wins: number;
            losses: number;
            ties: number;
            count: number;
            winrate: number;
            rps: number;
            rps_per_match: number;
            rank: number;
            num_teams: number;
        };
        elim: {
            wins: number;
            losses: number;
            ties: number;
            count: number;
            winrate: number;
            alliance: string;
            is_captain: boolean;
        };
        total: {
            wins: number;
            losses: number;
            ties: number;
            count: number;
            winrate: number;
        };
    };
    district_points: null;
}

interface EventInsightsTBA {
    additionalProp1: {
        additionalProp1: 0;
        additionalProp2: 0;
        additionalProp3: 0;
    };
    additionalProp2: {
        additionalProp1: 0;
        additionalProp2: 0;
        additionalProp3: 0;
    };
    additionalProp3: {
        additionalProp1: 0;
        additionalProp2: 0;
        additionalProp3: 0;
    };
}

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

    return await eventInsights.json();
};

const displayData = () => {
    getTeamInfo().then((teamMap) => {
        //once data is received put it all on the table
        const dataTable: HTMLTableElement = document.getElementById( //access data table from loaded HTML doc
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
                    teamEPA.textContent = insights.epa.breakdown.total_points.mean.toString();
                }
            );
        });
    });
};

//DEBUGGING
function logSomething(): void {
    console.log(
        `insights returned: ${getTeamInsightsStatbotics("2443").then(
            (insights) => {
                console.log(
                    `stringified insights: ${JSON.stringify(insights)}`
                );
                console.log(`insights: ${insights}`);
                console.log(`epa: ${insights.epa.breakdown.total_points.mean}`);
                console.log(`typeof insights: ${typeof insights}`);

                for (const key in insights) {
                    console.log(`key: ${key}, value: ${insights}`);
                }

                return insights;
            }
        )}`
    );
}

//when the app starts call this function
const initApp = (): void => {
    displayData();
};

document.addEventListener("DOMContentLoaded", initApp);
