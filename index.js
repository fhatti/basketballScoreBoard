let scoreHome = document.getElementById("score-number-home");
let scoreAway = document.getElementById("score-number-away");
let countHome = 0, countAway= 0;
function add1PointHome()
{
    countHome += 1;
    scoreHome.textContent = countHome;
}
function add2PointsHome()
{
    countHome+= 2;
    scoreHome.textContent = countHome;
}

function add3PointsHome()
{
    countHome+= 3;
    scoreHome.textContent = countHome;
}

function add1PointAway ()
{
    countAway += 1;
    scoreAway.textContent = countAway;
}

function add2PointsAway()
{
    countAway += 2;
    scoreAway.textContent = countAway;
}

function add3PointsAway()
{
    countAway += 3;
    scoreAway.textContent = countAway;
}

resetButton = document.getElementById("reset-btn");
function resetScore()
{
    countHome = 0;
    countAway = 0;
    scoreHome.textContent = countHome;
    scoreAway.textContent = countAway;
}