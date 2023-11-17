// Iteration 2: Generating two random numbers (0 to 100) and displaying the same in the game.html

let num1box = document.getElementById("number1")
let num2box = document.getElementById("number2")
let num3box = document.getElementById("number3")
let numb3;
let number1=Math.round(Math.random()*100)
let number2=Math.round(Math.random()*100)

function randomise(){
     number1=Math.round(Math.random()*100)
     number2=Math.round(Math.random()*100)
    
    let operator= Math.round(Math.random()*5)

    switch(operator){
        case 1:
            numb3=number1+number2;
            break;
        case 2:
            numb3=number1-number2;
            break;
        case 3:
            numb3=number1*number2;
            break;
        case 4:
            numb3=Math.round(number1/number2);
            break;
        case 5:
            numb3=number1%number2;
            break;
        case 0:
            randomise()
    }
    num1box.innerText=number1
    num2box.innerText=number2
    num3box.innerText=numb3
    
}
randomise()



// Iteration 3: Creating variables required to make the game functional

// Iteration 4: Creating a variable for number 3 and a variable for storing the html element with the Id "number3"

// Iteration 5: Creating a randomise function to make the game functional

// Iteration 6: Making the Operators (button) functional
let score=0
let plus= document.getElementById("plus")
plus.onclick=()=>{
    if(numb3==number1+number2){
        score++
        randomise()
        resetTime(timerId) 
    }
    else{
        location.href='./gameover.html'
    }
}
let minus= document.getElementById("minus")
minus.onclick=()=>{
    if(numb3==number1-number2){
        score++
        randomise()
        resetTime(timerId) 
    }
    else{
        location.href='./gameover.html'
    }
}
let mul=document.getElementById("mul")
mul.onclick=()=>{
    if(numb3==number1*number2){
        score++
        randomise()
        resetTime(timerId) 
    }
    else{
        location.href='./gameover.html'
    }
}
let divide= document.getElementById("divide")
divide.onclick=()=>{
    if(numb3==Math.round(number1/number2)){
        score++
        randomise()
        resetTime(timerId) 
    }
    else{
        location.href='./gameover.html'
    }
}
let modulus= document.getElementById("modulus")
modulus.onclick=()=>{
    if(numb3==Math.round(number1/number2)){
        score++
        randomise()
        resetTime(timerId) 
    }
    else{
        location.href='./gameover.html'
    }
}



// Iteration 7: Making Timer functional
var timer = document.getElementById("timer")
var time = 5
var timerId;
function showtimer() {
    time = 5
    timer.innerText = time
    timerId = setInterval(() => {
        time--
        if (time == 0) window.location.href = './gameover.html'
        timer.innerText = time

    }, 1000)
    localStorage.setItem("scoreCard",score)
}
function resetTime(timerId) {
    clearInterval(timerId)
    showtimer()
}
showtimer()
