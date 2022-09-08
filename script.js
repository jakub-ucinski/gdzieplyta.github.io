const stopwatch = document.getElementById("time");
const startDate = new Date("4 September 2020");

function updateTimer() {
  const nowTime = Date.now();
  const timeDelta = nowTime - startDate;
  stopwatch.innerHTML = convertUTCDeltaToTimeDiff(timeDelta);
}

function convertUTCDeltaToTimeDiff(timeDelta) {
  const second = 1000;
  const minute = second * 60;
  const hour = 60 * minute;
  const day = hour * 24;

  const dayCount = Math.floor(timeDelta / day);
  timeDelta -= dayCount * day;
  const hourCount = Math.floor(timeDelta / hour);
  timeDelta -= hourCount * hour;
  const minuteCount = Math.floor(timeDelta / minute);
  timeDelta -= minuteCount * minute;
  const secondCount = Math.floor(timeDelta / second);

  return `${dayCount} dni, ${hourCount} godzin, ${minuteCount} minut, ${secondCount} sekund`;
}

setInterval(() => {
  updateTimer();
}, 1000);
