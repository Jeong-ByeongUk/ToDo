const clockForm = document.querySelector("h2#clock");

function tiktok(){ //시간 정보 확인후 1자리 숫자를 2자리 숫자로 변경 후 출력 ex) 10:0:23 > 10:00:23
  const date = new Date();
  const hour = String(date.getHours()).padStart(2, "0");
  const minute = String(date.getMinutes()).padStart(2, "0");
  const second = String(date.getSeconds()).padStart(2, "0");

  clockForm.innerText = `${hour}:${minute}:${second}`;
}

tiktok(); //사이트 입장시 시간 출력
setInterval(tiktok, 1000); //사이트 입장 이후 1초마다 시간 갱신