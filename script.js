var timer = 60;
var score = 0;
var hitrn;

function getNewHit() {
    hitrn = Math.floor(Math.random()*10)
    document.querySelector("#hitval").textContent = hitrn;
}  

function increaseScore() {
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

function makeBubble() {
    var clutter = "";
    for (var i=1; i<=85; i++) {
        let shfldNum = Math.floor(Math.random()*10);
        clutter  += `<div class="bubble" >${shfldNum}</div>`
    }

    document.querySelector("#pbtm").innerHTML = clutter;
}


function runTimer() {
    setInterval(function(){
        if(timer>0) {
        timer--;
        document.querySelector("#timerInt").textContent = timer;}
        else {
            clearInterval(timerInt)
            document.querySelector("#pbtm").innerHTML = `<h1>Game over!</h1>`
        }
    }, 1000)


}

document.querySelector("#pbtm")
.addEventListener("click", function(details) {
    var clickedNum = Number(details.target.textContent)
    if(clickedNum === hitrn) {
        increaseScore();
        makeBubble();
        getNewHit();
    }
})


runTimer();
makeBubble();
getNewHit();