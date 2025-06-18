import { useEffect, useState } from "react";
import XButton from "../../../common/XButton";
import styles from "./FileField.module.css";

const ERROR_MESSAGE = "*이미지 등록은 최대 1개까지 가능합니다.";

const FileField = ({ label, id, type, onSaveData }) => {
  const [selectedFiled, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [hasError, setHasError] = useState(false);

  const handleChangeImg = (e) => {
    const file = e.target.files[0];
    e.target.value = null;
    const preview = URL.createObjectURL(file);
    setSelectedFile((prev) => file);
    setPreview((prev) => preview);
  };

  const handleDeleteImg = () => {
    setSelectedFile((prev) => null);
    setPreview((prev) => {
      URL.revokeObjectURL(prev);
      return null;
    });
    setHasError((prev) => false);
  };

  const handleErrorMessage = (e) => {
    if (selectedFiled) {
      e.preventDefault();
      setHasError((prev) => true);
    }
    return;
  };

  useEffect(() => {
    onSaveData((prev) => {
      return {
        ...prev,
        images: [selectedFiled],
      };
    });
  }, [selectedFiled]);

  return (
    <div>
      <div className={styles["label-replacer"]}>{label}</div>
      <div className={`${styles["img-container"]}`}>
        <label
          className={`btn ${styles["upload-btn"]}`}
          htmlFor={id}
          onClick={handleErrorMessage}
        >
          <div className={styles["plus-icon"]}>+</div>
          <div className={styles["upload-text"]}>이미지 등록</div>
        </label>
        <input id={id} type={type} onChange={handleChangeImg} />
        {selectedFiled ? (
          <div className={`${styles["img-space"]}`}>
            <img
              className={styles.img}
              src={preview}
              alt="등록하려는 상품의 이미지"
            />
            <XButton
              className={`btn ${styles["delete-btn"]}`}
              onClick={handleDeleteImg}
            />
          </div>
        ) : (
          <div className={`${styles["img-space"]}`} />
        )}
      </div>
      {hasError ? (
        <div className={`${styles["error-message"]}`}>{ERROR_MESSAGE}</div>
      ) : undefined}
    </div>
  );
};

export default FileField;
