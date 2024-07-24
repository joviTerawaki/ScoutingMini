"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = require("../constants");
var apiData_1 = require("./apiData");
/* * * VARS * * */
//TABLE
var teamsArr = [];
var dataTable = document.getElementById(
//access data table from loaded HTML doc
"dataTable");
/* * * FUNCTIONS * * */
// get data from apis and store them in an array of Team objects
var getData = function () {
    (0, apiData_1.getTeamInfo)().then(function (teamMap) {
        teamMap.forEach(function (team) {
            var newTeam = new constants_1.Team();
            newTeam.teamNumber = team.team_number;
            newTeam.teamName = team.nickname;
            //get insights using the data received above and put the teams EPA on the table
            (0, apiData_1.getTeamInsightsStatbotics)(team.key.substring(3)).then(function (insights) {
                newTeam.epa = insights.epa.breakdown.total_points.mean;
            });
            (0, apiData_1.getEventInsightsTBA)().then(function (insights) {
                newTeam.opr = insights["totalPoints"][team.key].toFixed(2);
            });
            teamsArr.push(newTeam);
        });
        generateTable();
    });
};
//create rows of team data based on order of array
function generateTable() {
    teamsArr.forEach(function (team) {
        var teamRow = dataTable.insertRow();
        teamRow.id = "row - ".concat(team.teamNumber.toString());
        teamRow.className = "";
        var teamNum = teamRow.insertCell();
        teamNum.id = "num - ".concat(team.teamNumber.toString());
        var teamName = teamRow.insertCell();
        teamName.id = "name - ".concat(team.teamNumber.toString());
        var teamEPA = teamRow.insertCell(); //statbotics
        teamEPA.id = "epa - ".concat(team.teamNumber.toString());
        var teamOPR = teamRow.insertCell(); //TBA
        teamOPR.id = "opr - ".concat(team.teamNumber.toString());
        teamNum.textContent = team.teamNumber.toString();
        teamName.textContent = team.teamName;
        teamEPA.textContent = team.epa.toString();
        teamOPR.textContent = team.opr.toString();
    });
}
//update the table data using the team number
var updateTable = function () {
    teamsArr.forEach(function (team) {
        var teamRow = document.getElementById("row - ".concat(team.teamNumber.toString()));
        var teamNum = document.getElementById("num - ".concat(team.teamNumber.toString()));
        var teamName = document.getElementById("name - ".concat(team.teamNumber.toString()));
        var teamEPA = document.getElementById("epa - ".concat(team.teamNumber.toString()));
        var teamOPR = document.getElementById("opr - ".concat(team.teamNumber.toString()));
        teamNum.textContent = team.teamNumber.toString();
        teamName.textContent = team.teamName;
        teamEPA.textContent = team.epa.toString();
        teamOPR.textContent = team.opr.toString();
    });
};
//DEBUGGING
var logSomethingButton = document.getElementById("logSomethingButton");
function logSomething() {
    updateTable();
}
logSomethingButton.addEventListener("click", function () { return logSomething(); });
//when the app starts call this function
var initApp = function () {
    getData();
};
var intervalId = setInterval(updateTable, 500);
document.addEventListener("DOMContentLoaded", initApp);
