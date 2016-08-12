// get value of timer 
var time = seconds.innerHTML;
var bell = document.getElementById("bell");
var message = "Nice work! Now take a break";

// reset timer to 25 minutes
resetRound.onclick = function() {
  stopTimer();
  minutes.innerHTML = 25;
  seconds.innerHTML = makeTwoDigit(0);
  time = 0;
  message = "Nice work! Now take a break";
}
// reset timer to 5 minutes
resetBreak.onclick = function() {
  stopTimer();
  minutes.innerHTML = makeTwoDigit(5);
  seconds.innerHTML = makeTwoDigit(0);
  time = 0;
  message = "Click Pomodoro button to start another round";
}

// start timer function
function timer() {
  if (time == 1 && minutes.innerHTML == 0) {
    window.clearInterval(update);
    update = undefined;
    time = time - 1;
    playSound();
    takeBreak();
  } else if (time == 0) {
      time = 59;
      minutes.innerHTML = makeTwoDigit(minutes.innerHTML - 1);
    } else {
      time = time - 1
    }
    seconds.innerHTML = makeTwoDigit(time);
}

// Start or stop the timer depending on state
startStop.onclick = function() {
  if (typeof(update) == 'undefined') {
    update = setInterval("timer()", 1000)
  } else {
    stopTimer();
  }
}

// Checks to see if timer is running and stops it if it is
function stopTimer() {
  if (typeof(update) !== 'undefined') {
    window.clearInterval(update);
    update = undefined;
  }
}

// Makes single digit numbers into two digits for aesthetics
function makeTwoDigit(number) {
  if (number < 10) {
    return "0" + number;
  }
  return number;
}

// Renders message at completion of round
function takeBreak() {
  directions.innerHTML = message;
}

function playSound() {
  console.log('automatically invoked')
  bell.volume = 0.5
  bell.load()
  bell.play()
}