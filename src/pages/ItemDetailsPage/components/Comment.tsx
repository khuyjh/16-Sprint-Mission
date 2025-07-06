import { useState, type ChangeEvent } from "react";
import type { IComment } from "../ItemDetailsPage";
import styles from "./Comment.module.css";
import UpdateDeleteDropdown from "./UpdateDeleteDropdown";
import profileImg from "@/assets/icons/ic_profile.svg";
import calcTimeFromNow from "@/utils/calcTimeFormNow";
import clsx from "clsx";

const Comment = ({ writer, updatedAt, createdAt, content, id }: IComment) => {
  const [commentValue, setCommentValue] = useState(content);
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className={styles.commentContainer}>
      {isEditing ? (
        <div className={styles.buttonsContainer}>
          <textarea
            className={styles.editingComment}
            value={commentValue}
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
              setCommentValue((prev) => e.target.value);
            }}
          />
          <div>
            <button
              className={clsx("btn", styles.cancelButton)}
              type="button"
              onClick={() => {
                setIsEditing((prev) => false);
              }}
            >
              취소
            </button>
            <button
              className={clsx("btn primary-btn", styles.updateButton)}
              type="button"
              onClick={() => {
                setIsEditing((prev) => false);
              }}
            >
              수정 완료
            </button>
          </div>
        </div>
      ) : (
        <div className={styles.dropdownContainer}>
          <span>{content}</span>
          <UpdateDeleteDropdown onEdit={setIsEditing} />
        </div>
      )}
      <div className={styles.writerProfile}>
        <img
          className={styles.writerImg}
          src={writer.image || profileImg}
          alt="댓글 작성자의 프로필 이미지"
        />
        <div>
          <div className={styles.writerNickname}>{writer.nickname}</div>
          <div className={styles.date}>{calcTimeFromNow(createdAt)}</div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Comment;
