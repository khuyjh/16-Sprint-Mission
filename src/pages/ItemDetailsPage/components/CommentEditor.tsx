import clsx from "clsx";
import styles from "./CommentEditor.module.css";
import type { ChangeEvent } from "react";

interface Props {
  commentValue: string;
  onChangeCommentValue: React.Dispatch<React.SetStateAction<string>>;
  onClickIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
}

const CommentEditor = ({
  commentValue,
  onChangeCommentValue,
  onClickIsEditing,
}: Props) => {
  return (
    <div className={styles.buttonsContainer}>
      <textarea
        className={styles.editingComment}
        value={commentValue}
        onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
          onChangeCommentValue(e.target.value);
        }}
      />
      <div>
        <button
          className={clsx("btn", styles.cancelButton)}
          type="button"
          onClick={() => {
            onClickIsEditing(false);
          }}
        >
          취소
        </button>
        <button
          className={clsx("btn primary-btn", styles.updateButton)}
          type="button"
          onClick={() => {
            onClickIsEditing(false);
          }}
        >
          수정 완료
        </button>
      </div>
    </div>
  );
};

export default CommentEditor;
