import {
  isEmpty,
  validateEmail,
  validatePassword,
  validatePasswordConfirm,
  validatePasswordConfirmReverse,
  validateNickname,
} from "./validate.js";
import { toggleBtnStatus } from "./btn-functions.js";

function toggleVisibility(event) {
  const btn = event.target.parentElement;
  const passwordInput = btn.previousElementSibling;
  const iconOff = btn.children[0];
  const iconOn = btn.children[1];

  if (passwordInput.getAttribute("type") === "password") {
    passwordInput.setAttribute("type", "text");
    btn.setAttribute("aria-pressed", "true");
  } else {
    passwordInput.setAttribute("type", "password");
    btn.setAttribute("aria-pressed", "false");
  }
  iconOff.classList.toggle("display-none");
  iconOn.classList.toggle("display-none");
}

function isSignupPage() {
  return window.location.pathname.search("signup") === -1 ? false : true;
}

const form = document.querySelector(".container--form");
const validateMap = {
  email: validateEmail,
  password: validatePassword,
  "password-confirm": validatePasswordConfirm,
  nickname: validateNickname,
};

form.addEventListener("focusout", (event) => {
  const { id } = event.target;

  if (validateMap[id]) {
    validateMap[id](event);
    //비밀번호확인란부터 입력후 비밀번호를 변경할 시 비밀번호 확인 유효성 검사
    if (id === "password" && isSignupPage()) {
      const passwordConfirmInput = document.getElementById("password-confirm");
      const passwordConfirm = passwordConfirmInput.value;
      if (!isEmpty(passwordConfirm)) {
        validatePasswordConfirmReverse();
      }
    }
    toggleBtnStatus();
  }
});
form.addEventListener("click", (event) => {
  if (event.target.classList.contains("form__icon")) {
    toggleVisibility(event);
  }
});
