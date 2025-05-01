import {
  isEmpty,
  validateEmail,
  validatePassword,
  validatePasswordConfirm,
  validatePasswordConfirmReverse,
  validateNickname,
} from "./validate.js";
import { switchBtnStatus, switchVisibility } from "./btn-functions.js";

function isSignupPage() {
  if (window.location.pathname.search("signup") === -1) {
    return false;
  }
  return true;
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
    switchBtnStatus();
  }
});
form.addEventListener("click", (event) => {
  if (event.target.classList.contains("form__icon")) {
    switchVisibility(event);
  }
});
