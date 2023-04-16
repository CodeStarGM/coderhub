import { useParams } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { useComments } from "../../hooks/comment";

import { usePost } from "../../hooks/posts";
import ComponentList from "../comments/CommentList";
import Loading from "../Loading";
import Post from "../post";
import NewComment from "./NewComment";

export default function Comments() {
  const { id } = useParams();
  const { post, isLoading: postLoading } = usePost(id);
  const { user, isLoading: userLoading } = useAuth();

  if (userLoading || postLoading) return <Loading />;

  return (
    <>
      <div className="max-h-[100px] h-[18vh] w-full"></div>

      <div className="flex items-center justify-center w-[100vw] h-auto py-2">
        <div className="py-4 flex items-start justify-center max-w-[1000px] w-full lg:w-[50%]">
          <div className="w-[90%]">
            <Post postDetails={post} />

            <section className="rounded-lg border border-gray-200 shadow mt-6 bg-white  py-8 lg:py-16">
              <div className="max-w-2xl mx-auto px-4">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-lg lg:text-2xl font-bold text-gray-900">
                    Discussion 🔥
                  </h2>
                </div>

                <NewComment post={post} user={user} />

                <ComponentList post={post} />
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
