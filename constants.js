"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Team = void 0;
// Team obj that holds information gathered from the apis
var Team = /** @class */ (function () {
    function Team(teamNumber, teamName, epa, opr) {
        this.teamNumber = teamNumber;
        this.teamName = teamName;
        this.epa = epa;
        this.opr = opr;
    }
    return Team;
}());
exports.Team = Team;
