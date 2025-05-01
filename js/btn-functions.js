//모든 input의 유효성 검사를 통과했을 때에만 누를 수 있어야하므로 validate와 작동방식이 달라야함
export function switchBtnStatus() {
  const btn = document.querySelector(".btn--interactions");
  const errorMessages = document.querySelectorAll(".form__error-msg");
  const inputs = document.querySelectorAll(".form__input");

  for (const message of errorMessages) {
    if (message.textContent) {
      btn.setAttribute("disabled", "");
      btn.classList.add("btn--disabled");
      return;
    }
  }
  for (const input of inputs) {
    if (!input.value) {
      btn.setAttribute("disabled", "");
      btn.classList.add("btn--disabled");
      return;
    }
  }

  btn.removeAttribute("disabled");
  btn.classList.remove("btn--disabled");
}

export function switchVisibility(event) {
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
