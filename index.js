const secondpage = document.querySelector(".secondpage");
const firstpage = document.getElementById("firstpage");
const btnSTART = document.getElementById("btnStart");
const btnHeads = document.getElementById("btnHeads");
const btnTails = document.getElementById("btnTails");
const secondpageH1 = document.getElementById("secondpageH1");
const headsimg = document.getElementById("heads");
headsimg.classList.add("hidden");

let starting = false;
let userChoosing;
let randomChoosing;

secondpage.classList.add("hidden");


btnSTART.addEventListener("click", function(){

    secondpage.classList.remove("hidden");
    firstpage.classList.add("hidden");
const COINFLIP = Math.trunc(Math.random()*2);
headsimg.src = `${COINFLIP}.png`
randomChoosing = headsimg;


})


btnHeads.addEventListener("click", function(){


})