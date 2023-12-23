function makebubble() {
  var bubble = "";

  for (var i = 0; i <= 173; i++) {
    bubble += `<div class="bubble">${Math.floor(Math.random() * 10)}</div>`;
  }

  var a = document.querySelector(".panel-btn");
  a.innerHTML = bubble;
}

var timer = 60;
function StartTimer() {
  var timerInt = setInterval(function () {
    if (timer > 0) {
      timer--;
    } else {
      clearInterval(timerInt);
      document.querySelector(".panel-btn").innerHTML = `<h1>Game Over </h1>`;
    }
    var time = (document.querySelector(".timer").innerHTML = timer);
  }, 1000);
}
var hitnum;
function HitGenerator() {
  hitnum = Math.floor(Math.random() * 10);
  document.querySelector(".hitval").innerHTML = `${hitnum}`;
}

var score = 0;

function increaseScore() {
  score += 10;
  document.querySelector(".scoreboard").innerHTML = score;
}

document.querySelector(".panel-btn").addEventListener("click", function (key) {
  var hitrecorded = Number(key.target.textContent);
  console.log(hitrecorded, hitnum);
  if (hitrecorded === hitnum) {
    makebubble();
    HitGenerator();
    increaseScore();
  }
});

StartTimer();
makebubble();
HitGenerator();
