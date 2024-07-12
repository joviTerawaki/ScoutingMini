// import { Constants } from "../constants"
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
//returns an array of teams with their info
//ex. for 2024hiho it returns 34 elements each with a bunch of keys and values
var getTeamInfo = function () {
    return __awaiter(this, void 0, void 0, function () {
        var teamInfo;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("https://www.thebluealliance.com/api/v3/event/2024hiho/teams/simple", {
                        headers: {
                            accept: "application/json",
                            "X-TBA-Auth-Key": "5MlTtCKI1kU8v8VGcAqJTt34YjypCWu8qVeihIaD1YWdqHO5Sm8Q5ix0gkNeEwuo",
                        },
                    })];
                case 1:
                    teamInfo = _a.sent();
                    return [2 /*return*/, teamInfo.json()];
            }
        });
    });
};
//get a single team's insight data from Statbotics 
var getTeamInsightsStatbotics = function (team) {
    return __awaiter(this, void 0, void 0, function () {
        var teamInsights;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("https://api.statbotics.io/v3/team_event/".concat(team, "/2024hiho"), {
                        headers: {
                            accept: "application/json",
                        },
                    })];
                case 1:
                    teamInsights = _a.sent();
                    //if there is trouble fetching the data throw error
                    if (!teamInsights.ok) {
                        throw new Error("Error fetching data: ".concat(teamInsights.statusText));
                    }
                    return [4 /*yield*/, teamInsights.json()];
                case 2: return [2 /*return*/, _a.sent()];
            }
        });
    });
};
var getEventInsightsTBA = function () {
    return __awaiter(this, void 0, void 0, function () {
        var eventInsights;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("https://www.thebluealliance.com/api/v3/event/2024hiho/coprs", {
                        headers: {
                            accept: "application/json",
                            "X-TBA-Auth-Key": "5MlTtCKI1kU8v8VGcAqJTt34YjypCWu8qVeihIaD1YWdqHO5Sm8Q5ix0gkNeEwuo",
                        },
                    })];
                case 1:
                    eventInsights = _a.sent();
                    return [4 /*yield*/, eventInsights.json()];
                case 2: return [2 /*return*/, _a.sent()];
            }
        });
    });
};
var displayData = function () {
    getTeamInfo().then(function (teamMap) {
        //once data is received put it all on the table
        var dataTable = document.getElementById(//access data table from loaded HTML doc
        "dataTable");
        teamMap.forEach(function (team) {
            var teamRow = dataTable.insertRow(); //make a new row for the team
            //add cells to that row for teams number and name
            var teamNum = teamRow.insertCell();
            var teamName = teamRow.insertCell();
            var teamEPA = teamRow.insertCell();
            //assign team number and name
            teamNum.textContent = team.key.substring(3);
            teamName.textContent = team.nickname;
            //get insights using the data received above and put the teams EPA on the table 
            getTeamInsightsStatbotics(team.key.substring(3)).then(function (insights) {
                teamEPA.textContent = insights.epa.breakdown.total_points.mean.toString();
            });
        });
    });
};
//DEBUGGING
function logSomething() {
    console.log("insights returned: ".concat(getTeamInsightsStatbotics("2443").then(function (insights) {
        console.log("stringified insights: ".concat(JSON.stringify(insights)));
        console.log("insights: ".concat(insights));
        console.log("epa: ".concat(insights.epa.breakdown.total_points.mean));
        console.log("typeof insights: ".concat(typeof insights));
        for (var key in insights) {
            console.log("key: ".concat(key, ", value: ").concat(insights));
        }
        return insights;
    })));
}
//when the app starts call this function
var initApp = function () {
    displayData();
};
document.addEventListener("DOMContentLoaded", initApp);
