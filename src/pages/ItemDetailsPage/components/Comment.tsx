import type { IComment } from "../ItemDetailsPage";
import UpdateDeleteDropdown from "./UpdateDeleteDropdown";
import profileImg from "@/assets/icons/ic_profile.svg";
import calcTimeFromNow from "@/utils/calcTimeFormNow";

const Comment = ({ writer, updatedAt, createdAt, content, id }: IComment) => {
  return (
    <div>
      <span>{content}</span>
      <UpdateDeleteDropdown />
      <img src={writer.image || profileImg} alt="댓글 작성자의 프로필 이미지" />
      <div>{writer.nickname}</div>
      <div>{calcTimeFromNow(createdAt)}</div>
      <hr />
    </div>
  );
};

export default Comment;
