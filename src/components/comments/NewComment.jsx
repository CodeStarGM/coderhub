import React from "react";
import { useAddComment, useComments } from "../../hooks/comment";
import { useForm } from "react-hook-form";

export default function NewComment({ post, user }) {
  const { register, handleSubmit, reset } = useForm();

  const { addComment, isLoading: commentLoading } = useAddComment({
    postID: post?.id,
    uid: user?.id,
  });

  const handleAddComment = (data) => {
    addComment(data.commentText);
    reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit(handleAddComment)} className="mb-6">
        <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 ">
          <label htmlFor="comment" className="sr-only">
            Your comment
          </label>
          <textarea
            id="comment"
            rows={6}
            className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none  "
            placeholder="Write a comment..."
            required=""
            defaultValue={""}
            {...register("commentText", { required: true })}
          />
        </div>
        <button
          type="submit"
          className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 hover:bg-blue-800"
        >
          Post comment
        </button>
      </form>
    </>
  );
}
