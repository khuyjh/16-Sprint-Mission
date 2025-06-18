import { useEffect, useState } from "react";
import FileField from "./components/FileField";
import Field from "./components/Field";
import TagField from "./components/TagField";
import isEmpty from "../../utils/isEmpty";
import styles from "./AddItemPage.module.css";

const DATA_FORMAT = {
  images: [],
  tags: [],
  price: 0,
  description: "",
  name: "",
};

const FIELD_MAP = {
  productImg: {
    label: "상품 이미지",
    id: "productImg",
    type: "file",
  },
  productName: {
    label: "상품명",
    id: "productName",
    type: "text",
    placeholder: "상품명을 입력해주세요",
  },
  productInfo: {
    label: "상품 소개",
    id: "productInfo",
    type: "textarea",
    placeholder: "상품 소개를 입력해주세요",
  },
  productPrice: {
    label: "판매 가격",
    id: "productPrice",
    type: "text",
    placeholder: "판매 가격을 입력해주세요",
  },
  productTag: {
    label: "태그",
    id: "productTag",
    type: "text",
    placeholder: "태그를 입력해주세요",
  },
};

const AddItemPage = () => {
  const [formData, setFormData] = useState(DATA_FORMAT);
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    for (const key in formData) {
      if (isEmpty(formData[key])) {
        setDisabled((prev) => true);
        return;
      }
      setDisabled((prev) => false);
    }
  }, [formData]);

  return (
    <form className={styles["form-container"]}>
      <div className={styles["submit-container"]}>
        <h2>상품 등록하기</h2>
        <button
          className={`btn primary-btn ${disabled ? "disabled" : ""} ${
            styles["submit-button"]
          }`}
          disabled={disabled}
          type="button"
        >
          등록
        </button>
      </div>
      <FileField
        label={FIELD_MAP.productImg.label}
        id={FIELD_MAP.productImg.id}
        type={FIELD_MAP.productImg.type}
        onSaveData={setFormData}
      />
      <Field
        label={FIELD_MAP.productName.label}
        id={FIELD_MAP.productName.id}
        type={FIELD_MAP.productName.type}
        placeholder={FIELD_MAP.productName.placeholder}
        onSaveData={setFormData}
      />
      <Field
        label={FIELD_MAP.productInfo.label}
        id={FIELD_MAP.productInfo.id}
        type={FIELD_MAP.productInfo.type}
        placeholder={FIELD_MAP.productInfo.placeholder}
        onSaveData={setFormData}
      />
      <Field
        label={FIELD_MAP.productPrice.label}
        id={FIELD_MAP.productPrice.id}
        type={FIELD_MAP.productPrice.type}
        placeholder={FIELD_MAP.productPrice.placeholder}
        onSaveData={setFormData}
      />
      <TagField
        label={FIELD_MAP.productTag.label}
        id={FIELD_MAP.productTag.id}
        type={FIELD_MAP.productTag.type}
        placeholder={FIELD_MAP.productTag.placeholder}
        onSaveData={setFormData}
      />
    </form>
  );
};

export default AddItemPage;
