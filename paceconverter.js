function showMessage(getElementById, message) {
  document.getElementById(getElementById).textContent = message;
}

function treadmillToPace() {
  const speedKmh = parseFloat(document.getElementById("speed").value);
  if (isNaN(speedKmh) || speedKmh <= 0 || speedKmh > 30) {
    showMessage("result1", "올바른 속도를 입력하세요(5~30km/h).");
    return;
  }

  const minutes = 60 / speedKmh;
  const mins = Math.floor(minutes);
  const secs = Math.round((minutes - mins) * 60);

  showMessage(
    "result1",
    `트레드밀 속도 ${speedKmh}km/h는 ${mins}분 ${secs}초/km 페이스 입니다.`
  );
}

function paceToTreadmill() {
  const minutes = parseFloat(document.getElementById("minutes").value);
  const seconds = parseFloat(document.getElementById("seconds").value);

  // 초 입력값이 비어 있으면 기본값 0 설정
  const validMinutes = isNaN(minutes) ? 0 : minutes;
  const validSeconds = isNaN(seconds) ? 0 : seconds;

  // 유효성 검사
  if (validMinutes < 0 || validMinutes >= 60) {
    showMessage("result2", "분은 0에서 59 사이여야 합니다.");
    return;
  }
  if (validSeconds < 0 || validSeconds >= 60) {
    showMessage("result2", "초는 0에서 59 사이여야 합니다.");
    return;
  }

  const totalSeconds = validMinutes * 60 + validSeconds;
  if (totalSeconds === 0) {
    showMessage("result2", "분 또는 초를 0보다 큰 값으로 입력하세요.");
    return;
  }

  const speedKmh = (3600 / totalSeconds).toFixed(1);

  showMessage(
    "result2",
    `페이스 ${validMinutes}분 ${validSeconds}초는 트레드밀 속도 ${speedKmh}km/h 입니다.`
  );
}

function distanceTimeToPaceSpeed() {
  const distance = parseFloat(document.getElementById("distance").value);
  const hours = parseFloat(document.getElementById("hours").value);
  const minutes = parseFloat(document.getElementById("minutes").value);
  const seconds = parseFloat(document.getElementById("seconds").value);

  // 거리 입력값이 비어 있으면 기본값 0 설정
  const validDistance = isNaN(distance) ? 0 : distance;
  // 시간 입력값이 비어 있으면 기본값 0 설정
  const validHours = isNaN(hours) ? 0 : hours;
  const validMinutes = isNaN(minutes) ? 0 : minutes;
  const validSeconds = isNaN(seconds) ? 0 : seconds;

  // 유효성 검사

  let message = "";
  if (validDistance <= 0) {
    message = "거리는 0보다 커야 합니다.\n";
  }

  const totalSeconds = validHours * 3600 + validMinutes * 60 + validSeconds;
  if (totalSeconds === 0) {
    message += "시간을 0보다 큰 값으로 입력하세요.\n";
  }

  if (message !== "") {
    showMessage("result3", message);
    return;
  }

  const paceSeconds = totalSeconds / distance;
  const paceMinutes = Math.floor(paceSeconds / 60);
  const paceSecs = Math.round(paceSeconds - paceMinutes * 60);

  const speedKmh = (3600 / paceSeconds).toFixed(1);

  showMessage(
    "result3",
    `페이스는 ${paceMinutes}분 ${paceSecs}초/km, 속도는 ${speedKmh}km/h입니다.`
  );
}
