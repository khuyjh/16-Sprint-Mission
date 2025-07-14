const EMAIL_REG = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;

export const validateEmail = (targetEmail: string) => {
  if (EMAIL_REG.test(targetEmail)) {
    return { isValid: true, errorMsg: null };
  } else {
    return { isValid: false, errorMsg: "잘못된 이메일 형식입니다" };
  }
};

export const validatePassword = (targetPassword: string) => {
  if (targetPassword.length < 8) {
    return { isValid: false, errorMsg: "비밀번호를 8자 이상 입력해주세요" };
  } else {
    return { isValid: true, errorMsg: null };
  }
};
