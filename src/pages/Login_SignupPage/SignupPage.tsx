import logo from "@/assets/logo/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import FieldUncontrolled from "./components/FieldUncontrolled";
import SocialLogin from "./components/SocialLogin";
import { fieldMap } from "./LoginPage";
import { useEffect, useRef, useState } from "react";
import { type ILoginData } from "./LoginPage";
import clsx from "clsx";

interface ISignupData extends ILoginData {
  nickname: string;
  passwordCheck: string;
}

const SignupPage = () => {
  const [isValidating, setIsValidating] = useState(false);
  const [hasError, setHasError] = useState<boolean>(false);
  const signupData = useRef<ISignupData>({
    email: "",
    nickname: "",
    password: "",
    passwordCheck: "",
  });
  const isMount = useRef(true);
  const navigate = useNavigate();
  const commonFieldProps = {
    formData: signupData.current,
    validationTrigger: isValidating,
    onCheckValidating: setIsValidating,
    errorSetter: setHasError,
  };

  const handleStartValidation = () => {
    //검증 시작할 때 hasError->false, 각 필드에서 하나라도 에러있으면 true
    setIsValidating(true);
    setHasError(false);
  };

  useEffect(() => {
    if (isMount.current) {
      isMount.current = false;
      return;
    }

    if (isValidating || hasError === true) {
      return;
    }

    navigate("/login");
  }, [isValidating, hasError]);

  return (
    <section>
      <Link to="/">
        <img src={logo} alt="판다마켓 로고" />
      </Link>
      <FieldUncontrolled {...fieldMap.email} {...commonFieldProps} />
      <FieldUncontrolled {...fieldMap.nickname} {...commonFieldProps} />
      <FieldUncontrolled {...fieldMap.password} {...commonFieldProps} />
      <FieldUncontrolled
        {...fieldMap.passwordCheck}
        {...commonFieldProps}
        comparisonValue={signupData.current.password}
      />
      <button
        className={clsx(
          "btn primary-btn w-[100%] h-14 rounded-[40px] text-[20px]"
        )}
        type="button"
        onClick={handleStartValidation}
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
