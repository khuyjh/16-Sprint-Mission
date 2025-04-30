export function switchBtnStatus() {
  //type="submit"인 버튼
  const btn = document.querySelector(".btn--interactions");
  const errorMessages = document.querySelectorAll(".form__error-msg");

  for (const message of errorMessages) {
    if (message.textContent) {
      btn.setAttribute("disabled", "");
      btn.classList.add("btn--disabled");
      return;
    }
  }

  btn.removeAttribute("disabled");
  btn.classList.remove("btn--disabled");
}
//모든 input의 유효성 검사를 통과했을 때에만 누를 수 있어야하므로 validate와 작동방식이 달라야함
//error-msg를 querySelectorAll로 받아서 메시지 존재 여부를 검사

export function switchVisibility(event) {
  const btn = event.target.parentElement;
  if (btn.classList.contains("btn--visibility")) {
    const passwordInput = btn.previousElementSibling;
    const iconOff = btn.children[0];
    const iconOn = btn.children[1];
    console.log(btn);
    console.log(passwordInput);

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
}
