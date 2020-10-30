var count = 0;
var runteam1 = [];
var runteam2 = [];
var score1;
var score2;
function level1() {
    randomNumber = Math.floor(Math.random() * 2);;
    count = count + 1;

    console.log("count ", count);
    if (count == 11) {
        // document.getElementsByClassName('btn').style.visibility = "hidden";
        document.getElementsByClassName("btn")[0].style.visibility="hidden"

        document.getElementById("result2").style.visibility = "visible";
        document.getElementsByClassName("gamemain")[0].style.visibility="visible"

        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        console.log("Team 1 " + runteam1)
        console.log("Team 2 " + runteam2)
        score1 = runteam1.reduce(reducer);
        score2 = runteam2.reduce(reducer);
        var teamname1 = document.getElementById("team21").textContent;
        var teamname2 = document.getElementById("team22").textContent;
        if (score1 < score2) {
            document.getElementById("result2").innerHTML = teamname2 + " Winner"
            document.getElementById("teamimg").src = "./image/"+teamname2+".png"  
            document.getElementById("team1").innerHTML=teamname2 ; 
        }
        else if (score1 == score2) {
            document.getElementById("result2").innerHTML = " Match draw try again"
        }
        else {
            document.getElementById("result2").innerHTML = teamname1 + " Winner"
            document.getElementById("teamimg").src = "./image/"+teamname1+".png"  
            document.getElementById("team1").innerHTML=teamname1 ; 
        }
        document.getElementById('board').style.visibility = "visible";
        document.getElementsByClassName("btn2")[0].style.visibility="visible"

    }
    else if (count % 2 == 0) {

        runteam2.push(player02(randomNumber))
    }
    else {
        runteam1.push(player01(randomNumber))
    }

}

var index1 = 0;
function player01(randomNumber) {
    var teamOneRunsElement = document.getElementById("progress21").children;
    if (randomNumber == 1) {
        teamOneRunsElement[index1++].style.backgroundColor = "#0f960a";
    }
    else {
        teamOneRunsElement[index1++].style.backgroundColor = "#f00";
    }
    return randomNumber;
}

var index2 = 0;
function player02(randomNumber) {
    var teamOneRunsElement = document.getElementById("progress22").children;
    if (randomNumber == 1) {
        teamOneRunsElement[index2++].style.backgroundColor = "#0f960a";
    }
    else {
        teamOneRunsElement[index2++].style.backgroundColor = "#f00";
    }
    return randomNumber;

}
