import { useComments } from "../../hooks/comment";
import Comment from "./Comment";

export default function CommentList({ post }) {
  const { comments, isLoading } = useComments(post.id);

  if (isLoading) return <div className="spinnerTiny"></div>;

  return (
    <>
      {comments?.map((comment) => (
        <Comment comment={comment} />
      ))}
    </>
  );
}
