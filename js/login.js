const loginForm = document.querySelector("#login");
const loginInput = loginForm.querySelector("input");
const greetText = document.querySelector("h1");

function login(event){ //로그인form에서 submit이 발생한 경우 Local storage에 유저이름 저장
  const loginValue = loginInput.value;
  localStorage.setItem("username", loginValue);
}

function greeting(username){ //로그인form에 hidden클래스를 추가해 안보이게 한뒤 숨겨져있던 환영문구를 변경 후 출력
  loginForm.classList.add("hidden");
  greetText.innerText = "Hello " + username;
  greetText.classList.remove("hidden");
}


const username = localStorage.getItem("username"); //Local storage에 유저 이름이 있는지 확인 

if(username == null) { // 없으면 로그인 창 남겨두기
  loginForm.addEventListener("submit", login);
}
else { // 있으면 환영 문구 출력
  greeting(username);
}
