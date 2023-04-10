
let seconds = 00;
let tens = 00;

let getSeconds = document.querySelector(".seconds");
let getTens = document.querySelector(".tens");
let startButton = document.querySelector(".start");
let stopButton = document.querySelector(".stop");
let resetButton = document.querySelector(".reset");
let interval; 

startButton.addEventListener('click', ()=>{
  interval = setInterval(startTimer,10)

});

stopButton.addEventListener('click', ()=>{
  clearInterval(interval)

});

resetButton.addEventListener('click',()=>{
  clearInterval(interval)
  tens = "00";
  seconds = "00"
  getSeconds.innerHTML = seconds;
  getTens.innerHTML = tens; 

})

function startTimer(){
  tens++;
  if(tens <= 9){
    getTens.innerHTML = '0' + tens;
  }

  if(tens > 9){
    getTens.innerHTML = tens;
  }

  if(tens>99){
    seconds++;

    getSeconds.innerHTML = '0' + seconds;
    tens = 0;
    getTens.innerHTML = '0' + 0;
  }
  if(seconds > 9){
    getSeconds.innerHTML = seconds;
  }
}


