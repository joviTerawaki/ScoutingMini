"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
            var teamRow = dataTable.insertRow(); //make a new row for the team
            //add cells to that row for teams number and name
            var teamNum = teamRow.insertCell();
            var teamName = teamRow.insertCell();
            var teamEPA = teamRow.insertCell(); //Statbotics
            var teamOPR = teamRow.insertCell(); //TBA
            //assign team number and name
            teamNum.textContent = team.key.substring(3);
            teamName.textContent = team.nickname;
            //adding team number and name to array of teams
            //get insights using the data received above and put the teams EPA on the table
            (0, apiData_1.getTeamInsightsStatbotics)(team.key.substring(3)).then(function (insights) {
                teamEPA.textContent =
                    insights.epa.breakdown.total_points.mean.toString();
            });
            (0, apiData_1.getEventInsightsTBA)().then(function (insights) {
                teamOPR.textContent =
                    insights["totalPoints"][team.key].toFixed(2);
            });
        });
    });
};
//DEBUGGING
function logSomething() {
    console.log("insights: ".concat((0, apiData_1.getEventInsightsTBA)().then(function (insights) {
        console.log("TBA insights: ".concat(JSON.stringify(insights)));
        console.log("something: ".concat(insights["Amplification Rate"]["frc2443"]));
        for (var key in insights) {
            console.log("key: ".concat(key));
        }
    })));
}
//when the app starts call this function
var initApp = function () {
    displayData();
};
document.addEventListener("DOMContentLoaded", initApp);
