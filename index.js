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
starting = false;
    secondpage.classList.remove("hidden");
    firstpage.classList.add("hidden");
const COINFLIP = Math.trunc(Math.random()*2);
headsimg.src = COINFLIP === 0 ? "heads.png" : "tails.png";
randomChoosing = COINFLIP;
headsimg.classList.add("hidden");



})


btnHeads.addEventListener("click", function(){
if(starting) return;
starting = true;    
userChoosing = 0;
headsimg.src = randomChoosing === 0 ? "heads.png" : "tails.png";
headsimg.classList.remove("hidden");
if(userChoosing === randomChoosing){
alert("u won");

}
else{
    alert("u lost");
}


})

btnTails.addEventListener("click", function(){
if(starting) return;
starting = true;
userChoosing = 1;
headsimg.src = randomChoosing === 0 ? "heads.png" : "tails.png";
headsimg.classList.remove("hidden");
if(userChoosing === randomChoosing){
alert("u won")

}
else{
    alert("u lost ")
}

})