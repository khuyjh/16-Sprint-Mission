import { useEffect, useState } from "react";
import XButton from "../../../common/XButton";
import styles from "./FileField.module.css";
import clsx from "clsx";

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
      <div className={styles.labelReplacer}>{label}</div>
      <div className={styles.imgContainer}>
        <label
          className={clsx("btn", styles.uploadBtn)}
          htmlFor={id}
          onClick={handleErrorMessage}
        >
          <div className={styles.plusIcon}>+</div>
          <div className={styles.uploadText}>이미지 등록</div>
        </label>
        <input id={id} type={type} onChange={handleChangeImg} />
        {selectedFiled ? (
          <div className={styles.imgSpace}>
            <img
              className={styles.img}
              src={preview}
              alt="등록하려는 상품의 이미지"
            />
            <XButton
              className={clsx("btn", styles.deleteBtn)}
              onClick={handleDeleteImg}
            />
          </div>
        ) : (
          <div className={styles.imgSpace} />
        )}
      </div>
      {hasError ? (
        <div className={styles.errorMessage}>{ERROR_MESSAGE}</div>
      ) : undefined}
    </div>
  );
};

export default FileField;
