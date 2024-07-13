// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"constants.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Team = void 0;
// Team obj that holds information gathered from the apis
var Team = /** @class */function () {
  function Team() {
    this.teamNumber = 0;
    this.teamName = "";
    this.epa = 0;
    this.opr = 0;
  }
  return Team;
}();
exports.Team = Team;
},{}],"src/apiData.js":[function(require,module,exports) {
"use strict";

var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var __generator = this && this.__generator || function (thisArg, body) {
  var _ = {
      label: 0,
      sent: function sent() {
        if (t[0] & 1) throw t[1];
        return t[1];
      },
      trys: [],
      ops: []
    },
    f,
    y,
    t,
    g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;
  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");
    while (g && (g = 0, op[0] && (_ = 0)), _) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];
      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;
        case 4:
          _.label++;
          return {
            value: op[1],
            done: false
          };
        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;
        case 7:
          op = _.ops.pop();
          _.trys.pop();
          continue;
        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }
          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }
          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }
          if (t && _.label < t[2]) {
            _.label = t[2];
            _.ops.push(op);
            break;
          }
          if (t[2]) _.ops.pop();
          _.trys.pop();
          continue;
      }
      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }
    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getEventInsightsTBA = exports.getTeamInsightsStatbotics = exports.getTeamInfo = void 0;
//returns an array of teams with their info
//ex. for 2024hiho it returns 34 elements each with a bunch of keys and values
var getTeamInfo = function getTeamInfo() {
  return __awaiter(this, void 0, void 0, function () {
    var teamInfo;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          return [4 /*yield*/, fetch("https://www.thebluealliance.com/api/v3/event/2024hiho/teams/simple", {
            headers: {
              accept: "application/json",
              "X-TBA-Auth-Key": "5MlTtCKI1kU8v8VGcAqJTt34YjypCWu8qVeihIaD1YWdqHO5Sm8Q5ix0gkNeEwuo"
            }
          })];
        case 1:
          teamInfo = _a.sent();
          return [2 /*return*/, teamInfo.json()];
      }
    });
  });
};
exports.getTeamInfo = getTeamInfo;
//get a single team's insight data from Statbotics
var getTeamInsightsStatbotics = function getTeamInsightsStatbotics(team) {
  return __awaiter(this, void 0, void 0, function () {
    var teamInsights;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          return [4 /*yield*/, fetch("https://api.statbotics.io/v3/team_event/".concat(team, "/2024hiho"), {
            headers: {
              accept: "application/json"
            }
          })];
        case 1:
          teamInsights = _a.sent();
          //if there is trouble fetching the data throw error
          if (!teamInsights.ok) {
            throw new Error("Error fetching data: ".concat(teamInsights.statusText));
          }
          return [4 /*yield*/, teamInsights.json()];
        case 2:
          return [2 /*return*/, _a.sent()];
      }
    });
  });
};
exports.getTeamInsightsStatbotics = getTeamInsightsStatbotics;
//get 2024hiho's even insights from TBA
var getEventInsightsTBA = function getEventInsightsTBA() {
  return __awaiter(this, void 0, void 0, function () {
    var eventInsights;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          return [4 /*yield*/, fetch("https://www.thebluealliance.com/api/v3/event/2024hiho/coprs", {
            headers: {
              accept: "application/json",
              "X-TBA-Auth-Key": "5MlTtCKI1kU8v8VGcAqJTt34YjypCWu8qVeihIaD1YWdqHO5Sm8Q5ix0gkNeEwuo"
            }
          })];
        case 1:
          eventInsights = _a.sent();
          //if there is trouble fetching the data throw error
          if (!eventInsights.ok) {
            throw new Error("Error fetching data: ".concat(eventInsights.statusText));
          }
          return [4 /*yield*/, eventInsights.json()];
        case 2:
          return [2 /*return*/, _a.sent()];
      }
    });
  });
};
exports.getEventInsightsTBA = getEventInsightsTBA;
},{}],"src/team.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var constants_1 = require("../constants");
var apiData_1 = require("./apiData");
var teamsArr = [];
//data on table
var displayData = function displayData() {
  (0, apiData_1.getTeamInfo)().then(function (teamMap) {
    //once data is received put it all on the table
    var dataTable = document.getElementById(
    //access data table from loaded HTML doc
    "dataTable");
    teamMap.forEach(function (team) {
      var newTeam = new constants_1.Team(); //create new Team obj
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
      newTeam.teamNumber = team.team_number;
      newTeam.teamName = team.nickname;
      //get insights using the data received above and put the teams EPA on the table
      (0, apiData_1.getTeamInsightsStatbotics)(team.key.substring(3)).then(function (insights) {
        teamEPA.textContent = insights.epa.breakdown.total_points.mean.toString();
        newTeam.epa = insights.epa.breakdown.total_points.mean;
      });
      (0, apiData_1.getEventInsightsTBA)().then(function (insights) {
        teamOPR.textContent = insights["totalPoints"][team.key].toFixed(2);
        newTeam.opr = insights["totalPoints"][team.key];
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
var initApp = function initApp() {
  displayData();
};
document.addEventListener("DOMContentLoaded", initApp);
},{"../constants":"constants.js","./apiData":"src/apiData.js"}],"../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "60826" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/team.js"], null)
//# sourceMappingURL=/team.c1288521.js.map