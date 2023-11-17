// Iteration 8: Making scoreboard functional
let scoree = localStorage.getItem("scoreCard")
let show = document.getElementById("score-board");
// console.log(show)
show.innerText= scoree;
// console.log(scoree)

let buttonn = document.getElementById("play-again-button")
buttonn.addEventListener("click",function(){
    window.location.href ='./game.html'
})