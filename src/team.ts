//object of each element in the array from getTeamInfo (the teams from TBA)
export interface TeamInfo {
    key: "string",
    team_number: 0,
    nickname: "string",
    name: "string",
    city: "string",
    state_prov: "string",
    country: "string"
}

//Team object with the information we're using here 
export interface Team {
    teamNumber: string; 
    teamName: string; 
}

//returns an array of teams with their info 
//ex. for 2024hiho it returns 34 elements each with a bunch of keys and values 
const getTeamInfo = async function (): Promise<TeamInfo[]> {
    const teamInfo = await fetch('https://www.thebluealliance.com/api/v3/event/2024hiho/teams/simple', {
        headers: {
            'accept': 'application/json',
            'X-TBA-Auth-Key': '5MlTtCKI1kU8v8VGcAqJTt34YjypCWu8qVeihIaD1YWdqHO5Sm8Q5ix0gkNeEwuo'
        }
    });

    return teamInfo.json(); 
}

const initApp = (): void => {
    const dataTable: HTMLTableElement = document.getElementById('dataTable') as HTMLTableElement; 
    

}

document.addEventListener("DOMContentLoaded", initApp);