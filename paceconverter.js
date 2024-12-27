function treadmillToPace() {
  const speedKmh = parseFloat(document.getElementById("speed").value);
  if (isNaN(speedKmh) || speedKmh <= 0) {
    document.getElementById("result").innerText = "올바른 속도를 입력하세요.";
    return;
  }

  let minutes = 60 / speedKmh;
  let mins = Math.floor(minutes);
  let secs = Math.round((minutes - mins) * 60);

  // let sec = 3600 / speedKmh;
  // let secm = Math.floor(sec / 60);
  // let secs = Math.round(sec - secm * 60);

  document.getElementById(
    "result1"
  ).innerText = `트레드밀 속도 ${speedKmh}km/h는 ${mins}분 ${secs}초 페이스 입니다.`;
}

function paceToTreadmill() {
  const minutes = parseFloat(document.getElementById("minutes").value);
  const seconds = parseFloat(document.getElementById("seconds").value);
  if (isNaN(minutes) || isNaN(seconds) || minutes < 0 || seconds < 0) {
    document.getElementById("result").innerText = "올바른 페이스를 입력하세요.";
    return;
  }

  let totalTimeInSeconds = minutes * 60 + seconds;
  let distanceInKilometer = 3600 / totalTimeInSeconds;
  let speedKmh = distanceInKilometer.toFixed(2);

  document.getElementById(
    "result2"
  ).innerText = `페이스 ${minutes}분 ${seconds}초는 트레드밀 속도 ${speedKmh}km/h 입니다.`;
}
