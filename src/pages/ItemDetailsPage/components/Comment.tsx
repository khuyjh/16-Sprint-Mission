import { useState, type ChangeEvent } from "react";
import type { IComment } from "../ItemDetailsPage";
import UpdateDeleteDropdown from "./UpdateDeleteDropdown";
import profileImg from "@/assets/icons/ic_profile.svg";
import calcTimeFromNow from "@/utils/calcTimeFormNow";

const Comment = ({ writer, updatedAt, createdAt, content, id }: IComment) => {
  const [commentValue, setCommentValue] = useState(content);
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div>
      {isEditing ? (
        <div>
          <textarea
            value={commentValue}
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
              setCommentValue((prev) => e.target.value);
            }}
          />
          <button
            type="button"
            onClick={() => {
              setIsEditing((prev) => false);
            }}
          >
            취소
          </button>
          <button
            type="button"
            onClick={() => {
              setIsEditing((prev) => false);
            }}
          >
            수정 완료
          </button>
        </div>
      ) : (
        <div>
          <span>{content}</span>
          <UpdateDeleteDropdown onEdit={setIsEditing} />
        </div>
      )}

      <img src={writer.image || profileImg} alt="댓글 작성자의 프로필 이미지" />
      <div>{writer.nickname}</div>
      <div>{calcTimeFromNow(createdAt)}</div>
      <hr />
    </div>
  );
};

export default Comment;
