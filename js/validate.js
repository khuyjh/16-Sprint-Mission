// common functions
function isEmpty(value) {
  return value ? false : true;
}

function addInvalid(input) {
  input.classList.add("invalid");
}

function removeInvalid(input) {
  input.classList.remove("invalid");
}

// email functions
const emailPattern = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;

function checkEmailFormat(email) {
  if (emailPattern.test(email)) {
    return true;
  } else {
    return false;
  }
}

export function validateEmail() {
  const emailInput = document.getElementById("email");
  const email = emailInput.value;
  let divErrorMessage = document.querySelector(".error-msg--email");

  if (isEmpty(email)) {
    divErrorMessage.textContent = "이메일을 입력해주세요";
    addInvalid(emailInput);
  } else if (!checkEmailFormat(email)) {
    divErrorMessage.textContent = "잘못된 이메일 형식입니다";
    addInvalid(emailInput);
  } else {
    divErrorMessage.textContent = "";
    removeInvalid(emailInput);
  }
}

// 이벤트객체 활용 버전
// export function validateEmail(event) {
//   const emailInput = event.target;
//   const email = emailInput.value;
//   let divErrorMessage = document.querySelector(".error-msg--email");

//   if (isEmpty(email)) {
//     divErrorMessage.textContent = "이메일을 입력해주세요";
//     addInvalid(emailInput);
//   } else if (!checkEmailFormat(email)) {
//     divErrorMessage.textContent = "잘못된 이메일 형식입니다";
//     addInvalid(emailInput);
//   } else {
//     divErrorMessage.textContent = "";
//     removeInvalid(emailInput);
//   }
// }

// password functions
function checkPasswordFormat(password) {
  if (password.length < 8) {
    return false;
  } else {
    return true;
  }
}

function checkPassword(password, passwordConfirm) {
  return password === passwordConfirm ? true : false;
}

export function validatePassword() {
  const passwordInput = document.getElementById("password");
  const password = passwordInput.value;
  let divErrorMessage = document.querySelector(".error-msg--password");

  if (isEmpty(password)) {
    divErrorMessage.textContent = "비밀번호를 입력해주세요";
    addInvalid(passwordInput);
  } else if (!checkPasswordFormat(password)) {
    divErrorMessage.textContent = "비밀번호를 8자 이상 입력해주세요";
    addInvalid(passwordInput);
  } else {
    divErrorMessage.textContent = "";
    removeInvalid(passwordInput);
  }
}

export function validatePasswordConfirm() {
  const passwordInput = document.getElementById("password");
  const password = passwordInput.value;
  const passwordConfirmInput = document.getElementById("password-confirm");
  const passwordConfirm = passwordConfirmInput.value;
  let divErrorMessage = document.querySelector(".error-msg--password-confirm");

  if (!checkPassword(password, passwordConfirm)) {
    divErrorMessage.textContent = "비밀번호가 일치하지 않습니다";
    addInvalid(passwordConfirmInput);
  } else {
    divErrorMessage.textContent = "";
    removeInvalid(passwordConfirmInput);
  }
}

//nickname functions

export function validateNickname() {
  const nicknameInput = document.getElementById("nickname");
  const nickname = nicknameInput.value;
  let divErrorMessage = querySelector(".error-msg--nickname");

  if (isEmpty(nickname)) {
    divErrorMessage.textContent = "닉네임을 입력해주세요";
    addInvalid(nicknameInput);
  } else {
    divErrorMessage.textContent = "";
    removeInvalid(nicknameInput);
  }
}
