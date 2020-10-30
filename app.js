var count1 = 0;
var runteam01 = [];
var runteam02 = [];
var score01;
var score02;
var confetti;
function play1() {
    randomNumber = Math.floor(Math.random() * 2);;
    count1 = count1 + 1;

    console.log("count1 ", count1);
    if (count1 == 11) {
        document.getElementById('btn').style.visibility = "hidden";
        document.getElementById("result").style.visibility = "visible";

        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        console.log("Team 1 " + runteam01)
        console.log("Team 2 " + runteam02)
        score01 = runteam01.reduce(reducer);
        score02 = runteam02.reduce(reducer);
        var teamname1 = document.getElementById("team1").textContent;
        var teamname2 = document.getElementById("team2").textContent;
        var confettiSettings = {
            target: "confetti-canvas",
            props: ["square", "triangle", "line", "circle"],
            clock: 100,
            max: 500,
            animate: true
        };
        confetti = new ConfettiGenerator(confettiSettings);
        confetti.render();
        document.getElementById("confetti-canvas").style.zIndex = "1";
        if (score01 < score02) {
            document.getElementById("result").innerHTML = teamname2 + " Winner"
        }
        else if (score01 == score02) {
            document.getElementById("result").innerHTML = " Match draw try again"
        }
        else {
            document.getElementById("result").innerHTML = teamname1 + " Winner"
        }
        document.getElementById('teamname1').innerHTML = teamname1 + "  :  " + score01;
        document.getElementById('teamname2').innerHTML = teamname2 + "  :   " + score02;
        document.getElementById('board').style.visibility = "visible";
    }
    else if (count1 % 2 == 0) {

        var name = document.getElementById("team2").textContent;
        runteam02.push(player2(randomNumber))
        document.querySelector('#btn').innerHTML = 'Shoot ' + name;
    }
    else {
        var name = document.getElementById("team1").textContent;
        runteam01.push(player1(randomNumber))
        document.querySelector('#btn').innerHTML = 'Shoot ' + name;
    }

}

var index01 = 0;
function player1(randomNumber) {
    var teamOneRunsElement = document.getElementById("progress01").children;
    if (randomNumber == 1) {
        teamOneRunsElement[index01++].style.backgroundColor = "#0f960a";
    }
    else {
        teamOneRunsElement[index01++].style.backgroundColor = "#f00";
    }
    return randomNumber;
}

var index02 = 0;
function player2(randomNumber) {
    var teamOneRunsElement = document.getElementById("progress02").children;
    if (randomNumber == 1) {
        teamOneRunsElement[index02++].style.backgroundColor = "#0f960a";
    }
    else {
        teamOneRunsElement[index02++].style.backgroundColor = "#f00";
    }
    return randomNumber;

}
