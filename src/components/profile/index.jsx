import { format } from "date-fns";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { usePosts } from "../../hooks/posts";
import { useUsers } from "../../hooks/users";
import ProfilePicture from "../elements/ProfilePicture";
import Loading from "../Loading";
import PostLists from "../post/PostLists";
import EditInfo from "./EditInfo";
import EditProfile from "./EditProfile";

export default function Profile() {
  const { id } = useParams();
  const { posts, isLoading } = usePosts(id);
  const { user, isLoading: loadingUser } = useUsers(id);
  const [editProfile, setEditProfile] = useState(false);
  const [editInfo, setEditInfo] = useState(false);
  const { user: authUser, isLoading: authLoading } = useAuth();

  const handleSetProfile = () => {
    setEditProfile(!editProfile);
    setEditInfo(false);
  };
  const handleSetInfo = () => {
    setEditInfo(!editInfo);
    setEditProfile(false);
  };

  if (isLoading || loadingUser || authLoading) return <Loading />;

  return (
    <>
      <div className="max-h-[100px] h-[18vh] w-full"></div>

      <div className="flex items-center justify-center w-[100vw] h-auto py-2">
        <div className="py-4 flex items-start justify-center max-w-[1000px] w-[50%] ">
          <article className="w-[80%]">
            <div className="flex flex-col items-center bg-white shadow rounded-lg mb-6 p-4">
              <div className="flex items-center justify-between px-2  w-full h-auto">
                {/* profile */}
                <ProfilePicture user={user} size="large" />
                {/* profile */}
              </div>

              <div className="w-full py-4 px-2">
                <div className="flex items-center space-x-1">
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
                      d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                    />
                  </svg>

                  <p> {user.name}</p>
                </div>

                <div className="flex items-center space-x-1">
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
                      d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
                    />
                  </svg>

                  <p> {user.profession}</p>
                </div>

                <div className="flex items-center space-x-1">
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
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>

                  <p> {user.country}</p>
                </div>

                <div className="flex items-center space-x-1">
                  <div className="bg-gray-300 text-gray-700 rounded-sm px-2 text-sm">
                    Joined :
                  </div>

                  <p> {format(user.date, "dd MMMM YYY")}</p>
                </div>
              </div>

              <footer className="flex w-full justify-between mt-2">
                <div className="flex gap-2">
                  <span className="flex items-center transition ease-out duration-300 hover:bg-blue-500 hover:text-white bg-blue-100 space-x-2 px-2 rounded-full text-blue-400 cursor-pointer">
                    <svg
                      viewBox="0 0 24 24"
                      width={20}
                      height={20}
                      stroke="currentColor"
                      strokeWidth={2}
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="css-i6dzq1"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                      />
                    </svg>
                    <p className="text-sm">Posts : {posts.length}</p>
                  </span>

                  <span className="flex items-center transition ease-out duration-300 hover:bg-blue-500 hover:text-white bg-blue-100 space-x-2 px-2 rounded-full text-blue-400 cursor-pointer">
                    <svg
                      viewBox="0 0 24 24"
                      width={20}
                      height={20}
                      stroke="currentColor"
                      strokeWidth={2}
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="css-i6dzq1"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                      />
                    </svg>
                    <p className="text-sm">Likes : {posts.length}</p>
                  </span>
                </div>
                {!authLoading && authUser.id === user.id && (
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={handleSetProfile}
                      className="flex items-center py-2 px-4 rounded-lg text-sm bg-green-600 text-white shadow-lg"
                    >
                      Change Picture
                    </button>

                    <button
                      onClick={handleSetInfo}
                      className="flex items-center py-2 px-4 rounded-lg text-sm bg-green-600 text-white shadow-lg"
                    >
                      Edit Info
                    </button>
                  </div>
                )}
              </footer>

              {editProfile && <EditProfile />}
              {editInfo && <EditInfo />}
            </div>

            {/* here */}
            <div className="space-y-6">
              <PostLists allPosts={posts} />
            </div>
          </article>
        </div>
      </div>
    </>
  );
}
