//object of each element in the array from getTeamInfo (the teams from TBA)
export interface TeamInfo {
    key: "string";
    team_number: 0;
    nickname: "string";
    name: "string";
    city: "string";
    state_prov: "string";
    country: "string";
}

//copied and pasted from the example on Statbotics
export interface TeamInsightsStatbotics {
    team: string;
    year: number;
    event: string;
    time: number;
    offseason: boolean;
    team_name: string;
    event_name: string;
    country: string;
    state: string;
    district: null | string;
    type: string;
    week: number;
    status: string;
    first_event: boolean;
    epa: {
        total_points: {
            mean: number;
            sd: number;
        };
        unitless: number;
        norm: number;
        conf: [number, number];
        breakdown: {
            total_points: {
                mean: number;
                sd: number;
            };
            auto_points: {
                mean: number;
                sd: number;
            };
            teleop_points: {
                mean: number;
                sd: number;
            };
            endgame_points: {
                mean: number;
                sd: number;
            };
            melody_rp: {
                mean: number;
                sd: number;
            };
            harmony_rp: {
                mean: number;
                sd: number;
            };
            tiebreaker_points: {
                mean: number;
                sd: number;
            };
            auto_leave_points: {
                mean: number;
                sd: number;
            };
            auto_notes: {
                mean: number;
                sd: number;
            };
            auto_note_points: {
                mean: number;
                sd: number;
            };
            teleop_notes: {
                mean: number;
                sd: number;
            };
            teleop_note_points: {
                mean: number;
                sd: number;
            };
            amp_notes: {
                mean: number;
                sd: number;
            };
            amp_points: {
                mean: number;
                sd: number;
            };
            speaker_notes: {
                mean: number;
                sd: number;
            };
            speaker_points: {
                mean: number;
                sd: number;
            };
            amplified_notes: {
                mean: number;
                sd: number;
            };
            total_notes: {
                mean: number;
                sd: number;
            };
            total_note_points: {
                mean: number;
                sd: number;
            };
            endgame_park_points: {
                mean: number;
                sd: number;
            };
            endgame_on_stage_points: {
                mean: number;
                sd: number;
            };
            endgame_harmony_points: {
                mean: number;
                sd: number;
            };
            endgame_trap_points: {
                mean: number;
                sd: number;
            };
            endgame_spotlight_points: {
                mean: number;
                sd: number;
            };
            rp_1: {
                mean: number;
                sd: number;
            };
            rp_2: {
                mean: number;
                sd: number;
            };
        };
        stats: {
            start: number;
            pre_elim: number;
            mean: number;
            max: number;
        };
    };
    record: {
        qual: {
            wins: number;
            losses: number;
            ties: number;
            count: number;
            winrate: number;
            rps: number;
            rps_per_match: number;
            rank: number;
            num_teams: number;
        };
        elim: {
            wins: number;
            losses: number;
            ties: number;
            count: number;
            winrate: number;
            alliance: string;
            is_captain: boolean;
        };
        total: {
            wins: number;
            losses: number;
            ties: number;
            count: number;
            winrate: number;
        };
    };
    district_points: null;
}

//to use: insights["DesiredData"]["TeamKey"]
export interface EventInsightsTBA {
    "Amplification Rate": {
        [teamId: string]: number;
    };
    "Total Auto Game Pieces": {
        [teamId: string]: number;
    };
    "Total Mic": {
        [teamId: string]: number;
    };
    "Total Overall Game Pieces": {
        [teamId: string]: number;
    };
    "Total Teleop Game Pieces": {
        [teamId: string]: number;
    };
    "Total Trap": {
        [teamId: string]: number;
    };
    adjustPoints: {
        [teamId: string]: number;
    };
    autoAmpNoteCount: {
        [teamId: string]: number;
    };
    autoAmpNotePoints: {
        [teamId: string]: number;
    };
    autoLeavePoints: {
        [teamId: string]: number;
    };
    autoPoints: {
        [teamId: string]: number;
    };
    autoSpeakerNoteCount: {
        [teamId: string]: number;
    };
    autoSpeakerNotePoints: {
        [teamId: string]: number;
    };
    autoTotalNotePoints: {
        [teamId: string]: number;
    };
    coopNotePlayed: {
        [teamId: string]: number;
    };
    coopertitionBonusAchieved: {
        [teamId: string]: number;
    };
    coopertitionCriteriaMet: {
        [teamId: string]: number;
    };
    endGameHarmonyPoints: {
        [teamId: string]: number;
    };
    endGameNoteInTrapPoints: {
        [teamId: string]: number;
    };
    endGameOnStagePoints: {
        [teamId: string]: number;
    };
    endGameParkPoints: {
        [teamId: string]: number;
    };
    endGameSpotLightBonusPoints: {
        [teamId: string]: number;
    };
    endGameTotalStagePoints: {
        [teamId: string]: number;
    };
    ensembleBonusAchieved: {
        [teamId: string]: number;
    };
    ensembleBonusOnStageRobotsThreshold: {
        [teamId: string]: number;
    };
    ensembleBonusStagePointsThreshold: {
        [teamId: string]: number;
    };
    foulCount: {
        [teamId: string]: number;
    };
    foulPoints: {
        [teamId: string]: number;
    };
    g206Penalty: {
        [teamId: string]: number;
    };
    g408Penalty: {
        [teamId: string]: number;
    };
    g424Penalty: {
        [teamId: string]: number;
    };
    melodyBonusAchieved: {
        [teamId: string]: number;
    };
    melodyBonusThreshold: {
        [teamId: string]: number;
    };
    melodyBonusThresholdCoop: {
        [teamId: string]: number;
    };
    melodyBonusThresholdNonCoop: {
        [teamId: string]: number;
    };
    micCenterStage: {
        [teamId: string]: number;
    };
    micStageLeft: {
        [teamId: string]: number;
    };
    micStageRight: {
        [teamId: string]: number;
    };
    rp: {
        [teamId: string]: number;
    };
    techFoulCount: {
        [teamId: string]: number;
    };
    teleopAmpNoteCount: {
        [teamId: string]: number;
    };
    teleopAmpNotePoints: {
        [teamId: string]: number;
    };
    teleopPoints: {
        [teamId: string]: number;
    };
    teleopSpeakerNoteAmplifiedCount: {
        [teamId: string]: number;
    };
    teleopSpeakerNoteAmplifiedPoints: {
        [teamId: string]: number;
    };
    teleopSpeakerNoteCount: {
        [teamId: string]: number;
    };
    teleopSpeakerNotePoints: {
        [teamId: string]: number;
    };
    teleopTotalNotePoints: {
        [teamId: string]: number;
    };
    totalPoints: {
        [teamId: string]: number;
    };
    trapCenterStage: {
        [teamId: string]: number;
    };
    trapStageLeft: {
        [teamId: string]: number;
    };
    trapStageRight: {
        [teamId: string]: number;
    };
}

// Team obj that holds information gathered from the apis
export class Team {
    teamNumber: number;
    teamName: string;
    epa: number;
    opr: number;

    constructor(
        teamNumber: number,
        teamName: string,
        epa: number,
        opr: number
    ) {
        this.teamNumber = teamNumber;
        this.teamName = teamName;
        this.epa = epa;
        this.opr = opr;
    }
}
