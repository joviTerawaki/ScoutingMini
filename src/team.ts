//object of each element in the array from getTeamInfo (the teams from TBA)
interface TeamInfo {
    key: "string",
    team_number: 0,
    nickname: "string",
    name: "string",
    city: "string",
    state_prov: "string",
    country: "string"
}

//Team object with the information we're using here 
interface Team {
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

const displayData = () => {
    getTeamInfo().then(teamMap => {
        //access data table from loaded HTML doc 
        const dataTable: HTMLTableElement = document.getElementById('dataTable') as HTMLTableElement;
        
        teamMap.forEach(team => {
            const teamRow = dataTable.insertRow(); //make a new row for the team 
            const teamNum = teamRow.insertCell(); //add cells to that row for teams number and name 
            const teamName = teamRow.insertCell(); 

            //assign team number and name 
            teamNum.textContent = team.key.substring(3); 
            teamName.textContent = team.nickname; 
        }); 

    }); 
}

// const data: TeamInfo[] = getTeamInfo().then(teamMap => {
//     const teams: TeamInfo[] = []; 
//     teamMap.forEach(team => {
//         teams.push(team); 
//     });
//     return teams; 
// }); 

//DEBUGGING 
function logSomething(): void {
    console.log(); 
}

//when the app starts call this function 
const initApp = (): void => {
    displayData(); 
}

document.addEventListener("DOMContentLoaded", initApp);