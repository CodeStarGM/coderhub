import Post from "./index";

export default function PostLists({ allPosts }) {
  return (
    <>
      {allPosts?.length === 0
        ? "No Posts"
        : allPosts?.map((post) => <Post key={post.id} postDetails={post} />)}
    </>
  );
}
