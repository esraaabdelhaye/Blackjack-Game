const SumP = document.querySelector(".sum")
const drawBtn = document.querySelector('.draw-card');
const Cards = document.querySelector('.cards');
const Message = document.querySelector('.message');
const replay = document.querySelector('.replay')

let numArray = [];
let Sum = 0 ;
drawBtn.addEventListener('click' , initiateRandomNumber);
replay.addEventListener('click' , replayFunction)
function initiateRandomNumber(){
    const Number = Math.floor(Math.random()*10+1);
    numArray.push(Number);
    Cards.textContent+=`${Number} `;
    numArray.forEach(num =>{
        Sum+=num;
    })
    if(Sum>21) {
        Message.textContent = "YOU LOST YOUR MONEY";
        drawBtn.classList.add('disable')
    }
    else if(Sum === 21){
        Message.textContent = "YOU WON THE GAME";
        drawBtn.classList.add("disable");
    }
    else     
        Message.textContent = "DRAW ANOTHER CARD";
    SumP.textContent = `SUM : ${Sum}`
}

function replayFunction(){
    drawBtn.classList.remove('disable');
    Sum=0;
    numArray=[];
    Message.textContent = 'Draw A Card And See Your Luck';
    Cards.textContent = 'Your Cards : '
    SumP.textContent = 'SUM : '
}







