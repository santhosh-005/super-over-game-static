const strike = document.getElementById("strike");
const team1_superover= document.getElementById("team1-superover")
const team2_superover= document.getElementById("team2-superover")
const score_team1=document.getElementById("score-team1")
const score_team2=document.getElementById("score-team2")
const wicket_team1=document.getElementById("wickets-team1")
const wicket_team2=document.getElementById("wickets-team2")
const strikeSound=new Audio("http://bit.ly/so-ball-hit")
const endSound=new Audio("http://bit.ly/so-crowd-cheer")
const resetButton = document.getElementById("reset")

strike.addEventListener("click",updateScore);
let arr=[0,1,2,3,4,5,6,"W"]

let team1balls=0
let team1wickets=0
let team2balls=0
let team2wickets=0
let team1Score=0
let team2Score=0
let type=1


function endGame(){
    
    if(team1Score>team2Score){
        alert("TEAM 1 WON")
    }
    else if(team1Score<team2Score){
        alert("TEAM 2 WON")
    }
    else{
        alert("MATCH DIE")
    }
    endSound.play()
}

function displayScore(){
score_team1.innerText=team1Score;
score_team2.innerText=team2Score;
wicket_team1.innerText=team1wickets;  
wicket_team2.innerText=team2wickets;
}


function updateScore(){
    strikeSound.pause()
    strikeSound.currentTime=0
    strikeSound.play()
    let currentscore = arr[Math.floor(Math.random()*8)]

    if(type==2){
        team2balls++
        team2_superover.children[team2balls-1].innerText=currentscore;

    if(currentscore=="W"){
        team2wickets++
    }else{
        team2Score+= currentscore
    }
    if(team2balls==6 || team2wickets==2){
        type=3
        endGame();
        displayScore()
    }
}
    

    if(type==1){
        team1balls++
        team1_superover.children[team1balls-1].innerText=currentscore;

    if(currentscore=="W"){
        team1wickets++
    }else{
        team1Score+= currentscore
    }
    if(team1balls==6 || team1wickets==2){
        type=2
    }
}
// console.log(team2balls);
    displayScore()
}
resetButton.onclick=()=>{
    window.location.reload();
}

