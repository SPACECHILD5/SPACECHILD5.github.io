function treadmillToPace() {
  const speedKmh = parseFloat(document.getElementById("speed").value);
  if (isNaN(speedKmh) || speedKmh <= 0 || speedKmh > 30) {
    showMessage("result1", "올바른 속도를 입력하세요(5~30km/h).");
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
    `트레드밀 속도 ${speedKmh}km/h는 ${mins}분 ${secs}초/km 페이스 입니다.`
  );
}

function paceToTreadmill() {
  const minutes = parseFloat(document.getElementById("minutes").value);
  const seconds = parseFloat(document.getElementById("seconds").value);

  // 초 입력값이 비어 있으면 기본값 0 설정
  const validSeconds = isNaN(seconds) ? 0 : seconds;

  // if (isNaN(seconds)) {
  //   seconds = 0;
  // }

  // 유효성 검사
  if (minutes < 0 || minutes >= 60) {
    showMessage("result2", "분은 0에서 60 사이여야 합니다.");
    return;
  }
  if (validSeconds < 0 || validSeconds >= 60) {
    showMessage("result2", "초는 0에서 59 사이여야 합니다.");
    return;
  }

  const totalSeconds = minutes * 60 + validSeconds;
  if (totalSeconds === 0) {
    showMessage("result2", "분 또는 초를 0보다 큰 값으로 입력하세요.");
  }

  const speedKmh = (3600 / totalSeconds).toFixed(1);

  showMessage(
    "result2",
    `페이스 ${minutes}분 ${validSeconds}초는 트레드밀 속도 ${speedKmh}km/h 입니다.`
  );
}

function showMessage(getElementById, message) {
  document.getElementById(getElementById).textContent = message;
}
