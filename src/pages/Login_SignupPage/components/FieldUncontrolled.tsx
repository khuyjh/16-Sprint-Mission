import visibilityOn from "@/assets/icons/ic_visibility_on.svg";
import visibilityOff from "@/assets/icons/ic_visibility_off.svg";
import isEmpty from "@/utils/isEmpty";
import { type ILoginData } from "../LoginPage";
import React, { useEffect, useRef, useState } from "react";

type SingleParamValidator = (value: string) => {
  isValid: boolean;
  errorMsg: string | null;
};
type TwoParamValidator = (
  value: string,
  comparisonValue: string
) => { isValid: boolean; errorMsg: string | null };

interface Props {
  id: string;
  label: string;
  type: "email" | "text" | "password";
  validator?: SingleParamValidator | TwoParamValidator;
  formData: ILoginData;
  validationTrigger: boolean;
  onCheckValidating: React.Dispatch<React.SetStateAction<boolean>>;
  errorSetter: React.Dispatch<React.SetStateAction<boolean>>;
  //비밀번호 확인을 위한 비밀번호 값
  comparisonValue?: string;
}

const FieldUncontrolled = ({
  id,
  label,
  type,
  validator,
  formData,
  validationTrigger,
  onCheckValidating,
  errorSetter,
  comparisonValue,
}: Props) => {
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [isVisibilityOn, setIsVisibilityOn] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const isMount = useRef(true);
  const isPassword = type === "password";
  const placeholderMsg = `${label}을(를) 입력해주세요`;

  const handleChangeValue = () => {
    if (id in formData && inputRef.current) {
      formData[id as keyof ILoginData] = inputRef.current?.value;
    }
  };

  useEffect(() => {
    if (isMount.current) {
      isMount.current = false;
      return;
    }

    //의존성 배열에 다른 것을 포함시키면서 trigger가 true일 때에만 실행하도록
    if (!validationTrigger) {
      return;
    }

    const value = inputRef.current?.value;

    if (isEmpty(value)) {
      errorSetter(true);
      setErrorMsg(placeholderMsg);
      onCheckValidating(false);
      return;
    }

    if (validator && id === "passwordCheck") {
      const { isValid, errorMsg } = validator(
        value as string,
        comparisonValue as string
      );

      if (!isValid) {
        errorSetter(true);
        setErrorMsg(errorMsg);
        onCheckValidating(false);
        return;
      }
    } else if (validator) {
      const { isValid, errorMsg } = (validator as SingleParamValidator)(
        value as string
      );

      if (!isValid) {
        errorSetter(true);
        setErrorMsg(errorMsg);
        onCheckValidating(false);
        return;
      }
    }

    setErrorMsg(null);
    onCheckValidating(false);
  }, [validationTrigger, isEmpty, validator]);

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <div>
        <input
          id={id}
          ref={inputRef}
          type={isPassword && isVisibilityOn ? "text" : type}
          placeholder={placeholderMsg}
          onChange={handleChangeValue}
        />
        {isPassword ? (
          <button
            type="button"
            onClick={() => {
              setIsVisibilityOn((prev) => !prev);
            }}
          >
            <img src={visibilityOff} alt="비밀번호 숨김 아이콘" />
            <img src={visibilityOn} alt="비밀번호 표시 아이콘" />
          </button>
        ) : undefined}
      </div>
      {errorMsg ? <div>{errorMsg}</div> : undefined}
    </div>
  );
};

export default FieldUncontrolled;
