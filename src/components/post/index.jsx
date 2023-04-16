import { formatDistanceToNow } from "date-fns";
import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { useUsers } from "../../hooks/users";
import {
  useToggleLike,
  useToggleDislike,
  useDeletePost,
} from "../../hooks/posts";
import { PROTECTED } from "../../lib/routes";
import ProfilePicture from "../elements/ProfilePicture";
import { useComments } from "../../hooks/comment";

export default function Post({ postDetails }) {
  const { id, uid, date, post, likes, dislikes } = postDetails;
  const { user, isLoading } = useUsers(uid);
  const { user: authUser, isLoading: authUserLoading } = useAuth();

  // calculating likes & dislikes
  const isLiked = likes.includes(authUser?.id);
  const isDisLiked = dislikes.includes(authUser?.id);

  const { comments, isLoading: commentLoading } = useComments(id);

  const { toggleLike, isLoading: likeLoading } = useToggleLike({
    id,
    uid: authUser?.id,
    isLiked,
  });

  const { toggleDislike, isLoading: dislikeLoading } = useToggleDislike({
    id,
    uid: authUser?.id,
    isDisLiked,
  });

  const { deletePost, isLoading: deleteLoading } = useDeletePost(id);

  if (isLoading) return;

  return (
    <>
      <div className="bg-white shadow rounded-lg">
        <div className=" flex flex-row justify-between items-center px-2 py-3 mx-3">
          <div className="flex items-center">
            <div>
              <Link to={`${PROTECTED}/profile/${user.id}`}>
                <ProfilePicture user={user} size="medium" />
              </Link>
            </div>

            <div className="flex flex-col mb-2 ml-4 mt-1">
              <div className="flex items-center space-x-1 text-gray-600 text-sm font-semibold">
                <p> {user.name}</p>
                {user.username === "gmsyed" && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={22}
                    height={22}
                    viewBox="0 0 24 24"
                    style={{
                      fill: "#1DA1F2",
                      transform: "",
                      msfilter: "",
                    }}
                  >
                    <path d="M19.965 8.521C19.988 8.347 20 8.173 20 8c0-2.379-2.143-4.288-4.521-3.965C14.786 2.802 13.466 2 12 2s-2.786.802-3.479 2.035C6.138 3.712 4 5.621 4 8c0 .173.012.347.035.521C2.802 9.215 2 10.535 2 12s.802 2.785 2.035 3.479A3.976 3.976 0 0 0 4 16c0 2.379 2.138 4.283 4.521 3.965C9.214 21.198 10.534 22 12 22s2.786-.802 3.479-2.035C17.857 20.283 20 18.379 20 16c0-.173-.012-.347-.035-.521C21.198 14.785 22 13.465 22 12s-.802-2.785-2.035-3.479zm-9.01 7.895-3.667-3.714 1.424-1.404 2.257 2.286 4.327-4.294 1.408 1.42-5.749 5.706z" />
                  </svg>
                )}
              </div>
              <div className="flex w-full mt-1">
                <Link to={`${PROTECTED}/profile/${user.id}`}>
                  <div className="text-blue-700 font-base text-xs mr-1 cursor-pointer">
                    {user.username}
                  </div>
                </Link>
                <div className="text-gray-400 font-normal text-xs">
                  • {formatDistanceToNow(date)} ago
                </div>
              </div>
            </div>
          </div>

          {/* trash icon */}

          {!authUserLoading && authUser.id === uid && (
            <div onClick={deletePost} className="flex items-center space-x-1">
              <span className="hover:bg-red-500 bg-white transition ease-out duration-300 hover:text-white border px-2 py-2 flex items-center justify-center text-center rounded-full text-gray-400 cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  width="16px"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </div>
          )}

          {/* trash icon */}
        </div>
        <div className="border-b border-gray-100" />
        <div className="text-gray-400 font-medium text-sm mb-7 mt-6 mx-3 px-2">
          {/* big text jagah */}
        </div>
        <div className="text-gray-600 font-semibold py-2 mb-2 mx-3 px-2">
          <p>{post}</p>
        </div>

        <div className="py-3 flex justify-start  border-t border-gray-100">
          <div className="flex w-full pl-5 space-x-2">
            <div onClick={toggleLike} className="flex items-center space-x-1">
              <span
                className={
                  isLiked
                    ? "bg-green-400 transition ease-out duration-300 text-white border w-7 h-7 flex items-center justify-center text-center rounded-full cursor-pointer"
                    : "hover:bg-green-400 bg-white transition ease-out duration-300 hover:text-white border w-7 h-7 flex items-center justify-center text-center rounded-full text-gray-400 cursor-pointer"
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  width="14px"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M7.493 18.75c-.425 0-.82-.236-.975-.632A7.48 7.48 0 016 15.375c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75 2.25 2.25 0 012.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23h-.777zM2.331 10.977a11.969 11.969 0 00-.831 4.398 12 12 0 00.52 3.507c.26.85 1.084 1.368 1.973 1.368H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 01-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227z" />
                </svg>
              </span>
              <div className=" text-gray-400 text-xs">{likes.length}</div>
            </div>

            {/* dislike */}
            <div
              onClick={toggleDislike}
              className="flex items-center space-x-1"
            >
              <span
                className={
                  isDisLiked
                    ? "bg-orange-500 transition ease-out duration-300 text-white border w-7 h-7 flex items-center justify-center text-center rounded-full cursor-pointer"
                    : "hover:bg-orange-500 bg-white transition ease-out duration-300 hover:text-white border w-7 h-7 flex items-center justify-center text-center rounded-full text-gray-400 cursor-pointer"
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  width="14px"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M15.73 5.25h1.035A7.465 7.465 0 0118 9.375a7.465 7.465 0 01-1.235 4.125h-.148c-.806 0-1.534.446-2.031 1.08a9.04 9.04 0 01-2.861 2.4c-.723.384-1.35.956-1.653 1.715a4.498 4.498 0 00-.322 1.672V21a.75.75 0 01-.75.75 2.25 2.25 0 01-2.25-2.25c0-1.152.26-2.243.723-3.218C7.74 15.724 7.366 15 6.748 15H3.622c-1.026 0-1.945-.694-2.054-1.715A12.134 12.134 0 011.5 12c0-2.848.992-5.464 2.649-7.521.388-.482.987-.729 1.605-.729H9.77a4.5 4.5 0 011.423.23l3.114 1.04a4.5 4.5 0 001.423.23zM21.669 13.773c.536-1.362.831-2.845.831-4.398 0-1.22-.182-2.398-.52-3.507-.26-.85-1.084-1.368-1.973-1.368H19.1c-.445 0-.72.498-.523.898.591 1.2.924 2.55.924 3.977a8.959 8.959 0 01-1.302 4.666c-.245.403.028.959.5.959h1.053c.832 0 1.612-.453 1.918-1.227z" />
                </svg>
              </span>
              <div className=" text-gray-400 text-xs">{dislikes.length}</div>
            </div>
            {/* dislike */}
          </div>
          <div className="flex justify-end w-full mt-1 pt-2 pr-5">
            {/* users who likes images show here */}
            {/* comment */}
            <Link to={`${PROTECTED}/comments/${id}`}>
              <div className="flex items-center space-x-1">
                <span className="space-x-1  hover:bg-blue-400 bg-white transition ease-out duration-300 hover:text-white border py-1 px-2 flex items-center justify-center text-center rounded-full text-gray-400 cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    width="14px"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2.25c-2.429 0-4.817.178-7.152.521C2.87 3.061 1.5 4.795 1.5 6.741v6.018c0 1.946 1.37 3.68 3.348 3.97.877.129 1.761.234 2.652.316V21a.75.75 0 001.28.53l4.184-4.183a.39.39 0 01.266-.112c2.006-.05 3.982-.22 5.922-.506 1.978-.29 3.348-2.023 3.348-3.97V6.741c0-1.947-1.37-3.68-3.348-3.97A49.145 49.145 0 0012 2.25zM8.25 8.625a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25zm2.625 1.125a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875-1.125a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25z"
                      clipRule="evenodd"
                    />{" "}
                  </svg>
                  <p className="text-xs">Comments : </p>
                  <p className="text-xs"> {comments?.length}</p>
                </span>
              </div>
            </Link>
            {/* comment */}
          </div>
        </div>
      </div>
    </>
  );
}
