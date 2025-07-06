import { type IComments, type IComment } from "../ItemDetailsPage";
import { type ReactNode, type RefObject } from "react";
import noCommentsImg from "@/assets/img/img_no_comments.png";
import Comment from "./Comment";

const CommentsList = ({ nextCursor, list }: IComments) => {
  return (
    <div>
      {list[0] ? (
        list.map((comment: IComment): ReactNode => {
          return <Comment key={comment.id} {...comment} />;
        })
      ) : (
        <img src={noCommentsImg} alt="댓글이 없음을 표시하는 이미지" />
      )}
    </div>
  );
};

export default CommentsList;
