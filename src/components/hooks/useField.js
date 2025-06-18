import { useEffect, useState } from "react";
import formatNumber from "../../utils/formatNumber";

const KEY_MAP = {
  productName: "name",
  productInfo: "description",
  productPrice: "price",
};

const useField = (id, onSaveData) => {
  const [value, setValue] = useState("");
  const [displayedValue, setDisplayedValue] = useState("");
  const [isFocused, SetIsFocused] = useState(false);

  const handleChangeValue = (e) => {
    setValue((prev) => e.target.value);
  };

  const handleChangePrice = (e) => {
    let input = e.target.value;
    input = input.replace(/[^0-9]/g, "");

    if (input.length > 1 && input.startsWith("0")) {
      input = input.replace(/^0+/, "");
    }

    setValue((prev) => (input === "" ? "" : Number(input)));
  };

  const handleFocus = () => {
    SetIsFocused((prev) => true);
  };

  const handleBlurDisplayedValue = () => {
    setDisplayedValue((prev) => formatNumber(value));
    SetIsFocused((prev) => false);
  };

  useEffect(() => {
    onSaveData((prev) => {
      return {
        ...prev,
        [KEY_MAP[`${id}`]]: value,
      };
    });
  }, [value]);

  switch (id) {
    case "productPrice": {
      return {
        value,
        displayedValue,
        isFocused,
        handleChangePrice,
        handleFocus,
        handleBlurDisplayedValue,
      };
    }
    default: {
      return { value, handleChangeValue };
    }
  }
};

export default useField;
