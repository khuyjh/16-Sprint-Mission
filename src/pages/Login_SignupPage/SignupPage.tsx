import logo from "@/assets/logo/logo.svg";
import { Link } from "react-router-dom";
import FieldUncontrolled from "./components/FieldUncontrolled";
import SocialLogin from "./components/SocialLogin";
import { FIELD_MAP } from "./LoginPage";
import { useRef, useState } from "react";
import { type ILoginData } from "./LoginPage";
import clsx from "clsx";

interface ISignupData extends ILoginData {
  nickname: string;
  passwordCheck: string;
}

const SignupPage = () => {
  // const [isDisabled, setIsDisabled] = useState(true);
  const signupData = useRef<ISignupData>({
    email: "",
    nickname: "",
    password: "",
    passwordCheck: "",
  });

  console.log(signupData.current);
  return (
    <section>
      <Link to="/">
        <img src={logo} alt="판다마켓 로고" />
      </Link>
      <FieldUncontrolled
        id={FIELD_MAP.email.id}
        label={FIELD_MAP.email.label}
        type={FIELD_MAP.email.type}
        formData={signupData.current}
      />
      <FieldUncontrolled
        id={FIELD_MAP.nickname.id}
        label={FIELD_MAP.nickname.label}
        type={FIELD_MAP.nickname.type}
        formData={signupData.current}
      />
      <FieldUncontrolled
        id={FIELD_MAP.password.id}
        label={FIELD_MAP.password.label}
        type={FIELD_MAP.password.type}
        formData={signupData.current}
      />
      <FieldUncontrolled
        id={FIELD_MAP.passwordCheck.id}
        label={FIELD_MAP.passwordCheck.label}
        type={FIELD_MAP.passwordCheck.type}
        formData={signupData.current}
      />
      <button
        className={clsx(
          "btn primary-btn w-[100%] h-14 rounded-[40px] text-[20px]"
          // {
          //   disabled: isDisabled,
          // }
        )}
        type="button"
      >
        회원가입
      </button>
      <SocialLogin />
      <span>
        이미 회원이신가요?
        <Link to="/login">로그인</Link>
      </span>
    </section>
  );
};

export default SignupPage;
