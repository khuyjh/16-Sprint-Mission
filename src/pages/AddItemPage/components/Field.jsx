import { useEffect } from "react";
import useField from "../../../components/hooks/useField";

const Field = ({ label, id, type, placeholder, onSaveData }) => {
  const {
    value,
    displayedValue,
    isFocused,
    handleChangeValue,
    handleChangePrice,
    handleFocus,
    handleBlurDisplayedValue,
  } = useField(id, onSaveData);

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      {type === "textarea" ? (
        <textarea
          id={id}
          placeholder={placeholder}
          value={value}
          onChange={handleChangeValue}
        />
      ) : (
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          value={isFocused === false ? displayedValue : value}
          onChange={
            id === "productPrice" ? handleChangePrice : handleChangeValue
          }
          onFocus={handleFocus}
          onBlur={handleBlurDisplayedValue}
        />
      )}
    </div>
  );
};

export default Field;
