// const countDown=document.querySelector("h2");

// let time=10;

// function countDownFunction(){
// countDown.textContent=time--;
// if (time<0) {countDown.style.display="none";}
// }
// setInterval(() => countDownFunction(), 1000);

let buttonNext=document.querySelector(".button-next");
let trueAnswer=".js";
let choice1=document.querySelector("#choice1");
let choice2=document.querySelector("#choice2");
let choice3=document.querySelector("#choice3");
let choice4=document.querySelector("#choice4");
let score=0;


buttonNext.addEventListener("click", function (event) {
    if  (choice1.checked==true && choice1.value==trueAnswer){
        score++;
    } 
    else if  (choice2.checked==true && choice2.value==trueAnswer) score++;
    else if  (choice3.checked==true && choice3.value==trueAnswer) score++;
    else if  (choice4.checked==true && choice4.value==trueAnswer) score++; 
    choice1.checked=false;

        console.log(score);

});