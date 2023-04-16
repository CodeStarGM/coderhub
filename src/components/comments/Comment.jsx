import React from "react";
import { useUsers } from "../../hooks/users";
import { PROTECTED } from "../../lib/routes";
import ProfilePicture from "../elements/ProfilePicture";
import { formatDistanceToNow } from "date-fns";
import { Link } from "react-router-dom";
import { useDeleteComment } from "../../hooks/comment";
import { useAuth } from "../../hooks/auth";

export default function Comment({ comment }) {
  const { id, uid, date, commentText } = comment;
  const { user, isLoading } = useUsers(uid);
  const { user: authUser, isLoading: authLoading } = useAuth();
  const { deleteComment, isLoading: deletingComment } = useDeleteComment(id);

  if (isLoading) return <div className="spinnerTiny"></div>;

  return (
    <>
      <article className="p-6 mb-6 text-base bg-white rounded-lg ">
        <footer className="flex justify-between items-center mb-2">
          <div className="flex items-center">
            <Link to={`${PROTECTED}/profile/${uid}`}>
              <p className="inline-flex items-center mr-3 text-sm text-gray-900 ">
                <ProfilePicture user={user} size="small" margin="true" />
                {user.username}
              </p>
            </Link>
            <p className="text-sm text-gray-600 ">
              <time pubdate="" dateTime="2022-02-08" title="February 8th, 2022">
                {formatDistanceToNow(date)} ago
              </time>
            </p>
          </div>

          {!authLoading && authUser.id === uid && (
            <button
              onClick={deleteComment}
              id="dropdownComment1Button"
              data-dropdown-toggle="dropdownComment1"
              className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-400 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 "
              type="button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>

              <span className="sr-only">Comment settings</span>
            </button>
          )}
        </footer>
        <p className="text-gray-500 dark:text-gray-400">{commentText}</p>
        <div className="flex items-center mt-4 space-x-4">
          <button
            type="button"
            className="flex items-center text-sm text-gray-500 hover:underline "
          >
            <svg
              aria-hidden="true"
              className="mr-1 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
            Reply
          </button>
        </div>
      </article>
    </>
  );
}
