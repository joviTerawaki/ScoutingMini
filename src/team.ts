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

//once data is received put it all on the table
const dataTable: HTMLTableElement = document.getElementById(
    //access data table from loaded HTML doc
    "dataTable"
) as HTMLTableElement;

// get data from apis and store them in an array of Team objects
const getData = () => {
    getTeamInfo().then((teamMap) => {
        teamMap.forEach((team) => {
            let newTeam = new Team();

            newTeam.teamNumber = team.team_number;
            newTeam.teamName = team.nickname;

            //get insights using the data received above and put the teams EPA on the table
            getTeamInsightsStatbotics(team.key.substring(3)).then(
                (insights) => {
                    newTeam.epa = insights.epa.breakdown.total_points.mean;
                }
            );

            getEventInsightsTBA().then((insights) => {
                newTeam.opr = insights["totalPoints"][team.key].toFixed(
                    2
                ) as unknown as number;
            });

            teamsArr.push(newTeam);
        });
        generateTable();
    });
};

//create rows of team data
function generateTable(): void {
    teamsArr.forEach((team) => {
        const teamRow = dataTable.insertRow();
        teamRow.id = `row - ${team.teamNumber.toString()}`;

        const teamNum = teamRow.insertCell();
        teamNum.id = `num - ${team.teamNumber.toString()}`;
        const teamName = teamRow.insertCell();
        teamName.id = `name - ${team.teamNumber.toString()}`;
        const teamEPA = teamRow.insertCell(); //statbotics
        teamEPA.id = `epa - ${team.teamNumber.toString()}`;
        const teamOPR = teamRow.insertCell(); //TBA
        teamOPR.id = `opr - ${team.teamNumber.toString()}`;

        teamNum.textContent = team.teamNumber.toString();
        teamName.textContent = team.teamName;
        teamEPA.textContent = team.epa.toString();
        teamOPR.textContent = team.opr.toString();
    });
}

const updateTable = () => {
    teamsArr.forEach((team) => {
        const teamRow: HTMLTableRowElement = document.getElementById(
            `row - ${team.teamNumber.toString()}`
        ) as HTMLTableRowElement;
        const teamNum: HTMLTableCellElement = document.getElementById(
            `num - ${team.teamNumber.toString()}`
        ) as HTMLTableCellElement;
        const teamName: HTMLTableCellElement = document.getElementById(
            `name - ${team.teamNumber.toString()}`
        ) as HTMLTableCellElement;
        const teamEPA: HTMLTableCellElement = document.getElementById(
            `epa - ${team.teamNumber.toString()}`
        ) as HTMLTableCellElement;
        const teamOPR: HTMLTableCellElement = document.getElementById(
            `opr - ${team.teamNumber.toString()}`
        ) as HTMLTableCellElement;

        teamNum.textContent = team.teamNumber.toString();
        teamName.textContent = team.teamName;
        teamEPA.textContent = team.epa.toString();
        teamOPR.textContent = team.opr.toString();
    });
};

//DEBUGGING
const logSomethingButton: HTMLButtonElement = document.getElementById(
    "logSomethingButton"
) as HTMLButtonElement;

function logSomething(): void {
    updateTable();
}

logSomethingButton.addEventListener("click", () => logSomething());

//when the app starts call this function
const initApp = (): void => {
    getData();
};

const intervalId = setInterval(updateTable, 500);

document.addEventListener("DOMContentLoaded", initApp);
