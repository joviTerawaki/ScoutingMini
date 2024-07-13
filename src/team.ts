import {
    TeamInsightsStatbotics,
    EventInsightsTBA,
    TeamInfo,
    Team,
} from "../constants";

import {
    getTeamInfo,
    getTeamInsightsStatbotics,
    getEventInsightsTBA,
} from "./apiData";

let teamsArr: Team[] = [];

//data on table
const displayData = () => {
    getTeamInfo().then((teamMap) => {
        //once data is received put it all on the table
        const dataTable: HTMLTableElement = document.getElementById(
            //access data table from loaded HTML doc
            "dataTable"
        ) as HTMLTableElement;

        teamMap.forEach((team) => {
            let newTeam = new Team(); //create new Team obj
            const teamRow = dataTable.insertRow(); //make a new row for the team

            //add cells to that row for teams number and name
            const teamNum = teamRow.insertCell();
            const teamName = teamRow.insertCell();
            const teamEPA = teamRow.insertCell(); //Statbotics
            const teamOPR = teamRow.insertCell(); //TBA

            //assign team number and name
            teamNum.textContent = team.key.substring(3);
            teamName.textContent = team.nickname;

            //adding team number and name to array of teams
            newTeam.teamNumber = team.team_number;
            newTeam.teamName = team.nickname;

            //get insights using the data received above and put the teams EPA on the table
            getTeamInsightsStatbotics(team.key.substring(3)).then(
                (insights) => {
                    teamEPA.textContent =
                        insights.epa.breakdown.total_points.mean.toString();
                    newTeam.epa = insights.epa.breakdown.total_points.mean;
                }
            );

            getEventInsightsTBA().then((insights) => {
                teamOPR.textContent = insights["totalPoints"][team.key]
                    .toFixed(2)
                    .toString();
                newTeam.opr = insights["totalPoints"][team.key];
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
