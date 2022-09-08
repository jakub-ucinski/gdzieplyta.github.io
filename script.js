var stopwatch = document.getElementById("time");
var startDate = new Date("4 September 2020");

function updateTimer() {
  var nowTime = Date.now();
  var timeDelta = nowTime - startDate;
  stopwatch.innerHTML = convertUTCDeltaToTimeDiff(timeDelta);
}

function convertUTCDeltaToTimeDiff(timeDelta) {
  var second = 1000;
  var minute = second * 60;
  var hour = 60 * minute;
  var day = hour * 24;

  var dayCount = Math.floor(timeDelta / day);
  timeDelta -= dayCount * day;
  var hourCount = Math.floor(timeDelta / hour);
  timeDelta -= hourCount * hour;
  var minuteCount = Math.floor(timeDelta / minute);
  timeDelta -= minuteCount * minute;
  var secondCount = Math.floor(timeDelta / second);

  return `${dayCount} dni, ${hourCount} godzin, ${minuteCount} minut, ${secondCount} sekund`;
}

setInterval(() => {
  updateTimer();
}, 1000);
