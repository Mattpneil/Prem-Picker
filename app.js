const teams = [

{name:"Arsenal", color:"#EF0107"},
{name:"Aston Villa", color:"#670E36"},
{name:"Bournemouth", color:"#DA291C"},
{name:"Brentford", color:"#E30613"},
{name:"Brighton", color:"#0057B8"},
{name:"Chelsea", color:"#034694"},
{name:"Crystal Palace", color:"#1B458F"},
{name:"Everton", color:"#003399"},
{name:"Fulham", color:"#000000"},
{name:"Leeds United", color:"#FFCD00"},
{name:"Liverpool", color:"#C8102E"},
{name:"Manchester City", color:"#6CABDD"},
{name:"Manchester United", color:"#DA291C"},
{name:"Newcastle United", color:"#241F20"},
{name:"Nottingham Forest", color:"#DD0000"},
{name:"Sunderland", color:"#EB172B"},
{name:"Tottenham", color:"#132257"},
{name:"Coventry City", color:"#6CABDD"},
{name:"Ipswich Town", color:"#0044A9"},
{name:"Hull City", color:"#F5A623"}

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
