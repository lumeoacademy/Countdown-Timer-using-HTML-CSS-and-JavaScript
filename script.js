function getTimeRemaining(endtimer) {
  var t = Date.parse(endtimer) - Date.parse(new Date());
  var seconds = Math.floor((t/1000) % 60);
  var minutes = Math.floor((t/1000/60) % 60);
  var hours = Math.floor((t/(1000*60*60)) % 24);
  var days = Math.floor(t/(1000*60*60*24));
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function initializeTimer(id, endtimer) {
  var timer = document.getElementById(id);
  var daysSpan = timer.querySelector('.days');
  var hoursSpan = timer.querySelector('.hours');
  var minutesSpan = timer.querySelector('.minutes');
  var secondsSpan = timer.querySelector('.seconds');

  function timerUpdate() {
    var t = getTimeRemaining(endtimer);

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if(t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  timerUpdate();
  var timeinterval = setInterval(timerUpdate, 1000);
}

var deadline = new Date(Date.parse(new Date()) + 30 * 24 * 60 * 60 * 1000);
initializeTimer('timer', deadline);
