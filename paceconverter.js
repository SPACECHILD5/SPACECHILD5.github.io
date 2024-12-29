function showMessage(getElementById, message) {
  document.getElementById(getElementById).innerText = message;
}

function treadmillToPace() {
  const speedKmh = parseFloat(document.getElementById("speed").value);
  if (isNaN(speedKmh) || speedKmh <= 0) {
    showMessage("result1", "올바른 속도를 입력하세요.");
    return;
  }

  const minutes = 60 / speedKmh;
  const mins = Math.floor(minutes);
  const secs = Math.round((minutes - mins) * 60);

  // let sec = 3600 / speedKmh;
  // let secm = Math.floor(sec / 60);
  // let secs = Math.round(sec - secm * 60);

  showMessage(
    "result1",
    `트레드밀 속도 ${speedKmh}km/h는 ${mins}분 ${secs}초 페이스 입니다.`
  );
}

function paceToTreadmill() {
  const minutes = parseFloat(document.getElementById("minutes").value);
  const seconds = parseFloat(document.getElementById("seconds").value);
  if (isNaN(minutes) || isNaN(seconds) || minutes < 0 || seconds < 0) {
    showMessage("result2", "올바른 페이스를 입력하세요.");
    return;
  }

  const totalTimeInSeconds = minutes * 60 + seconds;
  const speedKmh = (3600 / totalTimeInSeconds).toFixed(1);

  showMessage(
    "result2",
    `페이스 ${minutes}분 ${seconds}초는 트레드밀 속도 ${speedKmh}km/h 입니다.`
  );
}
