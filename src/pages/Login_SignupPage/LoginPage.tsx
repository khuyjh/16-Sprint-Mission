import logo from "@/assets/logo/logo.svg";
import { Link } from "react-router-dom";
import FieldUncontrolled from "./components/FieldUncontrolled";
import SocialLogin from "./components/SocialLogin";
import { useEffect, useRef, useState } from "react";
import clsx from "clsx";

export interface ILoginData {
  email: string;
  password: string;
}

export const FIELD_MAP = {
  email: {
    id: "email",
    label: "이메일",
    type: "email",
  },
  nickname: {
    id: "nickname",
    label: "닉네임",
    type: "text",
  },
  password: {
    id: "password",
    label: "비밀번호",
    type: "password",
  },
  passwordCheck: {
    id: "passwordCheck",
    label: "비밀번호 확인",
    type: "password",
  },
} as const;

const LoginPage = () => {
  // const [isDisabled, setIsDisabled] = useState(true);
  const loginData = useRef<ILoginData>({ email: "", password: "" });

  console.log(loginData.current);

  // useEffect(() => {
  //   for (const key in loginData.current) {
  //     console.log(key);
  //     if (!loginData.current[key as keyof ILoginData]) {
  //       console.log(key, loginData.current[key as keyof ILoginData]);
  //       setIsDisabled(true);
  //       return;
  //     }
  //   }
  //   setIsDisabled(false);
  // }, [loginData.current.email, loginData.current.password]);

  const handleValidateInputs = () => {};

  return (
    <section>
      <Link to="/">
        <img src={logo} alt="판다마켓 로고" />
      </Link>
      <FieldUncontrolled
        id={FIELD_MAP.email.id}
        label={FIELD_MAP.email.label}
        type={FIELD_MAP.email.type}
        formData={loginData.current}
      />
      <FieldUncontrolled
        id={FIELD_MAP.password.id}
        label={FIELD_MAP.password.label}
        type={FIELD_MAP.password.type}
        formData={loginData.current}
      />
      <button
        className={clsx(
          "btn primary-btn w-[100%] h-14 rounded-[40px] text-[20px]"
          // {
          //   disabled: isDisabled,
          // }
        )}
        type="button"
        // disabled={isDisabled}
        onClick={handleValidateInputs}
      >
        로그인
      </button>
      <SocialLogin />
      <span>
        판다마켓이 처음이신가요?
        <Link to="/signup">회원가입</Link>
      </span>
    </section>
  );
};

export default LoginPage;
