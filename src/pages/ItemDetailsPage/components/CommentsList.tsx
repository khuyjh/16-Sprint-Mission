import { type IComments, type IComment } from "../ItemDetailsPage";
import { type ReactNode } from "react";
import styles from "./CommentsList.module.css";
import noCommentsImg from "@/assets/img/img_no_comments.png";
import Comment from "./Comment";

const CommentsList = ({ list }: IComments) => {
  return (
    <div>
      {list[0] ? (
        list.map((comment: IComment): ReactNode => {
          return <Comment key={comment.id} {...comment} />;
        })
      ) : (
        <img
          className={styles.noCommentsImg}
          src={noCommentsImg}
          alt="댓글이 없음을 표시하는 이미지"
        />
      )}
    </div>
  );
};

export default CommentsList;
