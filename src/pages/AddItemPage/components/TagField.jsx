import { useEffect, useRef, useState } from "react";
import styles from "./TagField.module.css";
import XButton from "../../../common/XButton";

const TagField = ({ label, id, type, placeholder, onSaveData }) => {
  const [value, setValue] = useState("");
  const [tags, setTags] = useState([]);
  const listKey = useRef(0);

  const handleChangeValue = (e) => {
    setValue((prev) => e.target.value);
  };

  const handleAddTag = (e) => {
    if (e.key !== "Enter") {
      return;
    }
    if (!e.target.value.trim()) {
      return;
    }
    if (tags.includes(`#${e.target.value}`)) {
      alert("중복태그는 불가능합니다!");
      return;
    }
    setTags((prev) => [...prev, `#${value}`]);
    listKey.current += 1;
    setValue((prev) => "");
  };

  const handleDeleteTag = (e) => {
    const tagContent = e.currentTarget.value;
    setTags((prev) => prev.filter((tag) => tag !== tagContent));
  };

  useEffect(() => {
    onSaveData((prev) => {
      return {
        ...prev,
        tags: [...tags],
      };
    });
  }, [tags]);

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handleChangeValue}
        onKeyDown={handleAddTag}
      />
      {tags
        ? tags?.map((tag) => {
            return (
              <span className={styles.tag} key={listKey.current++}>
                {tag}
                <XButton value={tag} onClick={handleDeleteTag} />
              </span>
            );
          })
        : undefined}
    </div>
  );
};

export default TagField;
