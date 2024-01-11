let timer = 60;
let score = 0;
let hitrn = 0;
function makeBubble(){
    let clutter = "";
    for(let i=1;i<=70;i++){
    let rn = Math.floor(Math.random()*10)+1
    clutter += `<div class="bubble">${rn}</div>`;
}

document.querySelector("#pbtm").innerHTML = clutter;

}

function runTimer() {
    let timerInt = setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector("#timerval").textContent = timer;
        }
        else {
            clearInterval(timerInt)
            document.querySelector("#pbtm").innerHTML = `<h1>Game Over</h1>`;
        }
    
    },1000)
}


function getNewHit() {
    hitrn = Math.floor(Math.random() * 10);
    document.querySelector("#hitval").textContent = hitrn;
}

function increaseScore() {
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

document.querySelector("#pbtm")
.addEventListener("click",function(details){
    let clicknum = Number(details.target.textContent);
    if (clicknum === hitrn) {
        increaseScore();
        makeBubble();
        getNewHit();
    }
})

runTimer();
makeBubble();
getNewHit();

