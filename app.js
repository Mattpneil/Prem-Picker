const teams = [
  {
    name: "Arsenal",
    nickname: "The Gunners",
    stadium: "Emirates Stadium",
    founded: 1886,
    rival: "Tottenham Hotspur",
    titles: 13,
    color: "#EF0107",
    secondary: "#FFFFFF"
  },
  {
    name: "Aston Villa",
    nickname: "The Villans",
    stadium: "Villa Park",
    founded: 1874,
    rival: "Birmingham City",
    titles: 7,
    color: "#670E36",
    secondary: "#95BFE5"
  },
  {
    name: "Bournemouth",
    nickname: "The Cherries",
    stadium: "Vitality Stadium",
    founded: 1899,
    rival: "Southampton",
    titles: 0,
    color: "#DA291C",
    secondary: "#000000"
  },
  {
    name: "Brentford",
    nickname: "The Bees",
    stadium: "Gtech Community Stadium",
    founded: 1889,
    rival: "Fulham",
    titles: 0,
    color: "#E30613",
    secondary: "#FFFFFF"
  },
  {
    name: "Brighton & Hove Albion",
    nickname: "The Seagulls",
    stadium: "American Express Stadium",
    founded: 1901,
    rival: "Crystal Palace",
    titles: 0,
    color: "#0057B8",
    secondary: "#FFFFFF"
  },
  {
    name: "Chelsea",
    nickname: "The Blues",
    stadium: "Stamford Bridge",
    founded: 1905,
    rival: "Fulham",
    titles: 6,
    color: "#034694",
    secondary: "#FFFFFF"
  },
  {
    name: "Coventry City",
    nickname: "The Sky Blues",
    stadium: "Coventry Building Society Arena",
    founded: 1883,
    rival: "Leicester City",
    titles: 0,
    color: "#6CABDD",
    secondary: "#003B7A"
  },
  {
    name: "Crystal Palace",
    nickname: "The Eagles",
    stadium: "Selhurst Park",
    founded: 1905,
    rival: "Brighton & Hove Albion",
    titles: 0,
    color: "#1B458F",
    secondary: "#C4122E"
  },
  {
    name: "Everton",
    nickname: "The Toffees",
    stadium: "Hill Dickinson Stadium",
    founded: 1878,
    rival: "Liverpool",
    titles: 9,
    color: "#003399",
    secondary: "#FFFFFF"
  },
  {
    name: "Fulham",
    nickname: "The Cottagers",
    stadium: "Craven Cottage",
    founded: 1879,
    rival: "Chelsea",
    titles: 0,
    color: "#000000",
    secondary: "#FFFFFF"
  },
  {
    name: "Hull City",
    nickname: "The Tigers",
    stadium: "MKM Stadium",
    founded: 1904,
    rival: "Leeds United",
    titles: 0,
    color: "#F5A623",
    secondary: "#000000"
  },
  {
    name: "Ipswich Town",
    nickname: "The Tractor Boys",
    stadium: "Portman Road",
    founded: 1878,
    rival: "Norwich City",
    titles: 1,
    color: "#0044A9",
    secondary: "#FFFFFF"
  },
  {
    name: "Leeds United",
    nickname: "The Whites",
    stadium: "Elland Road",
    founded: 1919,
    rival: "Manchester United",
    titles: 3,
    color: "#FFCD00",
    secondary: "#1D428A"
  },
  {
    name: "Liverpool",
    nickname: "The Reds",
    stadium: "Anfield",
    founded: 1892,
    rival: "Manchester United",
    titles: 20,
    color: "#C8102E",
    secondary: "#F6EB61"
  },
  {
    name: "Manchester City",
    nickname: "The Citizens",
    stadium: "Etihad Stadium",
    founded: 1880,
    rival: "Manchester United",
    titles: 10,
    color: "#6CABDD",
    secondary: "#FFFFFF"
  },
  {
    name: "Manchester United",
    nickname: "The Red Devils",
    stadium: "Old Trafford",
    founded: 1878,
    rival: "Liverpool",
    titles: 20,
    color: "#DA291C",
    secondary: "#FBE122"
  },
  {
    name: "Newcastle United",
    nickname: "The Magpies",
    stadium: "St. James' Park",
    founded: 1892,
    rival: "Sunderland",
    titles: 4,
    color: "#241F20",
    secondary: "#FFFFFF"
  },
  {
    name: "Nottingham Forest",
    nickname: "The Reds",
    stadium: "City Ground",
    founded: 1865,
    rival: "Derby County",
    titles: 1,
    color: "#DD0000",
    secondary: "#FFFFFF"
  },
  {
    name: "Sunderland",
    nickname: "The Black Cats",
    stadium: "Stadium of Light",
    founded: 1879,
    rival: "Newcastle United",
    titles: 6,
    color: "#EB172B",
    secondary: "#FFFFFF"
  },
  {
    name: "Tottenham Hotspur",
    nickname: "Spurs",
    stadium: "Tottenham Hotspur Stadium",
    founded: 1882,
    rival: "Arsenal",
    titles: 2,
    color: "#132257",
    secondary: "#FFFFFF"
  }
];


let remaining = [...teams];
let eliminated = [];


const teamContainer =
document.getElementById("teams");

const counter =
document.getElementById("counter");

const eliminatedList =
document.getElementById("eliminated");

const message =
document.getElementById("message");


function renderTeams(){

teamContainer.innerHTML="";


remaining.forEach(team=>{

let card=document.createElement("div");

card.className="team";

card.innerHTML=team.name;

card.style.background=team.color;


teamContainer.appendChild(card);

});


counter.innerHTML=
`Teams Remaining: ${remaining.length}`;

}



function eliminateTeam(){


if(remaining.length<=1)
return;


let cards=document.querySelectorAll(".team");

let randomIndex=
Math.floor(Math.random()*remaining.length);


let chosen=remaining[randomIndex];


let flashes=0;


let animation=setInterval(()=>{

cards.forEach(c=>c.classList.remove("selected"));

cards[Math.floor(Math.random()*cards.length)]
.classList.add("selected");


flashes++;


if(flashes>12){

clearInterval(animation);


remaining.splice(randomIndex,1);

eliminated.push(chosen);


renderTeams();


eliminatedList.innerHTML +=
`<li>${chosen.name}</li>`;


message.innerHTML=
`❌ ${chosen.name} eliminated!`;


checkWinner();

}


},100);


}



function checkWinner(){

if(remaining.length===1){

message.innerHTML=
`
<div class="winner">
🏆<br>
YOUR CLUB IS<br>
${remaining[0].name}
</div>
`;

document.getElementById("eliminateBtn")
.style.display="none";


document.getElementById("resetBtn")
.classList.remove("hidden");

}

}



function reset(){

remaining=[...teams];
eliminated=[];

eliminatedList.innerHTML="";
message.innerHTML="";

document.getElementById("eliminateBtn")
.style.display="inline-block";


document.getElementById("resetBtn")
.classList.add("hidden");


renderTeams();

}



document
.getElementById("eliminateBtn")
.onclick=eliminateTeam;


document
.getElementById("resetBtn")
.onclick=reset;


renderTeams();
