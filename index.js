const secondpage = document.querySelector(".secondpage");
const firstpage = document.getElementById("firstpage");
const btnSTART = document.getElementById("btnStart");
const btnHeads = document.getElementById("btnHeads");
const btnTails = document.getElementById("btnTails");
const secondpageH1 = document.getElementById("secondpageH1");
const coinImg = document.getElementById("coin");
const RELOAD = document.querySelector("#btnReload");

coinImg.classList.add("hidden");
secondpage.classList.add("hidden");
RELOAD.classList.add("hidden");

let gameStarted = false;
let userChoice;
let coinResult;

btnSTART.addEventListener("click", function () {
  gameStarted = true;
  secondpage.classList.remove("hidden");
  firstpage.classList.add("hidden");

  coinResult = Math.trunc(Math.random() * 2); // 0 = heads, 1 = tails
  coinImg.src = coinResult === 0 ? "heads.png" : "tails.png";
  coinImg.classList.add("hidden");
});

btnHeads.addEventListener("click", function () {
  if (!gameStarted) return;
  userChoice = 0;

  coinImg.classList.remove("hidden");

  alert(userChoice === coinResult ? "u won" : "u lost");

  gameStarted = false;

  


});


  RELOAD.classList.remove("hidden");

  RELOAD.addEventListener("click", function(){
    firstpage.classList.remove("hidden");
    secondpage.classList.add("hidden");
    coinImg.classList.add("hidden");



  })

btnTails.addEventListener("click", function () {
  if (!gameStarted) return;
  userChoice = 1;

  coinImg.classList.remove("hidden");

  alert(userChoice === coinResult ? "u won" : "u lost");

  gameStarted = false;
});
