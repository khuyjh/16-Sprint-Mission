import visibilityOn from "@/assets/icons/ic_visibility_on.svg";
import visibilityOff from "@/assets/icons/ic_visibility_off.svg";
import { type ILoginData } from "../LoginPage";
import { useRef, useState } from "react";

interface Props {
  id: string;
  label: string;
  type: "email" | "text" | "password";
  formData: ILoginData;
}

const FieldUncontrolled = ({ id, label, type, formData }: Props) => {
  const [isVisibilityOn, setIsVisibilityOn] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const isPassword = type === "password";

  const handleChangeValue = () => {
    if (id in formData && inputRef.current) {
      formData[id as keyof ILoginData] = inputRef.current?.value;
    }
  };

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <div>
        <input
          id={id}
          ref={inputRef}
          type={isPassword && isVisibilityOn ? "text" : type}
          placeholder={`${label}을 입력해주세요`}
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
    </div>
  );
};

export default FieldUncontrolled;
