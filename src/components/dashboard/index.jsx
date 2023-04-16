import React from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../../hooks/auth";
import { useAddPost, usePosts } from "../../hooks/posts";
import PostLists from "../post/PostLists";

export default function Dashboard() {
  const { register, handleSubmit, reset } = useForm();
  const { addPost, isLoading: isPostLoading } = useAddPost();
  const { user, isLoading: isUserLoading } = useAuth();
  const { posts, isLoading: isLoadingAllPosts } = usePosts();

  const handleAddPost = (data) => {
    addPost({
      uid: user.id,
      post: data.post,
    });

    reset();
  };

  if (isUserLoading || isLoadingAllPosts) return;

  return (
    <>
      <div className="max-h-[100px] h-[18vh] w-full"></div>

      <div className="flex items-center justify-center w-[100vw] h-auto py-2">
        <div className="py-4 flex items-start justify-center max-w-[1000px] w-full lg:w-[50%]">
          <article className="w-[80%]">
            <form
              onSubmit={handleSubmit(handleAddPost)}
              className="bg-white shadow rounded-lg mb-6 p-4"
            >
              <textarea
                name="message"
                rows={5}
                placeholder="What's Happening..."
                className="outline-green-500 w-full rounded-lg p-2 text-sm bg-gray-100 border border-transparent appearance-none rounded-tg placeholder-gray-400"
                defaultValue={""}
                {...register("post", { required: true })}
              />
              <footer className="flex justify-between mt-2">
                <div className="flex gap-2">
                  <span className="flex items-center transition ease-out duration-300 hover:bg-blue-500 hover:text-white bg-blue-100 w-8 h-8 px-2 rounded-full text-blue-400 cursor-pointer">
                    <svg
                      viewBox="0 0 24 24"
                      width={24}
                      height={24}
                      stroke="currentColor"
                      strokeWidth={2}
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="css-i6dzq1"
                    >
                      <rect x={3} y={3} width={18} height={18} rx={2} ry={2} />
                      <circle cx="8.5" cy="8.5" r="1.5" />
                      <polyline points="21 15 16 10 5 21" />
                    </svg>
                  </span>
                  <span className="flex items-center transition ease-out duration-300 hover:bg-blue-500 hover:text-white bg-blue-100 w-8 h-8 px-2 rounded-full text-blue-400 cursor-pointer">
                    <svg
                      viewBox="0 0 24 24"
                      width={24}
                      height={24}
                      stroke="currentColor"
                      strokeWidth={2}
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="css-i6dzq1"
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx={12} cy={10} r={3} />
                    </svg>
                  </span>
                  <span className="flex items-center transition ease-out duration-300 hover:bg-blue-500 hover:text-white bg-blue-100 w-8 h-8 px-2 rounded-full text-blue-400 cursor-pointer">
                    <svg
                      viewBox="0 0 24 24"
                      width={24}
                      height={24}
                      stroke="currentColor"
                      strokeWidth={2}
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="css-i6dzq1"
                    >
                      <polyline points="4 17 10 11 4 5" />
                      <line x1={12} y1={19} x2={20} y2={19} />
                    </svg>
                  </span>
                </div>
                <button
                  type="submit"
                  className="flex items-center py-2 px-4 rounded-lg text-sm bg-green-600 text-white shadow-lg"
                >
                  {isPostLoading ? "Posting..." : "Post"}
                  {isPostLoading ? (
                    <svg
                      class="animate-spin ml-2 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        class="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        stroke-width="4"
                      ></circle>
                      <path
                        class="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                  ) : (
                    <svg
                      className="ml-1"
                      viewBox="0 0 24 24"
                      width={16}
                      height={16}
                      stroke="currentColor"
                      strokeWidth={2}
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1={22} y1={2} x2={11} y2={13} />
                      <polygon points="22 2 15 22 11 13 2 9 22 2" />
                    </svg>
                  )}
                </button>
              </footer>
            </form>

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
