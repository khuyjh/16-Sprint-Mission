import { useState, type ChangeEvent } from "react";
import type { IComment } from "../ItemDetailsPage";
import styles from "./Comment.module.css";
import UpdateDeleteDropdown from "./UpdateDeleteDropdown";
import profileImg from "@/assets/icons/ic_profile.svg";
import calcTimeFromNow from "@/utils/calcTimeFormNow";
import clsx from "clsx";
import CommentEditor from "./CommentEditor";

const Comment = ({ writer, updatedAt, createdAt, content, id }: IComment) => {
  const [commentValue, setCommentValue] = useState(content);
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className={styles.commentContainer}>
      {isEditing ? (
        <CommentEditor
          commentValue={commentValue}
          onChangeCommentValue={setCommentValue}
          onClickIsEditing={setIsEditing}
        />
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
          <div className={styles.date}>{calcTimeFromNow(updatedAt)}</div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Comment;
