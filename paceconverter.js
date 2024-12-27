function runningpaceconverter() {
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
    "result"
  ).innerText = `트레드밀 ${speedKmh}km/h는 ${mins}분 ${secs}초 페이스 입니다.`;
}
