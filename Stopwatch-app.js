let isAutoPlaying = false;
let interValId;

let countMinutes = 0;
let countSeconds = 0;

const startButton = document.querySelector('.js-start-button');

const resetresetButton = document.querySelector('.js-reset-button');

document.querySelector('.js-start-button')
  .addEventListener('click', clickStart); //Start button

document.querySelector('.js-reset-button') //reset button
  .addEventListener('click', resetButton);

function resetButton () { //PAUSE BUTTON
  if (isAutoPlaying === false) {
  clearInterval(interValId);
  isAutoPlaying =  true;
  document.querySelector('.js-reset-button')
    .innerHTML = 'Reset';
    startButton.disabled = false;
  }
  else if (isAutoPlaying === true) { //After Reset
    countSeconds = 0; 
    updateTimer();
    isAutoPlaying = false;
    startButton.innerHTML = 'Start';
    startButton.classList.add('reset-green');
    resetresetButton.classList.add('reset-gray');
  }
  console.log(isAutoPlaying)
}



function clickStart (){
  startButton.classList.add('resume');

  resetresetButton.classList.add('reset-red');

  resetresetButton.innerHTML = 'Pause';

  startButton.innerHTML = 'Resume';

  setTimer();
  startButton.disabled = true;
}

function setTimer() {
interValId = setInterval(() => {
    countSeconds++;
    updateTimer();        
  },10);
  isAutoPlaying = false;  

}

function updateTimer (){
  let seconds = Math.floor(countSeconds) % 60;
  let minutes = Math.floor(countSeconds / 60) % 60;
  let hours  = Math.floor(countSeconds / 3600);
 
  document.querySelector('.js-seconds')
    .innerHTML = String(seconds).padStart(2,"0");

  document.querySelector('.js-minutes')
    .innerHTML = String(minutes).padStart(2,"0");

  document.querySelector('.js-hours')
    .innerHTML = String(hours).padStart(2,"0"); 
   
}

