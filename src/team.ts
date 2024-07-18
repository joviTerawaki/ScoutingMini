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
            let newTeam = new Team();

            newTeam.teamNumber = team.team_number;
            newTeam.teamName = team.nickname;
            // const teamRow = dataTable.insertRow(); //make a new row for the team

            // //add cells to that row for teams number and name
            // const teamNum = teamRow.insertCell();
            // const teamName = teamRow.insertCell();
            // const teamEPA = teamRow.insertCell(); //Statbotics
            // const teamOPR = teamRow.insertCell(); //TBA

            // //assign team number and name
            // teamNum.textContent = team.key.substring(3);
            // teamName.textContent = team.nickname;

            //adding team number and name to array of teams

            //get insights using the data received above and put the teams EPA on the table
            getTeamInsightsStatbotics(team.key.substring(3)).then(
                (insights) => {
                    newTeam.epa = insights.epa.breakdown.total_points.mean;
                    // teamEPA.textContent =
                    //     insights.epa.breakdown.total_points.mean.toString();
                }
            );

            getEventInsightsTBA().then((insights) => {
                newTeam.opr = insights["totalPoints"][team.key].toFixed(
                    2
                ) as unknown as number;
                // teamOPR.textContent =
                //     insights["totalPoints"][team.key].toFixed(2);
            });

            teamsArr.push(newTeam);
        });
    });
};

//DEBUGGING
const logSomethingButton: HTMLButtonElement = document.getElementById(
    "logSomethingButton"
) as HTMLButtonElement;

function logSomething(): void {
    teamsArr.forEach((team) => {
        console.log(team.teamName);
    });
}

logSomethingButton.addEventListener("click", () => logSomething());

//when the app starts call this function
const initApp = (): void => {
    displayData();
};

document.addEventListener("DOMContentLoaded", initApp);
