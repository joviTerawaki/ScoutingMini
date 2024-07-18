"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Team = void 0;
var Team = /** @class */ (function () {
    function Team(_teamNumber, _teamName, _epa, _opr) {
        if (_teamNumber === void 0) { _teamNumber = 0; }
        if (_teamName === void 0) { _teamName = ""; }
        if (_epa === void 0) { _epa = 0; }
        if (_opr === void 0) { _opr = 0; }
        this._teamNumber = _teamNumber;
        this._teamName = _teamName;
        this._epa = _epa;
        this._opr = _opr;
        // this.teamNumber = _teamNumber;
        // this.teamName = _teamName;
        // this.epa = _epa;
        // this.opr = _opr;
    }
    Object.defineProperty(Team.prototype, "teamNumber", {
        get: function () {
            return this._teamNumber;
        },
        set: function (num) {
            this._teamNumber = num;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Team.prototype, "teamName", {
        get: function () {
            return this._teamName;
        },
        set: function (name) {
            this._teamName = name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Team.prototype, "epa", {
        get: function () {
            return this._epa;
        },
        set: function (epa) {
            this._epa = epa;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Team.prototype, "opr", {
        get: function () {
            return this._opr;
        },
        set: function (opr) {
            this._opr = opr;
        },
        enumerable: false,
        configurable: true
    });
    return Team;
}());
exports.Team = Team;
