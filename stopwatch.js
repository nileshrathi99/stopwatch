
const timeDisplay = document.querySelector("#timeDisplay");
const startButton = document.querySelector("#startButton");
const pauseButton = document.querySelector("#pauseButton");
const resetButton = document.querySelector("#resetButton");

let startTime = 0
let elapsedTime = 0
let currentTime = 0
let paused = true
let intervalId
let hrs = 0
let mins = 0
let secs = 0

startButton.addEventListener('click', startTimer)
pauseButton.addEventListener('click', pauseTimer)
resetButton.addEventListener('click', resetTimer)

function startTimer(){
    if(paused){
        paused = false;
        startTime = Date.now() - elapsedTime;
        intervalId = setInterval(updateTime, 75)
    }
}

function pauseTimer(){
    if(!paused){
        paused = true;
        elapsedTime = Date.now() - startTime;
        clearInterval(intervalId)
    }
}

function resetTimer(){
    paused = true;
    clearInterval(intervalId)
    startTime = 0
    elapsedTime = 0
    currentTime = 0
    hrs = 0
    mins = 0
    secs = 0
    timeDisplay.textContent = `00:00:00`;
}


function updateTime(){
    elapsedTime = Date.now() - startTime
    secs = pad(Math.floor((elapsedTime / 1000) % 60))
    mins = pad(Math.floor((elapsedTime / (1000 * 60)) % 60))
    hrs = pad(Math.floor((elapsedTime / (1000 * 60 * 60)) % 60))

    timeDisplay.textContent = `${hrs}:${mins}:${secs}`;

    function pad(unit){
        return (("0") + unit).length > 2 ? unit : "0" + unit;
    }
}