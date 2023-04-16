import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { usePosts } from "../../hooks/posts";
import { PROTECTED } from "../../lib/routes";
import ProfilePicture from "../elements/ProfilePicture";
import Loading from "../Loading";

export default function Sidebar() {
  const { user, isLoading, error } = useAuth();
  const { posts, isLoading: userPostsLoading } = usePosts(user?.id);

  function totalLikesCount() {
    let TotalLikes = 0;
    posts?.map((post) => {
      TotalLikes += post?.likes?.length;
    });
    return TotalLikes;
  }

  function totalDislikesCount() {
    let TotalDislikes = 0;
    posts?.map((post) => {
      TotalDislikes += post?.dislikes?.length;
    });
    return TotalDislikes;
  }

  if (isLoading || userPostsLoading) return;
  return (
    <>
      {/* sidebar componenet */}
      <aside className="w-[100%]">
        <div className="bg-white shadow rounded-lg p-10">
          <div className="flex flex-col gap-1 text-center items-center">
            <ProfilePicture size="large" user={user} />
            <p className="font-semibold">{user.name}</p>
            <p className="rounded-sm text-gray-600 text-sm bg-gray-200 px-2 font-semibold">
              @{user.username}
            </p>
          </div>
          <div className="flex justify-center items-center gap-2 my-3">
            <div className="font-semibold text-center mx-4">
              <p className="text-black">{posts?.length}</p>

              <span className="text-gray-400">Posts</span>
            </div>
            <div className="font-semibold text-center mx-4">
              <p className="text-black">{totalLikesCount()}</p>
              <span className="text-gray-400">Likes</span>
            </div>
            <div className="font-semibold text-center mx-4">
              <p className="text-black">{totalDislikesCount()}</p>
              <span className="text-gray-400">Dislikes</span>
            </div>
          </div>
          <div className="flex items-center justify-center w-full py-2">
            <Link to={`${PROTECTED}/profile/${user.id}`}>
              <button className="rounded-lg hover:bg-green-600 bg-green-500 text-white text-lg font-semibold px-10 py-1">
                My Profile
              </button>
            </Link>
          </div>
        </div>
      </aside>
      {/* sidebar component */}
    </>
  );
}
