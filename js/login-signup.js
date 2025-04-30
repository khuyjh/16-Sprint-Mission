import {
  validateEmail,
  validatePassword,
  validatePasswordConfirm,
  validateNickname,
} from "./validate.js";
import { switchBtnStatus, switchVisibility } from "./btn-functions.js";

//테스트용 전역 등록 함수
// window.switchBtnStatus = switchBtnStatus;

// const emailInput = document.getElementById("email");
// const passwordInput = document.getElementById("password");
// const passwordConfirmInput = document.getElementById("password-confirm");
// const nicknameInput = document.getElementById("nickname");
const form = document.querySelector(".container--form");

// emailInput.addEventListener("focusout", validateEmail);
// passwordInput.addEventListener("focusout", validatePassword);
// passwordConfirmInput.addEventListener("focusout", validatePasswordConfirm);
// nicknameInput.addEventListener("focusout", validateNickname);

form.addEventListener("focusout", (event) => {});

document.addEventListener("focusout", switchBtnStatus);
document.addEventListener("click", switchVisibility);
