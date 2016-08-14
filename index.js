// get value of timer 
var time = seconds.innerHTML;
var bell = document.getElementById("bell");
var message = "Nice work! Now take a break";
var session = 25, breakTime = 5;
var sessionValue = document.getElementById('reset-value');
var breakValue = document.getElementById('break-reset-value');

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

// add one minute to session length
function sessionPlusMinute() {
  session += 1;
  sessionValue.innerHTML = session;
}

// subtract one minute from session length
function sessionMinusMinute() {
  session -= 1;
  sessionValue.innerHTML = session;
}

// add one minute to break length
function breakPlusMinute() {
  breakTime += 1;
  breakValue.innerHTML = breakTime;
}

// substract one minute from break length
function breakMinusMinute() {
  breakTime -= 1;
  breakValue.innerHTML = breakTime;
}

// reset timer to 25 minutes
function resetSession() {
  stopTimer();
  minutes.innerHTML = makeTwoDigit(session);
  seconds.innerHTML = makeTwoDigit(0);
  time = 0;
  message = "Nice work! Now take a break";
}

// reset timer to 5 minutes
function resetBreak() {
  stopTimer();
  minutes.innerHTML = makeTwoDigit(breakTime);
  seconds.innerHTML = makeTwoDigit(0);
  time = 0;
  message = "Click Pomodoro button to start another round";
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