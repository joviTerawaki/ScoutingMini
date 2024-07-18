"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = require("../constants");
var apiData_1 = require("./apiData");
var teamsArr = [];
//data on table
var displayData = function () {
    (0, apiData_1.getTeamInfo)().then(function (teamMap) {
        //once data is received put it all on the table
        var dataTable = document.getElementById(
        //access data table from loaded HTML doc
        "dataTable");
        teamMap.forEach(function (team) {
            var newTeam = new constants_1.Team();
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
            (0, apiData_1.getTeamInsightsStatbotics)(team.key.substring(3)).then(function (insights) {
                newTeam.epa = insights.epa.breakdown.total_points.mean;
                // teamEPA.textContent =
                //     insights.epa.breakdown.total_points.mean.toString();
            });
            (0, apiData_1.getEventInsightsTBA)().then(function (insights) {
                newTeam.opr = insights["totalPoints"][team.key].toFixed(2);
                // teamOPR.textContent =
                //     insights["totalPoints"][team.key].toFixed(2);
            });
            teamsArr.push(newTeam);
        });
    });
};
//DEBUGGING
var logSomethingButton = document.getElementById("logSomethingButton");
function logSomething() {
    teamsArr.forEach(function (team) {
        console.log(team.teamName);
    });
}
logSomethingButton.addEventListener("click", function () { return logSomething(); });
//when the app starts call this function
var initApp = function () {
    displayData();
};
document.addEventListener("DOMContentLoaded", initApp);
